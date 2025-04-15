
import React from 'react';
import { HeartIcon, BrainIcon, LockIcon, MicIcon } from "lucide-react";

const FeatureCard = ({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string 
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-border">
      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-lavender-100 dark:bg-lavender-900 text-lavender-700 dark:text-lavender-300">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="py-16 px-4 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-bold mb-4">How EmpathyVoice Helps You</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our AI companion is designed to provide support whenever you need it,
            with empathy, understanding, and practical techniques for mental wellness.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            icon={<HeartIcon className="h-6 w-6" />}
            title="Emotional Support"
            description="A compassionate listener that responds with warmth and understanding to your feelings and concerns."
          />
          <FeatureCard 
            icon={<BrainIcon className="h-6 w-6" />}
            title="Stress Relief"
            description="Learn techniques for managing stress, anxiety, and overwhelming emotions in the moment."
          />
          <FeatureCard 
            icon={<LockIcon className="h-6 w-6" />}
            title="Private & Secure"
            description="Your conversations are private and secure, with no permanent storage of personal information."
          />
          <FeatureCard 
            icon={<MicIcon className="h-6 w-6" />}
            title="Voice Interaction"
            description="Natural voice conversations create a more personal and accessible support experience."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
