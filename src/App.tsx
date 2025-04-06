import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { toast } from "sonner";
import PromptImprover from "./components/PromptImprover";
import LandingPage from "./components/LandingPage";
import Layout from "./components/Layout";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      retry: 1,
    },
  },
});

// Configure future flags for React Router
const routerConfig = {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  },
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="prompt-enhancer-theme">
        <TooltipProvider>
          <Toaster />
          <Router {...routerConfig}>
            <div className="min-h-screen bg-background">
              <div className="fixed top-4 right-4 z-50">
                <ModeToggle />
              </div>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<LandingPage />} />
                  <Route path="/app" element={<PromptImprover />} />
                  <Route path="*" element={<LandingPage />} />
                </Route>
              </Routes>
            </div>
          </Router>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
