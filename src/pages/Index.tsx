
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import VoiceChat from '@/components/VoiceChat';
import PrivacyBanner from '@/components/PrivacyBanner';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PrivacyBanner />
      <main className="flex-grow">
        <Hero />
        <VoiceChat />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
