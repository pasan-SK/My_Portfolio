import React from "react";
import { Globe } from "lucide-react";
import { Section } from "./Section";

export function About() {
  return (
    <Section title="Overview" icon={Globe} id="about">
      <div className="grid md:grid-cols-12 gap-12 items-start">
        {/* Left Column: Image and Heading */}
        <div className="md:col-span-5 flex flex-col gap-8">
          {/* Profile Image with Vignette Container */}
          <div className="relative w-64 md:w-80 mx-auto md:mx-0 rounded-sm overflow-hidden">
            <img
              src="/profile.jpeg"
              alt="Pasan Kalansooriya"
              className="w-full h-auto object-cover"
            />
            {/* Vignette Overlay fading to brand background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_60%,#0a0a0a_100%)]"></div>
          </div>

          <h3 className="text-3xl font-serif text-white/90 leading-tight">
            Synthesizing intelligence through real-world computational research.
          </h3>
        </div>

        {/* Right Column: Text */}
        <div className="md:col-span-7 space-y-8">
          <p className="text-lg text-white/50 leading-relaxed font-serif italic">
            Currently pursuing a PhD at the Faculty of Medicine, Dentistry and Health Science,
            University of Melbourne. My work focuses on developing decision support systems for
            Vestibular Schwannoma treatment, funded by the Melbourne Research Scholarship.
          </p>
          <div className="h-px w-20 bg-white/20"></div>
          <p className="text-white/40 leading-relaxed font-light">
            With a background in Computer Science and Engineering from the University of Moratuwa,
            I have cultivated a research path that spans Computer Vision, NLP, and Human-Computer
            Interaction. My experience at Tokyo Tech and in roles with Sysco LABS and WSO2 has
            shaped my approach to building intelligent systems that are both technically robust
            and practically applicable.
          </p>
        </div>
      </div>
    </Section>
  );
}
