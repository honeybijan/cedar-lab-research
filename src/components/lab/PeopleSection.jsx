import React from "react";
import { motion } from "framer-motion";

const PI = {
  name: "Your Name",
  title: "Assistant Professor",
  affiliation: "Thayer School of Engineering at Dartmouth",
  bio: "I am a researcher focused on causal inference, information theory, and AI fairness. My work investigates the fundamental limits of causal discovery and develops tools for algorithmic recourse and robust decision-making in heterogeneous environments.",
  email: "your.email@dartmouth.edu",
  website: "",
};

const PHD_STUDENTS = [
  // { name: "Student Name", research: "Research interest or topic" },
];

const UNDERGRAD_STUDENTS = [
  // { name: "Student Name", research: "Project description" },
];

const COLLABORATORS = [
  // { name: "Collaborator Name", affiliation: "Institution" },
];

function SectionLabel({ children }) {
  return (
    <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-6" style={{ color: '#D9A578' }}>
      {children}
    </p>
  );
}

function EmptyState({ label }) {
  return (
    <p className="text-sm italic" style={{ color: '#5A4E42' }}>
      {label}
    </p>
  );
}

export default function PeopleSection() {
  return (
    <section id="people" className="py-24 sm:py-32 px-6" style={{ backgroundColor: '#181510' }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase" style={{ color: '#D9A578' }}>
            The Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight mt-4" style={{ color: '#F0EAE0' }}>
            <span className="font-semibold" style={{ color: '#3D9E6B' }}>People</span>
          </h2>
          <div className="w-12 h-[1px] mx-auto mt-6" style={{ background: '#3A3228' }} />
        </motion.div>

        {/* Principal Investigator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <SectionLabel>Principal Investigator</SectionLabel>
          <div className="rounded-2xl border p-6 sm:p-8" style={{ borderColor: '#2E2820', backgroundColor: '#181510' }}>
            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              <div className="w-56 h-56 rounded-xl flex-shrink-0 overflow-hidden"
                style={{ border: '1px solid #2E2820' }}>
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a06131335d4d0b4fc95ea9/cb4761851_20251114-Bijan-Mazaheri-kl-18.jpg"
                  alt={PI.name}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '75% center' }}
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-medium" style={{ color: '#F0EAE0' }}>{PI.name}</h3>
                <p className="text-sm mt-1" style={{ color: '#3D9E6B' }}>{PI.title}</p>
                <p className="text-xs mt-0.5" style={{ color: '#7A6E62' }}>{PI.affiliation}</p>
                <p className="text-sm leading-relaxed mt-4" style={{ color: '#C8BAA8' }}>{PI.bio}</p>
                {PI.email && (
                  <a href={`mailto:${PI.email}`} className="inline-block text-xs mt-3 hover:underline"
                    style={{ color: '#D9A578' }}>
                    {PI.email}
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* PhD Students */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <SectionLabel>PhD Students</SectionLabel>
          {PHD_STUDENTS.length === 0 ? (
            <EmptyState label="Students to be added." />
          ) : (
            <div className="grid sm:grid-cols-2 gap-4">
              {PHD_STUDENTS.map((s, i) => (
                <div key={i} className="rounded-xl border p-5" style={{ borderColor: '#2E2820', backgroundColor: '#181510' }}>
                  <p className="font-medium" style={{ color: '#F0EAE0' }}>{s.name}</p>
                  {s.research && <p className="text-sm mt-1" style={{ color: '#A09080' }}>{s.research}</p>}
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Undergraduate Students */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-16"
        >
          <SectionLabel>Undergraduate Students</SectionLabel>
          {UNDERGRAD_STUDENTS.length === 0 ? (
            <EmptyState label="Students to be added." />
          ) : (
            <div className="grid sm:grid-cols-2 gap-4">
              {UNDERGRAD_STUDENTS.map((s, i) => (
                <div key={i} className="rounded-xl border p-5" style={{ borderColor: '#2E2820', backgroundColor: '#181510' }}>
                  <p className="font-medium" style={{ color: '#F0EAE0' }}>{s.name}</p>
                  {s.research && <p className="text-sm mt-1" style={{ color: '#A09080' }}>{s.research}</p>}
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Collaborators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <SectionLabel>Collaborators</SectionLabel>
          {COLLABORATORS.length === 0 ? (
            <EmptyState label="Collaborators to be added." />
          ) : (
            <div className="grid sm:grid-cols-2 gap-4">
              {COLLABORATORS.map((c, i) => (
                <div key={i} className="rounded-xl border p-5" style={{ borderColor: '#2E2820', backgroundColor: '#181510' }}>
                  <p className="font-medium" style={{ color: '#F0EAE0' }}>{c.name}</p>
                  {c.affiliation && <p className="text-sm mt-1" style={{ color: '#A09080' }}>{c.affiliation}</p>}
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}