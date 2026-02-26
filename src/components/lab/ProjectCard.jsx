import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, FileText, Code2 } from "lucide-react";

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
        className="group relative rounded-xl border cursor-pointer overflow-hidden transition-colors duration-300"
        style={{
          borderColor: isExpanded ? '#C4834A' : '#2E2820',
          backgroundColor: isExpanded ? '#1F1B13' : '#181510',
        }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-300"
          style={{ background: isExpanded ? 'linear-gradient(180deg, #3D9E6B, #C4834A)' : 'transparent' }} />

        <div className="p-5 sm:p-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-semibold flex-shrink-0"
                style={{ backgroundColor: '#2E2820', color: '#D9A578' }}>
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="text-base sm:text-lg font-medium tracking-tight" style={{ color: '#F0EAE0' }}>
                {project.title}
              </h3>
            </div>
            <motion.div animate={{ rotate: isExpanded ? 90 : 0 }} transition={{ duration: 0.25 }} className="flex-shrink-0">
              <ChevronRight className="w-4 h-4" style={{ color: '#A09080' }} />
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
                <div className="pt-5 mt-4 ml-12" style={{ borderTop: '1px solid #2E2820' }}>
                  {project.description ? (
                    <p className="text-sm leading-relaxed mb-4" style={{ color: '#C8BAA8' }}>
                      {project.description.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
                        part.startsWith('**') && part.endsWith('**')
                          ? <strong key={i} style={{ color: '#F0EAE0' }}>{part.slice(2, -2)}</strong>
                          : part
                      )}
                    </p>
                  ) : (
                    <p className="text-sm italic mb-4" style={{ color: '#7A6E62' }}>
                      Description coming soon...
                    </p>
                  )}

                  {project.papers && project.papers.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold tracking-[0.15em] uppercase mb-3" style={{ color: '#3D9E6B' }}>
                        Selected Papers
                      </p>
                      <ul className="space-y-2">
                        {[...project.papers].sort((a, b) => (b.year || 0) - (a.year || 0)).map((paper, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <FileText className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: '#D9A578' }} />
                            <div>
                              <a href={paper.url || "#"} target="_blank" rel="noopener noreferrer"
                                className="text-sm font-medium hover:underline" style={{ color: '#3D9E6B' }}
                                onClick={(e) => e.stopPropagation()}>
                                {paper.title}
                              </a>
                              {paper.authors && (
                                <p className="text-xs mt-0.5" style={{ color: '#A09080' }}>
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
                    <p className="text-xs italic" style={{ color: '#7A6E62' }}>Papers to be added</p>
                  )}

                  {project.software && project.software.length > 0 && (
                    <div className="mt-6">
                      <p className="text-xs font-semibold tracking-[0.15em] uppercase mb-3" style={{ color: '#3D9E6B' }}>
                        Software & Contributions
                      </p>
                      <ul className="space-y-2">
                        {project.software.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <Code2 className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: '#D9A578' }} />
                            <div>
                              <a href={item.url || "#"} target="_blank" rel="noopener noreferrer"
                                className="text-sm font-medium hover:underline" style={{ color: '#3D9E6B' }}
                                onClick={(e) => e.stopPropagation()}>
                                {item.title}
                              </a>
                              {item.authors && (
                                <p className="text-xs mt-0.5" style={{ color: '#A09080' }}>
                                  {item.authors}
                                </p>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
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