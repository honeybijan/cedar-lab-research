import React from "react";
import NavBar from "@/components/lab/NavBar";
import HeroSection from "@/components/lab/HeroSection";
import PillarsSection from "@/components/lab/PillarsSection";
import ProjectsSection from "@/components/lab/ProjectsSection";
import PeopleSection from "@/components/lab/PeopleSection";
import PapersSection from "@/components/lab/PapersSection";
import NewsSection from "@/components/lab/NewsSection";
import FundingSection from "@/components/lab/FundingSection";
import JoinUsSection from "@/components/lab/JoinUsSection";
import Footer from "@/components/lab/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#111009' }}>
      <NavBar />
      <HeroSection />
      <PillarsSection />
      <PeopleSection />
      <ProjectsSection />
      <PapersSection />
      <NewsSection />
      <FundingSection />
      <JoinUsSection />
      <Footer />
    </div>
  );
}