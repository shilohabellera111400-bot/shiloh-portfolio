import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Quote, Sparkles } from 'lucide-react';

export default function QuoteCard() {
  const { personalInfo } = portfolioData;

  return (
    <section className="px-5 sm:px-6 py-12 relative overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-700 via-red-900 to-[#1e0709] border border-red-500/40 p-8 sm:p-12 shadow-2xl">
          {/* Subtle geometric pattern overlay */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-red-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            {/* Quote Icon */}
            <div className="flex items-center gap-2 text-red-300 text-sm font-semibold uppercase tracking-wider mb-4">
              <Quote className="w-6 h-6 text-red-200 fill-red-200/30" />
              <span>Developer Philosophy</span>
            </div>

            {/* The Quote */}
            <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-medium leading-snug tracking-tight">
              "{personalInfo.quote}"
            </blockquote>

            {/* Author Attribution */}
            <div className="mt-8 flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-white/20">
              <div>
                <p className="font-serif italic text-2xl text-white font-semibold tracking-wide">
                  {personalInfo.name}
                </p>
                <p className="text-xs text-red-200 tracking-wider uppercase mt-0.5">
                  {personalInfo.role} · NEUST
                </p>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-xs text-neutral-200 font-mono">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Crafting Scalable Systems</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
