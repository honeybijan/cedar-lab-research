import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileText, ImageIcon, Video, Copy, Check, SlidersHorizontal } from "lucide-react";

// Lab members whose names should be bolded in author lists
const LAB_MEMBERS = ["Bijan Mazaheri", "Sophia Xiao", "Zou Yang"];

const PUBLICATIONS = [
  {
    title: "Synthetic Potential Outcomes and Causal Mixture Identifiability",
    authors: "Bijan Mazaheri, Chandler Squires, Caroline Uhler",
    venue: "AISTATS",
    year: 2025,
    paper: "https://proceedings.mlr.press/v258/mazaheri25a.html",
    poster: "https://bijanmazaheri.com/publication/spos/AISTATS2025poster.pdf",
    slides: "https://bijanmazaheri.com/presentations/spo",
    talk: "https://www.youtube.com/watch?app=desktop&si=rckWo1PphQC5QqoC&v=hLr7KmUUvJ4&feature=youtu.be",
  },
  {
    title: "Omitted Labels Induce Nontransitive Paradoxes in Causality",
    authors: "Bijan Mazaheri, Siddharth Jain, Matthew Cook, Jehoshua Bruck",
    venue: "CLeaR",
    year: 2025,
    paper: "https://arxiv.org/abs/2311.06840",
    poster: "https://bijanmazaheri.com/publication/reweighting_paradoxes/CLeaR2025poster.pdf",
  },
  {
    title: "Identification of Mixtures of Discrete Product Distributions in Near-Optimal Sample and Time Complexity",
    authors: "Spencer Gordon, Eric Jahn, Bijan Mazaheri, Yuval Rabani, Leonard J Schulman",
    venue: "COLT",
    year: 2024,
    paper: "https://arxiv.org/abs/2309.13993",
  },
  {
    title: "Causal Information Splitting: Engineering Proxy Features for Robustness to Distribution Shifts",
    authors: "Bijan Mazaheri, Atalanti Mastakouri, Dominik Janzing, Michaela Hardt",
    venue: "UAI",
    year: 2023,
    paper: "https://arxiv.org/abs/2305.05832",
    poster: "https://bijanmazaheri.com/publication/causal_information_splitting/UAI2023poster.pdf",
    talk: "https://youtu.be/c7FNR7vwRo8",
  },
  {
    title: "Causal Inference Despite Limited Global Confounding via Mixture Models",
    authors: "Spencer Gordon, Bijan Mazaheri, Yuval Rabani, Leonard J Schulman",
    venue: "CLeaR",
    year: 2023,
    paper: "https://arxiv.org/abs/2112.11602",
    poster: "https://bijanmazaheri.com/publication/kmixbnd/CLeaR_2023_Poster_Vertical_Final.pdf",
  },
  {
    title: "Glioblastoma signature in the DNA of blood-derived cells",
    authors: "Siddharth Jain, Bijan Mazaheri, Netanel Raviv, Jehoshua Bruck",
    venue: "PLOS One",
    year: 2021,
    paper: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0256831",
  },
  {
    title: "Expert Graphs: Synthesizing New Expertise via Collaboration",
    authors: "Bijan Mazaheri, Siddharth Jain, Jehoshua Bruck",
    venue: "ISIT",
    year: 2021,
    paper: "https://arxiv.org/abs/2107.07054",
  },
  {
    title: "Source Identification for Mixtures of Product Distributions",
    authors: "Spencer Gordon, Bijan Mazaheri, Yuval Rabani, Leonard Schulman",
    venue: "COLT",
    year: 2021,
    paper: "http://proceedings.mlr.press/v134/gordon21a/gordon21a.pdf",
  },
  {
    title: "Robust Correction of Sampling Bias using Cumulative Distribution Functions",
    authors: "Bijan Mazaheri, Siddharth Jain, Jehoshua Bruck",
    venue: "NeurIPS",
    year: 2020,
    paper: "https://papers.nips.cc/paper/2020/file/24368c745de15b3d2d6279667debcba3-Paper.pdf",
  },
];

