import React from "react";
import { motion } from "framer-motion";
import PillarCard from "./PillarCard";

const PILLARS = [
  {
    title: "Experimental Design",
    subtitle: "The fewest, most informative perturbations and coarsest faithful simulations that pin down a system.",
    questions: [
      "What is the smallest basis of interventions or simulations from which the outcomes of experiments we never run can be inferred?",
      "When can a fine-grained simulation be coarse-grained without changing its causal answers, and can we use this to accelerate simulations for real-time decision making?",
      "How can we use causal structure to maximize scientific information under a budget?",
    ],
  },
  {
    title: "Abduction",
    subtitle: "Abduction is the leap from a surprising observation to the hypothesis that best explains it. Causal reasoning comes from detecting anomalies, and creativity comes from generating them.",
    questions: [
      "How do outliers and anomalies help us reason about causal dependencies?",
      "Can we build creative AI that reasons from outliers and protects against risky anomalies?",
      "What do heterogeneous populations and mixtures reveal, or obscure, about the true source of a signal: a bad actor, an emerging disease, or a batch effect masquerading as biology?",
    ],
  },
  {
    title: "Recourse",
    subtitle: "Fairness, privacy, and information flow are hard to enforce in optimized systems like AI, and easy to exploit.",
    questions: [
      "Privacy and fairness are conditional-independence constraints; how do we enforce them so a system cannot game or evade them, even when they appear satisfied on the data we can see?",
      "What provable guarantees can we give an individual, not just a population, about how an AI system will and will not use their information?",
      "How can we detect bad actors who use AI to avoid detection, or who exploit privacy and fairness protections to escape scrutiny?",
    ],
  },
];

export default function PillarsSection() {
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

        <div className="space-y-4">
          {PILLARS.map((pillar, index) => (
            <PillarCard key={pillar.title} pillar={pillar} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}