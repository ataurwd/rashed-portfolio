"use client"

import { Section } from "./section"
import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Head of Marketing at TechFlow SaaS",
    text: "Rashadul's articles completely changed our blog's performance. Our organic traffic doubled, and readers are staying on the page much longer. Her content strategy is top-notch.",
    stars: 5,
  },
  {
    name: "David Miller",
    role: "Founder of EcoStyle E-commerce",
    text: "The website copy Rashadul wrote for our landing page improved our conversion rate by 35% in the first month alone. She is exceptionally talented and easy to work with.",
    stars: 5,
  },
  {
    name: "Elena Rostova",
    role: "Content Director at GrowthLabs",
    text: "She has an incredible ability to take complex technical topics and make them easy and engaging for our audience to read. Highly recommend her for any serious SaaS brand.",
    stars: 5,
  },
]

export function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Testimonials</h2>
        <h3 className="text-4xl md:text-5xl font-bold mb-6">What My Clients Say</h3>
        <p className="text-lg text-muted-foreground">
          Don&apos;t just take my word for it. Hear from the brands I&apos;ve helped scale.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <motion.div
            key={t.name + index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass p-8 rounded-3xl border border-border flex flex-col relative"
          >
            <Quote className="absolute top-6 right-8 text-primary/10" size={48} />
            <div className="flex gap-1 mb-6">
              {Array.from({ length: t.stars }).map((_, i) => (
                <Star key={i} size={16} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-lg mb-8 flex-1 leading-relaxed italic text-foreground/90 font-medium">
              &quot;{t.text}&quot;
            </p>
            <div>
              <p className="font-bold">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
          Delivering long-term results through expert content strategy.
        </p>
      </div>
    </Section>
  )
}

