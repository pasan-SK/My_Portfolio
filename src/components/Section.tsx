import React from "react";

interface SectionProps {
  title: string;
  icon: React.ComponentType<{ size?: number }>;
  children: React.ReactNode;
  id: string;
}

export function Section({ title, icon: Icon, children, id }: SectionProps) {
  return (
    <section id={id} className="py-24 border-t border-brand-border">
      <div className="flex items-center gap-4 mb-12">
        <div className="w-2 h-2 bg-white rounded-full"></div>
        <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-white/50">{title}</h2>
      </div>
      {children}
    </section>
  );
}
