import React from "react";
import { motion } from "framer-motion";

const PROGRAMS = [
  {
    name: "PhD and MS in Engineering",
    description: "Thayer School of Engineering at Dartmouth",
    url: "https://engineering.dartmouth.edu/graduate/phd",
  },
  {
    name: "PhD Innovation Program (PhD-I)",
    description: "Thayer School of Engineering at Dartmouth",
    url: "https://engineering.dartmouth.edu/graduate/phdi",
  },
  {
    name: "Industry PhD in Engineering",
    description: "Thayer School of Engineering at Dartmouth",
    url: "https://engineering.dartmouth.edu/graduate/phd/industry-research-option",
  },
  {
    name: "PhD in Quantitative Biological Sciences (QBS)",
    description: "Geisel School of Medicine at Dartmouth",
    url: "https://geiselmed.dartmouth.edu/qbs/",
  },
  {
    name: "PhD in Computational Science and Modeling (CSMP)",
    description: "Guarini School of Graduate and Advanced Studies at Dartmouth",
    url: "https://sites.dartmouth.edu/csmp/",
  },
];

export default function JoinUsSection() {
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
            {PROGRAMS.map((p, i) => (
              <motion.a
                key={i}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.07 }}
                className="rounded-xl border p-5 block group transition-colors"
                style={{ borderColor: '#2E2820', backgroundColor: '#181510' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = '#3D9E6B'}
                onMouseLeave={e => e.currentTarget.style.borderColor = '#2E2820'}
              >
                <p className="text-sm font-medium leading-snug group-hover:text-green-400 transition-colors" style={{ color: '#F0EAE0' }}>
                  {p.name}
                </p>
                <p className="text-xs mt-2" style={{ color: '#A09080' }}>{p.description}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}