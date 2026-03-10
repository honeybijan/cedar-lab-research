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
                className="rounded-xl border p-5"
                style={{ borderColor: '#2E2820', backgroundColor: '#181510' }}
              >
                <div className="flex items-baseline gap-2 mb-1 flex-wrap">
                  <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#3D9E6B' }}>{f.agency}</p>
                  {f.program && <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#D9A578' }}>· {f.program}</p>}
                </div>
                {f.mechanism && <p className="text-xs mb-1" style={{ color: '#7A6E62' }}>{f.mechanism}</p>}
                <p className="text-sm font-medium" style={{ color: '#F0EAE0' }}>{f.title}</p>
                {f.grant && <p className="text-xs mt-1" style={{ color: '#7A6E62' }}>{f.grant}</p>}
                {f.url && (
                  <a href={f.url} target="_blank" rel="noopener noreferrer"
                    className="text-xs mt-2 inline-block hover:underline" style={{ color: '#D9A578' }}>
                    View grant →
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}