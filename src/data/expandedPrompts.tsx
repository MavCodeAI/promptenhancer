import {
  BookOpen,
  MessageSquare,
  GraduationCap,
  Briefcase,
  Palette,
  Globe,
  Heart,
  Code,
  Music,
  Camera,
  PenTool,
  Lightbulb,
  Brain,
  Rocket,
  Target,
  Users,
  Book,
  PenLine,
  MessageCircle,
  BookMarked,
  BriefcaseIcon,
  PaletteIcon,
  GlobeIcon,
  HeartIcon,
  CodeIcon,
  MusicIcon,
  CameraIcon,
  PenToolIcon,
  LightbulbIcon,
  BrainIcon,
  RocketIcon,
  TargetIcon,
  UsersIcon,
  BookIcon,
  PenLineIcon,
  MessageCircleIcon,
  BookMarkedIcon,
  BarChart,
  Link,
  Atom,
  Server,
  Shield,
  Cpu,
  Building2,
  PenSquare,
} from "lucide-react";

export const EXPANDED_PROMPT_CATEGORIES = [
  {
    name: "Creative Writing",
    icon: <PenLine className="h-5 w-5" />,
    description: "Prompts for creative writing, storytelling, and narrative development",
    prompts: [
      {
        title: "Character Development",
        text: "Create a detailed character profile for a protagonist in a modern-day mystery novel. Include their background, personality traits, motivations, and a defining moment that shaped their life. Make them complex and relatable.",
        tags: ["fiction", "character", "development", "profile"],
        difficulty: "intermediate"
      },
      {
        title: "World Building",
        text: "Design a unique fantasy world with its own magic system, social structure, and cultural traditions. Include details about the environment, technology level, and how magic affects daily life.",
        tags: ["fantasy", "worldbuilding", "magic", "culture"],
        difficulty: "advanced"
      },
      {
        title: "Dialogue Writing",
        text: "Write a tense dialogue scene between two characters who have opposing goals but need to work together. Focus on subtext, emotional undertones, and how their words reveal their true feelings.",
        tags: ["dialogue", "scene", "tension", "subtext"],
        difficulty: "intermediate"
      },
      {
        title: "Plot Twist",
        text: "Develop a surprising but logical plot twist for a mystery story. The twist should be foreshadowed earlier in the story but still catch readers off guard. Explain how it changes the story's direction.",
        tags: ["plot", "twist", "mystery", "foreshadowing"],
        difficulty: "advanced"
      },
      {
        title: "Poetry Prompt",
        text: "Write a poem that explores the relationship between nature and technology. Use vivid imagery and metaphors to contrast organic and artificial elements. Consider the impact of modern life on our connection to nature.",
        tags: ["poetry", "nature", "technology", "imagery"],
        difficulty: "beginner"
      }
    ]
  },
  {
    name: "Conversation Starters",
    icon: <MessageSquare className="h-5 w-5" />,
    description: "Engaging prompts for meaningful conversations and discussions",
    prompts: [
      {
        title: "Personal Growth",
        text: "Share a moment when you stepped out of your comfort zone and what you learned from the experience. How did it change your perspective on taking risks?",
        tags: ["personal", "growth", "experience", "reflection"],
        difficulty: "beginner"
      },
      {
        title: "Future Vision",
        text: "Describe your ideal future in 10 years, focusing on both personal and professional aspects. What steps are you taking now to work towards this vision?",
        tags: ["future", "goals", "planning", "vision"],
        difficulty: "intermediate"
      },
      {
        title: "Cultural Exchange",
        text: "Share a tradition or custom from your culture that you're proud of. Explain its significance and how it has shaped your identity.",
        tags: ["culture", "tradition", "identity", "heritage"],
        difficulty: "beginner"
      },
      {
        title: "Ethical Dilemma",
        text: "Present a modern ethical dilemma related to technology or social media. Discuss the different perspectives and potential solutions, considering various stakeholders.",
        tags: ["ethics", "technology", "society", "discussion"],
        difficulty: "advanced"
      },
      {
        title: "Creative Collaboration",
        text: "Describe your ideal creative collaboration project. What skills would you bring to the table, and what would you hope to learn from others?",
        tags: ["collaboration", "creativity", "skills", "learning"],
        difficulty: "intermediate"
      }
    ]
  },
  {
    name: "Educational Content",
    icon: <GraduationCap className="h-5 w-5" />,
    description: "Prompts for creating educational and instructional content",
    prompts: [
      {
        title: "Concept Explanation",
        text: "Explain a complex scientific concept (like quantum entanglement or climate change) to a high school student. Use analogies and real-world examples to make it accessible.",
        tags: ["science", "education", "explanation", "analogies"],
        difficulty: "intermediate"
      },
      {
        title: "Historical Analysis",
        text: "Analyze a significant historical event and its impact on modern society. Include multiple perspectives and connect it to current events or issues.",
        tags: ["history", "analysis", "impact", "perspective"],
        difficulty: "advanced"
      },
      {
        title: "Skill Tutorial",
        text: "Create a step-by-step tutorial for learning a new skill (like public speaking or digital art). Include common mistakes to avoid and tips for practice.",
        tags: ["tutorial", "learning", "skills", "practice"],
        difficulty: "beginner"
      },
      {
        title: "Critical Thinking",
        text: "Develop a framework for evaluating the credibility of online information. Include specific criteria and examples of how to apply them.",
        tags: ["critical thinking", "evaluation", "credibility", "online"],
        difficulty: "intermediate"
      },
      {
        title: "Language Learning",
        text: "Design a language learning exercise that incorporates cultural context and practical usage. Include vocabulary, grammar points, and conversation practice.",
        tags: ["language", "learning", "culture", "practice"],
        difficulty: "intermediate"
      }
    ]
  },
  {
    name: "Professional Development",
    icon: <Briefcase className="h-5 w-5" />,
    description: "Prompts for career growth and professional skills development",
    prompts: [
      {
        title: "Leadership Scenario",
        text: "Describe a challenging leadership situation and outline a strategy for addressing it. Consider team dynamics, communication, and long-term impact.",
        tags: ["leadership", "management", "strategy", "communication"],
        difficulty: "advanced"
      },
      {
        title: "Career Planning",
        text: "Create a 5-year career development plan. Include skill development goals, networking strategies, and potential career transitions.",
        tags: ["career", "planning", "development", "goals"],
        difficulty: "intermediate"
      },
      {
        title: "Problem Solving",
        text: "Present a complex business problem and develop a systematic approach to solving it. Include stakeholder analysis and implementation strategy.",
        tags: ["problem solving", "business", "strategy", "implementation"],
        difficulty: "advanced"
      },
      {
        title: "Professional Branding",
        text: "Develop a personal branding strategy for a professional in your field. Include online presence, networking, and skill positioning.",
        tags: ["branding", "professional", "networking", "skills"],
        difficulty: "intermediate"
      },
      {
        title: "Work-Life Balance",
        text: "Create a framework for maintaining work-life balance in a demanding career. Include practical strategies and boundary-setting techniques.",
        tags: ["work-life balance", "wellness", "productivity", "boundaries"],
        difficulty: "beginner"
      },
      {
        title: "Market Analysis",
        text: "Conduct a basic SWOT analysis (Strengths, Weaknesses, Opportunities, Threats) for a small local coffee shop competing against larger chains.",
        tags: ["business", "strategy", "analysis", "swot", "competition"],
        difficulty: "beginner"
      },
      {
        title: "Business Pitch Idea",
        text: "Develop a concise elevator pitch for a new sustainable subscription box service. Highlight the unique value proposition and target market.",
        tags: ["business", "pitch", "startup", "sustainability", "marketing"],
        difficulty: "intermediate"
      },
      {
        title: "Negotiation Strategy",
        text: "Outline a negotiation strategy for securing a partnership between two complementary businesses. Define objectives, potential concessions, and desired outcomes.",
        tags: ["business", "negotiation", "partnership", "strategy", "b2b"],
        difficulty: "advanced"
      },
      {
        title: "Developer Portfolio",
        text: "Outline the key components of an effective online portfolio for a web developer. What types of projects should be included, and how should they be presented?",
        tags: ["career", "portfolio", "web development", "job search", "personal branding"],
        difficulty: "beginner"
      },
      {
        title: "Technical Interview Prep (DS&A)",
        text: "Create a study plan for preparing for data structures and algorithms questions in technical interviews. Include key topics (e.g., arrays, trees, graphs, sorting) and practice strategies.",
        tags: ["career", "interview", "technical interview", "data structures", "algorithms", "job search"],
        difficulty: "intermediate"
      }
    ]
  }
];

