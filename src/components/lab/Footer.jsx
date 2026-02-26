import React from "react";

export default function Footer() {
  return (
    <footer className="py-16 px-6" style={{ backgroundColor: 'var(--text-primary)' }}>
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-2xl font-light tracking-tight text-white/90 mb-2">
          The <span className="font-semibold" style={{ color: '#4CAF7D' }}>CIDER</span> Lab
        </p>
        <p className="text-sm text-white/40 tracking-wide">
          Dartmouth College
        </p>
        <div className="w-8 h-[1px] mx-auto my-6 bg-white/10" />
        <p className="text-xs text-white/30">
          Causal Information for Detection, Experimentation, and Recourse
        </p>
      </div>
    </footer>
  );
}