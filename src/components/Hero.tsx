import React from 'react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-background py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
          Enhance Your AI Prompts
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
          Create more effective, precise, and powerful prompts for AI interactions. 
          Unlock the full potential of AI with our advanced prompt engineering tools.
        </p>
        <div className="flex gap-4 justify-center">
          <Button 
            size="lg"
            onClick={() => navigate('/improve')}
            className="bg-primary hover:bg-primary/90"
          >
            Start Improving
          </Button>
          <Button 
            size="lg"
            variant="outline"
            onClick={() => navigate('/categories')}
          >
            Browse Categories
          </Button>
        </div>
      </div>
    </div>
  );
}; 