export const ADDITIONAL_CATEGORIES = [
  {
    name: "Art & Design",
    icon: <Palette className="h-5 w-5" />,
    description: "Prompts for artistic creation and design thinking",
    prompts: [
      {
        title: "Visual Composition",
        text: "Describe a composition for a digital artwork that explores the theme of urban isolation. Include color palette, mood, and key visual elements.",
        tags: ["art", "composition", "digital", "urban"],
        difficulty: "intermediate"
      },
      {
        title: "Design Process",
        text: "Outline a user-centered design process for a mobile app that helps people track their environmental impact. Include research, prototyping, and testing phases.",
        tags: ["design", "process", "mobile", "environment"],
        difficulty: "advanced"
      },
      {
        title: "Creative Direction",
        text: "Develop a creative direction for a brand campaign that promotes sustainable fashion. Include visual style, messaging, and key touchpoints.",
        tags: ["creative", "branding", "sustainability", "fashion"],
        difficulty: "advanced"
      },
      {
        title: "Artistic Expression",
        text: "Create a prompt for an artwork that explores the relationship between technology and human emotion. Consider both visual and conceptual elements.",
        tags: ["art", "technology", "emotion", "concept"],
        difficulty: "intermediate"
      },
      {
        title: "Design Thinking",
        text: "Apply design thinking principles to solve a community problem. Include empathy mapping, ideation, and prototype development.",
        tags: ["design thinking", "community", "problem solving", "innovation"],
        difficulty: "intermediate"
      }
    ]
  },
  {
    name: "Global Perspectives",
    icon: <Globe className="h-5 w-5" />,
    description: "Prompts for exploring global issues and cultural perspectives",
    prompts: [
      {
        title: "Cultural Exchange",
        text: "Design a cultural exchange program between two different countries. Include activities, learning objectives, and ways to promote mutual understanding.",
        tags: ["culture", "exchange", "education", "global"],
        difficulty: "intermediate"
      },
      {
        title: "Global Challenge",
        text: "Analyze a global challenge (like climate change or digital divide) from multiple cultural perspectives. Consider local impacts and potential solutions.",
        tags: ["global", "challenge", "perspective", "solution"],
        difficulty: "advanced"
      },
      {
        title: "International Collaboration",
        text: "Create a framework for effective international team collaboration. Include communication strategies, cultural sensitivity, and project management.",
        tags: ["collaboration", "international", "communication", "management"],
        difficulty: "advanced"
      },
      {
        title: "Cultural Innovation",
        text: "Explore how traditional cultural practices can be adapted to address modern challenges while preserving their essence.",
        tags: ["culture", "innovation", "tradition", "modern"],
        difficulty: "intermediate"
      },
      {
        title: "Global Education",
        text: "Design an educational program that promotes global citizenship and cross-cultural understanding among students.",
        tags: ["education", "global", "citizenship", "culture"],
        difficulty: "intermediate"
      }
    ]
  },
  {
    name: "Health & Wellness",
    icon: <Heart className="h-5 w-5" />,
    description: "Prompts for health, wellness, and personal development",
    prompts: [
      {
        title: "Wellness Journey",
        text: "Create a personalized wellness plan that addresses physical, mental, and emotional health. Include specific goals and sustainable practices.",
        tags: ["wellness", "health", "planning", "personal"],
        difficulty: "beginner"
      },
      {
        title: "Mindfulness Practice",
        text: "Design a mindfulness exercise that can be incorporated into daily life. Include specific techniques and expected benefits.",
        tags: ["mindfulness", "meditation", "practice", "daily"],
        difficulty: "beginner"
      },
      {
        title: "Healthy Lifestyle",
        text: "Develop a sustainable healthy lifestyle plan that includes nutrition, exercise, and stress management. Consider individual preferences and limitations.",
        tags: ["health", "lifestyle", "nutrition", "exercise"],
        difficulty: "intermediate"
      },
      {
        title: "Mental Health",
        text: "Create a resource guide for maintaining good mental health in a digital age. Include coping strategies and when to seek professional help.",
        tags: ["mental health", "digital", "coping", "resources"],
        difficulty: "intermediate"
      },
      {
        title: "Work-Life Harmony",
        text: "Design a system for achieving work-life harmony that promotes both productivity and personal well-being.",
        tags: ["work-life", "harmony", "productivity", "wellbeing"],
        difficulty: "intermediate"
      }
    ]
  },
  {
    name: "Technology & Innovation",
    icon: <Code className="h-5 w-5" />,
    description: "Prompts for technology, innovation, and digital transformation",
    prompts: [
      {
        title: "Tech Solution",
        text: "Design a technological solution to a common problem in education. Consider accessibility, scalability, and user experience.",
        tags: ["technology", "education", "solution", "innovation"],
        difficulty: "advanced"
      },
      {
        title: "Digital Transformation",
        text: "Create a digital transformation strategy for a traditional business. Include technology adoption, change management, and expected outcomes.",
        tags: ["digital", "transformation", "strategy", "business"],
        difficulty: "advanced"
      },
      {
        title: "Innovation Process",
        text: "Outline an innovation process for developing new products or services. Include ideation, validation, and implementation phases.",
        tags: ["innovation", "process", "development", "product"],
        difficulty: "intermediate"
      },
      {
        title: "Tech Ethics",
        text: "Analyze the ethical implications of a new technology. Consider privacy, security, and societal impact.",
        tags: ["ethics", "technology", "privacy", "impact"],
        difficulty: "advanced"
      },
      {
        title: "Future Tech",
        text: "Predict and describe a technological advancement that could significantly impact society in the next decade.",
        tags: ["future", "technology", "prediction", "impact"],
        difficulty: "intermediate"
      },
      {
        title: "Frontend Framework Choice",
        text: "Analyze the pros and cons of using React vs. Vue vs. Svelte for building a complex, interactive single-page application (SPA) dashboard. Consider performance, learning curve, and ecosystem.",
        tags: ["web development", "frontend", "react", "vue", "svelte", "comparison", "spa"],
        difficulty: "intermediate"
      },
      {
        title: "API Design",
        text: "Design a REST API structure for a simple blog application. Define the necessary endpoints (e.g., for posts, comments, users), HTTP methods, and expected request/response formats for creating and retrieving posts.",
        tags: ["web development", "backend", "api", "rest", "design", "blog"],
        difficulty: "intermediate"
      },
      {
        title: "Web Performance Optimization",
        text: "Outline key strategies for optimizing the loading performance of a modern e-commerce website. Include techniques like code splitting, image optimization, caching, and CDN usage.",
        tags: ["web development", "performance", "optimization", "frontend", "caching", "cdn"],
        difficulty: "advanced"
      },
      {
        title: "CSS Layout Challenge",
        text: "Describe how to create a responsive three-column layout using CSS Grid or Flexbox where the columns stack vertically on smaller screens.",
        tags: ["web development", "css", "layout", "responsive", "flexbox", "grid"],
        difficulty: "beginner"
      },
      {
        title: "AI Code Generation Use Case",
        text: "Describe a scenario where using an AI coding assistant like Cursor or GitHub Copilot would significantly speed up the development process for creating a new feature (e.g., implementing a user authentication flow).",
        tags: ["ai", "coding", "development", "cursor", "copilot", "code generation", "productivity"],
        difficulty: "beginner"
      },
      {
        title: "AI Code Refactoring",
        text: "Explain how you would use an AI assistant to refactor a complex, poorly written function in JavaScript to improve its readability, maintainability, and efficiency. Provide example prompts.",
        tags: ["ai", "coding", "refactoring", "javascript", "maintainability", "efficiency", "prompt engineering"],
        difficulty: "intermediate"
      },
      {
        title: "AI for Debugging",
        text: "Outline a process for using an AI coding assistant to help debug a complex runtime error in a web application. What information would you provide to the AI, and what kind of assistance would you expect?",
        tags: ["ai", "coding", "debugging", "web development", "error handling", "troubleshooting"],
        difficulty: "intermediate"
      },
      {
        title: "Limitations of AI Coders",
        text: "Discuss the potential limitations and pitfalls of relying heavily on AI code generation tools. Consider aspects like code correctness, security vulnerabilities, and understanding the generated code.",
        tags: ["ai", "coding", "limitations", "security", "best practices", "critical thinking"],
        difficulty: "advanced"
      },
      {
        title: "State Management Comparison (React)",
        text: "Compare and contrast different state management solutions for React applications (e.g., Redux Toolkit, Zustand, Context API). Discuss use cases, complexity, and performance implications.",
        tags: ["web development", "react", "state management", "redux", "zustand", "context api", "frontend"],
        difficulty: "advanced"
      },
      {
        title: "Web Accessibility (WCAG)",
        text: "Explain the importance of web accessibility (WCAG) and outline three key principles developers should follow to make websites usable for people with disabilities. Provide examples.",
        tags: ["web development", "accessibility", "wcag", "frontend", "ux", "inclusive design"],
        difficulty: "intermediate"
      },
      {
        title: "Progressive Web Apps (PWA)",
        text: "Describe the core features and benefits of Progressive Web Apps (PWAs). Explain how service workers and web app manifests contribute to PWA functionality like offline access and installability.",
        tags: ["web development", "pwa", "service worker", "offline", "mobile", "frontend"],
        difficulty: "intermediate"
      },
      {
        title: "SSR vs CSR",
        text: "Explain the difference between Server-Side Rendering (SSR) and Client-Side Rendering (CSR) in web development. Discuss the trade-offs regarding performance, SEO, and user experience.",
        tags: ["web development", "ssr", "csr", "rendering", "performance", "seo", "frontend", "backend"],
        difficulty: "intermediate"
      },
      {
        title: "AI for Unit Testing",
        text: "Describe how you could use an AI coding assistant to help generate unit tests for an existing function. Provide an example function and the prompts you might use.",
        tags: ["ai", "coding", "testing", "unit testing", "development", "productivity", "prompt engineering"],
        difficulty: "intermediate"
      },
      {
        title: "AI for Code Documentation",
        text: "Explain how AI tools can assist in generating documentation (e.g., docstrings, comments) for code. Discuss the benefits and potential pitfalls of relying on AI for this task.",
        tags: ["ai", "coding", "documentation", "development", "maintainability", "productivity"],
        difficulty: "beginner"
      },
      {
        title: "Comparing AI Coding Assistants",
        text: "Briefly compare two popular AI coding assistants (e.g., GitHub Copilot vs Cursor). Discuss their potential strengths, weaknesses, and ideal use cases based on available features.",
        tags: ["ai", "coding", "development", "cursor", "copilot", "comparison", "tools"],
        difficulty: "beginner"
      }
    ]
  },
  {
    name: "Music & Performance",
    icon: <Music className="h-5 w-5" />,
    description: "Prompts for musical creation and performance arts",
    prompts: [
      {
        title: "Musical Composition",
        text: "Create a concept for a musical composition that tells a story through sound. Include mood, structure, and instrumentation.",
        tags: ["music", "composition", "story", "sound"],
        difficulty: "intermediate"
      },
      {
        title: "Performance Art",
        text: "Design a performance art piece that explores the relationship between technology and human expression.",
        tags: ["performance", "art", "technology", "expression"],
        difficulty: "advanced"
      },
      {
        title: "Music Production",
        text: "Outline a music production process for creating an experimental sound piece. Include recording techniques and post-production elements.",
        tags: ["music", "production", "experimental", "sound"],
        difficulty: "advanced"
      },
      {
        title: "Performance Technique",
        text: "Develop a practice routine for improving a specific musical or performance skill. Include exercises and progress tracking.",
        tags: ["performance", "practice", "skill", "technique"],
        difficulty: "intermediate"
      },
      {
        title: "Artistic Collaboration",
        text: "Create a framework for collaboration between musicians and visual artists. Include project planning and creative process.",
        tags: ["collaboration", "music", "art", "creative"],
        difficulty: "intermediate"
      }
    ]
  },
  {
    name: "Photography & Visual Arts",
    icon: <Camera className="h-5 w-5" />,
    description: "Prompts for photography and visual storytelling",
    prompts: [
      {
        title: "Photo Series",
        text: "Conceptualize a photo series that documents urban life through the eyes of different communities. Include themes and visual style.",
        tags: ["photography", "series", "urban", "documentary"],
        difficulty: "intermediate"
      },
      {
        title: "Visual Storytelling",
        text: "Create a visual storytelling project that explores a social issue through photography. Include narrative structure and key messages.",
        tags: ["visual", "storytelling", "photography", "social"],
        difficulty: "advanced"
      },
      {
        title: "Photo Technique",
        text: "Develop a guide for mastering a specific photography technique (like long exposure or portrait lighting). Include setup and examples.",
        tags: ["photography", "technique", "guide", "learning"],
        difficulty: "intermediate"
      },
      {
        title: "Visual Composition",
        text: "Design a series of exercises for improving visual composition skills in photography. Include principles and practice assignments.",
        tags: ["composition", "photography", "visual", "practice"],
        difficulty: "beginner"
      },
      {
        title: "Photo Editing",
        text: "Create a workflow for post-processing a specific type of photography (like landscape or portrait). Include software tools and techniques.",
        tags: ["editing", "photography", "workflow", "post-processing"],
        difficulty: "intermediate"
      }
    ]
  },
  {
    name: "Writing & Literature",
    icon: <PenTool className="h-5 w-5" />,
    description: "Prompts for various forms of writing and literary creation",
    prompts: [
      {
        title: "Short Story",
        text: "Write a short story that explores the theme of human connection in a digital age. Include character development and plot structure.",
        tags: ["writing", "story", "digital", "connection"],
        difficulty: "intermediate"
      },
      {
        title: "Poetry Collection",
        text: "Create a concept for a poetry collection that explores nature and technology. Include themes, style, and structure.",
        tags: ["poetry", "collection", "nature", "technology"],
        difficulty: "advanced"
      },
      {
        title: "Creative Nonfiction",
        text: "Develop a personal essay that reflects on a significant technological change in your life. Include reflection and broader implications.",
        tags: ["writing", "nonfiction", "personal", "technology"],
        difficulty: "intermediate"
      },
      {
        title: "Writing Style",
        text: "Create exercises for developing a distinctive writing style. Include examples and practice prompts.",
        tags: ["writing", "style", "development", "practice"],
        difficulty: "beginner"
      },
      {
        title: "Literary Analysis",
        text: "Analyze a contemporary work of literature through the lens of technology and society. Include themes and cultural context.",
        tags: ["analysis", "literature", "technology", "society"],
        difficulty: "advanced"
      }
    ]
  },
  {
    name: "Innovation & Creativity",
    icon: <Lightbulb className="h-5 w-5" />,
    description: "Prompts for fostering innovation and creative thinking",
    prompts: [
      {
        title: "Creative Problem Solving",
        text: "Apply creative problem-solving techniques to address a complex social issue. Include ideation and implementation strategies.",
        tags: ["creativity", "problem solving", "innovation", "social"],
        difficulty: "advanced"
      },
      {
        title: "Innovation Workshop",
        text: "Design a workshop for developing innovative solutions to environmental challenges. Include activities and facilitation guide.",
        tags: ["innovation", "workshop", "environment", "solutions"],
        difficulty: "intermediate"
      },
      {
        title: "Creative Process",
        text: "Develop a framework for a creative process that combines traditional and digital methods. Include stages and tools.",
        tags: ["creativity", "process", "digital", "traditional"],
        difficulty: "intermediate"
      },
      {
        title: "Innovation Strategy",
        text: "Create an innovation strategy for a nonprofit organization. Include goal-setting and implementation planning.",
        tags: ["innovation", "strategy", "nonprofit", "planning"],
        difficulty: "advanced"
      },
      {
        title: "Creative Collaboration",
        text: "Design a system for fostering creative collaboration in a remote team. Include tools and processes.",
        tags: ["collaboration", "creativity", "remote", "team"],
        difficulty: "intermediate"
      }
    ]
  },
  {
    name: "Psychology & Behavior",
    icon: <Brain className="h-5 w-5" />,
    description: "Prompts for understanding human behavior and psychology",
    prompts: [
      {
        title: "Behavioral Analysis",
        text: "Analyze a common digital behavior pattern and its psychological implications. Include potential impacts and coping strategies.",
        tags: ["psychology", "behavior", "digital", "analysis"],
        difficulty: "advanced"
      },
      {
        title: "Cognitive Development",
        text: "Explore how technology affects cognitive development in different age groups. Include research findings and recommendations.",
        tags: ["psychology", "development", "technology", "cognitive"],
        difficulty: "advanced"
      },
      {
        title: "Social Psychology",
        text: "Investigate the impact of social media on group dynamics and interpersonal relationships. Include psychological theories.",
        tags: ["psychology", "social", "media", "relationships"],
        difficulty: "intermediate"
      },
      {
        title: "Behavioral Change",
        text: "Design a behavioral change program using psychological principles. Include motivation strategies and tracking methods.",
        tags: ["psychology", "behavior", "change", "program"],
        difficulty: "intermediate"
      },
      {
        title: "Mental Models",
        text: "Develop mental models for understanding complex systems and decision-making processes. Include examples and applications.",
        tags: ["psychology", "mental models", "systems", "decision-making"],
        difficulty: "advanced"
      }
    ]
  },
  {
    name: "Personal Growth",
    icon: <Rocket className="h-5 w-5" />,
    description: "Prompts for personal development and growth",
    prompts: [
      {
        title: "Goal Setting",
        text: "Create a comprehensive goal-setting framework that incorporates both short-term and long-term objectives. Include tracking methods.",
        tags: ["goals", "planning", "development", "growth"],
        difficulty: "beginner"
      },
      {
        title: "Skill Development",
        text: "Design a skill development plan for mastering a new ability. Include practice strategies and progress measurement.",
        tags: ["skills", "development", "learning", "practice"],
        difficulty: "intermediate"
      },
      {
        title: "Personal Branding",
        text: "Develop a personal branding strategy that authentically represents your values and expertise. Include online presence and networking.",
        tags: ["branding", "personal", "development", "strategy"],
        difficulty: "intermediate"
      },
      {
        title: "Life Balance",
        text: "Create a framework for maintaining balance between different life areas. Include practical strategies and assessment tools.",
        tags: ["balance", "life", "wellness", "planning"],
        difficulty: "beginner"
      },
      {
        title: "Growth Mindset",
        text: "Design exercises for developing a growth mindset. Include reflection prompts and practical applications.",
        tags: ["mindset", "growth", "development", "exercises"],
        difficulty: "beginner"
      }
    ]
  },
  {
    name: "Business & Strategy",
    icon: <Target className="h-5 w-5" />,
    description: "Prompts for business strategy and entrepreneurship",
    prompts: [
      {
        title: "Business Model",
        text: "Develop a sustainable business model for a social enterprise. Include revenue streams and impact measurement.",
        tags: ["business", "model", "social", "enterprise"],
        difficulty: "advanced"
      },
      {
        title: "Market Analysis",
        text: "Conduct a market analysis for a new product or service. Include competitor research and target audience identification.",
        tags: ["business", "market", "analysis", "strategy"],
        difficulty: "intermediate"
      },
      {
        title: "Growth Strategy",
        text: "Create a growth strategy for a small business. Include marketing, operations, and financial planning.",
        tags: ["business", "growth", "strategy", "planning"],
        difficulty: "advanced"
      },
      {
        title: "Innovation Management",
        text: "Design an innovation management system for a company. Include processes and metrics for success.",
        tags: ["business", "innovation", "management", "system"],
        difficulty: "advanced"
      },
      {
        title: "Business Planning",
        text: "Develop a comprehensive business plan for a startup. Include market research and financial projections.",
        tags: ["business", "planning", "startup", "strategy"],
        difficulty: "intermediate"
      }
    ]
  },
  {
    name: "Social Impact",
    icon: <Users className="h-5 w-5" />,
    description: "Prompts for creating positive social change",
    prompts: [
      {
        title: "Community Project",
        text: "Design a community project that addresses a local social issue. Include stakeholder engagement and impact measurement.",
        tags: ["social", "community", "project", "impact"],
        difficulty: "intermediate"
      },
      {
        title: "Advocacy Campaign",
        text: "Create an advocacy campaign for an environmental cause. Include messaging and engagement strategies.",
        tags: ["social", "advocacy", "environment", "campaign"],
        difficulty: "advanced"
      },
      {
        title: "Social Innovation",
        text: "Develop a social innovation project that uses technology to solve a community problem. Include implementation plan.",
        tags: ["social", "innovation", "technology", "community"],
        difficulty: "advanced"
      },
      {
        title: "Impact Assessment",
        text: "Design a framework for assessing the social impact of a nonprofit organization. Include metrics and reporting.",
        tags: ["social", "impact", "assessment", "nonprofit"],
        difficulty: "intermediate"
      },
      {
        title: "Community Engagement",
        text: "Create a strategy for meaningful community engagement in a social project. Include participation methods and feedback.",
        tags: ["social", "community", "engagement", "strategy"],
        difficulty: "intermediate"
      }
    ]
  },
  {
    name: "Education & Learning",
    icon: <Book className="h-5 w-5" />,
    description: "Prompts for educational content and learning strategies",
    prompts: [
      {
        title: "Learning Design",
        text: "Design an engaging learning experience for a complex topic. Include activities and assessment methods.",
        tags: ["education", "learning", "design", "experience"],
        difficulty: "intermediate"
      },
      {
        title: "Educational Technology",
        text: "Create a plan for integrating technology into an educational setting. Include tools and implementation strategies.",
        tags: ["education", "technology", "integration", "planning"],
        difficulty: "advanced"
      },
      {
        title: "Curriculum Development",
        text: "Develop a curriculum framework for a new subject area. Include learning objectives and assessment criteria.",
        tags: ["education", "curriculum", "development", "framework"],
        difficulty: "advanced"
      },
      {
        title: "Learning Assessment",
        text: "Design an assessment system for measuring learning outcomes. Include various assessment methods and rubrics.",
        tags: ["education", "assessment", "learning", "outcomes"],
        difficulty: "intermediate"
      },
      {
        title: "Educational Innovation",
        text: "Create an innovative approach to teaching a traditional subject. Include methodology and expected outcomes.",
        tags: ["education", "innovation", "teaching", "methodology"],
        difficulty: "intermediate"
      }
    ]
  },
  {
    name: "Writing & Communication",
    icon: <PenLine className="h-5 w-5" />,
    description: "Prompts for effective writing and communication",
    prompts: [
      {
        title: "Content Strategy",
        text: "Develop a content strategy for a digital platform. Include audience analysis and content planning.",
        tags: ["writing", "content", "strategy", "digital"],
        difficulty: "intermediate"
      },
      {
        title: "Communication Plan",
        text: "Create a communication plan for a project or organization. Include messaging and channel strategy.",
        tags: ["communication", "planning", "strategy", "messaging"],
        difficulty: "intermediate"
      },
      {
        title: "Technical Writing",
        text: "Design a guide for creating clear technical documentation. Include structure and best practices.",
        tags: ["writing", "technical", "documentation", "guide"],
        difficulty: "advanced"
      },
      {
        title: "Storytelling",
        text: "Develop a framework for effective storytelling in business communication. Include structure and examples.",
        tags: ["writing", "storytelling", "business", "communication"],
        difficulty: "intermediate"
      },
      {
        title: "Content Creation",
        text: "Create a process for developing engaging content across different platforms. Include planning and optimization.",
        tags: ["writing", "content", "creation", "digital"],
        difficulty: "beginner"
      }
    ]
  },
  {
    name: "Digital Marketing",
    icon: <MessageCircle className="h-5 w-5" />,
    description: "Prompts for digital marketing and content strategy",
    prompts: [
      {
        title: "Marketing Strategy",
        text: "Develop a digital marketing strategy for a new product launch. Include channels and metrics.",
        tags: ["marketing", "digital", "strategy", "launch"],
        difficulty: "advanced"
      },
      {
        title: "Content Marketing",
        text: "Create a content marketing plan for building brand awareness. Include content types and distribution.",
        tags: ["marketing", "content", "brand", "strategy"],
        difficulty: "intermediate"
      },
      {
        title: "Social Media",
        text: "Design a social media strategy for engaging with a specific audience. Include platform selection and content planning.",
        tags: ["marketing", "social", "media", "strategy"],
        difficulty: "intermediate"
      },
      {
        title: "Email Marketing",
        text: "Develop an email marketing campaign for customer retention. Include segmentation and automation.",
        tags: ["marketing", "email", "campaign", "retention"],
        difficulty: "intermediate"
      },
      {
        title: "Analytics Strategy",
        text: "Create a digital analytics strategy for measuring marketing effectiveness. Include KPIs and reporting.",
        tags: ["marketing", "analytics", "strategy", "measurement"],
        difficulty: "advanced"
      }
    ]
  },
  {
    name: "Research & Analysis",
    icon: <BookMarked className="h-5 w-5" />,
    description: "Prompts for research methodology and data analysis",
    prompts: [
      {
        title: "Research Design",
        text: "Design a research study to investigate a social phenomenon. Include methodology and data collection.",
        tags: ["research", "design", "methodology", "analysis"],
        difficulty: "advanced"
      },
      {
        title: "Data Analysis",
        text: "Create a framework for analyzing qualitative research data. Include coding and interpretation methods.",
        tags: ["research", "analysis", "data", "qualitative"],
        difficulty: "advanced"
      },
      {
        title: "Market Research",
        text: "Develop a market research plan for a new product. Include research questions and methods.",
        tags: ["research", "market", "planning", "analysis"],
        difficulty: "intermediate"
      },
      {
        title: "Research Ethics",
        text: "Design guidelines for conducting ethical research. Include principles and practical applications.",
        tags: ["research", "ethics", "guidelines", "principles"],
        difficulty: "intermediate"
      },
      {
        title: "Research Writing",
        text: "Create a template for writing research reports. Include structure and best practices.",
        tags: ["research", "writing", "reports", "template"],
        difficulty: "intermediate"
      }
    ]
  },
  {
    name: "Artificial Intelligence",
    icon: <Brain className="h-5 w-5" />,
    description: "Prompts related to AI concepts, ethics, and applications",
    prompts: [
      {
        title: "AI Ethics Scenario",
        text: "Analyze the ethical implications of using AI in hiring decisions. Discuss potential biases, fairness concerns, and recommendations for responsible implementation.",
        tags: ["ai", "ethics", "hiring", "bias", "responsible ai"],
        difficulty: "advanced"
      },
      {
        title: "AI for Customer Service",
        text: "Design an AI-powered chatbot strategy to improve customer service response times and satisfaction for an e-commerce business. Detail the chatbot's functionalities and escalation paths to human agents.",
        tags: ["ai", "chatbot", "customer service", "ecommerce", "strategy"],
        difficulty: "intermediate"
      },
      {
        title: "Explain Machine Learning",
        text: "Explain the basic concept of machine learning (supervised vs. unsupervised) to a non-technical audience using a simple analogy.",
        tags: ["ai", "machine learning", "explanation", "beginner", "analogy"],
        difficulty: "beginner"
      },
      {
        title: "AI in Marketing",
        text: "Outline how AI can be used to personalize marketing campaigns for a software product. Include examples of data usage, targeting techniques, and performance metrics.",
        tags: ["ai", "marketing", "personalization", "data", "campaign"],
        difficulty: "intermediate"
      },
      {
        title: "Future of AI",
        text: "Write a short speculative piece on the potential impact of Artificial General Intelligence (AGI) on society within the next 50 years. Consider both positive and negative possibilities.",
        tags: ["ai", "agi", "future", "society", "speculative"],
        difficulty: "advanced"
      },
      {
        title: "AI Code Ownership & Licensing",
        text: "Discuss the potential ethical and legal challenges surrounding code ownership and licensing when using AI-generated code in commercial projects.",
        tags: ["ai", "coding", "ethics", "legal", "licensing", "ownership", "intellectual property"],
        difficulty: "advanced"
      }
    ]
  },
  {
    name: "Web Development & AI",
    icon: <Code className="h-5 w-5" />,
    description: "Prompts for web development and AI integration",
    prompts: [
      {
        title: "Frontend Framework Choice",
        text: "Analyze the pros and cons of using React vs. Vue vs. Svelte for building a complex, interactive single-page application (SPA) dashboard. Consider performance, learning curve, and ecosystem.",
        tags: ["web development", "frontend", "react", "vue", "svelte", "comparison", "spa"],
        difficulty: "intermediate"
      },
      {
        title: "API Design",
        text: "Design a REST API structure for a simple blog application. Define the necessary endpoints (e.g., for posts, comments, users), HTTP methods, and expected request/response formats for creating and retrieving posts.",
        tags: ["web development", "backend", "api", "rest", "design", "blog"],
        difficulty: "intermediate"
      },
      {
        title: "Web Performance Optimization",
        text: "Outline key strategies for optimizing the loading performance of a modern e-commerce website. Include techniques like code splitting, image optimization, caching, and CDN usage.",
        tags: ["web development", "performance", "optimization", "frontend", "caching", "cdn"],
        difficulty: "advanced"
      },
      {
        title: "CSS Layout Challenge",
        text: "Describe how to create a responsive three-column layout using CSS Grid or Flexbox where the columns stack vertically on smaller screens.",
        tags: ["web development", "css", "layout", "responsive", "flexbox", "grid"],
        difficulty: "beginner"
      },
      {
        title: "AI Code Generation Use Case",
        text: "Describe a scenario where using an AI coding assistant like Cursor or GitHub Copilot would significantly speed up the development process for creating a new feature (e.g., implementing a user authentication flow).",
        tags: ["ai", "coding", "development", "cursor", "copilot", "code generation", "productivity"],
        difficulty: "beginner"
      },
      {
        title: "AI Code Refactoring",
        text: "Explain how you would use an AI assistant to refactor a complex, poorly written function in JavaScript to improve its readability, maintainability, and efficiency. Provide example prompts.",
        tags: ["ai", "coding", "refactoring", "javascript", "maintainability", "efficiency", "prompt engineering"],
        difficulty: "intermediate"
      },
      {
        title: "AI for Debugging",
        text: "Outline a process for using an AI coding assistant to help debug a complex runtime error in a web application. What information would you provide to the AI, and what kind of assistance would you expect?",
        tags: ["ai", "coding", "debugging", "web development", "error handling", "troubleshooting"],
        difficulty: "intermediate"
      },
      {
        title: "Limitations of AI Coders",
        text: "Discuss the potential limitations and pitfalls of relying heavily on AI code generation tools. Consider aspects like code correctness, security vulnerabilities, and understanding the generated code.",
        tags: ["ai", "coding", "limitations", "security", "best practices", "critical thinking"],
        difficulty: "advanced"
      },
      {
        title: "State Management Comparison (React)",
        text: "Compare and contrast different state management solutions for React applications (e.g., Redux Toolkit, Zustand, Context API). Discuss use cases, complexity, and performance implications.",
        tags: ["web development", "react", "state management", "redux", "zustand", "context api", "frontend"],
        difficulty: "advanced"
      },
      {
        title: "Comparing AI Coding Assistants",
        text: "Briefly compare two popular AI coding assistants (e.g., GitHub Copilot vs Cursor). Discuss their potential strengths, weaknesses, and ideal use cases based on available features.",
        tags: ["ai", "coding", "development", "cursor", "copilot", "comparison", "tools"],
        difficulty: "beginner"
      }
    ]
  },
  {
    name: "AI & Machine Learning",
    icon: <Brain className="h-5 w-5" />,
    description: "Advanced prompts for AI and machine learning applications",
    prompts: [
      {
        title: "AI Model Training",
        text: "Design a training pipeline for a machine learning model that predicts customer churn. Include data preprocessing, feature engineering, model selection, and evaluation metrics.",
        tags: ["ai", "ml", "training", "pipeline", "churn prediction"],
        difficulty: "advanced"
      },
      {
        title: "Natural Language Processing",
        text: "Create a plan for implementing a sentiment analysis system for customer reviews. Include data collection, model architecture, and deployment strategy.",
        tags: ["ai", "nlp", "sentiment analysis", "text processing"],
        difficulty: "intermediate"
      },
      {
        title: "Computer Vision Project",
        text: "Outline a computer vision project for object detection in retail environments. Include dataset requirements, model architecture, and real-world deployment considerations.",
        tags: ["ai", "computer vision", "object detection", "retail"],
        difficulty: "advanced"
      },
      {
        title: "AI Ethics Framework",
        text: "Develop an ethical framework for deploying AI systems in healthcare. Include considerations for bias, privacy, and patient safety.",
        tags: ["ai", "ethics", "healthcare", "bias", "privacy"],
        difficulty: "advanced"
      },
      {
        title: "ML Model Deployment",
        text: "Create a deployment strategy for a machine learning model in a production environment. Include monitoring, versioning, and rollback procedures.",
        tags: ["ai", "ml", "deployment", "production", "monitoring"],
        difficulty: "intermediate"
      }
    ]
  },
  {
    name: "Data Science & Analytics",
    icon: <BarChart className="h-5 w-5" />,
    description: "Prompts for data analysis and visualization",
    prompts: [
      {
        title: "Data Analysis Pipeline",
        text: "Design a data analysis pipeline for processing and analyzing large-scale customer transaction data. Include data cleaning, transformation, and visualization steps.",
        tags: ["data science", "analysis", "pipeline", "visualization"],
        difficulty: "intermediate"
      },
      {
        title: "Business Intelligence",
        text: "Create a business intelligence dashboard for tracking key performance indicators (KPIs) in an e-commerce business. Include data sources, metrics, and visualization types.",
        tags: ["data", "business intelligence", "dashboard", "kpis"],
        difficulty: "intermediate"
      },
      {
        title: "Data Visualization",
        text: "Design an interactive data visualization for exploring sales trends across different regions and product categories. Include user interaction features and data filtering options.",
        tags: ["data", "visualization", "interactive", "sales"],
        difficulty: "intermediate"
      },
      {
        title: "Predictive Analytics",
        text: "Develop a predictive analytics model for forecasting sales in a retail business. Include feature selection, model training, and validation methods.",
        tags: ["data", "predictive analytics", "forecasting", "sales"],
        difficulty: "advanced"
      },
      {
        title: "Data Storytelling",
        text: "Create a data storytelling framework for presenting insights from a complex dataset. Include narrative structure, visualization choices, and key messages.",
        tags: ["data", "storytelling", "visualization", "insights"],
        difficulty: "intermediate"
      }
    ]
  }
];

