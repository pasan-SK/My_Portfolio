import React from "react";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  description?: string;
  achievements?: string[];
}

export function TimelineItem({
  title,
  subtitle,
  date,
  description,
  achievements,
}: TimelineItemProps) {
  return (
    <div className="relative pl-10 pb-16 last:pb-0">
      <div className="timeline-dot" />
      <div className="timeline-line" />
      <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-2">
        <h3 className="text-2xl font-serif text-white">{title}</h3>
        <span className="text-[10px] font-mono tracking-widest text-white/30 uppercase italic">
          {date}
        </span>
      </div>
      <p className="text-lg text-white/60 font-serif italic mb-4">{subtitle}</p>
      {description && (
        <p className="text-white/40 mb-6 max-w-2xl leading-relaxed">{description}</p>
      )}
      {achievements && (
        <ul className="space-y-3">
          {achievements.map((item, i) => (
            <li key={i} className="flex gap-3 text-sm text-white/50 leading-relaxed group">
              <span className="text-white/20 font-mono mt-1 group-hover:text-white/60 transition-colors">
                →
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
