import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight, ExternalLink, Sparkles, MapPin, GraduationCap, Palette, Music, CheckCircle2 } from 'lucide-react';

export default function Hero({ onOpenVercelGuide }) {
  const { personalInfo } = portfolioData;

  return (
    <section id="top" className="relative pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-24 px-5 sm:px-6 overflow-hidden">
      {/* Background ambient lighting effects matching reference */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[40rem] w-[40rem] rounded-full bg-red-600/10 blur-[130px]" />
        <div className="absolute top-1/3 -right-40 h-[38rem] w-[38rem] rounded-full bg-rose-600/10 blur-[140px]" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 h-[32rem] w-[32rem] rounded-full bg-red-950/25 blur-[160px]" />
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
              Full-stack developer, BSIT senior at{' '}
              <span className="text-white font-medium">Nueva Ecija University of Science and Technology</span>, 
              and creative artist. Lead developer of <strong className="text-red-400 font-medium">One-Palayan Kalinga Hub</strong> and <strong className="text-red-400 font-medium">ProcLink System</strong>.
            </p>

            {/* Creative Tagline */}
            <div className="mt-4 flex flex-wrap items-center gap-2.5 text-xs text-neutral-300">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10">
                <Palette className="w-3.5 h-3.5 text-amber-400" />
                <span>Charcoal Portrait Artist</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10">
                <Music className="w-3.5 h-3.5 text-rose-400" />
                <span>Vocalist &amp; Audio Editing</span>
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="mt-8 sm:mt-9 flex flex-wrap items-center gap-3.5">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-red-600 text-white px-6 py-3.5 text-sm font-semibold hover:bg-red-500 transition-all shadow-[0_0_30px_-6px_#ef4444] active:scale-95"
              >
                <span>View One-Palayan &amp; Projects</span>
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

            {/* Quick Stats Grid */}
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

          {/* Right Column: Hero Profile with GLOWING HEXAGON BACKGROUND */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[20rem] sm:max-w-[24rem] aspect-[4/5] flex items-center justify-center">
              {/* Layer 1: Ambient Red/Ruby Pulsing Halo behind the hexagon */}
              <div className="absolute inset-0 -m-6 bg-radial from-red-600/40 via-red-900/20 to-transparent blur-3xl animate-pulse" />

              {/* Layer 2: Rotating Cyber Hexagon Wireframe SVG */}
              <svg
                viewBox="0 0 400 460"
                className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[0_0_25px_rgba(239,68,68,0.7)]"
                fill="none"
              >
                {/* Outer Dashed Glowing Hexagon */}
                <polygon
                  points="200,10 380,115 380,345 200,450 20,345 20,115"
                  stroke="#ef4444"
                  strokeWidth="2.5"
                  strokeDasharray="8 6"
                  strokeOpacity="0.8"
                  className="animate-[spin_40s_linear_infinite] origin-center"
                />

                {/* Secondary Accent Hexagon */}
                <polygon
                  points="200,22 368,122 368,338 200,438 32,338 32,122"
                  stroke="#f87171"
                  strokeWidth="1.5"
                  strokeOpacity="0.4"
                />

                {/* Hexagon Corner Energy Nodes */}
                <circle cx="200" cy="10" r="4.5" fill="#ef4444" className="shadow-[0_0_10px_#ef4444]" />
                <circle cx="380" cy="115" r="4.5" fill="#ef4444" />
                <circle cx="380" cy="345" r="4.5" fill="#ef4444" />
                <circle cx="200" cy="450" r="4.5" fill="#ef4444" />
                <circle cx="20,345" r="4.5" fill="#ef4444" />
                <circle cx="20,115" r="4.5" fill="#ef4444" />
              </svg>

              {/* Layer 3: Main Glowing Hexagon Container Base */}
              <div
                className="absolute inset-4 overflow-hidden shadow-[0_0_50px_rgba(239,68,68,0.35)]"
                style={{
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  background: 'linear-gradient(145deg, rgba(239,68,68,0.25) 0%, rgba(20,20,26,0.95) 45%, #09090c 100%)',
                }}
              >
                {/* Tech grid texture inside hexagon */}
                <div className="absolute inset-0 bg-grid-pattern opacity-40" />
                
                {/* Central radial energy spotlight behind Shiloh's head */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 w-52 h-52 bg-gradient-to-b from-red-500/40 via-red-600/15 to-transparent rounded-full blur-2xl" />
              </div>

              {/* Layer 4: Shiloh's Background-Removed Cutout Portrait */}
              <div className="relative z-10 w-full h-full flex items-end justify-center pb-2">
                <img
                  src={personalInfo.photo}
                  alt="Portrait of Shiloh Abellera"
                  className="w-[88%] sm:w-[84%] max-h-[96%] object-contain object-bottom drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)] hover:scale-[1.02] transition-transform duration-500 ease-out"
                  loading="eager"
                />
              </div>

              {/* Top Floating Badge: Capstone Lead */}
              <div className="absolute top-2 left-0 z-20">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-black/80 backdrop-blur-md text-red-300 border border-red-500/40 shadow-lg">
                  <CheckCircle2 className="w-3 h-3 text-red-400" />
                  One-Palayan Capstone Lead
                </span>
              </div>

              {/* Bottom Card Footer Badge */}
              <div className="absolute bottom-1 inset-x-4 flex items-center justify-between text-xs z-20">
                <div className="bg-black/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 shadow-xl">
                  <span className="font-serif italic text-sm text-white font-medium">
                    {personalInfo.name}
                  </span>
                </div>
                <span className="rounded-full bg-red-600 text-white font-mono text-[11px] font-bold px-2.5 py-1 shadow-lg border border-red-400/40">
                  {personalInfo.countryCode}
                </span>
              </div>

              {/* Floating Bottom-Left Specialization Pill */}
              <div className="absolute -bottom-4 -left-3 sm:-left-6 z-20 bg-[#16161d]/95 backdrop-blur-xl border border-red-500/40 px-3.5 py-2 rounded-xl shadow-2xl flex items-center gap-2">
                <span className="text-base">🎨</span>
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-wider text-neutral-400">Creative &amp; Code</p>
                  <p className="text-xs font-semibold text-white">Charcoal Artist &amp; Dev</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
