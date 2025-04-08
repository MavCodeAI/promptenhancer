import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { ArrowRight, ChevronLeft, ChevronRight, Copy, History, Loader2, PenLine, Search, Share2, Sparkles, Wand2 } from "lucide-react";
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
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredPrompt, setHoveredPrompt] = useState<number | null>(null);
  const itemsPerPage = 9;
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

    setIsLoading(true);
    try {
      const response = await fetch('/.netlify/functions/groq-proxy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
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
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      let enhancedPrompt = data.choices[0]?.message?.content?.trim() || "";
      
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
    } catch (error) {
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
    <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 sm:space-y-8"
      >
        <div className="flex flex-col gap-4 sm:gap-6">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search prompts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 w-full"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {allCategories.map((category) => (
                    <SelectItem key={category.name} value={category.name}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="All Difficulties" />
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
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-base sm:text-lg font-semibold">Your Prompt</h2>
            </div>
            <div className="relative">
              <Textarea
                placeholder="Enter your prompt here..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="min-h-[200px] sm:min-h-[300px] resize-none p-3 sm:p-4"
              />
              {!prompt && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                  <div className="text-center text-muted-foreground">
                    <PenLine className="h-12 w-12 mx-auto mb-4 opacity-20" />
                    <p className="text-lg">Type a prompt to get started!</p>
                    <p className="text-sm">Or select a template below</p>
                  </div>
                </motion.div>
              )}
            </div>
            <div className="flex justify-between items-center">
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

          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-base sm:text-lg font-semibold">Enhanced Prompt</h2>
              {improvedPrompt && (
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={copyToClipboard}
                    className="h-8 w-8"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={sharePrompt}
                    className="h-8 w-8"
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
            <div className="relative">
              <Textarea
                value={improvedPrompt}
                readOnly
                placeholder="Your enhanced prompt will appear here..."
                className="min-h-[200px] sm:min-h-[300px] resize-none p-3 sm:p-4"
              />
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
                  <Loader2 className="h-8 w-8 animate-spin" />
                </div>
              )}
              {!improvedPrompt && !isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                  <div className="text-center text-muted-foreground">
                    <Wand2 className="h-12 w-12 mx-auto mb-4 opacity-20" />
                    <p className="text-lg">Your enhanced prompt will appear here</p>
                    <p className="text-sm">Click enhance to transform your prompt</p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="space-y-4"
        >
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <h2 className="text-lg sm:text-xl font-semibold">Prompt Templates</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {filteredPrompts
              .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
              .map((template, index) => (
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
                onMouseEnter={() => setHoveredPrompt(index)}
                onMouseLeave={() => setHoveredPrompt(null)}
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h3 className="text-sm sm:text-base font-medium group-hover:text-primary transition-colors">
                      {template.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
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

          {Math.ceil(filteredPrompts.length / itemsPerPage) > 1 && (
            <div className="flex justify-center items-center gap-2 mt-6">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              <span className="text-sm text-muted-foreground">
                Page {currentPage} of {Math.ceil(filteredPrompts.length / itemsPerPage)}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(filteredPrompts.length / itemsPerPage)))}
                disabled={currentPage === Math.ceil(filteredPrompts.length / itemsPerPage)}
              >
                Next
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PromptImprover;