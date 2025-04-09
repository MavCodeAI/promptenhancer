import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { PROMPT_CATEGORIES } from '@/data/prompts';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

export const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();

  const category = PROMPT_CATEGORIES.find(
    (cat) => cat.name.toLowerCase().replace(/\s+/g, '-') === categoryId
  );

  if (!category) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold mb-4">Category Not Found</h2>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" onClick={() => navigate('/')}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          <h2 className="text-3xl font-bold">{category.name}</h2>
        </div>
        
        <p className="text-lg text-muted-foreground mb-8">{category.description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {category.prompts.map((prompt, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{prompt.title}</CardTitle>
                <CardDescription>{prompt.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {prompt.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full"
                  onClick={() => navigate('/improve', { state: { selectedPrompt: prompt } })}
                >
                  Use This Prompt
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}; 