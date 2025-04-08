import { v4 as uuidv4 } from 'uuid';

export interface UserPrompt {
  id: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export const createUserPrompt = (prompt: Omit<UserPrompt, 'id' | 'createdAt' | 'updatedAt'>): UserPrompt => {
  const now = new Date().toISOString();
  return {
    ...prompt,
    id: uuidv4(),
    createdAt: now,
    updatedAt: now,
  };
};

export const updateUserPrompt = (prompt: UserPrompt, updates: Partial<Omit<UserPrompt, 'id' | 'createdAt' | 'updatedAt'>>): UserPrompt => {
  return {
    ...prompt,
    ...updates,
    updatedAt: new Date().toISOString(),
  };
}; 