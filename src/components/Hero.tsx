import React from "react";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { fadeIn } from "../constants/animations";

export function Hero() {
  return (
    <motion.header
      className="py-24 md:py-40 grid md:grid-cols-12 gap-12 items-end"
      {...fadeIn}
    >
      <div className="md:col-span-8">
        <p className="text-[10px] tracking-[0.4em] uppercase text-white/30 mb-6 italic">
          Academic Portfolio
        </p>
        <h1 className="text-7xl md:text-9xl font-serif text-white leading-none tracking-tighter mb-10">
          Pasan<br />Kalansooriya
        </h1>
        <p className="text-xl md:text-2xl text-white/50 leading-relaxed font-light font-serif italic max-w-2xl">
          PhD Researcher at the University of Melbourne. Bridging Human-Centered
          Computing, Computer Vision, and Neural Systems.
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
  );
}
