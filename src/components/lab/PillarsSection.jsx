import React from "react";
import { motion } from "framer-motion";
import PillarCard from "./PillarCard";

const PILLARS = [
  {
    title: "Discovery",
    subtitle: "Unmasking causal heterogeneity and obscured stories in mixture models.",
    questions: [
      "How can we detect and quantify heterogeneous settings to identify bad actors or emerging diseases?",
      "When do causal mixture models reveal — or conceal — the true source of our information?",
      "What distinguishes measuring aggregate rates of AI use, crime, or corruption from characterizing individuals?",
    ],
  },
  {
    title: "Experimentation",
    subtitle: "Theoretical design of optimal and efficient perturbations for system discovery.",
    questions: [
      "How should experiments be sequenced to maximize information gain?",
      "What is the most effective way to perturb a system to uncover its causal dependencies?",
      "Must we know whether an intervention succeeded, or is the attempt itself informative?",
    ],
  },
  {
    title: "Recourse",
    subtitle: "Counterfactual frameworks for AI fairness, privacy, and model-sharing.",
    questions: [
      "What counterfactual guarantees can we provide for algorithmic fairness?",
      "How do we address the reproducibility crisis without exposing private data or proprietary models?",
      "Can recourse mechanisms be designed to remain robust as models evolve?",
    ],
  },
  {
    title: "Synthesis",
    subtitle: "Comparing and correcting for batch effects across disparate data sources.",
    questions: [
      "How do we disentangle the effects of experimental conditions from genuine scientific signal?",
      "What methods reliably correct for batch effects without distorting causal structure?",
      "How do we detect and reconcile conflicting evidence across heterogeneous sources?",
    ],
  },
  {
    title: "Fundamentals",
    subtitle: "Establishing the universal limits of causal information recovery.",
    questions: [
      "When can we — and when can't we — learn causality, and what does this reveal about science and economics?",
      "How do errors across different causal questions co-occur and interact?",
      "What are the information-theoretic limits of detecting causal relationships, and how can they be exploited?",
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
            Research Pillars
          </span>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight mt-4" style={{ color: '#F0EAE0' }}>
            Five Pillars of{" "}
            <span className="font-semibold" style={{ color: '#3D9E6B' }}>CIDER</span>
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