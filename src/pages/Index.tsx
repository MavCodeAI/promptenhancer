import React from 'react';
import { Layout } from '@/components/Layout';
import { PromptCategories } from '@/components/PromptCategories';
import { Hero } from '@/components/Hero';

export const IndexPage: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Explore Prompt Categories</h2>
        <PromptCategories />
      </div>
    </Layout>
  );
};

export default IndexPage;