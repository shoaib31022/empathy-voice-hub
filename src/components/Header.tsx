
import React from 'react';
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  // For a real app, you'd implement proper dark mode toggle
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // In a real implementation, you would also toggle the dark class on the document
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <header className="w-full py-4 px-4 md:px-8 border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-empathy-400 to-lavender-500 flex items-center justify-center animate-pulse-gentle">
            <span className="sr-only">Empathy Voice Hub</span>
          </div>
          <span className="font-medium text-lg text-foreground">EmpathyVoice</span>
        </Link>
        
        <div className="flex items-center space-x-4">
          <Link to="/blog">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <BookOpen className="h-5 w-5 mr-2" />
              Blog
            </Button>
          </Link>
          <Link to="/pricing">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              Pricing
            </Button>
          </Link>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            About
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            Privacy
          </Button>
          <Button variant="ghost" size="sm" onClick={toggleDarkMode} aria-label="Toggle dark mode">
            {isDarkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
