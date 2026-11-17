import React from 'react';
import { Monitor, Globe, FileCode2, Layers, Cpu, Rocket, Palette } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "UI/UX & FRONTEND",
      description: "Creating intuitive, engaging interfaces that deliver seamless, responsive user experiences.",
      icon: (
        <svg className="w-5 h-5 text-[#eae3d2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      tags: ["React.js", "Tailwind CSS", "Semantic HTML5"]
    },
    {
      title: "WEB SYSTEMS",
      description: "Designing modern, secure web applications with robust PHP backends and normalized MySQL 3NF databases.",
      icon: (
        <svg className="w-5 h-5 text-[#eae3d2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      tags: ["PHP & MVC", "MySQL 3NF", "REST APIs"]
    },
    {
      title: "SYSTEM ARCHITECTURE",
      description: "Building multi-tier approval pipelines (ProcLink PRMS) and e-governance solutions (One-Palayan Hub).",
      icon: (
        <svg className="w-5 h-5 text-[#eae3d2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
      tags: ["V-Model SDLC", "Role-Based Access", "ISO/IEC 25002"]
    },
    {
      title: "PYTHON & CREATIVE",
      description: "Developing interactive Pygame physics engines, Cartesian coordinate games, and hyper-realistic charcoal art.",
      icon: (
        <svg className="w-5 h-5 text-[#eae3d2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      ),
      tags: ["Python 3", "Pygame", "Fine Art Realism"]
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-24 px-5 sm:px-8 bg-[#121312] text-[#f5f5f0] border-b border-[#eae3d2]/10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Heading matching reference */}
          <div className="lg:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#eae3d2]/60 mb-1">
              WHAT I DO
            </p>
            <h2 className="font-condensed text-5xl sm:text-7xl font-bold tracking-tight text-[#7c8e77] uppercase leading-[0.9]">
              SERVICES
            </h2>
          </div>

          {/* Right Column: 4 Columns with subtle divider borders */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-0 sm:divide-x divide-[#eae3d2]/15">
            {services.map((item, index) => (
              <div
                key={index}
                className="group flex flex-col justify-between p-2 sm:px-6 sm:first:pl-0 sm:last:pr-0"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#1e211e] border border-[#eae3d2]/10 flex items-center justify-center mb-5 group-hover:border-[#7c8e77] transition-colors">
                    {item.icon}
                  </div>

                  <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#eae3d2] font-semibold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#eae3d2]/70 leading-relaxed font-light mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#eae3d2]/10">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono text-[#7c8e77] uppercase tracking-wider"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
