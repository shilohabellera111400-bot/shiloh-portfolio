import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function Footer() {
  const { personalInfo } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#c5a059]/20 px-6 sm:px-8 py-8 bg-[#06180e] text-[#dfd7c7]/70">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-6 text-[10px] font-mono tracking-widest uppercase">
        
        {/* Left: Copyright */}
        <div>
          <p>© {new Date().getFullYear()} {personalInfo.name.toUpperCase()}. ALL RIGHTS RESERVED.</p>
          <p className="text-[#c5a059]/70 text-[9px] mt-0.5">
            NEUST CICT &bull; BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY
          </p>
        </div>

        {/* Center: Social links */}
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#e5c158] transition-colors"
          >
            GITHUB
          </a>
          <span>&bull;</span>
          <a
            href={`mailto:${personalInfo.email}`}
            className="hover:text-[#e5c158] transition-colors"
          >
            EMAIL
          </a>
          <span>&bull;</span>
          <a
            href={personalInfo.resumeUrl}
            download="Shiloh_Abellera_Resume.pdf"
            className="hover:text-[#e5c158] transition-colors"
          >
            RESUME
          </a>
        </div>

        {/* Right: Tagline matching Reference & Back to Top */}
        <div className="flex items-center gap-6">
          <p className="font-cinzel text-[10px] tracking-[0.25em] text-[#c5a059] hidden md:block">
            DESIGNING PURPOSE &bull; BUILDING LEGACY
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#c5a059]/35 bg-[#0a271a] text-[10px] font-mono tracking-widest text-[#dfd7c7] hover:border-[#e5c158] hover:text-[#e5c158] transition-all cursor-pointer"
            aria-label="Back to top"
          >
            <span>TOP</span>
            <ArrowUp className="w-3 h-3 text-[#c5a059]" />
          </button>
        </div>

      </div>
    </footer>
  );
}