export const EMERGING_TECH_CATEGORIES = [
  {
    name: "Blockchain & Web3",
    icon: <Link className="h-5 w-5" />,
    description: "Prompts for blockchain technology and decentralized applications",
    prompts: [
      {
        title: "Smart Contract Design",
        text: "Design a smart contract for a decentralized voting system. Include security considerations, gas optimization, and user interaction patterns.",
        tags: ["blockchain", "smart contract", "voting", "security", "gas optimization"],
        difficulty: "advanced"
      },
      {
        title: "NFT Marketplace",
        text: "Create a technical specification for an NFT marketplace. Include token standards, royalty mechanisms, and marketplace features.",
        tags: ["blockchain", "nft", "marketplace", "token", "royalties"],
        difficulty: "advanced"
      },
      {
        title: "DeFi Protocol",
        text: "Outline the architecture of a decentralized lending protocol. Include interest rate models, liquidation mechanisms, and risk management.",
        tags: ["blockchain", "defi", "lending", "protocol", "risk"],
        difficulty: "advanced"
      },
      {
        title: "Web3 Authentication",
        text: "Design a secure authentication system for a Web3 application. Include wallet integration, session management, and security best practices.",
        tags: ["blockchain", "web3", "authentication", "security", "wallet"],
        difficulty: "intermediate"
      },
      {
        title: "Blockchain Scaling",
        text: "Compare different blockchain scaling solutions (Layer 2, sharding, etc.). Include trade-offs, implementation complexity, and use case suitability.",
        tags: ["blockchain", "scaling", "layer2", "sharding", "performance"],
        difficulty: "advanced"
      }
    ]
  },
  {
    name: "Quantum Computing",
    icon: <Atom className="h-5 w-5" />,
    description: "Prompts for quantum computing concepts and applications",
    prompts: [
      {
        title: "Quantum Algorithm",
        text: "Explain the concept of Grover's algorithm and its potential applications in database search. Include quantum circuit representation and complexity analysis.",
        tags: ["quantum", "algorithm", "search", "complexity", "circuit"],
        difficulty: "advanced"
      },
      {
        title: "Quantum Cryptography",
        text: "Design a quantum key distribution protocol. Include security guarantees, implementation challenges, and practical considerations.",
        tags: ["quantum", "cryptography", "security", "protocol", "key distribution"],
        difficulty: "advanced"
      },
      {
        title: "Quantum Machine Learning",
        text: "Outline a quantum machine learning approach for pattern recognition. Include quantum feature mapping and hybrid classical-quantum architectures.",
        tags: ["quantum", "machine learning", "pattern recognition", "hybrid", "architecture"],
        difficulty: "advanced"
      },
      {
        title: "Quantum Error Correction",
        text: "Explain the principles of quantum error correction codes. Include code construction, error detection, and correction procedures.",
        tags: ["quantum", "error correction", "codes", "detection", "correction"],
        difficulty: "advanced"
      },
      {
        title: "Quantum Simulation",
        text: "Design a quantum simulation for molecular structure analysis. Include Hamiltonian construction and measurement strategies.",
        tags: ["quantum", "simulation", "molecular", "hamiltonian", "measurement"],
        difficulty: "advanced"
      }
    ]
  },
  {
    name: "Edge Computing & IoT",
    icon: <Server className="h-5 w-5" />,
    description: "Prompts for edge computing and Internet of Things applications",
    prompts: [
      {
        title: "Edge AI Deployment",
        text: "Design an edge AI system for real-time object detection. Include model optimization, hardware selection, and deployment considerations.",
        tags: ["edge", "ai", "deployment", "optimization", "hardware"],
        difficulty: "advanced"
      },
      {
        title: "IoT Security",
        text: "Create a security framework for an IoT network. Include device authentication, data encryption, and network segmentation.",
        tags: ["iot", "security", "authentication", "encryption", "network"],
        difficulty: "intermediate"
      },
      {
        title: "Edge Analytics",
        text: "Design a real-time analytics pipeline for edge devices. Include data processing, storage, and communication strategies.",
        tags: ["edge", "analytics", "real-time", "processing", "storage"],
        difficulty: "intermediate"
      },
      {
        title: "IoT Protocol Selection",
        text: "Compare different IoT communication protocols (MQTT, CoAP, etc.). Include use cases, power consumption, and scalability considerations.",
        tags: ["iot", "protocol", "communication", "mqtt", "coap"],
        difficulty: "intermediate"
      },
      {
        title: "Edge Computing Architecture",
        text: "Design a distributed edge computing architecture. Include resource allocation, task scheduling, and fault tolerance mechanisms.",
        tags: ["edge", "architecture", "distributed", "scheduling", "fault tolerance"],
        difficulty: "advanced"
      }
    ]
  },
  {
    name: "Cybersecurity & Privacy",
    icon: <Shield className="h-5 w-5" />,
    description: "Prompts for cybersecurity and privacy protection",
    prompts: [
      {
        title: "Zero Trust Architecture",
        text: "Design a zero trust security model for a cloud-native application. Include identity verification, access control, and continuous monitoring.",
        tags: ["security", "zero trust", "cloud", "identity", "monitoring"],
        difficulty: "advanced"
      },
      {
        title: "Threat Modeling",
        text: "Create a threat model for a web application. Include attack vectors, risk assessment, and mitigation strategies.",
        tags: ["security", "threat modeling", "risk", "mitigation", "web"],
        difficulty: "intermediate"
      },
      {
        title: "Privacy by Design",
        text: "Implement privacy by design principles in a data processing system. Include data minimization, purpose limitation, and user consent.",
        tags: ["privacy", "design", "data", "consent", "compliance"],
        difficulty: "intermediate"
      },
      {
        title: "Security Incident Response",
        text: "Develop an incident response plan for a data breach. Include detection, containment, eradication, and recovery procedures.",
        tags: ["security", "incident", "response", "breach", "recovery"],
        difficulty: "intermediate"
      },
      {
        title: "Secure Development Lifecycle",
        text: "Create a secure development lifecycle framework. Include security requirements, code review, testing, and deployment practices.",
        tags: ["security", "development", "lifecycle", "testing", "deployment"],
        difficulty: "advanced"
      }
    ]
  }
];

