import React from "react";
import { motion } from "framer-motion";
import PillarCard from "./PillarCard";

const PILLARS = [
  {
    title: "Experimentation",
    subtitle: "Theoretical design of optimal and efficient perturbations for system discovery.",
    questions: [
      "How can we make scientific discovery more efficient?",
      "How do we maximize the informational utility in our experiments?",
      "How can we integrate scientific discoveries into ML and AI pipelines?",
    ],
  },
  {
    title: "Detection",
    subtitle: "Unmasking causal heterogeneity and obscured stories in mixture models.",
    questions: [
      "How can we detect and quantify heterogeneous populations to identify bad actors or emerging diseases?",
      "When do causal mixture models reveal — or obscure — the true source of an observed signal?",
      "What distinguishes population-level rates of AI use, crime, or corruption from individual-level attribution?",
    ],
  },
  {
    title: "Recourse",
    subtitle: "Counterfactual frameworks for AI fairness, privacy, and model-sharing.",
    questions: [
      "Can we uncover and correct fundamental flaws in current data-processing standards?",
      "What counterfactual guarantees can we provide for algorithmic fairness?",
      "How can we address the reproducibility crisis without exposing private data or proprietary models?",
    ],
  },
  {
    title: "Synthesis",
    subtitle: "Comparing and correcting for batch effects across disparate data sources.",
    questions: [
      "How can we disentangle experimental artifacts from true scientific signal?",
      "What methods reliably correct for batch effects without distorting causal dependencies?",
      "How do we quantify human performance in highly variable environments?",
    ],
  },
  {
    title: "Fundamentals",
    subtitle: "Establishing the universal limits of causal information recovery.",
    questions: [
      "What do the fundamental limitations of causal inference tell us about science and economics?",
      "How do errors across distinct causal questions co-occur and interact?",
      "How much data is needed to learn different causal quantities, and how can this be exploited?",
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
          <span className="text-xs font-semibold tracking-[0.3em] uppercase" style={{ color: '#D9A578' }}>
            Research Branches
          </span>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight mt-4" style={{ color: '#F0EAE0' }}>
            Five Branches of{" "}
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