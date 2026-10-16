import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Award, Trophy, Medal, Star, CheckCircle, ExternalLink, X, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Achievements() {
  const { achievements } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModal, setActiveModal] = useState(null);

  const categories = ['All', 'Capstone', 'Technical', 'Creative', 'Academic', 'Certification', 'Leadership'];

  const filteredAchievements = selectedCategory === 'All'
    ? achievements
    : achievements.filter(a => a.category.toLowerCase() === selectedCategory.toLowerCase());

  const handleOpenDetail = (achievement) => {
    setActiveModal(achievement);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#ef4444', '#f87171', '#ffffff', '#fbbf24']
    });
  };

  return (
    <section id="achievements" className="px-5 sm:px-6 py-20 sm:py-32 border-t border-white/10 bg-[#0d0d12]/50 relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-[26rem] w-[26rem] rounded-full bg-red-600/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-6xl relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.28em] text-red-400 font-semibold mb-3">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>Honors &amp; Milestones</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-tight text-white">
              Achievements &amp; <span className="italic text-red-500">Recognition</span>.
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md leading-relaxed font-light">
            Recognitions for academic excellence, technical execution, and community-driven capstone software engineering.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-red-600 text-white shadow-[0_0_20px_-4px_#ef4444] border border-red-400/40'
                  : 'bg-white/[0.04] text-neutral-400 hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpenDetail(item)}
              className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl border border-white/10 bg-[#121218]/80 backdrop-blur-md hover:border-red-500/50 hover:bg-[#161622] transition-all duration-300 cursor-pointer shadow-lg hover:-translate-y-1"
            >
              <div>
                {/* Header: Icon & Category badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="h-12 w-12 rounded-2xl bg-red-950/60 border border-red-500/30 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-neutral-300">
                      {item.category}
                    </span>
                    <span className="text-xs font-mono text-neutral-400">{item.year}</span>
                  </div>
                </div>

                {/* Title & Institution */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-red-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-medium text-neutral-400 mt-1 mb-4 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  {item.institution}
                </p>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light mb-5">
                  {item.summary}
                </p>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-red-400 group-hover:text-red-300 font-semibold">
                <span>View Full Credential</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Dialog for In-Depth Credential View */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl rounded-3xl border border-red-500/40 bg-[#13131b] p-6 sm:p-8 shadow-2xl overflow-hidden">
            {/* Ambient corner glow */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 rounded-full bg-red-600/20 blur-3xl" />

            {/* Close Button */}
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="flex items-center gap-3.5 mb-4">
              <span className="text-3xl">{activeModal.icon}</span>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/30">
                  {activeModal.category} Recognition
                </span>
                <p className="text-xs text-neutral-400 mt-0.5">{activeModal.year}</p>
              </div>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {activeModal.title}
            </h3>
            <p className="text-sm font-medium text-neutral-300 mt-1 mb-5">
              Awarded by: {activeModal.institution}
            </p>

            <div className="p-4 rounded-2xl border border-white/10 bg-white/[0.02] mb-6">
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                {activeModal.summary}
              </p>
            </div>

            <div className="space-y-2.5 mb-7">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-neutral-400">
                Key Highlights &amp; Evaluation Criteria:
              </h4>
              {activeModal.details.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                  <CheckCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => setActiveModal(null)}
                className="px-5 py-2.5 rounded-full text-xs font-semibold bg-white/10 text-white hover:bg-white/15 transition-all cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