export const TECHNICAL_CATEGORIES = [
  {
    name: "System Design & Architecture",
    icon: <Cpu className="h-5 w-5" />,
    description: "Prompts for system design and software architecture",
    prompts: [
      {
        title: "Microservices Architecture",
        text: "Design a microservices architecture for an e-commerce platform. Include service boundaries, communication patterns, and data consistency strategies.",
        tags: ["architecture", "microservices", "e-commerce", "scalability", "design"],
        difficulty: "advanced"
      },
      {
        title: "Distributed Systems",
        text: "Outline a distributed system design for a real-time collaboration tool. Include consensus mechanisms, fault tolerance, and data synchronization.",
        tags: ["distributed", "systems", "real-time", "collaboration", "consensus"],
        difficulty: "advanced"
      },
      {
        title: "Cloud Architecture",
        text: "Design a multi-cloud architecture for a global application. Include deployment strategies, data replication, and disaster recovery.",
        tags: ["cloud", "architecture", "multi-cloud", "deployment", "recovery"],
        difficulty: "advanced"
      },
      {
        title: "Event-Driven Architecture",
        text: "Create an event-driven architecture for a financial trading platform. Include event sourcing, CQRS, and message broker selection.",
        tags: ["event-driven", "architecture", "trading", "CQRS", "eventsourcing"],
        difficulty: "advanced"
      },
      {
        title: "API Gateway Design",
        text: "Design an API gateway for a service-oriented architecture. Include routing, rate limiting, authentication, and monitoring.",
        tags: ["api", "gateway", "architecture", "security", "monitoring"],
        difficulty: "intermediate"
      }
    ]
  },
  {
    name: "DevOps & Infrastructure",
    icon: <Server className="h-5 w-5" />,
    description: "Prompts for DevOps practices and infrastructure management",
    prompts: [
      {
        title: "CI/CD Pipeline",
        text: "Design a comprehensive CI/CD pipeline for a microservices application. Include testing strategies, deployment stages, and rollback procedures.",
        tags: ["devops", "ci/cd", "pipeline", "deployment", "testing"],
        difficulty: "intermediate"
      },
      {
        title: "Infrastructure as Code",
        text: "Create an infrastructure as code solution for a cloud-native application. Include provisioning, configuration management, and security best practices.",
        tags: ["devops", "iac", "cloud", "provisioning", "security"],
        difficulty: "intermediate"
      },
      {
        title: "Container Orchestration",
        text: "Design a container orchestration strategy for a high-availability application. Include scaling, service discovery, and health monitoring.",
        tags: ["devops", "containers", "orchestration", "scaling", "monitoring"],
        difficulty: "advanced"
      },
      {
        title: "Monitoring & Observability",
        text: "Create a comprehensive monitoring and observability strategy. Include metrics, logging, tracing, and alerting mechanisms.",
        tags: ["devops", "monitoring", "observability", "metrics", "logging"],
        difficulty: "intermediate"
      },
      {
        title: "Disaster Recovery",
        text: "Design a disaster recovery plan for a critical business application. Include backup strategies, recovery procedures, and testing methodologies.",
        tags: ["devops", "disaster recovery", "backup", "recovery", "testing"],
        difficulty: "advanced"
      }
    ]
  }
];

