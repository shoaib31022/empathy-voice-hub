
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BadgeDollarSignIcon, HeartIcon, SparklesIcon, GaugeIcon } from "lucide-react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PricingTier = ({ 
  name, 
  price, 
  description, 
  features, 
  recommended 
}: { 
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}) => {
  return (
    <Card className={`p-6 ${recommended ? 'border-2 border-empathy-500 relative' : ''}`}>
      {recommended && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-empathy-500 text-white px-3 py-1 rounded-full text-sm">
            Recommended
          </span>
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <div className="text-3xl font-bold mb-2">{price}</div>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <HeartIcon className="h-5 w-5 text-empathy-500 mr-2 flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        className={`w-full ${recommended ? 'bg-empathy-500 hover:bg-empathy-600' : ''}`}
        variant={recommended ? "default" : "outline"}
      >
        Get Started
      </Button>
    </Card>
  );
};

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <BadgeDollarSignIcon className="h-12 w-12 text-empathy-500 mx-auto mb-4" />
              <h1 className="text-4xl font-bold mb-4">
                Choose Your Support Plan
              </h1>
              <p className="text-lg text-muted-foreground">
                Find the perfect plan for your emotional wellness journey. 
                All plans include our core emotional support features.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <PricingTier
                name="Basic"
                price="Free"
                description="Get started with essential emotional support"
                features={[
                  "Voice conversations with AI companion",
                  "Basic emotional analysis",
                  "Text-to-speech responses",
                  "Privacy-first approach"
                ]}
              />
              
              <PricingTier
                name="Premium"
                price="$7.99/mo"
                description="Enhanced support for deeper connections"
                features={[
                  "Everything in Basic",
                  "Advanced emotion recognition",
                  "Personalized coping strategies",
                  "HD voice quality",
                  "Priority response time"
                ]}
                recommended
              />
              
              <PricingTier
                name="Professional"
                price="$19.99/mo"
                description="Comprehensive emotional wellness suite"
                features={[
                  "Everything in Premium",
                  "Custom voice selection",
                  "Progress tracking & insights",
                  "Mood pattern analysis",
                  "24/7 priority support"
                ]}
              />
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                Not a replacement for professional mental health services. 
                If you're experiencing a crisis, please contact your local emergency services or mental health hotline.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;

