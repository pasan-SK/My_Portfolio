/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { ContactStrip } from "./components/ContactStrip";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Research } from "./components/Research";
import { Education } from "./components/Education";
import { EngagementSection } from "./components/EngagementSection";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";

export default function App() {
  return (
    <div className="bg-brand-bg text-brand-primary min-h-screen">
      <div className="max-w-6xl mx-auto px-6 md:px-16">
        <Navigation />
        <Hero />
        <ContactStrip />
        <About />
        <Experience />
        <Research />
        <Education />
        <Gallery />
        <EngagementSection />
        <Footer />
      </div>
    </div>
  );
}
