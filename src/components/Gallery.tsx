import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { Section } from "./Section";
import { GALLERY_DATA } from "../constants/data";

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % GALLERY_DATA.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? GALLERY_DATA.length - 1 : prev - 1));
  };

  return (
    <Section title="Visual Archive" icon={Camera} id="gallery">
      <div className="relative w-full max-w-4xl mx-auto">
        
        {/* Carousel Container */}
        <div className="relative aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-sm border border-brand-border bg-brand-accent flex items-center justify-center group">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={GALLERY_DATA[currentIndex].src}
              alt={GALLERY_DATA[currentIndex].alt}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 w-full h-full object-contain p-2 md:p-8"
            />
          </AnimatePresence>

          {/* Navigation Controls */}
          <button 
            onClick={prevSlide} 
            className="absolute left-4 p-3 bg-black/40 text-white hover:bg-black/80 hover:scale-110 transition-all rounded-full border border-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={nextSlide} 
            className="absolute right-4 p-3 bg-black/40 text-white hover:bg-black/80 hover:scale-110 transition-all rounded-full border border-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100"
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Caption Area */}
        <div className="mt-8 text-center px-4">
          <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase mb-3 block">
            {GALLERY_DATA[currentIndex].tag} <span className="mx-2">/</span> 0{currentIndex + 1}
          </span>
          <p className="text-white/80 font-serif italic text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {GALLERY_DATA[currentIndex].caption}
          </p>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {GALLERY_DATA.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1 transition-all duration-300 rounded-full ${
                index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}