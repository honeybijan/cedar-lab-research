import React from "react";
import NavBar from "@/components/lab/NavBar";
import HeroSection from "@/components/lab/HeroSection";
import PillarsSection from "@/components/lab/PillarsSection";
import ProjectsSection from "@/components/lab/ProjectsSection";
import PeopleSection from "@/components/lab/PeopleSection";
import PapersSection from "@/components/lab/PapersSection";
import Footer from "@/components/lab/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#111009' }}>
      <NavBar />
      <HeroSection />
      <PillarsSection />
      <ProjectsSection />
      <PeopleSection />
      <PapersSection />
      <Footer />
    </div>
  );
}