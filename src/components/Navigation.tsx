import React from "react";

const NAV_ITEMS = ['About', 'Experience', 'Research', 'Education', 'Contact'] as const;

export function Navigation() {
  return (
    <nav className="flex justify-between items-center py-10 border-b border-brand-border">
      <div className="flex items-center gap-3">
        <div className="w-3 h-3 bg-white rounded-full"></div>
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40">
          RESEARCHER / 2026
        </span>
      </div>
      <div className="hidden md:flex gap-10">
        {NAV_ITEMS.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}
