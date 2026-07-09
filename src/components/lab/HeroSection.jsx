import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" style={{ backgroundColor: '#111009' }}>
      {/* Background glow */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 60% 40%, rgba(0,105,62,0.09) 0%, transparent 60%), radial-gradient(ellipse at 30% 70%, rgba(196,131,74,0.06) 0%, transparent 50%)' }} />

      {/* Top accent line */}
      <div className="absolute left-0 top-0 w-full h-[1px]" style={{ background: 'linear-gradient(90deg, transparent 0%, #00693E 30%, #C4834A 70%, transparent 100%)' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6">
            <a href="https://engineering.dartmouth.edu/" target="_blank" rel="noopener noreferrer">
              {/* Horizontal logo for mobile */}
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a06131335d4d0b4fc95ea9/af0ab6f89_white-dartmouth-engineering-horizontal-logo.png"
                alt="Dartmouth Engineering"
                className="h-10 w-auto mx-auto opacity-70 hover:opacity-90 transition-opacity sm:hidden"
              />
              {/* Wide brandmark for desktop */}
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a06131335d4d0b4fc95ea9/68bcdb091_white-dartmouth-engineering-brandmark.png"
                alt="Dartmouth Engineering"
                className="h-10 w-auto mx-auto opacity-70 hover:opacity-90 transition-opacity hidden sm:block"
              />
            </a>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mb-2" style={{ color: '#E8DFD0' }}>
            The{" "}
            <span className="font-semibold" style={{ color: '#3D9E6B' }}>CEDAR</span>
            {" "}Lab
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-base sm:text-lg md:text-xl font-light tracking-wide mt-4 mb-10" style={{ color: '#D9A578' }}>
            Causality for Experimental Design, Abduction, and Recourse
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-12 h-[1px] mx-auto mb-10" style={{ background: '#3A3228' }} />
          <p className="text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-light" style={{ color: '#C8BAA8' }}>
            Averages are for prediction; the tails are for understanding. The information that lets us tell cause from effect, form a genuinely new hypothesis, or expose hidden unfairness does not live in a distribution's mean. It lives in the higher-order, non-Gaussian structure that both classical statistics and modern AI are built to average away. The CEDAR Lab works at the interface of theoretical computer science and causal inference to study the lifecycle of that information: we design the fewest, most informative experiments and coarsest faithful simulations that pin a system down; we read the anomalies they surface for the hypotheses behind them; and we regulate the resulting knowledge so that fairness and privacy hold as guarantees rather than hopes. Throughout, we ask what the fundamental limits of causal information recovery tell us about science, AI, and society.
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
            <span className="text-xs tracking-[0.2em] uppercase" style={{ color: '#8B7D6F' }}>
              Explore Our Research
            </span>
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="opacity-50">
                <path d="M10 4V16M10 16L4 10M10 16L16 10" stroke="#D9A578" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}