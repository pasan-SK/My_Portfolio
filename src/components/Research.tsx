import React from "react";
import { BookOpen } from "lucide-react";
import { Section } from "./Section";
import { PublicationCard } from "./PublicationCard";
import { PUBLICATIONS_DATA } from "../constants/data";

export function Research() {
  return (
    <Section title="Research Contributions" icon={BookOpen} id="research">
      <div className="space-y-4">
        {PUBLICATIONS_DATA.map((pub) => (
          <PublicationCard key={pub.id} {...pub} />
        ))}
      </div>
    </Section>
  );
}
