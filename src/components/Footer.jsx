import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const { personalInfo } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 px-6 py-8 bg-[#09090b]">
      <div className="mx-auto max-w-6xl flex flex-wrap items-center justify-between gap-4 text-sm text-neutral-400">
        <div>
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p className="text-xs text-neutral-500 mt-0.5">
            NEUST College of Information and Communications Technology
          </p>
        </div>

        <div className="flex items-center gap-6">
          <p className="font-serif italic text-neutral-300 hidden sm:block">
            Designed &amp; built with care.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs text-neutral-300 hover:text-white hover:border-red-500/50 transition-all cursor-pointer"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-red-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}
