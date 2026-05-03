import React from "react";
import { Linkedin, Github, BookOpen, Mail, GraduationCap, Fingerprint } from "lucide-react";

interface ContactItem {
  label: string;
  value?: string;
  href?: string;
  links?: Array<{ name: string; url: string; icon: typeof Linkedin }>;
}

export function ContactStrip() {
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/pasan-kalansooriya-825b54213/', icon: Linkedin },
    { name: 'GitHub', url: 'https://github.com/pasan-SK', icon: Github },
    { name: 'Google Scholar', url: 'https://scholar.google.com/citations?user=d1rDI_YAAAAJ&hl=en', icon: GraduationCap },
    { name: 'ORCID', url: 'https://orcid.org/0009-0002-3934-8226', icon: Fingerprint },
    { name: 'Medium', url: 'https://medium.com/@pasanSK', icon: BookOpen },
  ];

  return (
    <div className="flex flex-wrap gap-x-12 gap-y-6 pb-24 border-b border-brand-border">
      <div className="space-y-1">
        <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">Location</p>
        <p className="text-sm font-medium text-white/70">Melbourne, Australia</p>
      </div>
      <div className="space-y-2">
        <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">Professional Presence</p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {socialLinks.map(({ name, url, icon: Icon }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm hover:text-white text-white/70 underline underline-offset-4 decoration-white/20"
            >
              <Icon size={14} className="opacity-50" /> {name}
            </a>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">Email</p>
        <a
          href="mailto:pasanxavioz@gmail.com"
          className="flex items-center gap-2 text-sm hover:text-white text-white/70 underline underline-offset-4 decoration-white/20"
        >
          <Mail size={14} className="opacity-50" /> pasanxavioz@gmail.com
        </a>
      </div>
    </div>
  );
}
