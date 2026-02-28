import React from "react";

export default function Footer() {
  return (
    <footer className="py-16 px-6" style={{ backgroundColor: '#0D0C08' }}>
      <div className="max-w-4xl mx-auto text-center">
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a06131335d4d0b4fc95ea9/9d54103d4_CEDAR_3_color.png"
          alt="CEDAR Lab Logo"
          className="w-16 h-16 mx-auto mb-5"
        />
        <p className="text-2xl font-light tracking-tight mb-2" style={{ color: '#F0EAE0' }}>
          The <span className="font-semibold" style={{ color: '#3D9E6B' }}>CEDAR</span> Lab
        </p>
        <p className="text-sm tracking-wide" style={{ color: '#7A6E62' }}>
          Thayer School of Engineering at Dartmouth
        </p>
        <div className="w-8 h-[1px] mx-auto my-6" style={{ background: '#2E2820' }} />
        <p className="text-xs" style={{ color: '#5A4E42' }}>
          Causality for Experimentation, Discovery, and Recourse
        </p>
      </div>
    </footer>
  );
}