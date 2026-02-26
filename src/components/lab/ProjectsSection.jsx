import React from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import ProjectCard from "./ProjectCard";

const DEFAULT_PROJECTS = [
  { title: "Heterogeneity Detection", order: 1 },
  { title: "Causal Masking", order: 2 },
  { title: "Optimal Interventions", order: 3 },
  { title: "Integrating and Disentangling Data", order: 4 },
  { title: "Protecting Information", order: 5 },
];

export default function ProjectsSection() {
  const { data: projects } = useQuery({
    queryKey: ["projects"],
    queryFn: () => base44.entities.Project.list("order"),
    initialData: [],
  });

  const displayProjects = DEFAULT_PROJECTS.map((def) => {
    const dbProject = projects.find((p) => p.title?.toLowerCase() === def.title.toLowerCase());
    return dbProject || def;
  });

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