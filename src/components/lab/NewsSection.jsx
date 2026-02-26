import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const PREVIEW_COUNT = 5;

// ── ADD NEWS ITEMS HERE ───────────────────────────────────────────────────────
// Each item: { date: "Month Year", title: "...", description: "..." (optional) }
const NEWS = [
  {
    date: "January 2026",
    title: "Prof. Bijan Mazaheri presented at the Tsinghua Sanya International Mathematics Forum in Sanya, China.",
    description: 'Talk title: "Distribution-level Techniques for Heterogeneous Causal Relationships."',
  },
  {
    date: "December 2025",
    title: "Ben Cavanagh joins the CIDER Lab.",
    description: "Welcome to the group!",
  },
  {
    date: "December 2025",
    title: "CIDER Lab attended NeurIPS 2025 in San Diego.",
    description: "Prof. Mazaheri presented at the CauScien Workshop and received a Top Reviewer Award.",
  },
  {
    date: "November 2025",
    title: "Prof. Bijan Mazaheri will serve as Program Chair of CLeaR 2026.",
  },
  {
    date: "November 2025",
    title: "Prof. Bijan Mazaheri gave an invited talk at Williams College.",
    description: 'Talk title: "Causal Underpinnings of Information Synthesis."',
  },
  {
    date: "October 2025",
    title: "CIDER Lab awarded DIMEX grant.",
    description: "We have been awarded a grant through Dartmouth's DIMEX program to build collaborations between Dartmouth researchers and researchers in the Middle East and North Africa.",
  },
  {
    date: "October 2025",
    title: "Prof. Bijan Mazaheri gave an invited talk at Geisel School of Medicine at Dartmouth.",
    description: 'Talk title: "Causal Underpinnings of Information Synthesis."',
  },
  {
    date: "September 2025",
    title: "Sophia Xiao and Zou Yang join the CIDER Lab as PhD students.",
    description: "Welcome to the group!",
  },
  {
    date: "September 2025",
    title: "Sreshth Tiwari, Connor Kilkenny, and Titus Johnson join the CIDER Lab as undergraduate researchers.",
    description: "They have been awarded Dartmouth URAD funding to support their research with the lab. Welcome!",
  },
  {
    date: "July 2025",
    title: "CIDER Lab awarded DARPA COMPASS contract.",
    description: "We have been awarded a $248,000 contract for the DARPA program on Critical Orientation of Mathematics to Produce Advancements in Science and Security (COMPASS).",
  },
  {
    date: "June 2025",
    title: "Tamier Baoyin and Leila Salken join the CIDER Lab for the summer.",
    description: "Welcome! Tamier is affiliated with Dartmouth and Mount Holyoke College, and Leila is from Williams College.",
  },
  {
    date: "May 2025",
    title: "CIDER Lab attended CLeaR 2025.",
    description: 'Prof. Mazaheri presented "Omitted Labels Induce Nontransitive Paradoxes in Causality."',
  },
  {
    date: "May 2025",
    title: "CIDER Lab attended AISTATS 2025.",
    description: 'Prof. Mazaheri presented "Synthetic Potential Outcomes and Causal Mixture Identifiability."',
  },
  {
    date: "February 2025",
    title: "Prof. Bijan Mazaheri gave an invited talk at Tuck School of Business at Dartmouth.",
    description: 'Talk title: "Synthetic Potential Outcomes and Causal Mixture Identifiability."',
  },
  {
    date: "January 2025",
    title: "Muhammad Ahmad joins the CIDER Lab.",
    description: "Muhammad has been awarded a Dartmouth FYRE grant to support his research with the lab. Welcome!",
  },
  {
    date: "January 2025",
    title: "CIDER Lab launches at Dartmouth's Thayer School of Engineering.",
    description: "Prof. Bijan Mazaheri joins Dartmouth as an Assistant Professor, founding the Causal Inference, Discovery, and Experimental Reasoning (CIDER) Lab.",
  },
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