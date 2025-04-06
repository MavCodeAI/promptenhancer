import { Link, Outlet } from "react-router-dom";
import { Sparkles } from "lucide-react";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50/30 to-orange-100/20">
      <header className="border-b bg-white/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 py-2.5 sm:py-3">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />
              <span className="text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                AI Prompt Enhancer
              </span>
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
        <Outlet />
      </main>

      <footer className="border-t bg-white/80 backdrop-blur-sm mt-4 sm:mt-8">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-center items-center text-xs sm:text-sm text-gray-600">
            Made with ❤️ by AI Prompt Enhancer Team
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;