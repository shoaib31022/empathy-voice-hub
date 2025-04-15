
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Blog</h1>
        <p className="text-center text-muted-foreground">Coming soon...</p>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
