import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Loader2, Copy, Wand2, Sparkles, History, Share2, Search, Filter } from "lucide-react";
import OpenAI from 'openai';
import { EXPANDED_PROMPT_CATEGORIES, ADDITIONAL_CATEGORIES } from "@/data/expandedPrompts.tsx";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface HistoryItem {
  id: string;
  original: string;
  enhanced: string;
  timestamp: string;
}

interface PromptCategory {
  name: string;
  icon: React.ReactNode;
  description: string;
  prompts: {
    title: string;
    text: string;
    tags: string[];
    difficulty: string;
  }[];
}

const testimonials = [
  {
    name: "Ahmed Khan",
    role: "Content Creator",
    text: "This tool has revolutionized how I interact with AI. My content creation process is now 3x faster!"
  },
  {
    name: "Zainab Malik",
    role: "AI Researcher",
    text: "The prompt enhancement quality is exceptional. It's become an essential part of my research workflow."
  },
  {
    name: "Hassan Ali",
    role: "Digital Marketer",
    text: "I've seen a significant improvement in my AI-generated content quality since using this tool."
  }
];

const systemPrompt = `You are an expert prompt engineer. Your task is to ENHANCE and IMPROVE the given prompt to make it more effective for AI models. DO NOT answer the prompt - instead, make it better by:

1. Adding more specific details and context
2. Including relevant constraints and requirements
3. Using clear and precise language
4. Adding necessary parameters or criteria
5. Structuring it for better AI understanding
6. Making it more specific and actionable
7. Adding relevant examples or scenarios if helpful
8. Including format requirements if needed

Important:
- DO NOT answer or solve the prompt
- ONLY enhance and improve the prompt itself
- Keep the same general intent and goal
- Make it more likely to get good results from AI
- Format the enhanced prompt in a clean, professional way

For example:
Original: "Write a blog post about AI"
Enhanced: "Write a comprehensive 1500-word blog post about the current applications of artificial intelligence in healthcare. Include specific examples of AI in diagnosis, treatment planning, and patient care. Structure the post with clear headings, real-world case studies, and future implications. Target audience: healthcare professionals with basic AI knowledge."

Original prompt to enhance:`;

