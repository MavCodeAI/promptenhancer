import { useState } from "react";
import { Wand2, Copy, ArrowLeft, Share2, Loader2, ChevronDown, ChevronUp, Settings2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { motion, AnimatePresence } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

interface AdvancedOptions {
  tone: string;
  style: string;
  creativity: number;
  persona: string;
}

const App = () => {
  const [prompt, setPrompt] = useState("");
  const [enhancedPrompt, setEnhancedPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [advancedOptions, setAdvancedOptions] = useState<AdvancedOptions>({
    tone: "professional",
    style: "concise",
    creativity: 0.5,
    persona: "expert",
  });
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
      // Simulate API call with advanced options
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setEnhancedPrompt(
        `Enhanced version of: ${prompt}\n\n` +
        `Tone: ${advancedOptions.tone}\n` +
        `Style: ${advancedOptions.style}\n` +
        `Creativity: ${advancedOptions.creativity}\n` +
        `Persona: ${advancedOptions.persona}\n\n` +
        `Additional context and improvements...`
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
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <Link to="/">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-primary/10 transition-colors duration-200"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <div className="flex items-center space-x-3">
              <motion.div 
                className="p-2 rounded-lg bg-primary/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Wand2 className="h-5 w-5 text-primary" />
              </motion.div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Prompt Enhancer
              </h1>
            </div>
          </div>

          <div className="space-y-8">
            {/* Input Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="space-y-3">
                <label htmlFor="prompt" className="text-sm font-medium text-muted-foreground">
                  Enter your prompt
                </label>
                <Textarea
                  id="prompt"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Type your prompt here..."
                  className="min-h-[150px] sm:min-h-[200px] resize-none bg-background/50 backdrop-blur-sm border-muted-foreground/20 focus:border-primary/50 transition-all duration-300 shadow-sm"
                />
              </div>

              {/* Advanced Options Toggle */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Button
                  variant="ghost"
                  className="w-full sm:w-auto gap-2 text-muted-foreground hover:text-foreground"
                  onClick={() => setShowAdvanced(!showAdvanced)}
                >
                  <Settings2 className="h-4 w-4" />
                  Advanced Options
                  {showAdvanced ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </Button>

                <AnimatePresence>
                  {showAdvanced && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4 p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-muted-foreground/20"
                    >
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Tone</label>
                          <Select
                            value={advancedOptions.tone}
                            onValueChange={(value) =>
                              setAdvancedOptions({ ...advancedOptions, tone: value })
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select tone" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="professional">Professional</SelectItem>
                              <SelectItem value="casual">Casual</SelectItem>
                              <SelectItem value="friendly">Friendly</SelectItem>
                              <SelectItem value="formal">Formal</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium">Style</label>
                          <Select
                            value={advancedOptions.style}
                            onValueChange={(value) =>
                              setAdvancedOptions({ ...advancedOptions, style: value })
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select style" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="concise">Concise</SelectItem>
                              <SelectItem value="detailed">Detailed</SelectItem>
                              <SelectItem value="creative">Creative</SelectItem>
                              <SelectItem value="technical">Technical</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium">
                            Creativity Level
                          </label>
                          <Slider
                            value={[advancedOptions.creativity * 100]}
                            onValueChange={([value]) =>
                              setAdvancedOptions({
                                ...advancedOptions,
                                creativity: value / 100,
                              })
                            }
                            max={100}
                            step={1}
                            className="w-full"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium">Persona</label>
                          <Select
                            value={advancedOptions.persona}
                            onValueChange={(value) =>
                              setAdvancedOptions({ ...advancedOptions, persona: value })
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select persona" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="expert">Expert</SelectItem>
                              <SelectItem value="teacher">Teacher</SelectItem>
                              <SelectItem value="assistant">Assistant</SelectItem>
                              <SelectItem value="analyst">Analyst</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={handleEnhance}
                  disabled={isLoading || !prompt.trim()}
                  className="w-full sm:w-auto gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-lg hover:shadow-primary/20"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Enhancing...
                    </>
                  ) : (
                    <>
                      <Wand2 className="h-4 w-4" />
                      Enhance
                    </>
                  )}
                </Button>
              </motion.div>
            </motion.div>

            {/* Enhanced Prompt Section */}
            <AnimatePresence>
              {enhancedPrompt && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-muted-foreground">
                      Enhanced Prompt
                    </label>
                    <div className="relative group">
                      <motion.div 
                        className="p-6 rounded-lg bg-background/50 backdrop-blur-sm border border-muted-foreground/20 text-sm overflow-x-auto transition-all duration-300 group-hover:border-primary/30 shadow-sm"
                        whileHover={{ scale: 1.01 }}
                      >
                        {enhancedPrompt}
                      </motion.div>
                      <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => copyToClipboard(enhancedPrompt)}
                            className="hover:bg-primary/10"
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={handleShare}
                            className="hover:bg-primary/10"
                          >
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setPrompt(enhancedPrompt);
                          setEnhancedPrompt("");
                        }}
                        className="w-full sm:w-auto hover:bg-primary/10 transition-colors duration-200"
                      >
                        Use as New Prompt
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setPrompt("");
                          setEnhancedPrompt("");
                        }}
                        className="w-full sm:w-auto hover:bg-primary/10 transition-colors duration-200"
                      >
                        Clear All
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default App; 