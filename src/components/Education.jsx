import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, BookOpen, Award, Calendar, MapPin } from 'lucide-react';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 sm:py-28 px-5 sm:px-8 bg-[#121312] text-[#f5f5f0] border-b border-[#eae3d2]/10 relative">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          <div className="lg:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#eae3d2]/60 mb-1">
              ACADEMIC FOUNDATION
            </p>
            <h2 className="font-condensed text-6xl sm:text-8xl font-bold tracking-tight text-[#7c8e77] uppercase leading-[0.88] mb-4">
              EDUCATION
            </h2>
            <p className="text-xs sm:text-sm text-[#eae3d2]/70 leading-relaxed font-light">
              Formal academic journey in Information Technology, web system architecture, and lifelong foundation in Nueva Ecija.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-6">
              {education.map((item, index) => {
                const isCollege = index === 0;

                return (
                  <div
                    key={index}
                    className={`p-6 sm:p-8 rounded-3xl transition-all border ${
                      isCollege
                        ? 'bg-[#181a18] border-[#7c8e77]/40 shadow-xl'
                        : 'bg-[#151715] border-[#eae3d2]/10 hover:border-[#eae3d2]/20'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                          isCollege
                            ? 'bg-[#252a24] text-[#7c8e77] border border-[#7c8e77]/40'
                            : 'bg-[#1e211e] text-[#eae3d2]/60'
                        }`}>
                          <GraduationCap className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#7c8e77] block font-semibold">
                            {item.level}
                          </span>
                          <h3 className="font-editorial-serif text-xl sm:text-2xl text-[#eae3d2] font-normal leading-tight">
                            {item.institution}
                          </h3>
                        </div>
                      </div>

                      <div className="text-left sm:text-right shrink-0">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase bg-[#1e211e] text-[#eae3d2] border border-[#eae3d2]/10">
                          <Calendar className="w-3 h-3 text-[#7c8e77]" />
                          {item.period}
                        </span>
                      </div>
                    </div>

                    {item.degree && (
                      <p className="text-xs sm:text-sm font-mono text-[#eae3d2]/90 font-medium mb-1 pl-0 sm:pl-13">
                        {item.degree} — <span className="text-[#7c8e77]">{item.specialization}</span>
                      </p>
                    )}

                    {item.location && (
                      <p className="text-[11px] font-mono text-[#eae3d2]/50 flex items-center gap-1 mb-3 pl-0 sm:pl-13">
                        <MapPin className="w-3 h-3 text-[#7c8e77]" />
                        {item.location}
                      </p>
                    )}

                    {item.campus && (
                      <p className="text-[11px] font-mono text-[#eae3d2]/50 flex items-center gap-1 mb-4 pl-0 sm:pl-13">
                        <MapPin className="w-3 h-3 text-[#7c8e77]" />
                        {item.campus} &bull; <span className="text-[#7c8e77] font-semibold">{item.status}</span>
                      </p>
                    )}

                    {item.highlights && item.highlights.length > 0 && (
                      <div className="pt-3 border-t border-[#eae3d2]/10 pl-0 sm:pl-13 space-y-2">
                        {item.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-[#eae3d2]/75 font-light">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#7c8e77] mt-1.5 shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
