import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function TechMarquee() {
  const { marqueeSkills } = portfolioData;
  // Duplicate skills to ensure seamless continuous loop
  const repeatedSkills = [...marqueeSkills, ...marqueeSkills, ...marqueeSkills];

  return (
    <div className="border-y border-white/10 bg-[#0e0e12]/60 backdrop-blur-md overflow-hidden py-4 sm:py-5">
      <div className="animate-marquee gap-8 sm:gap-12 whitespace-nowrap text-lg sm:text-2xl font-serif italic text-neutral-400">
        {repeatedSkills.map((skill, index) => (
          <span key={index} className="flex items-center gap-8 sm:gap-12 hover:text-white transition-colors">
            <span>{skill}</span>
            <span className="text-red-500 font-sans not-italic text-sm sm:text-base drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
