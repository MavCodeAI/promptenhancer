import { Link, Outlet, useLocation } from "react-router-dom";
import { Sparkles, Wand2, Home, ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

const Layout = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Home",
      href: "/",
      icon: Home,
    },
    {
      name: "App",
      href: "/app",
      icon: Wand2,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-muted/20 overflow-x-hidden">
      <header className="border-b bg-background/80 backdrop-blur-[12px] fixed top-0 left-0 right-0 z-50 safe-top transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 py-2.5 sm:py-3">
          <nav className="flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center space-x-2 touch-manipulation active:scale-95 transition-transform duration-200"
              aria-label="Home"
            >
              <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              <span className="text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent truncate max-w-[200px]">
                AI Prompt Enhancer
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    location.pathname === item.href
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
              <Button asChild variant="default" size="sm" className="gap-2">
                <Link to="/app">
                  Try Now <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </nav>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={cn(
          "md:hidden border-t bg-background/95 backdrop-blur-[12px] fixed left-0 right-0 transition-all duration-300 ease-in-out shadow-lg",
          isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        )}>
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      location.pathname === item.href
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                ))}
                <Button asChild variant="default" size="sm" className="gap-2 mt-2">
                  <Link to="/app" onClick={() => setIsMobileMenuOpen(false)}>
                    Try Now <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 transition-all duration-300">
        <Outlet />
      </main>

      <footer className="border-t bg-background/80 backdrop-blur-[12px] mt-4 sm:mt-8 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="font-bold">AI Prompt Enhancer</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Transform your prompts into powerful AI commands
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Quick Links</h3>
              <div className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            Made with ❤️ by AI Prompt Enhancer Team
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;