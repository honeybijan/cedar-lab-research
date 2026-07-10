import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

const BRANCHES = [
  {
    key: "ed",
    title: "Experimental Design",
    color: "#3D9E6B",
    cx: 152,
    path: "M 340 42 C 300 84 208 100 152 143",
    subtitle:
      "The fewest, most informative perturbations and coarsest faithful simulations that pin down a system.",
    questions: [
      "What is the smallest basis of interventions or simulations from which the outcomes of experiments we never run can be inferred?",
      "When can a fine-grained simulation be coarse-grained without changing its causal answers, and can we use this to accelerate simulations for real-time decision making?",
      "How can we use causal structure to maximize scientific information under a budget?",
    ],
  },
  {
    key: "ab",
    title: "Abduction",
    color: "#74C79C",
    cx: 340,
    path: "M 340 42 C 332 82 332 108 340 143",
    subtitle:
      "Abduction is the leap from a surprising observation to the hypothesis that best explains it. Causal reasoning comes from detecting anomalies, and creativity comes from generating them.",
    questions: [
      "How do outliers and anomalies help us reason about causal dependencies?",
      "Can we build creative AI that reasons from outliers and protects against risky anomalies?",
      "What do heterogeneous populations and mixtures reveal, or obscure, about the true source of a signal: a bad actor, an emerging disease, or a batch effect masquerading as biology?",
    ],
  },
  {
    key: "re",
    title: "Recourse",
    color: "#00693E",
    cx: 528,
    path: "M 340 42 C 380 84 472 100 528 143",
    subtitle:
      "Fairness, privacy, and information flow are hard to enforce in optimized systems like AI, and easy to exploit.",
    questions: [
      "Privacy and fairness are conditional-independence constraints; how do we enforce them so a system cannot game or evade them, even when they appear satisfied on the data we can see?",
      "What provable guarantees can we give an individual, not just a population, about how an AI system will and will not use their information?",
      "How can we detect bad actors who use AI to avoid detection, or who exploit privacy and fairness protections to escape scrutiny?",
    ],
  },
];

