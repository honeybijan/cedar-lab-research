import React from "react";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#111009' }}>
      {children}
    </div>
  );
}