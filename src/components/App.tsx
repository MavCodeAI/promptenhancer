import { useState } from "react";
import { Wand2, Copy, ArrowLeft, Share2, History } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

const App = () => {
  const [prompt, setPrompt] = useState("");
  const [enhancedPrompt, setEnhancedPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleEnhance = async () => {
    if (!prompt.trim()) {
      toast({
        title: "Error",
        description: "Please enter a prompt",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setEnhancedPrompt(
        `Enhanced version of: ${prompt}\n\nAdditional context and improvements...`
      );
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to enhance prompt",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Text copied to clipboard",
    });
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        title: "Enhanced Prompt",
        text: enhancedPrompt,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to share",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <Link to="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div className="flex items-center space-x-2">
            <Wand2 className="h-5 w-5 text-primary" />
            <h1 className="text-2xl font-bold">Your Prompt</h1>
          </div>
        </div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="space-y-2">
              <label htmlFor="prompt" className="text-sm font-medium">
                Enter your prompt
              </label>
              <Textarea
                id="prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Type your prompt here..."
                className="min-h-[100px] sm:min-h-[150px] resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <Button
                onClick={handleEnhance}
                disabled={isLoading || !prompt.trim()}
                className="w-full sm:w-auto"
              >
                {isLoading ? "Enhancing..." : "Enhance"}
              </Button>
              <Button variant="outline" asChild className="w-full sm:w-auto">
                <Link to="/history">
                  <History className="h-4 w-4 mr-2" />
                  Show History
                </Link>
              </Button>
            </div>
          </motion.div>

          {enhancedPrompt && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4"
            >
              <div className="space-y-2">
                <label className="text-sm font-medium">Enhanced Prompt</label>
                <div className="relative">
                  <div className="p-4 rounded-md bg-muted/50 text-sm overflow-x-auto">
                    {enhancedPrompt}
                  </div>
                  <div className="absolute top-2 right-2 flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => copyToClipboard(enhancedPrompt)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleShare}
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    setPrompt(enhancedPrompt);
                    setEnhancedPrompt("");
                  }}
                  className="w-full sm:w-auto"
                >
                  Use as New Prompt
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setPrompt("");
                    setEnhancedPrompt("");
                  }}
                  className="w-full sm:w-auto"
                >
                  Clear All
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default App; 