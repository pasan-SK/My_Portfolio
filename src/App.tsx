/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  ExternalLink, 
  GraduationCap, 
  Briefcase, 
  BookOpen, 
  Code2, 
  Award,
  Globe,
  Phone
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const Section = ({ title, icon: Icon, children, id }: { title: string, icon: any, children: React.ReactNode, id: string }) => (
  <section id={id} className="py-24 border-t border-brand-border">
    <div className="flex items-center gap-4 mb-12">
      <div className="w-2 h-2 bg-white rounded-full"></div>
      <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-white/50">{title}</h2>
    </div>
    {children}
  </section>
);

const TimelineItem = ({ title, subtitle, date, description, achievements }: { 
  title: string, 
  subtitle: string, 
  date: string, 
  description?: string, 
  achievements?: string[] 
}) => (
  <div className="relative pl-10 pb-16 last:pb-0">
    <div className="timeline-dot" />
    <div className="timeline-line" />
    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-2">
      <h3 className="text-2xl font-serif text-white">{title}</h3>
      <span className="text-[10px] font-mono tracking-widest text-white/30 uppercase italic">{date}</span>
    </div>
    <p className="text-lg text-white/60 font-serif italic mb-4">{subtitle}</p>
    {description && <p className="text-white/40 mb-6 max-w-2xl leading-relaxed">{description}</p>}
    {achievements && (
      <ul className="space-y-3">
        {achievements.map((item, i) => (
          <li key={i} className="flex gap-3 text-sm text-white/50 leading-relaxed group">
            <span className="text-white/20 font-mono mt-1 group-hover:text-white/60 transition-colors">→</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default function App() {
  return (
    <div className="bg-brand-bg text-brand-primary min-h-screen">
      <div className="max-w-6xl mx-auto px-6 md:px-16">
        {/* Header / Nav */}
        <nav className="flex justify-between items-center py-10 border-b border-brand-border">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40">RESEARCHER / 2026</span>
          </div>
          <div className="hidden md:flex gap-10">
            {['About', 'Experience', 'Research', 'Education', 'Contact'].map((item) => (
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

        {/* Hero Section */}
        <motion.header 
          className="py-24 md:py-40 grid md:grid-cols-12 gap-12 items-end"
          {...fadeIn}
        >
          <div className="md:col-span-8">
            <p className="text-[10px] tracking-[0.4em] uppercase text-white/30 mb-6 italic">Academic Portfolio</p>
            <h1 className="text-7xl md:text-9xl font-serif text-white leading-none tracking-tighter mb-10">
              Pasan<br />Kalansooriya
            </h1>
            <p className="text-xl md:text-2xl text-white/50 leading-relaxed font-light font-serif italic max-w-2xl">
              PhD Researcher at the University of Melbourne. Bridging Human-Centered Computing, Computer Vision, and Neural Systems.
            </p>
          </div>
          <div className="md:col-span-4 flex md:justify-end gap-4">
            <button className="px-8 py-4 bg-white text-black text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white/90 transition-all">
              Connect
            </button>
            <button className="px-8 py-4 border border-white/20 text-[10px] uppercase tracking-[0.2em] hover:bg-white/5 transition-all">
              Resume
            </button>
          </div>
        </motion.header>

        {/* Contact Strip */}
        <div className="flex flex-wrap gap-x-12 gap-y-6 pb-24 border-b border-brand-border">
          <div className="space-y-1">
            <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">Location</p>
            <p className="text-sm font-medium text-white/70">Melbourne, Australia </p>
          </div>
          <div className="space-y-2">
            <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">Social</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a href="https://linkedin.com" target="_blank" className="flex items-center gap-1.5 text-sm hover:text-white text-white/70 underline underline-offset-4 decoration-white/20">
                <Linkedin size={14} className="opacity-50" /> LinkedIn
              </a>
              <a href="https://github.com" target="_blank" className="flex items-center gap-1.5 text-sm hover:text-white text-white/70 underline underline-offset-4 decoration-white/20">
                <Github size={14} className="opacity-50" /> GitHub
              </a>
              <a href="https://medium.com/@pasanSK" target="_blank" className="flex items-center gap-1.5 text-sm hover:text-white text-white/70 underline underline-offset-4 decoration-white/20">
                <BookOpen size={14} className="opacity-50" /> Medium
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">Email</p>
            <a href="mailto:pasanxavioz@gmail.com" className="flex items-center gap-2 text-sm hover:text-white text-white/70 underline underline-offset-4 decoration-white/20">
              <Mail size={14} className="opacity-50" /> pasanxavioz@gmail.com
            </a>
          </div>
        </div>

        {/* About Section */}
        <Section title="Overview" icon={Globe} id="about">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <h3 className="text-3xl font-serif text-white/90 leading-tight">
                Synthesizing intelligence through real-world computational research.
              </h3>
            </div>
            <div className="md:col-span-7 space-y-8">
              <p className="text-lg text-white/50 leading-relaxed font-serif italic">
                Currently pursuing a PhD at the Faculty of Medicine, Dentistry and Health Science, University of Melbourne. My work focuses on developing decision support systems for Vestibular Schwannoma treatment, funded by the Melbourne Research Scholarship.
              </p>
              <div className="h-px w-20 bg-white/20"></div>
              <p className="text-white/40 leading-relaxed font-light">
                With a background in Computer Science and Engineering from the University of Moratuwa, I have cultivated a research path that spans Computer Vision, NLP, and Human-Computer Interaction. My experience at Tokyo Tech and in roles with Sysco LABS and WSO2 has shaped my approach to building intelligent systems that are both technically robust and practically applicable.
              </p>
            </div>
          </div>
        </Section>

        {/* Experience Section */}
        <Section title="Career Archive" icon={Briefcase} id="experience">
          <div className="max-w-4xl">
            <TimelineItem 
              title="Casual Research Assistant"
              subtitle="La Trobe University / University of Auckland"
              date="2026 — PRESENT"
              description="Engineering R-based pipelines for 100 Hz triaxial accelerometer data processing and clinical insight generation."
              achievements={[
                "Automated feature extraction and data filtering protocols.",
                "Implemented ANN-based classification models for activity analysis."
              ]}
            />
            <TimelineItem 
              title="Software Engineer"
              subtitle="Sysco LABS (Fortune 500)"
              date="2024 — 2025"
              description="Developed mission-critical web applications for global supply chain operations using React and Spring Boot."
            />
            <TimelineItem 
              title="AOTULE Research Fellow"
              subtitle="Tokyo Institute of Technology — Japan"
              date="2024"
              description="Investigated multimodal dialogue systems and physiological signal integration for conversational AI turn-taking prediction."
            />
          </div>
        </Section>

        {/* Publications Section */}
        <Section title="Research Contributions" icon={BookOpen} id="research">
          <div className="space-y-4">
            {(
              [
                {
                  id: "01",
                  title: "Machine learning for preoperative predictions in Vestibular Schwannoma: A systematic review",
                  journal: "Neuroscience Informatics (Elsevier) - Q1 Journal",
                  authors: "P. Kalansooriya, S. Wijewickrema, et al.",
                  tags: ["PhD First Publication", "SLR", "Medical AI"],
                  link: "https://www.sciencedirect.com/science/article/pii/S2772528626000178",
                  achievement: "Systematic Literature Review"
                },
                {
                  id: "02",
                  title: "An Emotion Aware Context Adaptive Machine Learning Approach for Detecting Hate Speech",
                  journal: "Neural Computing and Applications (Springer Nature) - Q1 Journal",
                  authors: "K. Chavinda, P. Kalansooriya, et al.",
                  tags: ["Undergraduate FYP", "NLP", "Emotion AI"],
                  link: "https://link.springer.com/article/10.1007/s00521-026-12029-8",
                  achievement: "Journal Ranked #10 globally in Google Scholar Metrics (AI)"
                }
              ] as Array<{
                id: string,
                title: string,
                journal: string,
                authors: string,
                tags: string[],
                link: string,
                achievement?: string,
                status?: string
              }>
            ).map((pub) => (
              <motion.div 
                key={pub.id}
                className="group p-8 border border-brand-border hover:bg-brand-accent transition-all flex gap-10 items-start overflow-hidden rounded-sm"
              >
                <span className="text-4xl font-serif text-white/5 group-hover:text-white/20 transition-colors leading-none">{pub.id}</span>
                <div className="flex-1">
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <h3 className="text-2xl font-serif text-white/90 group-hover:text-white transition-colors">{pub.title}</h3>
                    {pub.status && (
                      <span className="text-[8px] font-bold tracking-[0.2em] uppercase px-2 py-1 border border-white/20 text-white/40">
                        {pub.status}
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-serif italic text-white/40 mb-2">{pub.journal}</p>
                  {pub.achievement && (
                    <p className="text-[10px] text-white/60 mb-4 font-mono uppercase tracking-widest">{pub.achievement}</p>
                  )}
                  <div className="flex flex-wrap gap-x-6 gap-y-3 items-center">
                    <p className="text-[10px] font-mono text-white/30 uppercase">{pub.authors}</p>
                    <div className="flex gap-2">
                      {pub.tags.map(tag => (
                        <span key={tag} className="text-[8px] tracking-widest uppercase px-3 py-1 border border-white/5 bg-white/5 text-white/40 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {pub.link && (
                      <a href={pub.link} target="_blank" className="flex items-center gap-1 text-[10px] font-mono text-white/40 hover:text-white transition-colors border-b border-white/10">
                        DOI / ACCESS <ExternalLink size={10} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Education Section */}
        <Section title="Academic Foundation" icon={GraduationCap} id="education">
          <div className="max-w-4xl">
            <TimelineItem 
              title="PhD – Medicine, Dentistry and Health Science"
              subtitle="University of Melbourne — Australia"
              date="2025 — PRESENT"
              description="Focusing on Intelligent Decision Support Systems for medical diagnostics."
              achievements={[
                "Awarded the Melbourne Research Scholarship (Full Funding).",
                "Thesis: Decision Support for the Treatment of Vestibular Schwannoma.",
                "Event Organizer of the Sri Lankan Graduates’ Society (2025-2026)."
              ]}
            />
            <TimelineItem 
              title="BSc Eng. (Hons) Computer Science & Engineering"
              subtitle="University of Moratuwa — Sri Lanka"
              date="2019 — 2024"
              description="Graduated with a GPA of 4.04/4.2. Specialization in Machine Learning and Software Architecture."
              achievements={[
                "Dean's List honors for all academic semesters.",
                "Selected for Tokyo Tech AOTULE Summer Program (Only representative from Sri Lanka).",
                "Chaired sessions at the 15th Multidisciplinary International Student Workshop (MISW)."
              ]}
            />
            <TimelineItem 
              title="Certificate in Business Accounting (Cert BA)"
              subtitle="CIMA — The Chartered Institute of Management Accountants"
              date="2019"
              description="Foundational training in business finance and management principles."
            />
            <TimelineItem 
              title="G.C.E Advanced Level"
              subtitle="S. Thomas’ College, Mt. Lavinia — Sri Lanka"
              date="2016 — 2018"
              description="Achieved 4 Distinction passes. Ranked 326th island-wide."
              achievements={[
                "Winner of The Professor Dayasiri Fernando Memorial Prize.",
                "Served as a Teaching Assistant."
              ]}
            />
          </div>
        </Section>
        <div id="contact" className="py-32 border-t border-brand-border">
          <div className="bg-brand-accent p-16 md:p-24 flex flex-col md:flex-row justify-between items-center gap-12 rounded-sm border border-white/5">
            <div className="text-center md:text-left">
              <p className="text-[10px] tracking-[0.4em] uppercase text-white/30 mb-4">Engagement</p>
              <h2 className="text-4xl md:text-6xl font-serif text-white tracking-tight leading-tight">
                Inquire for<br />Collaboration
              </h2>
            </div>
            <a 
              href="mailto:pasanxavioz@gmail.com" 
              className="group flex items-center gap-4 bg-white text-black px-12 py-6 text-sm font-bold uppercase tracking-[0.2em] hover:scale-105 transition-transform"
            >
              Start Conversation
              <ExternalLink size={18} className="translate-y-[-1px]" />
            </a>
          </div>
        </div>

        <footer className="py-16 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] uppercase tracking-[0.3em] text-white/20 font-mono border-t border-brand-border">
          <p>© 2026 PASAN KALANSOORIYA — RESERVED</p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            <a href="https://linkedin.com" target="_blank" className="hover:text-white transition-colors">LINKEDIN</a>
            <a href="https://github.com" target="_blank" className="hover:text-white transition-colors">GITHUB</a>
            <a href="https://medium.com/@pasanSK" target="_blank" className="hover:text-white transition-colors">MEDIUM</a>
            <a href="https://scholar.google.com" target="_blank" className="hover:text-white transition-colors">SCHOLAR</a>
            <a href="#" className="hover:text-white transition-colors">ORCID</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