export default function PillarsSection() {
  const [selectedKey, setSelectedKey] = useState("ed");
  const selected = BRANCHES.find((b) => b.key === selectedKey);

  const handleKeyDown = (e, key) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setSelectedKey(key);
    }
  };

  return (
    <section id="pillars" className="py-24 sm:py-32 px-6" style={{ backgroundColor: '#181510' }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase" style={{ color: '#E0B088' }}>
            Research Branches
          </span>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight mt-4" style={{ color: '#F0EAE0' }}>
            Three Branches of{" "}
            <span className="font-semibold" style={{ color: '#3D9E6B' }}>CEDAR</span>
          </h2>
          <div className="w-12 h-[1px] mx-auto mt-6" style={{ background: '#3A3228' }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <svg
            viewBox="0 0 680 210"
            role="group"
            aria-label="CEDAR research tree"
            className="hidden md:block w-full h-auto"
          >
            {BRANCHES.map((b) => {
              const on = b.key === selectedKey;
              return (
                <motion.path
                  key={b.key}
                  d={b.path}
                  fill="none"
                  strokeLinecap="round"
                  initial={false}
                  animate={{
                    stroke: on ? b.color : '#3A3228',
                    strokeWidth: on ? 3 : 1.5,
                    opacity: on ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.3, ease: EASE }}
                />
              );
            })}

            <circle cx="340" cy="34" r="5" fill="#C4834A" />
            <text x="340" y="19" textAnchor="middle" fontSize="12" letterSpacing="1.5" fill="#C4834A" style={{ fontFamily: 'inherit' }}>
              CAUSALITY
            </text>

            {BRANCHES.map((b) => {
              const on = b.key === selectedKey;
              return (
                <g
                  key={b.key}
                  role="button"
                  tabIndex={0}
                  aria-label={b.title}
                  aria-pressed={on}
                  onClick={() => setSelectedKey(b.key)}
                  onKeyDown={(e) => handleKeyDown(e, b.key)}
                  style={{ cursor: 'pointer', outline: 'none' }}
                >
                  <circle cx={b.cx} cy="150" r="26" fill="transparent" />
                  <motion.circle
                    cx={b.cx}
                    cy="150"
                    fill={b.color}
                    initial={false}
                    animate={{ r: on ? 11 : 7, opacity: on ? 1 : 0.35 }}
                    transition={{ duration: 0.25, ease: EASE }}
                  />
                  <motion.text
                    x={b.cx}
                    y="180"
                    textAnchor="middle"
                    fontSize="13"
                    initial={false}
                    animate={{ fill: on ? '#F0EAE0' : '#7A6E62' }}
                    transition={{ duration: 0.25 }}
                    style={{ fontFamily: 'inherit' }}
                  >
                    {b.title}
                  </motion.text>
                </g>
              );
            })}
          </svg>

          <svg
            viewBox="0 0 340 280"
            role="group"
            aria-label="CEDAR research tree"
            className="block md:hidden w-full h-auto"
          >
            <line x1="40" y1="50" x2="40" y2="236" stroke="#C4834A" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
            <circle cx="40" cy="40" r="5" fill="#C4834A" />
            <text x="54" y="44" fontSize="13" letterSpacing="1.5" fill="#C4834A" style={{ fontFamily: 'inherit' }}>
              CAUSALITY
            </text>
            {BRANCHES.map((b, i) => {
              const on = b.key === selectedKey;
              const y = 96 + i * 70;
              const path = `M 40 ${y - 18} C 52 ${y - 6} 66 ${y} 78 ${y}`;
              return (
                <g
                  key={b.key}
                  role="button"
                  tabIndex={0}
                  aria-label={b.title}
                  aria-pressed={on}
                  onClick={() => setSelectedKey(b.key)}
                  onKeyDown={(e) => handleKeyDown(e, b.key)}
                  style={{ cursor: 'pointer', outline: 'none' }}
                >
                  <rect x="8" y={y - 28} width="324" height="56" fill="transparent" />
                  <motion.path
                    d={path}
                    fill="none"
                    strokeLinecap="round"
                    initial={false}
                    animate={{
                      stroke: on ? b.color : '#3A3228',
                      strokeWidth: on ? 3 : 1.5,
                      opacity: on ? 1 : 0.6,
                    }}
                    transition={{ duration: 0.3, ease: EASE }}
                  />
                  <motion.circle
                    cx={78}
                    cy={y}
                    fill={b.color}
                    initial={false}
                    animate={{ r: on ? 12 : 8, opacity: on ? 1 : 0.4 }}
                    transition={{ duration: 0.25, ease: EASE }}
                  />
                  <motion.text
                    x={100}
                    y={y + 5}
                    fontSize="15"
                    initial={false}
                    animate={{ fill: on ? '#F0EAE0' : '#A09080' }}
                    transition={{ duration: 0.25 }}
                    style={{ fontFamily: 'inherit' }}
                  >
                    {b.title}
                  </motion.text>
                </g>
              );
            })}
          </svg>

          <div
            className="rounded-2xl border p-6 sm:p-8 mt-8"
            style={{ borderColor: '#2E2820', backgroundColor: '#1F1B13', minHeight: '260px' }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedKey}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: EASE }}
              >
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: selected.color }} />
                  <h3 className="text-lg sm:text-xl font-medium tracking-tight" style={{ color: '#F0EAE0' }}>
                    {selected.title}
                  </h3>
                </div>
                <p className="text-sm mt-2 leading-relaxed" style={{ color: '#A09080' }}>
                  {selected.subtitle}
                </p>

                <p className="text-xs font-semibold tracking-[0.2em] uppercase mt-6 mb-4" style={{ color: '#D9A578' }}>
                  Key Questions
                </p>
                <ul className="space-y-3">
                  {selected.questions.map((q, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: '#C8BAA8' }}>
                      <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: selected.color }} />
                      {q}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}