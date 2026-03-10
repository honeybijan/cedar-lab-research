import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

import { NEWS } from "./data/News/index";

const PREVIEW_COUNT = 5;

export default function NewsSection() {
  const [expanded, setExpanded] = useState(false);
  const visibleNews = expanded ? NEWS : NEWS.slice(0, PREVIEW_COUNT);

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
          <>
            <div className="relative">
              {/* vertical line */}
              <div className="absolute left-3 top-2 bottom-2 w-px" style={{ backgroundColor: '#2E2820' }} />
              <div className="space-y-8 pl-10">
                {visibleNews.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i < PREVIEW_COUNT ? i * 0.07 : 0 }}
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

            {NEWS.length > PREVIEW_COUNT && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="mt-10 flex items-center gap-2 text-xs font-medium mx-auto transition-opacity hover:opacity-70"
                style={{ color: '#D9A578' }}
              >
                {expanded ? (
                  <><ChevronUp className="w-4 h-4" /> Show less</>
                ) : (
                  <><ChevronDown className="w-4 h-4" /> Show all {NEWS.length} announcements</>
                )}
              </button>
            )}
          </>
        )}
      </div>
    </section>
  );
}