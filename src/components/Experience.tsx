import React from "react";
import { Briefcase } from "lucide-react";
import { Section } from "./Section";
import { TimelineItem } from "./TimelineItem";
import { EXPERIENCE_DATA } from "../constants/data";

export function Experience() {
  return (
    <Section title="Career Archive" icon={Briefcase} id="experience">
      <div className="max-w-4xl">
        {EXPERIENCE_DATA.map((exp, index) => (
          <TimelineItem key={index} {...exp} />
        ))}
      </div>
    </Section>
  );
}
