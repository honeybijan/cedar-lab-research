import React from "react";

export default function Footer() {
  return (
    <footer className="py-16 px-6" style={{ backgroundColor: '#0D0C08' }}>
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-2xl font-light tracking-tight mb-2" style={{ color: '#F0EAE0' }}>
          The <span className="font-semibold" style={{ color: '#3D9E6B' }}>CIDER</span> Lab
        </p>
        <p className="text-sm tracking-wide" style={{ color: '#7A6E62' }}>
          Thayer School of Engineering at Dartmouth
        </p>
        <div className="w-8 h-[1px] mx-auto my-6" style={{ background: '#2E2820' }} />
        <p className="text-xs" style={{ color: '#5A4E42' }}>
          Causal Information for Detection, Experimentation, and Recourse
        </p>
      </div>
    </footer>
  );
}