export const BUSINESS_STRATEGY_CATEGORIES = [
  {
    name: "Business Strategy",
    icon: <Building2 className="h-5 w-5" />,
    description: "Prompts for business strategy and planning",
    prompts: [
      {
        title: "Market Entry Strategy",
        text: "Develop a market entry strategy for a new technology product. Include market analysis, competitive positioning, and go-to-market plan.",
        tags: ["business", "strategy", "market entry", "positioning", "planning"],
        difficulty: "advanced"
      },
      {
        title: "Business Model Innovation",
        text: "Create an innovative business model for a digital platform. Include revenue streams, value proposition, and customer segments.",
        tags: ["business", "innovation", "model", "revenue", "value"],
        difficulty: "intermediate"
      },
      {
        title: "Growth Strategy",
        text: "Design a growth strategy for a SaaS company. Include customer acquisition, retention, and expansion tactics.",
        tags: ["business", "growth", "strategy", "saas", "acquisition"],
        difficulty: "intermediate"
      },
      {
        title: "Competitive Analysis",
        text: "Conduct a comprehensive competitive analysis for a tech startup. Include market positioning, strengths, weaknesses, and opportunities.",
        tags: ["business", "analysis", "competition", "strategy", "positioning"],
        difficulty: "intermediate"
      },
      {
        title: "Strategic Planning",
        text: "Create a strategic plan for a digital transformation initiative. Include objectives, key results, and implementation roadmap.",
        tags: ["business", "strategy", "planning", "transformation", "roadmap"],
        difficulty: "advanced"
      }
    ]
  },
  {
    name: "Product Management",
    icon: <Target className="h-5 w-5" />,
    description: "Prompts for product management and development",
    prompts: [
      {
        title: "Product Roadmap",
        text: "Develop a product roadmap for a new software product. Include feature prioritization, timeline, and resource allocation.",
        tags: ["product", "roadmap", "planning", "features", "timeline"],
        difficulty: "intermediate"
      },
      {
        title: "User Research",
        text: "Design a user research plan for a mobile application. Include research methods, participant selection, and analysis framework.",
        tags: ["product", "research", "user", "analysis", "methods"],
        difficulty: "intermediate"
      },
      {
        title: "Product Metrics",
        text: "Define key product metrics for a subscription-based service. Include acquisition, engagement, and retention metrics.",
        tags: ["product", "metrics", "analytics", "subscription", "engagement"],
        difficulty: "intermediate"
      },
      {
        title: "Feature Prioritization",
        text: "Create a framework for prioritizing product features. Include scoring criteria, stakeholder input, and resource constraints.",
        tags: ["product", "prioritization", "features", "framework", "planning"],
        difficulty: "intermediate"
      },
      {
        title: "Product Launch",
        text: "Develop a product launch strategy for a new feature. Include marketing, communication, and adoption tactics.",
        tags: ["product", "launch", "strategy", "marketing", "adoption"],
        difficulty: "intermediate"
      }
    ]
  }
];

