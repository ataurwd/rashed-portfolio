"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[40rem] h-[40rem] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[30rem] h-[30rem] bg-highlight/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1000px] mx-auto px-6 flex flex-col items-center justify-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-xs font-bold text-primary mb-6 border border-primary/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            QUALITY CONTENT
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.2] max-w-4xl">
            High-Quality Content Writing That <span className="gradient-text">Builds Trust</span> and Drives Results
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl leading-relaxed">
            Deliver compelling, informative, and professionally written content that strengthens your brand, improves audience engagement, and supports your marketing objectives with clear, impactful messaging.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(99,103,255,0.4)] transition-all w-full sm:w-auto">
              Book a Free Call <ArrowRight size={18} />
            </button>
            <button className="px-8 py-4 bg-secondary text-foreground rounded-xl font-bold border border-border hover:bg-secondary/80 transition-all text-center w-full sm:w-auto">
              View My Work
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


