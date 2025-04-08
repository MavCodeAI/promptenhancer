import { HelpCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is AI Prompt Enhancer?",
    answer: "AI Prompt Enhancer is a tool that helps you improve your prompts for AI models. It analyzes your input and suggests enhancements to make your prompts more effective and detailed."
  },
  {
    question: "How do I use the app?",
    answer: "Simply enter your prompt in the text area, click 'Enhance', and the app will generate an improved version of your prompt. You can then copy the enhanced prompt to use with your AI model."
  },
  {
    question: "What makes a good prompt?",
    answer: "A good prompt is clear, specific, and provides enough context. Include details about the desired output format, tone, and any specific requirements. The more specific you are, the better the results."
  },
  {
    question: "Can I save my enhanced prompts?",
    answer: "Yes! Your enhanced prompts are automatically saved in the History section. You can access them anytime and copy them again if needed."
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we take your privacy seriously. Your prompts are processed locally and are not stored on our servers. You can clear your history at any time."
  }
];

const Help = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <Link to="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div className="flex items-center space-x-2">
            <HelpCircle className="h-5 w-5 text-primary" />
            <h1 className="text-2xl font-bold">Help & FAQ</h1>
          </div>
        </div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-muted/50 p-4 sm:p-6 rounded-lg"
          >
            <h2 className="text-xl font-semibold mb-4">Getting Started</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Enter your prompt in the text area</li>
              <li>Click the 'Enhance' button</li>
              <li>Review the enhanced prompt</li>
              <li>Copy the enhanced prompt to use with your AI model</li>
              <li>Access your history anytime to review past prompts</li>
            </ol>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h2 className="text-xl font-semibold">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  className="border rounded-lg p-4"
                >
                  <h3 className="font-medium mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-muted/50 p-4 sm:p-6 rounded-lg"
          >
            <h2 className="text-xl font-semibold mb-4">Need More Help?</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions or need assistance, please don't hesitate to contact us.
            </p>
            <Button asChild className="w-full sm:w-auto">
              <Link to="/contact">Contact Support</Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Help; 