export const CREATIVE_WRITING_CATEGORIES = [
  {
    name: "Fiction Writing",
    icon: <PenSquare className="h-5 w-5" />,
    description: "Prompts for fiction writing and storytelling",
    prompts: [
      {
        title: "Character Development",
        text: "Create a detailed character profile for a protagonist in a science fiction story. Include background, motivations, and character arc.",
        tags: ["writing", "fiction", "character", "development", "storytelling"],
        difficulty: "intermediate"
      },
      {
        title: "World Building",
        text: "Design a unique fantasy world with its own magic system, culture, and history. Include geography, society, and conflicts.",
        tags: ["writing", "fiction", "worldbuilding", "fantasy", "setting"],
        difficulty: "advanced"
      },
      {
        title: "Plot Structure",
        text: "Outline a three-act structure for a mystery novel. Include key plot points, character arcs, and resolution.",
        tags: ["writing", "fiction", "plot", "structure", "mystery"],
        difficulty: "intermediate"
      },
      {
        title: "Dialogue Writing",
        text: "Create a dialogue scene between two characters with opposing goals. Include subtext, conflict, and character voice.",
        tags: ["writing", "fiction", "dialogue", "character", "conflict"],
        difficulty: "intermediate"
      },
      {
        title: "Genre Blending",
        text: "Develop a story concept that blends two different genres. Include world elements, character types, and plot structure.",
        tags: ["writing", "fiction", "genre", "blending", "concept"],
        difficulty: "advanced"
      }
    ]
  },
  {
    name: "Creative Nonfiction",
    icon: <Book className="h-5 w-5" />,
    description: "Prompts for creative nonfiction and personal writing",
    prompts: [
      {
        title: "Memoir Writing",
        text: "Outline a memoir chapter about a significant life event. Include sensory details, emotional truth, and personal reflection.",
        tags: ["writing", "nonfiction", "memoir", "personal", "reflection"],
        difficulty: "intermediate"
      },
      {
        title: "Travel Writing",
        text: "Create a travel narrative about a transformative journey. Include setting, cultural insights, and personal growth.",
        tags: ["writing", "nonfiction", "travel", "narrative", "culture"],
        difficulty: "intermediate"
      },
      {
        title: "Personal Essay",
        text: "Develop a personal essay about a meaningful experience. Include theme, structure, and universal resonance.",
        tags: ["writing", "nonfiction", "essay", "personal", "theme"],
        difficulty: "intermediate"
      },
      {
        title: "Literary Journalism",
        text: "Write a piece of literary journalism about a current event. Include research, narrative elements, and analysis.",
        tags: ["writing", "nonfiction", "journalism", "research", "narrative"],
        difficulty: "advanced"
      },
      {
        title: "Profile Writing",
        text: "Create a character profile of an interesting person. Include background, personality traits, and significant moments.",
        tags: ["writing", "nonfiction", "profile", "character", "biography"],
        difficulty: "intermediate"
      }
    ]
  }
]; 