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
  }
]; 