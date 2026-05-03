import React from "react";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

interface PublicationCardProps {
  id: string;
  title: string;
  journal: string;
  authors: string;
  tags: readonly string[];
  link: string;
  achievement?: string;
  status?: string;
}

export function PublicationCard({
  id,
  title,
  journal,
  authors,
  tags,
  link,
  achievement,
  status,
}: PublicationCardProps) {
  return (
    <motion.div
      className="group p-8 border border-brand-border hover:bg-brand-accent transition-all flex gap-10 items-start overflow-hidden rounded-sm"
    >
      <span className="text-4xl font-serif text-white/5 group-hover:text-white/20 transition-colors leading-none">
        {id}
      </span>
      <div className="flex-1">
        <div className="flex justify-between items-start gap-4 mb-4">
          <h3 className="text-2xl font-serif text-white/90 group-hover:text-white transition-colors">
            {title}
          </h3>
          {status && (
            <span className="text-[8px] font-bold tracking-[0.2em] uppercase px-2 py-1 border border-white/20 text-white/40">
              {status}
            </span>
          )}
        </div>
        <p className="text-sm font-serif italic text-white/40 mb-2">{journal}</p>
        {achievement && (
          <p className="text-[10px] text-white/60 mb-4 font-mono uppercase tracking-widest">
            {achievement}
          </p>
        )}
        <div className="flex flex-wrap gap-x-6 gap-y-3 items-center">
          <p className="text-[10px] font-mono text-white/30 uppercase">{authors}</p>
          <div className="flex gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[8px] tracking-widest uppercase px-3 py-1 border border-white/5 bg-white/5 text-white/40 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[10px] font-mono text-white/40 hover:text-white transition-colors border-b border-white/10"
            >
              DOI / ACCESS <ExternalLink size={10} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
