import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Loader2, Copy, Wand2, Sparkles, History, Share2, Search, Filter, ArrowRight, Star } from "lucide-react";
import OpenAI from 'openai';
import { EXPANDED_PROMPT_CATEGORIES, ADDITIONAL_CATEGORIES } from "@/data/expandedPrompts.tsx";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Prompt Enhancer</h1>
            <p className="text-muted-foreground mt-2">
              Transform your prompts into powerful AI instructions
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => setShowHistory(!showHistory)}
              className="gap-2"
            >
              <History className="h-4 w-4" />
              {showHistory ? "Hide History" : "Show History"}
            </Button>
            <Button
              variant="default"
              onClick={improvePrompt}
              disabled={isLoading || !prompt.trim()}
              className="gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Enhancing...
                </>
              ) : (
                <>
                  <Wand2 className="h-4 w-4" />
                  Enhance Prompt
                </>
              )}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="space-y-2">
              <label className="text-sm font-medium">Your Prompt</label>
              <Textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Enter your prompt here..."
                className="min-h-[200px] resize-none"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={copyToClipboard}
                className="gap-2"
              >
                <Copy className="h-4 w-4" />
                Copy
              </Button>
              <Button
                variant="outline"
                onClick={sharePrompt}
                className="gap-2"
              >
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            <div className="space-y-2">
              <label className="text-sm font-medium">Enhanced Prompt</label>
              <div className="relative">
                <Textarea
                  value={improvedPrompt}
                  readOnly
                  className="min-h-[200px] resize-none bg-muted/50"
                />
                {improvedPrompt && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute top-2 right-2"
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        navigator.clipboard.writeText(improvedPrompt);
                        toast({
                          title: "Copied!",
                          description: "Enhanced prompt copied to clipboard",
                        });
                      }}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="space-y-4"
        >
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <h2 className="text-xl font-semibold">Prompt Templates</h2>
            <div className="flex gap-2 w-full md:w-auto">
              <div className="relative flex-1 md:flex-none">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search templates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8"
                />
              </div>
              <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Difficulties</SelectItem>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPrompts.map((template, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={cn(
                  "p-4 rounded-lg border bg-card hover:bg-accent transition-colors cursor-pointer",
                  "group"
                )}
                onClick={() => handlePromptClick(template.text)}
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h3 className="font-medium group-hover:text-primary transition-colors">
                      {template.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {template.text}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {template.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                  <span
                    className={cn(
                      "text-xs px-2 py-1 rounded-full",
                      template.difficulty === "beginner" && "bg-green-100 text-green-800",
                      template.difficulty === "intermediate" && "bg-yellow-100 text-yellow-800",
                      template.difficulty === "advanced" && "bg-red-100 text-red-800"
                    )}
                  >
                    {template.difficulty}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PromptImprover;