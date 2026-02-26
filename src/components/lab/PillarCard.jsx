import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const ACCENT_COLORS = ['#3D9E6B', '#00693E', '#C4834A', '#A66330', '#3D9E6B'];

export default function PillarCard({ pillar, index }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const accent = ACCENT_COLORS[index];

  const handleClick = () => {
    setIsLocked(!isLocked);
  };

  const handleMouseEnter = () => {
    if (!isLocked) setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    if (!isLocked) setIsExpanded(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="group relative rounded-2xl border cursor-pointer overflow-hidden transition-colors duration-300"
        style={{
          borderColor: isExpanded || isLocked ? accent : '#2E2820',
          backgroundColor: isExpanded || isLocked ? '#1F1B13' : '#181510',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <div className="absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-500"
          style={{ background: `linear-gradient(90deg, ${accent}, transparent)`, opacity: isExpanded ? 1 : 0 }} />

        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="flex-shrink-0 w-3 h-3 rounded-full mt-2"
                style={{ backgroundColor: accent }} />
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-medium tracking-tight" style={{ color: '#F0EAE0' }}>
                  {pillar.title}
                </h3>
                <p className="text-sm mt-1 leading-relaxed" style={{ color: '#A09080' }}>
                  {pillar.subtitle}
                </p>
              </div>
            </div>
            <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }} className="flex-shrink-0 mt-1">
              <ChevronDown className="w-5 h-5" style={{ color: '#A09080' }} />
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
                <div className="pt-6 mt-6" style={{ borderTop: '1px solid #2E2820' }}>
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: '#D9A578' }}>
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
                        style={{ color: '#C8BAA8' }}
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: accent }} />
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