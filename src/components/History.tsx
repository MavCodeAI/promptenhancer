import { useState } from "react";
import { History as HistoryIcon, Copy, Trash2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

interface HistoryItem {
  id: string;
  original: string;
  enhanced: string;
  timestamp: string;
}

const History = () => {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const { toast } = useToast();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Text copied to clipboard",
    });
  };

  const deleteHistoryItem = (id: string) => {
    setHistory(history.filter((item) => item.id !== id));
    toast({
      title: "Deleted",
      description: "History item removed",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <div className="flex items-center space-x-2">
              <HistoryIcon className="h-5 w-5 text-primary" />
              <h1 className="text-2xl font-bold">History</h1>
            </div>
          </div>
          {history.length > 0 && (
            <Button
              variant="destructive"
              size="sm"
              onClick={() => {
                setHistory([]);
                toast({
                  title: "Cleared",
                  description: "All history items removed",
                });
              }}
            >
              Clear All
            </Button>
          )}
        </div>

        {history.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center py-12"
          >
            <HistoryIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">No History Yet</h2>
            <p className="text-muted-foreground mb-4">
              Your enhanced prompts will appear here
            </p>
            <Button asChild>
              <Link to="/app">Start Enhancing</Link>
            </Button>
          </motion.div>
        ) : (
          <div className="space-y-4">
            {history.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="border rounded-lg p-4 space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <span className="text-sm text-muted-foreground">
                    {item.timestamp}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => deleteHistoryItem(item.id)}
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>

                <div className="space-y-2">
                  <div className="space-y-1">
                    <label className="text-sm font-medium">Original Prompt</label>
                    <div className="relative">
                      <div className="p-3 rounded-md bg-muted/50 text-sm overflow-x-auto">
                        {item.original}
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2"
                        onClick={() => copyToClipboard(item.original)}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm font-medium">Enhanced Prompt</label>
                    <div className="relative">
                      <div className="p-3 rounded-md bg-muted/50 text-sm overflow-x-auto">
                        {item.enhanced}
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2"
                        onClick={() => copyToClipboard(item.enhanced)}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default History; 