const PromptImprover = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [prompt, setPrompt] = useState("");
  const [improvedPrompt, setImprovedPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [difficultyFilter, setDifficultyFilter] = useState<string>("all");
  const { toast } = useToast();

  // Combine all categories
  const allCategories = [...EXPANDED_PROMPT_CATEGORIES, ...ADDITIONAL_CATEGORIES];

  const filteredPrompts = allCategories
    .flatMap(category => 
      category.prompts.map(prompt => ({
        category: category.name,
        icon: category.icon,
        title: prompt.title,
        text: prompt.text,
        tags: prompt.tags,
        difficulty: prompt.difficulty
      }))
    )
    .filter(prompt => 
      (selectedCategory === "all" || prompt.category === selectedCategory) &&
      (difficultyFilter === "all" || prompt.difficulty === difficultyFilter) &&
      (searchQuery === "" || 
        prompt.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
    );

  const handlePromptClick = (selectedPrompt: string) => {
    setPrompt(selectedPrompt);
  };

  const improvePrompt = async () => {
    if (!prompt.trim()) {
      toast({
        title: "Error",
        description: "Please enter a prompt to enhance",
        variant: "destructive",
      });
      return;
    }

    // Check for API key
    const apiKey = import.meta.env.VITE_GROQ_API_KEY;
    const apiUrl = import.meta.env.VITE_GROQ_API_URL;

    if (!apiKey || apiKey === "your_groq_api_key_here") {
      toast({
        title: "API Key Missing",
        description: "Please add your Groq API key in the .env file",
        variant: "destructive",
      });
      return;
    }

    if (!apiUrl) {
      toast({
        title: "API URL Missing",
        description: "Please check your environment configuration",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const openai = new OpenAI({
        apiKey,
        baseURL: apiUrl,
        dangerouslyAllowBrowser: true
      });

      const completion = await openai.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content: systemPrompt
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.6,
        max_tokens: 500,
      });

      let enhancedPrompt = completion.choices[0]?.message?.content?.trim() || "";
      
      // Clean up the response
      enhancedPrompt = enhancedPrompt
        .replace(/```/g, '') // Remove code blocks
        .replace(/\*\*/g, '') // Remove bold markers
        .replace(/\n\n+/g, '\n\n') // Normalize multiple line breaks
        .trim();

      if (!enhancedPrompt) {
        throw new Error("No response from API");
      }

      setImprovedPrompt(enhancedPrompt);

      const newHistoryItem: HistoryItem = {
        id: Date.now().toString(),
        original: prompt,
        enhanced: enhancedPrompt,
        timestamp: new Date().toLocaleString(),
      };
      setHistory(prev => [newHistoryItem, ...prev]);

      toast({
        title: "Success",
        description: "Your prompt has been enhanced successfully!",
      });
    } catch (error: any) {
      console.error("API Error:", error);
      let errorMessage = "Unable to process your request. Please try again later.";

      if (error.message?.includes("401")) {
        errorMessage = "Invalid API key. Please check your Groq API key.";
      } else if (error.message?.includes("Network Error")) {
        errorMessage = "Network error. Please check your internet connection.";
      } else if (error.message?.includes("429")) {
        errorMessage = "Too many requests. Please wait a moment and try again.";
      }

      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(improvedPrompt);
    toast({
      title: "Copied!",
      description: "Enhanced prompt copied to clipboard",
    });
  };

  const sharePrompt = async () => {
    try {
      await navigator.share({
        title: "Enhanced AI Prompt",
        text: improvedPrompt,
      });
    } catch (error) {
      console.error("Error sharing:", error);
      toast({
        title: "Error",
        description: "Sharing not supported or failed",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 sm:space-y-8">
      <div className="text-center space-y-3 sm:space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
          AI Prompt Enhancer
        </h1>
        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
          Transform your basic prompts into powerful, detailed instructions that get better results from AI models.
        </p>
      </div>

      <div className="space-y-4 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-orange-100/50">
        <Textarea
          placeholder="Enter your prompt here..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="min-h-[120px] resize-none bg-gray-50/50 border-orange-100/50 focus:border-orange-200 focus:ring-orange-200 text-sm sm:text-base"
          aria-label="Enter your prompt"
        />
        <div className="flex justify-end">
          <Button
            onClick={improvePrompt}
            className="w-full sm:w-auto bg-gradient-to-r from-orange-600 to-orange-500 text-white hover:opacity-90 transition-opacity text-sm sm:text-base py-2 sm:py-3"
            disabled={isLoading}
            aria-label={isLoading ? "Enhancing prompt..." : "Enhance prompt"}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                <span className="hidden sm:inline">Enhancing...</span>
                <span className="sm:hidden">Enhancing</span>
              </>
            ) : (
              <>
                <Wand2 className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Enhance Prompt</span>
                <span className="sm:hidden">Enhance</span>
              </>
            )}
          </Button>
        </div>
      </div>

      {improvedPrompt && (
        <div className="space-y-4 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-orange-100/50">
          <div className="flex justify-between items-center">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Enhanced Prompt</h2>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-orange-600 hover:text-orange-700 hover:bg-orange-50 p-2 sm:p-3"
                onClick={copyToClipboard}
                aria-label="Copy enhanced prompt"
              >
                <Copy className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline ml-2">Copy</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-orange-600 hover:text-orange-700 hover:bg-orange-50 p-2 sm:p-3"
                onClick={sharePrompt}
                aria-label="Share enhanced prompt"
              >
                <Share2 className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline ml-2">Share</span>
              </Button>
            </div>
          </div>
          <div className="p-3 sm:p-4 bg-gray-50/50 rounded-lg sm:rounded-xl border border-orange-100/50">
            <p className="text-sm sm:text-base text-gray-700 whitespace-pre-wrap">{improvedPrompt}</p>
          </div>
        </div>
      )}

      <div className="mt-8 sm:mt-12">
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Expert Prompts</h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <div className="relative flex-grow sm:flex-grow-0">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search prompts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full sm:w-64 pl-10 pr-4 py-2 bg-white border-orange-100/50 focus:border-orange-200 focus:ring-orange-200 text-sm"
                  aria-label="Search prompts"
                />
              </div>
              <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-orange-200 -mx-4 px-4 sm:mx-0 sm:px-0">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                selectedCategory === "all"
                ? "bg-orange-600 text-white"
                : "bg-white text-gray-600 hover:bg-orange-50 border border-orange-100/50"
              }`}
              aria-label="Show all categories"
            >
              All Categories
            </button>
            {allCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                  selectedCategory === category.name
                  ? "bg-orange-600 text-white"
                  : "bg-white text-gray-600 hover:bg-orange-50 border border-orange-100/50"
                }`}
                aria-label={`Show ${category.name} prompts`}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {filteredPrompts.map((prompt, index) => (
              <button
                key={index}
                onClick={() => handlePromptClick(prompt.text)}
                className="p-4 sm:p-5 text-left bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-orange-100/50 hover:border-orange-200"
                aria-label={`Use prompt: ${prompt.title}`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-lg sm:text-xl">{prompt.icon}</span>
                  <div>
                    <div className="flex justify-between items-start">
                      <p className="text-xs text-gray-500 mb-1">{prompt.category}</p>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        prompt.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
                        prompt.difficulty === 'intermediate' ? 'bg-blue-100 text-blue-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {prompt.difficulty}
                      </span>
                    </div>
                    <h3 className="font-medium text-gray-900 mb-1">{prompt.title}</h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{prompt.text}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {prompt.tags.map((tag, i) => (
                        <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {filteredPrompts.length === 0 && (
            <div className="text-center py-8 sm:py-10 text-gray-500 text-sm sm:text-base">
              No prompts found. Try adjusting your search or category filter.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PromptImprover;