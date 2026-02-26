import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  { label: "People", id: "people" },
  { label: "Current Projects", id: "projects" },
  { label: "Papers", id: "papers" },
  { label: "News", id: "news" },
  { label: "Funding", id: "funding" },
  { label: "Contact", id: "contact" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? 'rgba(17, 16, 9, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        {/* Logo / Lab name */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex-shrink-0 text-sm font-semibold tracking-wide transition-opacity hover:opacity-70"
          style={{ color: 'var(--dartmouth-light)' }}
        >
          CIDER Lab
        </button>

        {/* Nav links */}
        <div className="hidden sm:flex items-center gap-0 flex-wrap justify-end">
          {NAV_ITEMS.map((item, i) => (
            <React.Fragment key={item.id}>
              {i > 0 && (
                <span className="text-xs mx-2.5" style={{ color: 'var(--text-muted)' }}>|</span>
              )}
              <button
                onClick={() => scrollTo(item.id)}
                className="text-xs tracking-wide transition-colors hover:opacity-100"
                style={{ color: 'var(--text-secondary)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--cider-light)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                {item.label}
              </button>
            </React.Fragment>
          ))}
        </div>

        {/* Mobile: collapsed nav */}
        <div className="sm:hidden flex items-center">
          <span className="text-xs" style={{ color: 'var(--text-muted)' }}>↓ Scroll</span>
        </div>
      </div>
    </motion.nav>
  );
}