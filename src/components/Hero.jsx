import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight, ExternalLink, Sparkles, MapPin, GraduationCap, CheckCircle2 } from 'lucide-react';

export default function Hero({ onOpenVercelGuide }) {
  const { personalInfo } = portfolioData;

  return (
    <section id="top" className="relative pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-24 px-5 sm:px-6 overflow-hidden">
      {/* Background ambient lighting effects matching reference */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[38rem] w-[38rem] rounded-full bg-red-600/10 blur-[130px]" />
        <div className="absolute top-1/3 -right-40 h-[36rem] w-[36rem] rounded-full bg-rose-600/10 blur-[140px]" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 h-[30rem] w-[30rem] rounded-full bg-red-950/20 blur-[160px]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-100" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Bio */}
          <div className="lg:col-span-7 min-w-0">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 text-[11px] sm:text-xs uppercase tracking-[0.25em] text-neutral-300 mb-6 border border-white/10 bg-white/[0.03] backdrop-blur-md rounded-full px-4 py-1.5 shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span>{personalInfo.badge}</span>
            </div>

            {/* Big Display Name */}
            <h1 className="font-serif text-[clamp(2.8rem,10vw,5.5rem)] leading-[0.92] tracking-tight text-white">
              {personalInfo.firstName}
              <br />
              <span className="italic bg-gradient-to-r from-red-500 via-rose-400 to-red-400 bg-clip-text text-transparent drop-shadow-sm">
                {personalInfo.lastName}.
              </span>
            </h1>

            {/* Subtitle / Bio */}
            <p className="mt-6 sm:mt-7 max-w-xl text-base sm:text-lg text-neutral-300 leading-relaxed font-sans font-light">
              Full-stack developer &amp; BSIT 4th-year student at{' '}
              <span className="text-white font-medium">Nueva Ecija University of Science and Technology</span>. 
              I engineer resilient web applications, digital public services, and database-driven solutions.
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-8 sm:mt-9 flex flex-wrap items-center gap-3.5">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-red-600 text-white px-6 py-3.5 text-sm font-semibold hover:bg-red-500 transition-all shadow-[0_0_30px_-6px_#ef4444] active:scale-95"
              >
                <span>View selected work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#achievements"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 sm:px-6 py-3.5 text-sm font-medium text-neutral-200 hover:bg-white/10 hover:border-white/30 transition-all active:scale-95"
              >
                <span>My Achievements</span>
                <Sparkles className="w-4 h-4 text-amber-400" />
              </a>

              <button
                onClick={onOpenVercelGuide}
                className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/30 px-5 py-3.5 text-sm font-medium text-red-300 hover:bg-red-900/40 hover:border-red-500/60 transition-all active:scale-95 cursor-pointer"
              >
                <span>Deploy to Vercel</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Metadata Pills */}
            <div className="mt-9 flex flex-wrap items-center gap-x-4 sm:gap-x-5 gap-y-2 text-[11px] sm:text-xs uppercase tracking-widest text-neutral-400 border-t border-white/10 pt-6">
              <span className="flex items-center gap-1.5 text-neutral-300 font-medium">
                <GraduationCap className="w-3.5 h-3.5 text-red-400" />
                {personalInfo.year}
              </span>
              <span className="h-1 w-1 rounded-full bg-neutral-600" />
              <span className="text-neutral-300 font-medium">NEUST CICT</span>
              <span className="h-1 w-1 rounded-full bg-neutral-600" />
              <span className="flex items-center gap-1 text-neutral-300 font-medium">
                <MapPin className="w-3.5 h-3.5 text-red-400" />
                {personalInfo.location}
              </span>
            </div>

            {/* Quick Stats Grid from Reference Image 1 */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {personalInfo.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3 sm:p-3.5 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:border-red-500/30 transition-all"
                >
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-1">
                    {stat.value}
                  </div>
                  <div className="text-[11px] sm:text-xs text-neutral-400 mt-0.5 leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Profile Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative mx-auto w-full max-w-[19rem] sm:max-w-sm md:max-w-[22rem]">
              {/* Outer atmospheric gradient glow */}
              <div className="absolute -inset-6 bg-gradient-to-br from-red-600/30 via-rose-500/20 to-transparent rounded-[3rem] rotate-3 blur-2xl" />
              
              {/* Inner accent ring */}
              <div className="absolute -inset-1 bg-gradient-to-br from-red-500/40 via-red-600/20 to-neutral-800 rounded-[2.3rem] rotate-2" />

              {/* Main Card Container */}
              <div className="relative overflow-hidden rounded-[2.2rem] border border-white/15 bg-[#121216] shadow-2xl group">
                {/* Photo of Shiloh */}
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-neutral-900">
                  <img
                    src={personalInfo.photo}
                    alt="Portrait of Shiloh Abellera"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                  {/* Subtle vignette gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-black/20" />
                  <div className="absolute inset-0 bg-gradient-to-r from-red-950/20 via-transparent to-black/30" />
                </div>

                {/* Floating status tag on the photo */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-black/70 backdrop-blur-md text-red-300 border border-red-500/30">
                    <CheckCircle2 className="w-3 h-3 text-red-400" />
                    Verified Developer
                  </span>
                </div>

                {/* Bottom card footer badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs z-10">
                  <div className="bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 shadow-md">
                    <span className="font-serif italic text-sm text-white font-medium">
                      {personalInfo.name}
                    </span>
                  </div>
                  <span className="rounded-full bg-red-600/90 text-white font-mono text-[11px] font-bold px-2.5 py-1 shadow-md border border-red-400/40">
                    {personalInfo.countryCode}
                  </span>
                </div>
              </div>

              {/* Floating tech badge pill */}
              <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-[#16161d]/95 backdrop-blur-xl border border-red-500/30 px-3.5 py-2 rounded-xl shadow-xl flex items-center gap-2">
                <span className="text-base">⚡</span>
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-wider text-neutral-400">Specialization</p>
                  <p className="text-xs font-semibold text-white">Full-Stack &amp; PHP/MySQL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
