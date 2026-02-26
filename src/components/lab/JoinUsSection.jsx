import React, { useState } from "react";
import { motion } from "framer-motion";

const PROGRAMS = [
  {
    name: "PhD and MS in Engineering",
    description: "Thayer School of Engineering at Dartmouth",
    url: "https://engineering.dartmouth.edu/graduate/phd",
  },
  {
    name: "Engineering PhD Innovation Program (PHDI)",
    description: "Thayer School of Engineering at Dartmouth",
    url: "https://engineering.dartmouth.edu/graduate/phdi",
  },
  {
    name: "Industry PhD in Engineering",
    description: "Thayer School of Engineering at Dartmouth",
    url: "https://engineering.dartmouth.edu/graduate/phd/industry-research-option",
  },
  {
    name: "Quantitative Biological Sciences (QBS)",
    description: "Geisel School of Medicine at Dartmouth",
    url: "https://geiselmed.dartmouth.edu/qbs/",
  },
  {
    name: "Computational Science and Modeling (CSMP)",
    description: "Guarini School of Graduate and Advanced Studies at Dartmouth",
    url: "https://sites.dartmouth.edu/csmp/",
  },
];

export default function JoinUsSection() {
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleCardClick = (e, index) => {
    e.preventDefault();
    setClickedIndex(clickedIndex === index ? null : index);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-6" style={{ backgroundColor: '#181510' }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase" style={{ color: '#D9A578' }}>
            Opportunities
          </span>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight mt-4" style={{ color: '#F0EAE0' }}>
            <span className="font-semibold" style={{ color: '#3D9E6B' }}>Join Us</span>
          </h2>
          <div className="w-12 h-[1px] mx-auto mt-6" style={{ background: '#3A3228' }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-sm sm:text-base leading-relaxed mb-12 max-w-2xl mx-auto text-center" style={{ color: '#C8BAA8' }}>
            We welcome motivated students interested in causal inference, information theory, and AI fairness.
            CEDAR Lab advises students through the following graduate programs at Dartmouth:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PROGRAMS.map((p, i) => {
              const isClicked = clickedIndex === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.07 }}
                  className="rounded-xl border p-5 cursor-pointer block group transition-colors"
                  style={{ borderColor: isClicked ? '#3D9E6B' : '#2E2820', backgroundColor: '#181510' }}
                  onMouseEnter={e => !isClicked && (e.currentTarget.style.borderColor = '#3D9E6B')}
                  onMouseLeave={e => !isClicked && (e.currentTarget.style.borderColor = '#2E2820')}
                  onClick={(e) => handleCardClick(e, i)}
                >
                  <p className="text-sm font-medium leading-snug transition-colors" style={{ color: isClicked ? '#3D9E6B' : '#F0EAE0' }}>
                    {p.name}
                  </p>
                  <p className="text-xs mt-2" style={{ color: '#7A6E62' }}>{p.description}</p>
                  <a href={p.url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                    <p className="text-xs mt-3" style={{ color: '#D9A578' }}>Learn more →</p>
                  </a>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}