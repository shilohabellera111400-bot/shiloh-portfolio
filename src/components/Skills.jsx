import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Security', 'Core', 'Tools'];

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter(s => s.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="skills" className="px-5 sm:px-6 py-20 sm:py-32 border-y border-white/10 bg-[#0d0d12]/30 relative">
      <div className="mx-auto max-w-6xl grid lg:grid-cols-12 gap-10 lg:gap-14">
        {/* Left Column: Heading and Description */}
        <div className="lg:col-span-4">
          <p className="text-xs sm:text-sm uppercase tracking-[0.28em] text-red-400 font-semibold mb-3">
            Toolkit
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl tracking-tight text-white">
            Skills &amp; <span className="italic text-red-500">tools</span>.
          </h2>
          <p className="mt-5 text-sm sm:text-base text-neutral-400 leading-relaxed font-light">
            The programming languages, frameworks, database architectures, and engineering practices I utilize to ship production-ready software.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-red-600 text-white shadow-[0_0_15px_-3px_#ef4444]'
                    : 'bg-white/[0.04] text-neutral-400 hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Numbered Skill Pills matching Rayson's portfolio */}
        <div className="lg:col-span-8 flex flex-wrap gap-2.5 sm:gap-3 content-start">
          {filteredSkills.map((skill) => (
            <span
              key={skill.number}
              className="group px-3.5 sm:px-4 py-2.5 rounded-full border border-white/10 bg-[#121217] text-xs sm:text-sm text-neutral-300 hover:border-red-500/50 hover:text-white hover:bg-[#181822] transition-all duration-200 cursor-default shadow-sm hover:scale-105"
            >
              <span className="text-neutral-500 font-mono text-[10px] sm:text-xs mr-2 group-hover:text-red-400 transition-colors">
                {skill.number}
              </span>
              <span>{skill.name}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
