// To add a project, add a new entry to the PROJECTS array below.
// paperTitles must match paper titles exactly as they appear in Papers/index.js

export const PROJECTS = [
  {
    title: "Heterogeneity Detection",
    order: 1,
    description: "Heterogeneous settings indicate change. A new viral variant that is resistant to a vaccine, a new error pushed to a codebase that is breaking utility for users, a policy that is applied differently across regions — these are all signals worth detecting. Heterogeneity also indicates unfairness when we believe that people should be treated equally. Detecting this heterogeneity is hard, especially when groups can look similar (i.e., overlapping clusters). We use the method of moments to detect and uncover heterogeneity at the distribution level.",
    paperTitles: [
      "Synthetic Potential Outcomes and Causal Mixture Identifiability",
      "Identification of Mixtures of Discrete Product Distributions in Near-Optimal Sample and Time Complexity",
      "Causal Inference Despite Limited Global Confounding via Mixture Models",
      "Source Identification for Mixtures of Product Distributions",
      "Estimating Aleatoric Uncertainty in the Causal Treatment Effect",
    ],
  },
  {
    title: "Causal Masking",
    order: 2,
    description: "We often need to understand how specific information influences decision-making. Because data is frequently entangled, determining whether a decision relies on a direct attribute or a correlated feature is notoriously difficult. In fact, this is an **information-theoretically** hard problem due to the complexities of testing for conditional independence. We are actively researching this challenge, with applications in algorithmic fairness and the detection of covert decision-making.",
    paperTitles: [
      "Masking Unfairness: Hiding Causality in Zero ATE",
    ],
  },
  {
    title: "Optimal Interventions",
    order: 3,
    description: "Science is rooted in experimentation, which relies on perturbing a system to observe how it changes. We are developing fundamental, mathematically rigorous frameworks to determine exactly what these perturbations should be.",
    paperTitles: [
      "Relaxing Faithfulness with Intervention-Only Causal Discovery",
    ],
  },
  {
    title: "Signal Disentanglement",
    order: 4,
    description: "Data across various domains—whether from multi-batch -omics experiments, disparate clinical populations, or varied athletic environments—are inherently heterogeneous. Aggregating data from such disparate sources risks confounding causal relationships. For instance, naively combining Canadian and Australian health data might falsely suggest that sunscreen usage causes skin cancer, simply because usage strongly correlates with geographic location and UV exposure. We are developing computational methods to synthesize heterogeneous datasets while rigorously preserving their underlying causal structures.",
    paperTitles: [
      "Causal Inference Despite Limited Global Confounding via Mixture Models",
      "Causal Information Splitting: Engineering Proxy Features for Robustness to Distribution Shifts",
      "Omitted Labels Induce Nontransitive Paradoxes in Causality",
      "Causal Discovery under Latent Class Confounding",
    ],
    software: [
      { title: "LACCTiC - Logarithmically Adjusted Cross Country Time Comparisons", authors: "Bijan Mazaheri", url: "https://www.lacctic.com" },
    ],
  },
  {
    title: "Protecting Information",
    order: 5,
    description: "The scientific community is currently grappling with a reproducibility crisis. Without open access to code and data, independent verification and accountability become impossible. However, organizations frequently withhold these assets to protect proprietary intellectual property and sensitive user privacy. To bridge this gap, our research investigates novel methodologies for verifying the performance of machine learning algorithms without compromising confidential information.",
    paperTitles: [
      "Data Augmentation via Causal Residual Bootstrapping",
      "Meta-Dependence in Conditional Independence Testing",
    ],
  },
];