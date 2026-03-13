import React from "react";
import { motion } from "framer-motion";

import { FUNDING } from "./data/Funding/index";

export default function FundingSection() {
  return (
    <section id="funding" className="py-24 sm:py-32 px-6" style={{ backgroundColor: '#111009' }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase" style={{ color: '#D9A578' }}>
            Support
          </span>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight mt-4" style={{ color: '#F0EAE0' }}>
            <span className="font-semibold" style={{ color: '#3D9E6B' }}>Funding</span>
          </h2>
          <div className="w-12 h-[1px] mx-auto mt-6" style={{ background: '#3A3228' }} />
        </motion.div>

        {FUNDING.length === 0 ? (
          <p className="text-sm italic text-center" style={{ color: '#5A4E42' }}>Funding acknowledgements to be added.</p>
        ) : (
          <div className="grid sm:grid-cols-2 gap-4">
            {FUNDING.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-xl border p-5 flex flex-col gap-2"
                style={{ borderColor: '#2E2820', backgroundColor: '#181510' }}
              >
                {/* Agency · Program badge row */}
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#C8BAA8' }}>{f.agency}</span>
                  {f.program && (
                    <>
                      <span className="text-xs" style={{ color: '#5A4E42' }}>·</span>
                      {f.url ? (
                        <a href={f.url} target="_blank" rel="noopener noreferrer"
                          className="text-xs font-semibold tracking-widest uppercase hover:underline" style={{ color: '#B8AA98' }}>
                          {f.program}
                        </a>
                      ) : (
                        <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#B8AA98' }}>{f.program}</span>
                      )}
                    </>
                  )}
                  {f.mechanism && (
                   <>
                     <span className="text-xs" style={{ color: '#5A4E42' }}>·</span>
                     <span className="text-xs" style={{ color: '#9A8E82' }}>{f.mechanism}</span>
                   </>
                  )}
                  </div>
                  {/* Title */}
                  <p className="text-sm leading-snug" style={{ color: '#C8BAA8' }}>{f.title}</p>
                  {/* Grant number */}
                  {f.grant && <p className="text-xs" style={{ color: '#8A7E72' }}>{f.grant}</p>}

              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}