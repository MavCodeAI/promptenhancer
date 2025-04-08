import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Shield, Clock, Copy, Wand2, Star, Check, ChevronDown, ArrowUpRight, Users, BarChart, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "999+ Pre-made Prompts",
    description: "Get started instantly with our extensive collection of expertly crafted prompts for various use cases.",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    iconBg: "bg-orange-100"
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Instant Enhancement",
    description: "Transform your prompts into powerful AI commands with a single click.",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    iconBg: "bg-blue-100"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Best Practices",
    description: "Built-in prompt engineering best practices to get the best results from AI models.",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    iconBg: "bg-green-100"
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Save Time",
    description: "Generate high-quality prompts in seconds instead of hours of trial and error.",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    iconBg: "bg-purple-100"
  }
];

const testimonials = [
  {
    name: "Ahmed Khan",
    role: "Content Creator",
    text: "This tool has revolutionized how I interact with AI. My content creation process is now 3x faster!"
  },
  {
    name: "Zainab Malik",
    role: "AI Researcher",
    text: "The prompt enhancement quality is exceptional. It's become an essential part of my research workflow."
  },
  {
    name: "Hassan Ali",
    role: "Digital Marketer",
    text: "I've seen a significant improvement in my AI-generated content quality since using this tool."
  }
];

const faqs = [
  {
    question: "How does the prompt enhancement work?",
    answer: "Our AI analyzes your prompt and enhances it using advanced prompt engineering techniques, making it more effective for AI models."
  },
  {
    question: "Which AI models are supported?",
    answer: "Our enhanced prompts work with all major AI models including GPT-4, Claude, and others."
  },
  {
    question: "Can I use this for commercial purposes?",
    answer: "Yes, all enhanced prompts can be used for both personal and commercial projects."
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we take data security seriously. Your prompts are processed securely and never stored permanently."
  }
];

const stats = [
  { value: "10K+", label: "Active Users", icon: <Users className="h-5 w-5" /> },
  { value: "50K+", label: "Prompts Enhanced", icon: <Wand2 className="h-5 w-5" /> },
  { value: "98%", label: "Satisfaction Rate", icon: <Star className="h-5 w-5" /> },
  { value: "24/7", label: "Support", icon: <MessageSquare className="h-5 w-5" /> }
];

const LandingPage = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 sm:py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
              <Sparkles className="h-4 w-4 mr-1" /> AI-Powered Prompt Engineering
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
          >
            Transform Your AI Prompts into{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Powerful Commands
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-xl text-muted-foreground"
          >
            Enhance your prompts with AI-powered engineering to get better results from any AI model.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="gap-2">
              <Link to="/app">
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              Learn More <ChevronDown className="h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "p-6 rounded-xl border bg-card",
                "hover:shadow-lg transition-all duration-300",
                "group"
              )}
            >
              <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4", feature.iconBg)}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16 bg-muted/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                {stat.icon}
                <span>{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border bg-card"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground">{testimonial.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-4"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border rounded-lg overflow-hidden"
            >
              <button
                className="w-full p-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 transition-transform",
                    activeFaq === index && "rotate-180"
                  )}
                />
              </button>
              {activeFaq === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="p-4 bg-muted/30"
                >
                  <p className="text-muted-foreground">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-6 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold">Ready to Enhance Your Prompts?</h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of users who are getting better results from AI models.
          </p>
          <Button asChild size="lg" className="gap-2">
            <Link to="/app">
              Get Started Now <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage; 