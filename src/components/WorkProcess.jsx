import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Search, Lightbulb, Palette, Code2, Rocket } from 'lucide-react';

export default function WorkProcess() {
  const { workProcess } = portfolioData;

  const getStepIcon = (index) => {
    switch (index) {
      case 0: return <Search className="w-5 h-5 text-red-400" />;
      case 1: return <Lightbulb className="w-5 h-5 text-amber-400" />;
      case 2: return <Palette className="w-5 h-5 text-rose-400" />;
      case 3: return <Code2 className="w-5 h-5 text-red-400" />;
      case 4: return <Rocket className="w-5 h-5 text-emerald-400" />;
      default: return <Code2 className="w-5 h-5 text-red-400" />;
    }
  };

  return (
    <section id="process" className="px-5 sm:px-6 py-20 sm:py-32 relative">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14 sm:mb-16">
          <div>
            <p className="text-xs sm:text-sm uppercase tracking-[0.28em] text-red-400 font-semibold mb-3">
              Workflow &amp; Methodology
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-tight text-white">
              My Work <span className="italic text-red-500">Process</span>.
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md leading-relaxed font-light">
            How I transform complex community and client problems into scalable, production-grade applications.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-5 gap-4 sm:gap-6 relative">
          {workProcess.map((step, idx) => (
            <div
              key={step.number}
              className="relative p-6 rounded-3xl border border-white/10 bg-[#121217]/70 backdrop-blur-md hover:border-red-500/40 hover:bg-[#161622] transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                {/* Step Top: Number and Icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-xs sm:text-sm font-bold text-red-400 bg-red-950/60 border border-red-500/30 px-2.5 py-1 rounded-full">
                    {step.number}
                  </span>
                  <div className="p-2 rounded-xl bg-white/[0.03] border border-white/10 group-hover:scale-110 transition-transform">
                    {getStepIcon(idx)}
                  </div>
                </div>

                {/* Phase Name */}
                <h3 className="font-serif text-xl font-bold text-white tracking-tight mb-2 group-hover:text-red-400 transition-colors">
                  {step.phase}
                </h3>

                {/* Summary */}
                <p className="text-xs text-neutral-300 font-medium leading-relaxed mb-3">
                  {step.summary}
                </p>

                {/* Detailed Description */}
                <p className="text-xs text-neutral-400 leading-relaxed font-light">
                  {step.details}
                </p>
              </div>

              {/* Progress Indicator line */}
              <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                <span>Phase {step.number}</span>
                <span className="text-red-500 font-bold">✓</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
