import React from "react";
import { motion } from "framer-motion";
import { Mail, BookOpen, Github, Linkedin, FileText } from "lucide-react";
import { PI, ADMIN_STAFF, PHD_STUDENTS, UNDERGRAD_STUDENTS, ALUMNI, COLLABORATORS } from "./data/People/index";

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
                  style={{ objectPosition: '78% center' }}
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-medium" style={{ color: '#F0EAE0' }}>{PI.name}</h3>
                <p className="text-sm mt-1" style={{ color: '#3D9E6B' }}>{PI.title}</p>
                <p className="text-xs mt-0.5" style={{ color: '#7A6E62' }}>{PI.affiliation}</p>
                <p className="text-sm leading-relaxed mt-4" style={{ color: '#C8BAA8' }}>{PI.bio}</p>
                <div className="flex flex-wrap gap-3 mt-4">
                  {PI.email && (
                    <a href={`mailto:${PI.email}`} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md transition-colors hover:opacity-80"
                      style={{ backgroundColor: '#2E2820', color: '#D9A578' }}>
                      <Mail className="w-3 h-3" /> Email
                    </a>
                  )}
                  {PI.scholar && (
                    <a href={PI.scholar} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md transition-colors hover:opacity-80"
                      style={{ backgroundColor: '#2E2820', color: '#A09080' }}>
                      <BookOpen className="w-3 h-3" /> Google Scholar
                    </a>
                  )}
                  {PI.github && (
                    <a href={PI.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md transition-colors hover:opacity-80"
                      style={{ backgroundColor: '#2E2820', color: '#A09080' }}>
                      <Github className="w-3 h-3" /> GitHub
                    </a>
                  )}
                  {PI.linkedin && (
                    <a href={PI.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md transition-colors hover:opacity-80"
                      style={{ backgroundColor: '#2E2820', color: '#A09080' }}>
                      <Linkedin className="w-3 h-3" /> LinkedIn
                    </a>
                  )}
                  {PI.cv && (
                    <a href={PI.cv} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md transition-colors hover:opacity-80"
                      style={{ backgroundColor: 'rgba(61,158,107,0.12)', color: '#3D9E6B' }}>
                      <FileText className="w-3 h-3" /> CV
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Academic Coordinator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mb-16"
        >
          <SectionLabel>Administrative Staff</SectionLabel>
          <div className="flex flex-col gap-4">
            {ADMIN_STAFF.map((person, i) => (
              <div key={i} className="rounded-xl border p-5 inline-flex flex-col gap-2" style={{ borderColor: '#2E2820', backgroundColor: '#181510' }}>
                <p className="font-medium" style={{ color: '#F0EAE0' }}>{person.name}</p>
                <p className="text-sm" style={{ color: '#A09080' }}>{person.title}</p>
                {person.email && (
                  <a href={`mailto:${person.email}`} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md transition-colors hover:opacity-80 w-fit"
                    style={{ backgroundColor: '#2E2820', color: '#D9A578' }}>
                    <Mail className="w-3 h-3" /> Email
                  </a>
                )}
              </div>
            ))}
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

        {/* Alumni */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <SectionLabel>Alumni</SectionLabel>
          {ALUMNI.length === 0 ? (
            <EmptyState label="Alumni to be added." />
          ) : (
            <div className="flex flex-wrap gap-3">
              {ALUMNI.map((a, i) => (
                <div key={i} className="rounded-lg border px-4 py-2" style={{ borderColor: '#2E2820', backgroundColor: '#181510' }}>
                  <p className="text-sm" style={{ color: '#A09080' }}>{a.name}</p>
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
                 <a key={i} href={c.url} target="_blank" rel="noopener noreferrer" className="rounded-xl border p-5 transition-colors hover:opacity-80" style={{ borderColor: '#2E2820', backgroundColor: '#181510' }}>
                   <p className="font-medium" style={{ color: '#F0EAE0' }}>{c.name}</p>
                   {c.affiliation && <p className="text-sm mt-1" style={{ color: '#A09080' }}>{c.affiliation}</p>}
                 </a>
               ))}
             </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}