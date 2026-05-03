import React from "react";
import { FOOTER_LINKS } from "../constants/data";

export function Footer() {
  return (
    <footer className="py-16 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] uppercase tracking-[0.3em] text-white/20 font-mono border-t border-brand-border">
      <p>© 2026 PASAN KALANSOORIYA — RESERVED</p>
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
        {FOOTER_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
