
import React from 'react';
import { HeartIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded-full bg-gradient-to-br from-empathy-400 to-lavender-500"></div>
              <span className="font-medium">EmpathyVoice</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Emotional support through AI voice interaction
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="text-sm text-muted-foreground">
              <ul className="flex space-x-6">
                <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Help</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <span>Made with</span>
              <HeartIcon className="h-4 w-4 text-red-500 mx-1" />
              <span>for mental wellness</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
