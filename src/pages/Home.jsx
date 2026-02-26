import React from "react";
import NavBar from "@/components/lab/NavBar";
import HeroSection from "@/components/lab/HeroSection";
import PillarsSection from "@/components/lab/PillarsSection";
import ProjectsSection from "@/components/lab/ProjectsSection";
import Footer from "@/components/lab/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-deep)' }}>
      <NavBar />
      <HeroSection />
      <PillarsSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}