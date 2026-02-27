import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { ALL_PAPERS } from "./data/papers";

const PROJECTS = [
  {
    title: "Heterogeneity Detection",
    order: 1,
    description: "Heterogeneous settings indicate change. A new viral variant that is resistant to a vaccine, a new error pushed to a codebase that is breaking utility for users, a policy that is applied differently across regions — these are all signals worth detecting. Heterogeneity also indicates unfairness when we believe that people should be treated equally. Detecting this heterogeneity is hard, especially when groups can look similar (i.e., overlapping clusters). We use the method of moments to detect and uncover heterogeneity at the distribution level.",
    papers: [
      { title: "Synthetic Potential Outcomes and Causal Mixture Identifiability", authors: "Bijan Mazaheri, Chandler Squires, Caroline Uhler", venue: "AISTATS", year: 2025, url: "https://proceedings.mlr.press/v258/mazaheri25a.html" },
      { title: "Identification of Mixtures of Discrete Product Distributions in Near-Optimal Sample and Time Complexity", authors: "Spencer Gordon, Eric Jahn, Bijan Mazaheri, Yuval Rabani, Leonard J Schulman", venue: "COLT", year: 2024, url: "https://arxiv.org/abs/2309.13993" },
      { title: "Causal Inference Despite Limited Global Confounding via Mixture Models", authors: "Spencer Gordon, Bijan Mazaheri*, Yuval Rabani, Leonard J Schulman", venue: "CLeaR", year: 2023, url: "https://arxiv.org/abs/2112.11602" },
      { title: "Source Identification for Mixtures of Product Distributions", authors: "Spencer Gordon, Bijan Mazaheri*, Yuval Rabani, Leonard Schulman", venue: "COLT", year: 2021, url: "http://proceedings.mlr.press/v134/gordon21a/gordon21a.pdf" },
      { title: "Estimating Aleatoric Uncertainty in the Causal Treatment Effect", authors: "Lihuan Xu, Bijan Mazaheri", venue: "Preprint", year: 2026, url: "https://arxiv.org/abs/2602.08461" },
    ],
  },
  {
    title: "Causal Masking",
    order: 2,
    description: "We often need to understand how specific information influences decision-making. Because data is frequently entangled, determining whether a decision relies on a direct attribute or a correlated feature is notoriously difficult. In fact, this is an **information-theoretically** hard problem due to the complexities of testing for conditional independence. We are actively researching this challenge, with applications in algorithmic fairness and the detection of covert decision-making.",
    papers: [
      { title: "Masking Unfairness: Hiding Causality in Zero ATE", authors: "**Zou Yang**, **Sophia Xiao**, Bijan Mazaheri", venue: "Under Review", year: 2026, url: null },
    ],
  },
  {
    title: "Optimal Interventions",
    order: 3,
    description: "Science is rooted in experimentation, which relies on perturbing a system to observe how it changes. We are developing fundamental, mathematically rigorous frameworks to determine exactly what these perturbations should be.",
    papers: [
      { title: "Relaxing Faithfulness with Intervention-Only Causal Discovery", authors: "Bijan Mazaheri, Jiaqi Zhang, Caroline Uhler", venue: "Under Review", year: 2025, url: null },
    ],
  },
  {
    title: "Signal Disentanglement",
    order: 4,
    description: "Data across various domains—whether from multi-batch -omics experiments, disparate clinical populations, or varied athletic environments—are inherently heterogeneous. Aggregating data from such disparate sources risks confounding causal relationships. For instance, naively combining Canadian and Australian health data might falsely suggest that sunscreen usage causes skin cancer, simply because usage strongly correlates with geographic location and UV exposure. We are developing computational methods to synthesize heterogeneous datasets while rigorously preserving their underlying causal structures.",
    papers: [
      { title: "Causal Inference Despite Limited Global Confounding via Mixture Models", authors: "Spencer Gordon, Bijan Mazaheri*, Yuval Rabani, Leonard J Schulman", venue: "CLeaR", year: 2023, url: "https://arxiv.org/abs/2112.11602" },
      { title: "Causal Information Splitting: Engineering Proxy Features for Robustness to Distribution Shifts", authors: "Bijan Mazaheri, Atalanti Mastakouri, Dominik Janzing, Michaela Hardt", venue: "UAI", year: 2023, url: "https://arxiv.org/abs/2305.05832" },
      { title: "Omitted Labels Induce Nontransitive Paradoxes in Causality", authors: "Bijan Mazaheri, Siddharth Jain, Matthew Cook, Jehoshua Bruck", venue: "CLeaR", year: 2025, url: "https://arxiv.org/abs/2311.06840" },
      { title: "Causal Discovery under Latent Class Confounding", authors: "Bijan Mazaheri, Spencer Gordon, Yuval Rabani, Leonard Schulman", venue: "arXiv:2311.07454, Under Review", year: 2025, url: "https://arxiv.org/abs/2311.07454" },
    ],
    software: [
      { title: "LACCTiC - Logarithmically Adjusted Cross Country Time Comparisons", authors: "Bijan Mazaheri", url: "https://www.lacctic.com" },
    ],
  },
  {
    title: "Protecting Information",
    order: 5,
    description: "The scientific community is currently grappling with a reproducibility crisis. Without open access to code and data, independent verification and accountability become impossible. However, organizations frequently withhold these assets to protect proprietary intellectual property and sensitive user privacy. To bridge this gap, our research investigates novel methodologies for verifying the performance of machine learning algorithms without compromising confidential information.",
    papers: [
      { title: "Data Augmentation via Causal Residual Bootstrapping", authors: "Mateusz Gajewski, **Sophia Xiao**, Bijan Mazaheri", venue: "Under Review", year: 2026, url: null },
      { title: "Meta-Dependence in Conditional Independence Testing", authors: "Bijan Mazaheri, Jiaqi Zhang, Caroline Uhler", venue: "arXiv:2504.12594, Under Review", year: 2025, url: "https://arxiv.org/abs/2504.12594" },
    ],
  },
];

export default function ProjectsSection() {
  const displayProjects = PROJECTS;

  return (
    <section id="projects" className="py-24 sm:py-32 px-6" style={{ backgroundColor: '#111009' }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase" style={{ color: '#3D9E6B' }}>
            Current Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight mt-4" style={{ color: '#F0EAE0' }}>
            Active{" "}
            <span className="font-semibold" style={{ color: '#D9A578' }}>Projects</span>
          </h2>
          <div className="w-12 h-[1px] mx-auto mt-6" style={{ background: '#3A3228' }} />
        </motion.div>

        <div className="space-y-3">
          {displayProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}