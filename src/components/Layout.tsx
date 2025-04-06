import { Link, Outlet } from "react-router-dom";
import { Sparkles, Moon, Sun } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Layout = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Check if user has a theme preference in localStorage
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // Check system preference
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Sparkles className="h-6 w-6 text-orange-600" />
              <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Prompt Enhancer
              </span>
            </Link>
            <div className="flex items-center space-x-6">
              <Link to="/app" className="text-gray-600 hover:text-orange-600">
                Try Now
              </Link>
              <Link to="/#faq" className="text-gray-600 hover:text-orange-600">
                FAQ
              </Link>
              <ModeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-orange-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Sparkles className="h-6 w-6 text-orange-600" />
              <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Prompt Enhancer
              </span>
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-600 hover:text-orange-600">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-600 hover:text-orange-600">Terms of Service</Link>
              <Link to="/contact" className="text-gray-600 hover:text-orange-600">Contact</Link>
            </div>
          </div>
          <div className="text-center text-gray-500 mt-8">
            © 2024 Prompt Enhancer. All rights reserved.
          </div>
        </div>
      </footer>

      <div className="fixed top-4 right-4 z-50">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="rounded-full"
        >
          {theme === 'light' ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </div>
  );
};

export default Layout; 