const PREPRINTS = [
  {
    title: "Estimating Aleatoric Uncertainty in the Causal Treatment Effect",
    authors: "Lihuan Xu, Bijan Mazaheri",
    venue: "Under Review",
    year: 2026,
  },
  {
    title: "Data Augmentation via Causal Residual Bootstrapping",
    authors: "Mateusz Gajewski, Sophia Xiao, Bijan Mazaheri",
    venue: "Under Review",
    year: 2026,
  },
  {
    title: "Relaxing Faithfulness with Intervention-Only Causal Discovery",
    authors: "Bijan Mazaheri, Jiaqi Zhang, Caroline Uhler",
    venue: "Under Review",
    year: 2025,
  },
  {
    title: "Meta-Dependence in Conditional Independence Testing",
    authors: "Bijan Mazaheri, Jiaqi Zhang, Caroline Uhler",
    venue: "arXiv:2504.12594, Under Review",
    year: 2025,
  },
  {
    title: "Causal Discovery under Latent Class Confounding",
    authors: "Bijan Mazaheri, Spencer Gordon, Yuval Rabani, Leonard Schulman",
    venue: "arXiv:2311.07454, Under Review",
    year: 2025,
  },
  {
    title: "The Sparse Hausdorff Moment Problem, with Application to Topic Models",
    authors: "Spencer Gordon, Bijan Mazaheri, Yuval Rabani, Leonard J Schulman",
    venue: "arXiv:2007.08101",
    year: 2020,
  },
  {
    title: "Cancer Classification from Healthy DNA using Machine Learning",
    authors: "Siddharth Jain, Bijan Mazaheri, Netanel Raviv, Jehoshua Bruck",
    venue: "BioRxiv",
    year: 2019,
  },
  {
    title: "Short Tandem Repeats Information in TCGA is Statistically Biased by Amplification",
    authors: "Siddharth Jain, Bijan Mazaheri, Netanel Raviv, Jehoshua Bruck",
    venue: "BioRxiv",
    year: 2019,
  },
];
// ─────────────────────────────────────────────────────────────────────────────

function CiteButton({ bibtex }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md transition-colors"
      style={{ backgroundColor: '#2E2820', color: copied ? '#3D9E6B' : '#A09080' }}
    >
      {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
      {copied ? "Copied" : "Cite"}
    </button>
  );
}

function AuthorList({ authors }) {
  const parts = authors.split(", ");
  return (
    <p className="text-sm mt-2" style={{ color: '#A09080' }}>
      {parts.map((author, i) => {
        const isMember = LAB_MEMBERS.some(m => author.includes(m));
        return (
          <span key={i}>
            {isMember ? <strong style={{ color: '#C8BAA8' }}>{author}</strong> : author}
            {i < parts.length - 1 ? ", " : ""}
          </span>
        );
      })}
    </p>
  );
}

function PaperCard({ paper, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="rounded-xl border p-5 sm:p-6"
      style={{ borderColor: '#2E2820', backgroundColor: '#181510' }}
    >
      <h3 className="text-base font-medium leading-snug" style={{ color: '#F0EAE0' }}>
        {paper.title}
      </h3>
      <AuthorList authors={paper.authors} />
      <p className="text-xs mt-1" style={{ color: '#3D9E6B' }}>
        {paper.venue}{paper.year ? ` · ${paper.year}` : ""}
      </p>

      {(paper.paper || paper.poster || paper.slides || paper.talk || paper.cite) && (
        <div className="flex flex-wrap gap-2 mt-4">
          {paper.paper && (
            <a href={paper.paper} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md transition-colors"
              style={{ backgroundColor: 'rgba(61,158,107,0.12)', color: '#3D9E6B' }}>
              <FileText className="w-3 h-3" /> Paper
            </a>
          )}
          {paper.poster && (
            <a href={paper.poster} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md transition-colors"
              style={{ backgroundColor: '#2E2820', color: '#A09080' }}>
              <ImageIcon className="w-3 h-3" /> Poster
            </a>
          )}
          {paper.slides && (
            <a href={paper.slides} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md transition-colors"
              style={{ backgroundColor: '#2E2820', color: '#A09080' }}>
              <SlidersHorizontal className="w-3 h-3" /> Slides
            </a>
          )}
          {paper.talk && (
            <a href={paper.talk} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md transition-colors"
              style={{ backgroundColor: '#2E2820', color: '#A09080' }}>
              <Video className="w-3 h-3" /> Talk
            </a>
          )}
          {paper.cite && <CiteButton bibtex={paper.cite} />}
        </div>
      )}
    </motion.div>
  );
}

function PaperGroup({ title, papers }) {
  return (
    <div className="mb-16">
      <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-6" style={{ color: '#D9A578' }}>
        {title}
      </p>
      {papers.length === 0 ? (
        <p className="text-sm italic" style={{ color: '#5A4E42' }}>Papers to be added.</p>
      ) : (
        <div className="space-y-4">
          {papers.map((paper, i) => <PaperCard key={i} paper={paper} index={i} />)}
        </div>
      )}
    </div>
  );
}

export default function PapersSection() {
  return (
    <section id="papers" className="py-24 sm:py-32 px-6" style={{ backgroundColor: '#111009' }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase" style={{ color: '#D9A578' }}>
            Research Output
          </span>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight mt-4" style={{ color: '#F0EAE0' }}>
            <span className="font-semibold" style={{ color: '#3D9E6B' }}>Papers</span>
          </h2>
          <div className="w-12 h-[1px] mx-auto mt-6" style={{ background: '#3A3228' }} />
        </motion.div>

        <PaperGroup title="Publications" papers={PUBLICATIONS} />
        <PaperGroup title="Preprints" papers={PREPRINTS} />
      </div>
    </section>
  );
}