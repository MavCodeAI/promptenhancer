export interface PromptCategory {
  name: string;
  icon: string;
  description: string;
  prompts: string[];
}

export const PROMPT_CATEGORIES: PromptCategory[] = [
  {
    name: "Business & Strategy",
    icon: "💼",
    description: "Strategic planning, business analysis, and corporate development",
    prompts: [
      "Create a 5-year business expansion plan for entering the Asian market",
      "Develop a competitive analysis framework for the SaaS industry",
      "Design a market entry strategy for a new fintech product",
      "Write a business plan for a sustainable energy startup",
      "Create a digital transformation roadmap for a traditional retail business",
      // Add more prompts here...
    ]
  },
  {
    name: "Content Creation",
    icon: "✍️",
    description: "Blog posts, articles, social media, and marketing content",
    prompts: [
      "Write an engaging blog post about artificial intelligence trends",
      "Create a viral social media campaign strategy",
      "Develop a content calendar for a tech startup",
      "Write SEO-optimized product descriptions for an e-commerce site",
      "Create an email newsletter template for a B2B company",
      // Add more prompts here...
    ]
  },
  {
    name: "Technology & Development",
    icon: "💻",
    description: "Software development, architecture, and technical documentation",
    prompts: [
      "Design a system architecture for a scalable cloud application",
      "Create technical documentation for a REST API",
      "Write user stories for a mobile app feature",
      "Develop a microservices migration strategy",
      "Create a DevOps implementation plan",
      // Add more prompts here...
    ]
  },
  {
    name: "Marketing & Growth",
    icon: "📈",
    description: "Digital marketing, growth strategies, and campaign planning",
    prompts: [
      "Create a digital marketing strategy for a luxury brand",
      "Design an email marketing campaign for product launch",
      "Develop an influencer marketing strategy",
      "Write a social media content strategy",
      "Create a customer acquisition plan",
      // Add more prompts here...
    ]
  },
  {
    name: "Education & Learning",
    icon: "📚",
    description: "Course creation, educational content, and learning materials",
    prompts: [
      "Design an online course curriculum for programming",
      "Create interactive learning materials for students",
      "Develop assessment criteria for digital skills",
      "Write lesson plans for a coding bootcamp",
      "Create a student engagement strategy",
      // Add more prompts here...
    ]
  },
  {
    name: "Creative Writing",
    icon: "🎨",
    description: "Stories, scripts, and creative content",
    prompts: [
      "Write a compelling story opening paragraph",
      "Create character descriptions for a novel",
      "Develop a plot outline for a thriller",
      "Write a movie script scene",
      "Create a story world description",
      // Add more prompts here...
    ]
  },
  {
    name: "Personal Development",
    icon: "🌱",
    description: "Self-improvement, productivity, and skill development",
    prompts: [
      "Create a personal growth plan for leadership skills",
      "Design a productivity system for remote work",
      "Develop a learning roadmap for new skills",
      "Write a career transition plan",
      "Create a work-life balance strategy",
      // Add more prompts here...
    ]
  },
  {
    name: "AI & Machine Learning",
    icon: "🤖",
    description: "AI development, ML projects, and data science",
    prompts: [
      "Design an AI model training pipeline",
      "Create a data preprocessing strategy",
      "Write model evaluation criteria",
      "Develop an AI ethics framework",
      "Create an ML deployment plan",
      // Add more prompts here...
    ]
  },
  {
    name: "Product Management",
    icon: "🎯",
    description: "Product strategy, roadmaps, and feature planning",
    prompts: [
      "Create a product roadmap for a SaaS platform",
      "Write user stories for a new feature",
      "Design a product launch strategy",
      "Develop a feature prioritization framework",
      "Create a user research plan",
      // Add more prompts here...
    ]
  },
  {
    name: "UX & Design",
    icon: "🎨",
    description: "User experience, interface design, and design systems",
    prompts: [
      "Create a UX research plan",
      "Write a design system documentation",
      "Develop user personas",
      "Create a usability testing script",
      "Design a user onboarding flow",
      // Add more prompts here...
    ]
  }
];

// Add more categories as needed to reach 999 prompts 