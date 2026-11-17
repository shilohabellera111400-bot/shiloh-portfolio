import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUpRight, Download, FolderCode, Mail } from 'lucide-react';

export default function Hero({ onOpenResumeModal }) {
  const { personalInfo } = portfolioData;

  return (
    <section id="top" className="relative pt-16 sm:pt-20 pb-10 sm:pb-14 px-5 sm:px-8 bg-gradient-to-b from-[#082216] via-[#0b2b1c] to-[#082015] text-[#dfd7c7] overflow-hidden border-b border-[#c5a059]/20">
      
      {/* Background Emerald Ambient Velvet Glow */}
      <div className="absolute top-0 right-1/4 w-[700px] h-[700px] rounded-full bg-radial from-[#155a36]/65 via-[#0e3a23]/35 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] rounded-full bg-[#1b6b42]/20 blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">

        {/* 1. BIG WORD "PORTFOLIO" PLACED AFTER THE HEADER (Adjusted size so full word is 100% visible) */}
        <div className="relative w-full pt-1 sm:pt-3 select-none pointer-events-none text-center overflow-visible">
          <h1 className="font-cinzel text-[11vw] sm:text-[11.5vw] lg:text-[11.8vw] leading-[0.88] tracking-[0.02em] uppercase font-normal text-transparent bg-clip-text bg-gradient-to-b from-[#f5d77f] via-[#c5a059] to-[#6d5622] drop-shadow-[0_10px_35px_rgba(0,0,0,0.85)] inline-block whitespace-nowrap">
            PORTFOLIO
          </h1>
        </div>

        {/* 2. CENTRAL COMPOSITION: Clean Grid Layout with Zero Side-Column Collisions */}
        <div className="relative pt-2 sm:pt-4 grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 items-end z-10">
          
          {/* Left Column: Hello, Introduction & Actions (Adjusted upward for ideal vertical balance) */}
          <div className="lg:col-span-4 pb-2 sm:pb-4 order-2 lg:order-1 z-20 transform -translate-y-8 sm:-translate-y-12 lg:-translate-y-16 xl:-translate-y-20">
            
            <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#c5a059] mb-2 font-semibold">
              HELLO, I'M
            </p>

            <h2 className="font-cinzel text-4xl sm:text-5xl lg:text-[3.3rem] xl:text-[3.8rem] font-normal tracking-tight text-[#dfd7c7] leading-[0.95] mb-3.5">
              SHILOH<br />
              <span className="font-editorial-serif italic text-[#e5c158] font-light">
                ABELLERA
              </span>
            </h2>

            {/* Official Title Pill */}
            <div className="inline-block px-3 py-1 rounded-md bg-[#0d2f1f] border border-[#c5a059]/35 text-[#dfd7c7] text-[11px] font-mono tracking-wider uppercase mb-4 shadow-sm">
              FULL STACK DEVELOPER &bull; GRAPHIC DESIGNER
            </div>

            {/* Professional Statement */}
            <p className="text-xs sm:text-[13px] text-[#dfd7c7]/85 font-light leading-relaxed font-sans max-w-sm mb-6">
              "I am a dedicated and creative IT professional who enjoys transforming ideas into functional digital experiences. Combining technical knowledge with visual creativity, I continuously explore new technologies, develop meaningful solutions, and create designs with purpose."
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <a
                href="#work"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#d4af37] via-[#c5a059] to-[#aa8028] text-[#071d12] text-[11px] font-mono font-bold tracking-wider uppercase hover:brightness-110 transition-all shadow-[0_0_18px_rgba(197,160,89,0.35)] active:scale-95"
              >
                <FolderCode className="w-3.5 h-3.5" />
                <span>EXPLORE WORK</span>
                <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Shiloh_Abellera_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-[#c5a059]/35 bg-[#0d2f1f] text-[#dfd7c7] text-[11px] font-mono tracking-wider uppercase hover:border-[#e5c158] hover:text-[#e5c158] transition-all"
              >
                <Download className="w-3 h-3 text-[#c5a059]" />
                <span>RESUME</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-white/10 text-[11px] font-mono tracking-wider uppercase text-[#dfd7c7]/75 hover:border-[#c5a059] hover:text-white transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>COLLABORATE</span>
              </a>
            </div>

          </div>

          {/* Center Column: Shiloh's Hero Portrait (Refined, perfectly balanced centerpiece scale) */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-end order-1 lg:order-2 -mt-10 sm:-mt-16 lg:-mt-20 xl:-mt-24">
            
            {/* Deep Emerald Velvet Ambient Glow Circle behind the portrait */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[390px] lg:w-[460px] xl:w-[500px] aspect-square rounded-full bg-radial from-[#155a36]/85 via-[#0e3b24]/50 to-transparent blur-[55px] z-0 pointer-events-none" />

            {/* Shiloh's Image in Front of "PORTFOLIO" with refined, graceful scale */}
            <div className="relative z-10 w-full max-w-[360px] sm:max-w-[430px] lg:max-w-[490px] xl:max-w-[530px] flex flex-col items-center justify-end">
              
              {/* Rotating Luxury Circular Stamp positioned gracefully right beside the right shoulder */}
              <div className="absolute top-[62%] sm:top-[64%] lg:top-[66%] -right-2 sm:-right-4 lg:-right-6 xl:-right-8 z-20 pointer-events-none">
                <div className="relative w-20 h-20 sm:w-22 sm:h-22 lg:w-24 lg:h-24 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
                    <path
                      id="luxuryCenterStamp"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                    />
                    <text className="text-[8.5px] font-cinzel font-semibold tracking-[0.25em] fill-[#c5a059] uppercase">
                      <textPath href="#luxuryCenterStamp">
                        • DESIGNING PURPOSE • BUILDING LEGACY •
                      </textPath>
                    </text>
                  </svg>
                  {/* Center 8-point gold star */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#e5c158]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Shiloh's Hero Cutout Centerpiece */}
              <img
                src="/images/shiloh-blazer-cutout.png?v=2"
                alt="Shiloh Abellera"
                className="w-full h-auto max-h-[520px] sm:max-h-[590px] lg:max-h-[650px] xl:max-h-[690px] object-contain object-bottom filter contrast-[1.05] brightness-[0.98] drop-shadow-[0_25px_45px_rgba(0,0,0,0.85)] transition-all duration-500"
                loading="eager"
              />
            </div>

          </div>

          {/* Right Column: Stacked Labels, Location, Verified Stats & Live Status (Adjusted upward in symmetry with left side) */}
          <div className="lg:col-span-3 pb-2 sm:pb-4 flex flex-col justify-end text-left lg:text-right order-3 z-20 transform -translate-y-8 sm:-translate-y-12 lg:-translate-y-16 xl:-translate-y-20">
            
            {/* Small Stacked Professional Labels */}
            <div className="space-y-1 mb-6 font-mono text-[10px] uppercase tracking-[0.28em] text-[#c5a059]">
              <p>FULL STACK DEVELOPMENT</p>
              <p>UI/UX DESIGN</p>
              <p>CREATIVE STRATEGY</p>
            </div>

            {/* Quick Stats Grid */}
            <div className="space-y-3 mb-6">
              {personalInfo.stats.map((s, idx) => (
                <div key={idx} className="space-y-0.5">
                  <span className="font-cinzel text-xl sm:text-2xl text-[#e5c158] font-bold block leading-none">
                    {s.value}
                  </span>
                  <span className="text-[10px] font-mono uppercase text-[#dfd7c7]/65 tracking-wider">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="w-10 h-px bg-[#c5a059]/30 lg:ml-auto mb-4" />

            {/* Location */}
            <div className="space-y-1">
              <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#c5a059]">
                LOCATION &bull; REGION
              </p>
              <p className="text-xs font-mono uppercase tracking-wider text-[#dfd7c7] font-medium leading-snug">
                BONGABON, NUEVA ECIJA &bull; PH
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
