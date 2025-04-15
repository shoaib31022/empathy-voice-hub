
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDownIcon, HeadphonesIcon, ShieldIcon } from "lucide-react";

const Hero = () => {
  const scrollToChat = () => {
    const chatElement = document.getElementById('voice-chat');
    if (chatElement) {
      chatElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-6 p-2 bg-lavender-100 dark:bg-lavender-900 rounded-full">
            <HeadphonesIcon className="h-6 w-6 text-lavender-700 dark:text-lavender-300" />
          </div>
          <h1 className="mb-6 font-bold text-foreground">
            A Supportive Voice When You Need Someone to Listen
          </h1>
          <p className="mb-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            EmpathyVoice is your AI companion for emotional support, stress relief, and mental wellness. 
            Talk to our supportive AI through your voice, anytime you need to be heard.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              onClick={scrollToChat}
              size="lg" 
              className="bg-gradient-to-r from-empathy-500 to-lavender-500 hover:from-empathy-600 hover:to-lavender-600 text-white shadow-md"
            >
              Start Talking Now
              <ArrowDownIcon className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-empathy-300 dark:border-empathy-700"
            >
              <ShieldIcon className="mr-2 h-4 w-4" />
              Privacy-Focused
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
