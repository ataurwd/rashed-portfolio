"use client"

import { Section } from "./section"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import * as React from "react"

const faqs = [
  {
    question: "What is your content writing process?",
    answer: "Every project starts with thorough research into your niche, target audience, and key competitors. I then create a detailed outline, draft the piece, optimize it for SEO using modern tools, and refine it based on your feedback.",
  },
  {
    question: "Can you match our brand's tone of voice?",
    answer: "Yes, absolutely! Whether your brand voice is professional and authoritative, casual and conversational, or bold and witty, I adapt my writing style to match your established guidelines and audience expectations.",
  },
  {
    question: "Do you offer revisions?",
    answer: "Yes, I offer up to two rounds of revisions for every piece of content to ensure it perfectly aligns with your expectations, brand guidelines, and goals.",
  },
  {
    question: "Are your articles optimized for search engines?",
    answer: "Yes. All articles are written with search intent in mind, incorporating target keywords naturally, structuring headings properly, and optimizing for readability using tools like SurferSEO or Clearscope.",
  },
  {
    question: "What industries do you write for?",
    answer: "I specialize in SaaS, Tech, E-commerce, Marketing, and Digital Health. However, my research-driven approach allows me to write authoritative content for almost any competitive industry.",
  },
]

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="border-b border-border py-6">
      <button 
        className="w-full flex items-center justify-between text-left group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-bold group-hover:text-primary transition-colors">{question}</span>
        <div className={`p-2 rounded-full ${isOpen ? 'bg-primary text-primary-foreground' : 'bg-secondary'} transition-colors`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pt-6 text-muted-foreground leading-relaxed text-lg">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  return (
    <Section id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">FAQ</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Common Questions</h3>
        </div>
        
        <div className="space-y-2">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </Section>
  )
}

