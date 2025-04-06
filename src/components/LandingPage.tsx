import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Shield, Clock, Copy, Wand2, Star, Check, ChevronDown, ArrowUpRight, Users, BarChart, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

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
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 sm:py-20 md:py-24">
        <div className={`text-center space-y-6 max-w-3xl mx-auto transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="inline-block">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800 mb-4">
              <Sparkles className="h-4 w-4 mr-1" /> AI-Powered Prompt Engineering
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent leading-tight">
            Transform Your Prompts into Powerful AI Commands
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Enhance your AI interactions with our powerful prompt engineering tool. Get better results from AI models by improving your prompts with expert techniques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/app">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all">
                Try Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-orange-200 hover:bg-orange-50 px-8 py-6 text-lg">
              Learn More
            </Button>
          </div>
          <div className="pt-8 flex justify-center">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Check className="h-4 w-4 text-green-500" />
              <span>No credit card required</span>
              <span className="mx-2">•</span>
              <Check className="h-4 w-4 text-green-500" />
              <span>Free to get started</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-orange-100 text-center">
              <div className="text-orange-600 mb-2 flex justify-center">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16 sm:py-20">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800 mb-4">
            <Sparkles className="h-4 w-4 mr-1" /> Features
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Everything you need to create effective prompts for AI models
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`${feature.bgColor} p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-gray-200 hover:-translate-y-1 group`}
            >
              <div className={`${feature.iconBg} w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="flex items-center text-sm font-medium text-gray-700">
                <span>Learn more</span>
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center space-x-2 text-sm text-gray-500 bg-gray-50 px-4 py-2 rounded-full">
            <Check className="h-4 w-4 text-green-500" />
            <span>All features included in the free plan</span>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="container mx-auto px-4 py-16 sm:py-20 bg-white rounded-2xl shadow-sm my-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get better AI results in three simple steps
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-orange-600">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Enter Your Prompt</h3>
            <p className="text-gray-600">Type or paste your basic prompt into our tool</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-orange-600">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Enhance</h3>
            <p className="text-gray-600">Our AI improves your prompt with expert techniques</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-orange-600">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Use & Share</h3>
            <p className="text-gray-600">Copy your enhanced prompt and get better AI results</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto px-4 py-16 sm:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied users who have transformed their AI interactions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-orange-100 hover:shadow-md transition-all duration-300">
              <div className="mb-4">
                <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16 sm:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our service
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm border border-orange-100 hover:border-orange-200 transition-all duration-300"
            >
              <button
                className="w-full flex justify-between items-center"
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-left">{faq.question}</h3>
                <ChevronDown className={`h-5 w-5 transform transition-transform ${activeFaq === index ? 'rotate-180' : ''}`} />
              </button>
              {activeFaq === index && (
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16 sm:py-20">
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 sm:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Ready to Enhance Your Prompts?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Start getting better results from AI models today
            </p>
            <Link to="/app">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all">
                Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <p className="mt-4 text-sm opacity-80">No credit card required • Free to get started</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-4 py-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Sparkles className="h-5 w-5 text-orange-600" />
            <span className="font-bold text-gray-900">AI Prompt Enhancer</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Terms</a>
            <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Privacy</a>
            <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage; 