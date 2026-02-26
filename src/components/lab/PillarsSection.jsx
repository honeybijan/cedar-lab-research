import React from "react";
import { motion } from "framer-motion";
import PillarCard from "./PillarCard";

const PILLARS = [
  {
    letter: "C",
    title: "Detection",
    subtitle: "Unmasking causal heterogeneity and obscured stories in mixture models.",
    questions: [
      "How can we detect latent subpopulations within heterogeneous datasets?",
      "What are the statistical signatures of hidden causal mechanisms?",
      "When can mixture models reveal — or conceal — the true data-generating process?",
      "How do we quantify uncertainty when causal structures vary across contexts?",
    ],
  },
  {
    letter: "I",
    title: "Experimentation",
    subtitle: "Theoretical design of optimal and efficient perturbations for system discovery.",
    questions: [
      "What is the minimum number of interventions needed to fully identify a causal graph?",
      "How should experiments be sequenced to maximize information gain?",
      "Can we design perturbations that are both cost-efficient and statistically powerful?",
      "What role does adaptivity play in reducing experimental burden?",
    ],
  },
  {
    letter: "D",
    title: "Recourse",
    subtitle: "Counterfactual frameworks for AI fairness, privacy, and model-sharing.",
    questions: [
      "How can individuals obtain actionable explanations from black-box AI decisions?",
      "What counterfactual guarantees can we provide for algorithmic fairness?",
      "How do we balance recourse with model privacy and intellectual property?",
      "Can we design recourse mechanisms that are robust to model updates?",
    ],
  },
  {
    letter: "E",
    title: "Fundamentals",
    subtitle: "Establishing the universal limits of causal information recovery.",
    questions: [
      "What are the information-theoretic lower bounds for causal discovery?",
      "When is causal structure identifiable from observational data alone?",
      "How do computational constraints interact with statistical limits in causal inference?",
      "What role does the faithfulness assumption play in practical causal discovery?",
    ],
  },
  {
    letter: "R",
    title: "Synthesis",
    subtitle: "Comparing and correcting for batch effects across disparate data sources.",
    questions: [
      "How can we integrate causal knowledge from multiple heterogeneous datasets?",
      "What methods reliably correct for batch effects without distorting causal signal?",
      "When can data from different experimental conditions be safely combined?",
      "How do we detect and handle conflicting causal evidence across sources?",
    ],
  },
];

export default function PillarsSection() {
  return (
    <section id="pillars" className="py-24 sm:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span 
            className="text-xs font-semibold tracking-[0.3em] uppercase"
            style={{ color: 'var(--cider)' }}
          >
            Research Pillars
          </span>
          <h2 
            className="text-3xl sm:text-4xl font-light tracking-tight mt-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Five Pillars of{" "}
            <span className="font-semibold" style={{ color: 'var(--dartmouth)' }}>CIDER</span>
          </h2>
          <div className="w-12 h-[1px] mx-auto mt-6" style={{ background: 'var(--cider-light)' }} />
        </motion.div>

        <div className="space-y-4">
          {PILLARS.map((pillar, index) => (
            <PillarCard key={pillar.letter} pillar={pillar} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}