import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const PREVIEW_COUNT = 5;

// ── ADD NEWS ITEMS HERE ───────────────────────────────────────────────────────
// Each item: { date: "Month Year", title: "...", description: "..." (optional) }
const NEWS = [
  {
    date: "February 2026",
    title: "CEDAR Lab goes ice skating at Lake Morey with the Gallivan Group.",
  },
  {
    date: "January 2026",
    title: "Prof. Bijan Mazaheri presents at the Tsinghua Sanya International Mathematics Forum in Sanya, China.",
    description: 'Talk title: "Distribution-level Techniques for Heterogeneous Causal Relationships."',
  },
  {
    date: "January 2026",
    title: "Muhammad Ahmad joins the CEDAR Lab.",
    description: "Muhammad has been awarded a Dartmouth FYREE grant to support his research with the lab. Welcome!",
  },
  {
    date: "December 2025",
    title: "Ben Cavanagh joins the CEDAR Lab.",
    description: "Welcome to the group!",
  },
  {
    date: "December 2025",
    title: "CEDAR Lab attends NeurIPS 2025 in San Diego.",
    description: "Prof. Mazaheri presents at the CauScien Workshop and receives a Top Reviewer Award.",
  },
  {
    date: "November 2025",
    title: "Prof. Bijan Mazaheri is nominated to serve as Program Chair of CLeaR 2026.",
  },
  {
    date: "November 2025",
    title: "Prof. Bijan Mazaheri gives an invited talk at Williams College.",
    description: 'Talk title: "Causal Underpinnings of Information Synthesis."',
  },
  {
    date: "October 2025",
    title: "CEDAR Lab goes apple picking with the Gallivan Group.",
  },
  {
    date: "October 2025",
    title: "CEDAR Lab is awarded a DIMEX grant.",
    description: "We are awarded a grant through Dartmouth's DIMEX program to build collaborations between Dartmouth researchers and researchers in the Middle East and North Africa.",
  },
  {
    date: "October 2025",
    title: "Prof. Bijan Mazaheri gives an invited talk at Geisel School of Medicine at Dartmouth.",
    description: 'Talk title: "Causal Underpinnings of Information Synthesis."',
  },
  {
    date: "September 2025",
    title: "Sophia Xiao and Zou Yang join the CEDAR Lab as PhD students.",
    description: "Welcome to the group!",
  },
  {
    date: "September 2025",
    title: "Sreshth Tiwari, Connor Kilkenny, and Titus Johnson join the CEDAR Lab as undergraduate researchers.",
    description: "They are awarded Dartmouth URAD funding to support their research with the lab. Welcome!",
  },
  {
    date: "July 2025",
    title: "CEDAR Lab is awarded a DARPA Advanced Research Concepts contract.",
    description: "We are awarded a $248,000 contract for the DARPA program on Critical Orientation of Mathematics to Produce Advancements in Science and Security (COMPASS).",
  },
  {
    date: "June 2025",
    title: "Tamier Baoyin and Leila Salken join the CEDAR Lab for the summer.",
    description: "Welcome! Tamier is affiliated with Dartmouth and Mount Holyoke College, and Leila is from Williams College.",
  },
  {
    date: "May 2025",
    title: "CEDAR Lab attends CLeaR 2025.",
    description: 'Prof. Mazaheri presents "Omitted Labels Induce Nontransitive Paradoxes in Causality."',
  },
  {
    date: "May 2025",
    title: "CEDAR Lab attends AISTATS 2025.",
    description: 'Prof. Mazaheri presents "Synthetic Potential Outcomes and Causal Mixture Identifiability."',
  },
  {
    date: "February 2025",
    title: "Prof. Bijan Mazaheri gives an invited talk at Tuck School of Business at Dartmouth.",
    description: 'Talk title: "Synthetic Potential Outcomes and Causal Mixture Identifiability."',
  },
  {
    date: "January 2025",
    title: "CEDAR Lab launches at Dartmouth's Thayer School of Engineering.",
    description: "Prof. Bijan Mazaheri joins Dartmouth as an Assistant Professor, founding the Causal Inference, Discovery, and Experimental Reasoning (CEDAR) Lab.",
  },
];
// ─────────────────────────────────────────────────────────────────────────────

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