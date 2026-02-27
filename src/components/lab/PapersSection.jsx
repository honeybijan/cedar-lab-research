import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import { FileText, ImageIcon, Video, Copy, Check, SlidersHorizontal } from "lucide-react";
import { PUBLICATIONS, PREPRINTS } from "./data/papers";

const PREVIEW_COUNT = 4; // number of papers shown before "show more"

// Lab members whose names should be bolded in author lists
const LAB_MEMBERS = ["Bijan Mazaheri", "Sophia Xiao", "Zou Yang"];



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
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? papers : papers.slice(0, PREVIEW_COUNT);

  return (
    <div className="mb-16">
      <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-6" style={{ color: '#D9A578' }}>
        {title}
      </p>
      {papers.length === 0 ? (
        <p className="text-sm italic" style={{ color: '#5A4E42' }}>Papers to be added.</p>
      ) : (
        <>
          <div className="space-y-4">
            {visible.map((paper, i) => <PaperCard key={i} paper={paper} index={i} />)}
          </div>
          {papers.length > PREVIEW_COUNT && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-6 flex items-center gap-2 text-xs font-medium transition-opacity hover:opacity-70"
              style={{ color: '#D9A578' }}
            >
              {expanded ? (
                <><ChevronUp className="w-4 h-4" /> Show less</>
              ) : (
                <><ChevronDown className="w-4 h-4" /> Show all {papers.length} papers</>
              )}
            </button>
          )}
        </>
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