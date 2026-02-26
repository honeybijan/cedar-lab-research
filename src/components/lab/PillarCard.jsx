import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function PillarCard({ pillar, index }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const letterColors = [
    'var(--dartmouth)',
    'var(--dartmouth-light)',
    'var(--cider)',
    'var(--cider-dark)',
    'var(--dartmouth-dark)',
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="group relative rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden"
        style={{
          borderColor: isExpanded ? 'var(--dartmouth)' : 'var(--border)',
          backgroundColor: isExpanded ? 'var(--bg-card-hover)' : 'var(--bg-card)',
        }}
        onClick={() => setIsExpanded(!isExpanded)}
        onMouseEnter={() => !isExpanded && setIsExpanded(true)}
      >
        {/* Top accent line */}
        <div 
          className="absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-500"
          style={{ 
            background: `linear-gradient(90deg, ${letterColors[index]}, transparent)`,
            opacity: isExpanded ? 1 : 0 
          }}
        />

        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4 sm:gap-5">
              {/* Letter icon */}
              <div 
                className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-xl sm:text-2xl font-semibold transition-all duration-500"
                style={{ 
                  backgroundColor: `${letterColors[index]}11`,
                  color: letterColors[index],
                  transform: isExpanded ? 'scale(1.05)' : 'scale(1)'
                }}
              >
                {pillar.letter}
              </div>

              <div className="flex-1 min-w-0">
                <h3 
                  className="text-lg sm:text-xl font-medium tracking-tight transition-colors duration-300"
                  style={{ color: isExpanded ? 'var(--dartmouth)' : 'var(--text-primary)' }}
                >
                  {pillar.title}
                </h3>
                <p 
                  className="text-sm mt-1 leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {pillar.subtitle}
                </p>
              </div>
            </div>

            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0 mt-1"
            >
              <ChevronDown className="w-5 h-5" style={{ color: 'var(--cider-light)' }} />
            </motion.div>
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="pt-6 mt-6" style={{ borderTop: '1px solid var(--warm-gray)' }}>
                  <p 
                    className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
                    style={{ color: 'var(--cider)' }}
                  >
                    Key Questions
                  </p>
                  <ul className="space-y-3">
                    {pillar.questions.map((q, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-3 text-sm leading-relaxed"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        <span 
                          className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: letterColors[index] }}
                        />
                        {q}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}