import React from "react";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  { label: "Projects", id: "projects" },
  { label: "People", id: "people" },
  { label: "Papers", id: "papers" },
  { label: "News", id: "news" },
  { label: "Funding", id: "funding" },
  { label: "Join Us", id: "contact" },
];

export default function NavBar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: 'rgba(17, 16, 9, 0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(58, 50, 40, 0.5)',
      }}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex-shrink-0 transition-opacity hover:opacity-70"
        >
          <div className="h-20 overflow-hidden" style={{ clipPath: 'inset(30% 18% 30% 18%)' }}>
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a06131335d4d0b4fc95ea9/d93d70073_Gemini_Generated_Image_qgk9hpqgk9hpqgk91.png"
              alt="CEDAR Lab"
              className="h-full object-cover object-center"
            />
          </div>
        </button>

        <div className="hidden sm:flex items-center flex-wrap justify-end">
          {NAV_ITEMS.map((item, i) => (
            <span key={item.id} className="flex items-center">
              {i > 0 && (
                <span className="text-xs mx-2.5" style={{ color: '#3A3228' }}>|</span>
              )}
              <button
                onClick={() => scrollTo(item.id)}
                className="text-xs tracking-wide transition-colors"
                style={{ color: '#A09080' }}
                onMouseEnter={e => e.currentTarget.style.color = '#D9A578'}
                onMouseLeave={e => e.currentTarget.style.color = '#A09080'}
              >
                {item.label}
              </button>
            </span>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}