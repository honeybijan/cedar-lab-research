import React from "react";
import { motion } from "framer-motion";

// ── ADD NEWS ITEMS HERE ───────────────────────────────────────────────────────
// Each item: { date: "Month Year", title: "...", description: "..." (optional) }
const NEWS = [
  // { date: "January 2026", title: "Paper accepted at NeurIPS 2026", description: "Our work on causal discovery was accepted." },
  // { date: "September 2025", title: "Lab officially launched at Dartmouth!" },
];
// ─────────────────────────────────────────────────────────────────────────────

export default function NewsSection() {
  return (
    <section id="news" className="py-24 sm:py-32 px-6" style={{ backgroundColor: '#181510' }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase" style={{ color: '#D9A578' }}>
            Announcements
          </span>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight mt-4" style={{ color: '#F0EAE0' }}>
            <span className="font-semibold" style={{ color: '#3D9E6B' }}>News</span>
          </h2>
          <div className="w-12 h-[1px] mx-auto mt-6" style={{ background: '#3A3228' }} />
        </motion.div>

        {NEWS.length === 0 ? (
          <p className="text-sm italic text-center" style={{ color: '#5A4E42' }}>News and announcements to be added.</p>
        ) : (
          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-3 top-2 bottom-2 w-px" style={{ backgroundColor: '#2E2820' }} />
            <div className="space-y-8 pl-10">
              {NEWS.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="relative"
                >
                  {/* dot */}
                  <div className="absolute -left-7 top-1.5 w-2 h-2 rounded-full" style={{ backgroundColor: '#3D9E6B' }} />
                  <p className="text-xs font-medium tracking-wide mb-1" style={{ color: '#D9A578' }}>{item.date}</p>
                  <p className="text-sm font-medium" style={{ color: '#F0EAE0' }}>{item.title}</p>
                  {item.description && (
                    <p className="text-sm mt-1" style={{ color: '#A09080' }}>{item.description}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}