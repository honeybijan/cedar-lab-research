import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, var(--warm-white) 0%, var(--cream) 40%, #E8F0E8 100%)' }} />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-[15%] w-64 h-64 rounded-full opacity-[0.04]" style={{ background: 'var(--dartmouth)' }} />
      <div className="absolute bottom-32 left-[10%] w-48 h-48 rounded-full opacity-[0.04]" style={{ background: 'var(--cider)' }} />
      <div className="absolute top-1/3 left-[20%] w-32 h-32 rounded-full opacity-[0.03]" style={{ background: 'var(--dartmouth)' }} />
      
      {/* Thin decorative line */}
      <div className="absolute left-0 top-0 w-full h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, var(--dartmouth), var(--cider), transparent)' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6">
            <span 
              className="inline-block text-xs font-semibold tracking-[0.3em] uppercase px-4 py-2 rounded-full border"
              style={{ 
                color: 'var(--dartmouth)', 
                borderColor: 'var(--dartmouth)',
                backgroundColor: 'rgba(0, 105, 62, 0.05)'
              }}
            >
              Dartmouth College
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mb-2" style={{ color: 'var(--text-primary)' }}>
            The{" "}
            <span className="font-semibold" style={{ color: 'var(--dartmouth)' }}>
              CIDER
            </span>
            {" "}Lab
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <p 
            className="text-base sm:text-lg md:text-xl font-light tracking-wide mt-4 mb-10"
            style={{ color: 'var(--cider)' }}
          >
            Causal Information for Detection, Experimentation, and Recourse
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-12 h-[1px] mx-auto mb-10" style={{ background: 'var(--cider-light)' }} />
          <p 
            className="text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-light"
            style={{ color: 'var(--text-secondary)' }}
          >
            Our lab investigates the fundamental information-theoretic limits of causal relationships 
            and how they are stored within modern AI architectures. We develop mathematical tools to detect 
            hidden stories in heterogeneous data, design optimal experiments to map system dependencies, 
            and provide algorithmic recourse to unmask the decision-making logic of "black-box" models.
          </p>
          <p 
            className="text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-light mt-4"
            style={{ color: 'var(--text-secondary)' }}
          >
            By bridging theoretical computer science and causal inference, we aim to prove the strength 
            and fairness of AI systems while preserving the boundaries of proprietary and confidential information.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16"
        >
          <button 
            onClick={() => document.getElementById('pillars')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex flex-col items-center gap-2 mx-auto cursor-pointer"
          >
            <span className="text-xs tracking-[0.2em] uppercase" style={{ color: 'var(--cider-light)' }}>
              Explore Our Research
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="opacity-40">
                <path d="M10 4V16M10 16L4 10M10 16L16 10" stroke="var(--cider)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}