import React from 'react';
import { Eye, Sparkles, LayoutGrid, Cpu } from 'lucide-react';

export default function VisionExpertise() {
  const pillars = [
    {
      id: "fullstack",
      title: "FULL STACK DEVELOPMENT",
      description: "Building functional, responsive, and user-focused web applications.",
      icon: Eye
    },
    {
      id: "uiux",
      title: "UI/UX DESIGN",
      description: "Creating intuitive interfaces and meaningful digital experiences.",
      icon: Sparkles
    },
    {
      id: "graphic",
      title: "GRAPHIC DESIGN",
      description: "Combining creativity, visual storytelling, and design principles.",
      icon: LayoutGrid
    },
    {
      id: "system",
      title: "SYSTEM DEVELOPMENT",
      description: "Developing practical solutions that address real-world needs.",
      icon: Cpu
    }
  ];

  return (
    <section id="vision" className="py-16 sm:py-20 px-5 sm:px-8 bg-[#0a2618] text-[#dfd7c7] border-b border-[#c5a059]/20 relative">
      <div className="mx-auto max-w-7xl">
        
        {/* Horizontal Information Layout matching Reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-[#c5a059]/15 pb-6 lg:pb-0 lg:pr-8">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#c5a059] block mb-2 font-semibold">
              CORE PILLARS &amp; PHILOSOPHY
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.05] tracking-tight text-[#dfd7c7]">
              VISION <br />
              <span className="font-editorial-serif italic text-[#e5c158] font-light">
                THAT DRIVES EXCELLENCE
              </span>
            </h2>
          </div>

          {/* Right Column: 4 Expertise Columns with Thin Vertical Separators */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              const isNotLast = index < pillars.length - 1;

              return (
                <div
                  key={pillar.id}
                  className={`lg:px-6 flex flex-col justify-between ${
                    isNotLast ? 'lg:border-r border-[#c5a059]/15' : ''
                  }`}
                >
                  <div>
                    {/* Minimalist Icon */}
                    <div className="mb-4 text-[#c5a059]">
                      <Icon className="w-5 h-5 stroke-[1.5]" />
                    </div>

                    {/* Pillar Title */}
                    <h3 className="font-cinzel text-xs font-semibold uppercase tracking-[0.18em] text-[#dfd7c7] mb-2 leading-snug">
                      {pillar.title}
                    </h3>

                    {/* Short Description from Spec */}
                    <p className="text-xs text-[#dfd7c7]/70 font-light leading-relaxed font-sans">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Micro Index Indicator */}
                  <span className="font-mono text-[9px] text-[#c5a059]/40 tracking-widest mt-6 block">
                    0{index + 1}
                  </span>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
