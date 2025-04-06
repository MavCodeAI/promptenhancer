import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Shield, Clock, Copy, Wand2, Star, Check, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const features = [
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "30+ Pre-made Prompts",
    description: "Get started instantly with our collection of expertly crafted prompts for various use cases."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Instant Enhancement",
    description: "Transform your prompts into powerful AI commands with a single click."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Best Practices",
    description: "Built-in prompt engineering best practices to get the best results from AI models."
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Save Time",
    description: "Generate high-quality prompts in seconds instead of hours of trial and error."
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

const LandingPage = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Transform Your Prompts into Powerful AI Commands
          </h1>
          <p className="text-xl text-gray-600">
            Enhance your AI interactions with our powerful prompt engineering tool. Get better results from AI models by improving your prompts with expert techniques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/app">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                Try Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-orange-200 hover:bg-orange-50">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-orange-100">
              <div className="text-orange-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied users who have transformed their AI interactions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-orange-100">
              <div className="flex flex-col mb-4">
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
              <p className="text-gray-600">{testimonial.text}</p>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our service
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-orange-100">
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
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Enhance Your Prompts?</h2>
          <p className="text-xl mb-8 opacity-90">
            Start getting better results from AI models today
          </p>
          <Link to="/app">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
              Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage; 