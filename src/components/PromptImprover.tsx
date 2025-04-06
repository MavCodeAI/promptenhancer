import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Loader2, Copy, Wand2, Sparkles, History, Share2, Search } from "lucide-react";
import OpenAI from 'openai';
import { PROMPT_CATEGORIES } from "@/data/prompts";
import { Input } from "@/components/ui/input";

interface HistoryItem {
  id: string;
  original: string;
  enhanced: string;
  timestamp: string;
}

interface PromptCategory {
  name: string;
  icon: string;
  prompts: string[];
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
  const { toast } = useToast();

  const filteredPrompts = PROMPT_CATEGORIES
    .flatMap(category => 
      category.prompts.map(prompt => ({
        category: category.name,
        icon: category.icon,
        text: prompt
      }))
    )
    .filter(prompt => 
      (selectedCategory === "all" || prompt.category === selectedCategory) &&
      (searchQuery === "" || prompt.text.toLowerCase().includes(searchQuery.toLowerCase()))
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
    <div className="w-full max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-5xl text-transparent mb-2">
          AI Prompt Enhancer
        </h1>
      </div>

      <div className="space-y-6">
        <Textarea
          placeholder="Enter your prompt here..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="min-h-[120px] resize-none bg-white text-lg p-4 shadow-sm border border-gray-200 focus:border-orange-300 focus:ring-2 focus:ring-orange-200"
        />

        <div className="flex gap-2">
          <Button
            onClick={improvePrompt}
            className="flex-1 bg-orange-600 hover:bg-orange-700 text-lg py-6"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Enhancing...
              </>
            ) : (
              <>
                <Wand2 className="mr-2 h-5 w-5" />
                Enhance Prompt
              </>
            )}
          </Button>
          <Button
            onClick={() => setShowHistory(!showHistory)}
            className="border border-orange-200 hover:bg-orange-50 px-6"
          >
            <History className="mr-2 h-5 w-5" />
            History
          </Button>
        </div>

        {showHistory && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-lg mb-4">Prompt History</h3>
            <div className="space-y-6 max-h-[400px] overflow-y-auto">
              {history.map((item) => (
                <div key={item.id} className="border-b border-gray-100 pb-6 last:border-0">
                  <div className="text-sm text-gray-500 mb-2">{item.timestamp}</div>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm font-medium text-gray-700 mb-1">Original:</div>
                      <p className="text-gray-600 bg-gray-50 p-3 rounded">{item.original}</p>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-700 mb-1">Enhanced:</div>
                      <p className="text-gray-600 bg-orange-50 p-3 rounded">{item.enhanced}</p>
                    </div>
                  </div>
                </div>
              ))}
              {history.length === 0 && (
                <p className="text-gray-500 text-center py-4">No history yet</p>
              )}
            </div>
          </div>
        )}

        {improvedPrompt && (
          <div className="bg-white rounded-lg shadow-lg p-6 border border-orange-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Enhanced Prompt</h2>
              <div className="flex gap-2">
                <Button onClick={copyToClipboard} className="bg-gray-100 hover:bg-gray-200">
                  <Copy className="h-4 w-4 mr-2" />
                  Copy
                </Button>
                <Button onClick={sharePrompt} className="bg-gray-100 hover:bg-gray-200">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg" />
              <Textarea
                value={improvedPrompt}
                readOnly
                className="min-h-[200px] resize-none bg-transparent relative z-10 text-lg p-4 focus:ring-2 focus:ring-orange-200"
              />
            </div>
          </div>
        )}

        <div className="mt-12">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Sparkles className="h-6 w-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-900">Expert Prompts</h2>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search prompts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 w-64"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-orange-200">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === "all"
                  ? "bg-orange-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                All Categories
              </button>
              {PROMPT_CATEGORIES.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                    selectedCategory === category.name
                    ? "bg-orange-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category.icon} {category.name}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredPrompts.map((prompt, index) => (
                <button
                  key={index}
                  onClick={() => handlePromptClick(prompt.text)}
                  className="p-5 text-left bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 hover:border-orange-200 hover:bg-orange-50/30"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xl">{prompt.icon}</span>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">{prompt.category}</p>
                      <p className="text-gray-700 text-base leading-relaxed">{prompt.text}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {filteredPrompts.length === 0 && (
              <div className="text-center py-10 text-gray-500">
                No prompts found. Try adjusting your search or category filter.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptImprover;