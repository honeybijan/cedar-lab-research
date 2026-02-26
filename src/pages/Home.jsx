import React from "react";
import HeroSection from "@/components/lab/HeroSection";
import PillarsSection from "@/components/lab/PillarsSection";
import ProjectsSection from "@/components/lab/ProjectsSection";
import Footer from "@/components/lab/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--warm-white)' }}>
      <HeroSection />
      <PillarsSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}