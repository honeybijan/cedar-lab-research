import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, FileText } from "lucide-react";

export default function ProjectCard({ project, index }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div
        className="group relative rounded-xl border transition-all duration-400 cursor-pointer overflow-hidden"
        style={{
          borderColor: isExpanded ? 'var(--cider)' : 'var(--border)',
          backgroundColor: isExpanded ? 'var(--bg-card-hover)' : 'var(--bg-card)',
        }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Left accent */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-400"
          style={{ 
            background: isExpanded 
              ? 'linear-gradient(180deg, var(--dartmouth), var(--cider))' 
              : 'transparent' 
          }}
        />

        <div className="p-5 sm:p-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-semibold flex-shrink-0 transition-all duration-300"
                style={{ 
                  backgroundColor: isExpanded ? 'rgba(0, 105, 62, 0.12)' : 'var(--border)',
                  color: isExpanded ? 'var(--dartmouth-light)' : 'var(--cider-light)',
                }}
              >
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 
                className="text-base sm:text-lg font-medium tracking-tight transition-colors duration-300"
                style={{ color: isExpanded ? 'var(--cider-dark)' : 'var(--text-primary)' }}
              >
                {project.title}
              </h3>
            </div>

            <motion.div
              animate={{ rotate: isExpanded ? 90 : 0 }}
              transition={{ duration: 0.25 }}
              className="flex-shrink-0"
            >
              <ChevronRight className="w-4 h-4" style={{ color: 'var(--cider-light)' }} />
            </motion.div>
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="pt-5 mt-4 ml-12" style={{ borderTop: '1px solid var(--warm-gray)' }}>
                  {project.description ? (
                    <p 
                      className="text-sm leading-relaxed mb-4"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {project.description}
                    </p>
                  ) : (
                    <p 
                      className="text-sm italic mb-4"
                      style={{ color: 'var(--cider-light)' }}
                    >
                      Description coming soon...
                    </p>
                  )}

                  {project.papers && project.papers.length > 0 && (
                    <div>
                      <p 
                        className="text-xs font-semibold tracking-[0.15em] uppercase mb-3"
                        style={{ color: 'var(--dartmouth)' }}
                      >
                        Selected Papers
                      </p>
                      <ul className="space-y-2">
                        {project.papers.map((paper, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <FileText 
                              className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" 
                              style={{ color: 'var(--cider-light)' }} 
                            />
                            <div>
                              <a
                                href={paper.url || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-medium hover:underline transition-colors"
                                style={{ color: 'var(--dartmouth)' }}
                                onClick={(e) => e.stopPropagation()}
                              >
                                {paper.title}
                              </a>
                              {paper.authors && (
                                <p className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                                  {paper.authors}
                                  {paper.venue && <span> · {paper.venue}</span>}
                                  {paper.year && <span> ({paper.year})</span>}
                                </p>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {(!project.papers || project.papers.length === 0) && (
                    <p 
                      className="text-xs italic"
                      style={{ color: 'var(--cider-light)' }}
                    >
                      Papers to be added
                    </p>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}