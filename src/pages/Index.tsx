
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import VoiceChat from '@/components/VoiceChat';
import PrivacyBanner from '@/components/PrivacyBanner';
import Footer from '@/components/Footer';
import { ArrowRight, AlertTriangle } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Index = () => {
  const advantages = [
    {
      title: "24/7 Availability",
      description: "Access support anytime, even at 3 AM when you're feeling overwhelmed. No appointments needed."
    },
    {
      title: "Total Privacy & Anonymity",
      description: "Share your thoughts without fear of judgment. Your identity remains completely private."
    },
    {
      title: "No Waiting Lists",
      description: "Get instant support without weeks or months of waiting for an appointment."
    },
    {
      title: "Affordable Support",
      description: "Access continuous support at a fraction of traditional therapy costs ($100-$300+ per session)."
    },
    {
      title: "Social Anxiety Friendly",
      description: "Communicate comfortably without the pressure of face-to-face interactions."
    },
    {
      title: "Consistent & Non-Judgmental",
      description: "Experience the same calm, patient support every time you connect."
    },
    {
      title: "Smart Emotion Tracking",
      description: "AI learns your patterns and provides personalized emotional support based on your needs."
    },
    {
      title: "Instant Coping Tools",
      description: "Access guided exercises, breathing techniques, and meditation whenever you need them."
    },
    {
      title: "Bridge to Professional Help",
      description: "Perfect starting point for those not ready for traditional therapy, or as support between sessions."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PrivacyBanner />
      <main className="flex-grow">
        <Hero />
        <VoiceChat />
        <Features />
        
        {/* AI Mental Health Advantages Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold mb-8 text-center animate-fade-in">Why AI Mental Health Support Matters</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {advantages.map((item, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02]"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: 'fade-in-up 0.6s ease-out forwards',
                  opacity: 0 
                }}
              >
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <ArrowRight className="h-5 w-5 text-primary animate-bounce" />
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>

          <div 
            className="bg-muted p-6 rounded-lg mt-8 transform transition-all duration-500 hover:scale-[1.01]"
            style={{ animation: 'fade-in-up 0.8s ease-out forwards' }}
          >
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="h-6 w-6 text-yellow-500 animate-pulse" />
              <h2 className="text-2xl font-semibold">Important Note</h2>
            </div>
            <p className="text-muted-foreground mb-4">While AI mental health support is powerful, it cannot replace:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li className="transform transition-all duration-300 hover:translate-x-2">Professional diagnosis of mental illness</li>
              <li className="transform transition-all duration-300 hover:translate-x-2">Prescription of medication</li>
              <li className="transform transition-all duration-300 hover:translate-x-2">Crisis intervention (suicidal thoughts, severe depression, psychosis)</li>
              <li className="transform transition-all duration-300 hover:translate-x-2">Deep trauma work or complex disorders</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
