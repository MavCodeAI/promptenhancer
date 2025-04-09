import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';

import IndexPage from '@/pages/Index';
import { PromptImprover } from '@/components/PromptImprover';
import { CategoryPage } from '@/pages/Category';
import { NotFoundPage } from '@/pages/NotFound';

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <TooltipProvider>
            <Routes>
              <Route path="/" element={<IndexPage />} />
              <Route path="/improve" element={<PromptImprover />} />
              <Route path="/category/:categoryId" element={<CategoryPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
