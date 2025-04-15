
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, AlertTriangle } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Blog = () => {
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
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Why AI Mental Health Support Matters</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {advantages.map((item, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <ArrowRight className="h-5 w-5 text-primary" />
                {item.title}
              </h3>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>

        <div className="bg-muted p-6 rounded-lg mt-8">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="h-6 w-6 text-yellow-500" />
            <h2 className="text-2xl font-semibold">Important Note</h2>
          </div>
          <p className="text-muted-foreground mb-4">While AI mental health support is powerful, it cannot replace:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Professional diagnosis of mental illness</li>
            <li>Prescription of medication</li>
            <li>Crisis intervention (suicidal thoughts, severe depression, psychosis)</li>
            <li>Deep trauma work or complex disorders</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
