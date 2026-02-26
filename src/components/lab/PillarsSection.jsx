import React from "react";
import { motion } from "framer-motion";
import PillarCard from "./PillarCard";

const PILLARS = [
  {
    title: "Discovery",
    subtitle: "Unmasking causal heterogeneity and obscured stories in mixture models.",
    questions: [
      "How can we detect and quantify heterogeneous settings to identify bad actors or emerging diseases?",
      "When and how can causal mixtures reveal — or conceal — where I am getting my information?",
      "What is the difference between identifying rates of AI usage, crime, and corruption verses individual characterization?",
    ],
  },
  {
    title: "Experimentation",
    subtitle: "Theoretical design of optimal and efficient perturbations for system discovery.",
    questions: [
      "How should experiments be sequenced to maximize information gain?",
      "What is the best way to perturb a system to learn about its causal dependencies?",
      "Do we need to know when we succeed in an intervention, or is trying enough?",
    ],
  },
  {
    title: "Recourse",
    subtitle: "Counterfactual frameworks for AI fairness, privacy, and model-sharing.",
    questions: [
      "What counterfactual guarantees can we provide for algorithmic fairness?",
      "How do we solve the reproducibility crisis without sharing private information or company secrets?",
      "Can we design recourse mechanisms that are robust to model updates?",
    ],
  },
  {
    title: "Synthesis",
    subtitle: "Comparing and correcting for batch effects across disparate data sources.",
    questions: [
      "How can we disentangle information from experimental conditions from scientific information?",
      "What methods reliably correct for batch effects without distorting causal signal?",
      "How do we detect and handle conflicting evidence across sources?",
    ],
  },
  {
    title: "Fundamentals",
    subtitle: "Establishing the universal limits of causal information recovery.",
    questions: [
      "When can we and cant we learn causality and what does this tell us about the state of science economics?",
      "How do the errors within different causal questions co-occur and interact?",
      "What are the information theoretical limitations of detecting causal relationships and how can they be exploited?",
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