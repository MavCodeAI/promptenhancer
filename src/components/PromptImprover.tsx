import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { EXPANDED_PROMPT_CATEGORIES, ADDITIONAL_CATEGORIES } from "@/data/expandedPrompts";
import { useToast } from "@/components/ui/use-toast";
import { Loader2, Copy, Edit2, RefreshCw, FileText, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

interface PromptCategory {
  name: string;
  icon: React.ReactNode;
  description: string;
  prompts: {
    title: string;
    text: string;
    tags: string[];
    difficulty: "Beginner" | "Intermediate" | "Advanced";
    useCases: string[];
  }[];
}

const PromptImprover = () => {
  const [inputPrompt, setInputPrompt] = useState("");
  const [enhancedPrompt, setEnhancedPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedPrompt, setSelectedPrompt] = useState<string>("");
  const [creativity, setCreativity] = useState(0.5);
  const [useExamples, setUseExamples] = useState(true);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [promptLength, setPromptLength] = useState<"short" | "medium" | "long">("medium");
  const { toast } = useToast();

  // Combine all categories
  const allCategories = [...EXPANDED_PROMPT_CATEGORIES, ...ADDITIONAL_CATEGORIES];

  const handleImprove = async () => {
    if (!inputPrompt.trim()) {
      toast({
        title: "Error",
        description: "Please enter a prompt to enhance",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Enhance the prompt based on settings
      let enhanced = inputPrompt;

      // Add context based on prompt length
      switch (promptLength) {
        case "short":
          enhanced = `Create a concise and focused response to: ${inputPrompt}`;
          break;
        case "medium":
          enhanced = `Provide a detailed response with examples to: ${inputPrompt}`;
          break;
        case "long":
          enhanced = `Create a comprehensive response with detailed explanations, examples, and step-by-step guidance for: ${inputPrompt}`;
          break;
      }

      // Add creativity level
      if (creativity > 0.7) {
        enhanced += "\n\nBe creative and innovative in your approach.";
      } else if (creativity < 0.3) {
        enhanced += "\n\nFocus on practical and straightforward solutions.";
      }

      // Add example usage if enabled
      if (useExamples) {
        enhanced += "\n\nInclude relevant examples where appropriate.";
      }

      // Add category-specific enhancements if a category is selected
      if (selectedCategory) {
        const category = allCategories.find(cat => cat.name === selectedCategory);
        if (category) {
          enhanced += `\n\nConsider the context of ${category.name.toLowerCase()}: ${category.description}`;
        }
      }
      
      setEnhancedPrompt(enhanced);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to enhance prompt. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(enhancedPrompt);
    toast({
      title: "Copied!",
      description: "Enhanced prompt copied to clipboard",
    });
  };

  const handleEdit = () => {
    setIsEditing(true);
    setInputPrompt(enhancedPrompt);
  };

  const handleRegenerate = () => {
    handleImprove();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Input and Settings */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Enter Your Prompt</CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowAdvanced(!showAdvanced)}
                  title="Advanced Settings"
                >
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Textarea
                  value={inputPrompt}
                  onChange={(e) => setInputPrompt(e.target.value)}
                  placeholder="Enter your prompt here..."
                  className="min-h-[200px]"
                />
                <div className="flex flex-wrap gap-2">
                  {allCategories.map((category) => (
                    <Badge
                      key={category.name}
                      variant={selectedCategory === category.name ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => setSelectedCategory(category.name)}
                    >
                      {category.name}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <Label>Prompt Length</Label>
                    <Select value={promptLength} onValueChange={(value: "short" | "medium" | "long") => setPromptLength(value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select length" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="short">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4" />
                            <span>Short</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="medium">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4" />
                            <span>Medium</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="long">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4" />
                            <span>Long</span>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button
                      variant="outline"
                      onClick={() => setInputPrompt("")}
                      disabled={!inputPrompt}
                    >
                      Clear
                    </Button>
                    <Button
                      onClick={handleImprove}
                      disabled={!inputPrompt || isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Enhancing...
                        </>
                      ) : (
                        "Enhance Prompt"
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Advanced Settings */}
          <Card className={cn(!showAdvanced && "hidden")}>
            <CardHeader>
              <CardTitle>Advanced Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Creativity Level</Label>
                  <Slider
                    value={[creativity]}
                    onValueChange={(value) => setCreativity(value[0])}
                    min={0}
                    max={1}
                    step={0.1}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="use-examples"
                    checked={useExamples}
                    onCheckedChange={setUseExamples}
                  />
                  <Label htmlFor="use-examples">Use Example Prompts</Label>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Enhanced Prompt */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Enhanced Prompt</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value={enhancedPrompt}
                readOnly
                className="min-h-[200px]"
              />
              <div className="flex justify-end space-x-2 mt-4">
                <Button variant="outline" onClick={handleCopy} disabled={!enhancedPrompt}>
                  <Copy className="mr-2 h-4 w-4" /> Copy
                </Button>
                <Button variant="outline" onClick={handleEdit} disabled={!enhancedPrompt}>
                  <Edit2 className="mr-2 h-4 w-4" /> Edit
                </Button>
                <Button variant="outline" onClick={handleRegenerate} disabled={!enhancedPrompt}>
                  <RefreshCw className="mr-2 h-4 w-4" /> Regenerate
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Prompt Categories Table */}
      {selectedCategory && (
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Available Prompts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 px-4">Title</th>
                      <th className="text-left py-2 px-4">Description</th>
                      <th className="text-left py-2 px-4">Tags</th>
                      <th className="text-left py-2 px-4">Difficulty</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allCategories
                      .find((cat) => cat.name === selectedCategory)
                      ?.prompts.map((prompt, index) => (
                        <tr
                          key={index}
                          className={cn(
                            "border-b hover:bg-muted/50 cursor-pointer",
                            selectedPrompt === prompt.title && "bg-muted"
                          )}
                          onClick={() => {
                            setSelectedPrompt(prompt.title);
                            setInputPrompt(prompt.text);
                          }}
                        >
                          <td className="py-2 px-4">{prompt.title}</td>
                          <td className="py-2 px-4">{prompt.text}</td>
                          <td className="py-2 px-4">
                            <div className="flex flex-wrap gap-1">
                              {prompt.tags.map((tag) => (
                                <Badge key={tag} variant="secondary">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </td>
                          <td className="py-2 px-4">
                            <Badge
                              variant={
                                prompt.difficulty === "Advanced"
                                  ? "destructive"
                                  : prompt.difficulty === "Intermediate"
                                  ? "default"
                                  : "secondary"
                              }
                            >
                              {prompt.difficulty}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default PromptImprover;