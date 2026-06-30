"use client"

import { Section } from "./section"
import { motion } from "framer-motion"
import { Award, CheckCircle2 } from "lucide-react"
import Image from "next/image"

const skills = [
  { name: "Content Strategy", level: 95 },
  { name: "SEO Copywriting", level: 98 },
  { name: "Brand Storytelling", level: 92 },
  { name: "Editing & Proofreading", level: 90 },
]

export function About() {
  return (
    <Section id="about" className="bg-secondary/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-square rounded-[3rem] overflow-hidden bg-primary/10 border border-primary/20 relative group">
            <Image 
              src="https://i.ibb.co.com/8LDVvkyC/1769341871325.png"
              alt="Rashadul Islam - Content Writer"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Overlay for premium feel */}
            <div className="absolute inset-0 bg-linear-to-t from-background/40 to-transparent pointer-events-none" />
          </div>
          
          <div className="absolute -bottom-10 -right-10 glass p-6 rounded-3xl border border-white/10 shadow-2xl hidden md:block max-w-[200px] z-20">
            <Award className="text-primary mb-3" size={32} />
            <p className="font-bold text-sm">Top Rated Content Writer</p>
            <p className="text-[10px] text-muted-foreground uppercase font-bold mt-1">4+ Years of Industry Experience</p>
          </div>
        </motion.div>

        <div>
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">About Me</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-8">Weaving Words into Powerful Brand Experiences</h3>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            I am Rashadul Islam, a passionate content writer and strategist with over 4 years of experience crafting compelling copy that resonates. From blog posts and articles to copy for SaaS and e-commerce, I bridge the gap between human interest and search engine algorithms.
          </p>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            My focus is always on delivering engaging, high-performing content that drives organic traffic and builds long-term brand authority.
          </p>
          
          <div className="space-y-6 mb-12">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-bold text-sm uppercase tracking-wider">{skill.name}</span>
                  <span className="text-primary font-bold text-sm">{skill.level}%</span>
                </div>
                <div className="h-1.5 w-full bg-background rounded-full overflow-hidden border border-white/5">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-primary"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-sm font-bold">
              <CheckCircle2 className="text-primary" size={18} /> SurferSEO / Clearscope
            </div>
            <div className="flex items-center gap-2 text-sm font-bold">
              <CheckCircle2 className="text-primary" size={18} /> WordPress / Webflow
            </div>
            <div className="flex items-center gap-2 text-sm font-bold">
              <CheckCircle2 className="text-primary" size={18} /> Ahrefs / Google Trends
            </div>
            <div className="flex items-center gap-2 text-sm font-bold">
              <CheckCircle2 className="text-primary" size={18} /> Copywriting Frameworks
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

