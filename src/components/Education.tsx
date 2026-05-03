import React from "react";
import { GraduationCap } from "lucide-react";
import { Section } from "./Section";
import { TimelineItem } from "./TimelineItem";
import { EDUCATION_DATA } from "../constants/data";

export function Education() {
  return (
    <Section title="Academic Foundation" icon={GraduationCap} id="education">
      <div className="max-w-4xl">
        {EDUCATION_DATA.map((edu, index) => (
          <TimelineItem key={index} {...edu} />
        ))}
      </div>
    </Section>
  );
}
