import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';
import { PROMPT_CATEGORIES } from '@/data/prompts';
import { useNavigate } from 'react-router-dom';

export const PromptCategories: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {PROMPT_CATEGORIES.map((category) => (
        <Card 
          key={category.name}
          className="cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => navigate(`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`)}
        >
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              {category.icon}
              <CardTitle>{category.name}</CardTitle>
            </div>
            <CardDescription>{category.description}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}; 