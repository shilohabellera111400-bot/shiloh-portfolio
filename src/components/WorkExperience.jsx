import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, ShieldCheck, Wrench } from 'lucide-react';

export default function WorkExperience() {
  const { workExperience } = portfolioData;

  return (
    <section id="experience" className="py-20 sm:py-28 px-5 sm:px-8 bg-[#121312] text-[#f5f5f0] border-b border-[#eae3d2]/10 relative">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          <div className="lg:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#eae3d2]/60 mb-1">
              PRACTICAL BACKGROUND
            </p>
            <h2 className="font-condensed text-6xl sm:text-8xl font-bold tracking-tight text-[#7c8e77] uppercase leading-[0.88] mb-4">
              EXPERIENCE
            </h2>
            <p className="text-xs sm:text-sm text-[#eae3d2]/70 leading-relaxed font-light">
              Hands-on operational and creative production engagements building industrial discipline, safety adherence, and spatial craftsmanship.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-8">
            {workExperience.map((job, index) => (
              <div
                key={index}
                className="p-6 sm:p-8 rounded-3xl bg-[#181a18] border border-[#eae3d2]/12 shadow-xl hover:border-[#7c8e77]/40 transition-all"
              >
                {/* Job Title & Period */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#252a24] text-[#7c8e77] border border-[#7c8e77]/40 flex items-center justify-center shrink-0">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#7c8e77] block font-semibold">
                        {job.type}
                      </span>
                      <h3 className="font-editorial-serif text-2xl text-[#eae3d2] font-normal leading-tight">
                        {job.role}
                      </h3>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase bg-[#1e211e] text-[#eae3d2] border border-[#eae3d2]/10 self-start sm:self-auto">
                    <Calendar className="w-3 h-3 text-[#7c8e77]" />
                    {job.period}
                  </span>
                </div>

                {/* Company & Location */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-[#eae3d2]/70 mb-5 pl-0 sm:pl-13">
                  <span className="font-medium text-[#eae3d2]">{job.company}</span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1 text-[#eae3d2]/50">
                    <MapPin className="w-3 h-3 text-[#7c8e77]" />
                    {job.location}
                  </span>
                </div>

                {/* Responsibilities */}
                <div className="pl-0 sm:pl-13 space-y-2.5 mb-6">
                  {job.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#eae3d2]/80 font-light leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#7c8e77] shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Skills Acquired Pills */}
                {job.skillsLearned && (
                  <div className="pt-4 border-t border-[#eae3d2]/10 pl-0 sm:pl-13 flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#eae3d2]/50 mr-1">
                      Competencies:
                    </span>
                    {job.skillsLearned.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-0.5 rounded-md text-[10px] font-mono uppercase tracking-wider bg-[#222722] text-[#7c8e77] border border-[#7c8e77]/20"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
