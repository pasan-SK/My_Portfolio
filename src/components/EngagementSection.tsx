import React from "react";
import { ExternalLink } from "lucide-react";

export function EngagementSection() {
  return (
    <div id="contact" className="py-32 border-t border-brand-border">
      <div className="bg-brand-accent p-16 md:p-24 flex flex-col md:flex-row justify-between items-center gap-12 rounded-sm border border-white/5">
        <div className="text-center md:text-left">
          <p className="text-[10px] tracking-[0.4em] uppercase text-white/30 mb-4">
            Engagement
          </p>
          <h2 className="text-4xl md:text-6xl font-serif text-white tracking-tight leading-tight">
            Inquire for<br />Collaboration
          </h2>
        </div>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=pasanxavioz@gmail.com"
          // target="_blank" will open in a new tab without taking the users away from the site
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 bg-white text-black px-12 py-6 text-sm font-bold uppercase tracking-[0.2em] hover:scale-105 transition-transform"
        >
          Start Conversation
          <ExternalLink size={18} className="translate-y-[-1px]" />
        </a>
      </div>
    </div>
  );
}
