"use client"

import { Section } from "./section"
import { 
  FileText, 
  Sparkles, 
  Compass, 
  Mail
} from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    title: "SEO Articles & Blog Posts",
    description: "Engaging, long-form content optimized for search engines to drive organic traffic, rank for high-value keywords, and establish authority.",
    icon: FileText,
  },
  {
    title: "Website Copywriting",
    description: "High-converting copy for landing pages, about pages, and product descriptions designed to turn visitors into loyal customers.",
    icon: Sparkles,
  },
  {
    title: "Content Strategy & Planning",
    description: "Data-driven content calendars, comprehensive keyword mapping, and topic clusters designed to scale your brand's footprint.",
    icon: Compass,
  },
  {
    title: "Email Newsletters & Copy",
    description: "Compelling email campaigns and newsletters that nurture relationships, build community, and drive repeat engagement.",
    icon: Mail,
  }
]

export function Services() {
  return (
    <Section id="services" className="bg-secondary/30">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">My Expertise</h2>
        <h3 className="text-4xl md:text-5xl font-bold mb-6">Strategic Content Writing Services</h3>
        <p className="text-lg text-muted-foreground">
          I offer services tailored to meet your brand&apos;s unique needs and help you connect with your audience while ranking on search engines.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group p-8 rounded-3xl bg-background border border-border hover:border-primary/50 hover:shadow-[0_0_30px_rgba(99,103,255,0.1)] transition-all relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full translate-x-12 -translate-y-12 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform" />
            
            <div className="p-3 bg-secondary rounded-2xl w-fit mb-6 text-primary group-hover:scale-110 transition-transform">
              <service.icon size={28} />
            </div>
            
            <h4 className="text-xl font-bold mb-4">{service.title}</h4>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {service.description}
            </p>
            
            <button className="text-sm font-bold flex items-center gap-2 text-primary group/btn">
              Learn More <div className="w-0 group-hover/btn:w-4 overflow-hidden transition-all duration-300">→</div>
            </button>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

