import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Download, FileText, Eye, CheckCircle2, ArrowUpRight, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

export default function ResumeSection({ onOpenResumeModal }) {
  const { personalInfo, education, workExperience } = portfolioData;

  return (
    <section id="resume" className="py-20 sm:py-28 px-5 sm:px-8 bg-[#121312] text-[#f5f5f0] border-b border-[#eae3d2]/10 relative overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#7c8e77]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-14">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#eae3d2]/60 mb-1">
              CURRICULUM VITAE
            </p>
            <h2 className="font-condensed text-6xl sm:text-8xl font-bold tracking-tight text-[#7c8e77] uppercase leading-[0.88] mb-4">
              RESUME
            </h2>
            <p className="text-xs sm:text-sm text-[#eae3d2]/70 leading-relaxed font-light">
              Download Shiloh Abellera's official PDF resume formatted for hiring managers, engineering leaders, and technology recruiters.
            </p>
          </div>

          <div className="lg:col-span-7 flex flex-wrap items-center justify-start lg:justify-end gap-3 self-end">
            {/* Primary Download Button */}
            <a
              href={personalInfo.resumeUrl}
              download="Shiloh_Abellera_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#eae3d2] text-[#121312] text-xs font-mono uppercase tracking-wider font-semibold hover:bg-white transition-all shadow-lg active:scale-95"
            >
              <Download className="w-4 h-4 text-[#121312]" />
              <span>Download Official Resume (PDF)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* In-Page Preview Trigger */}
            <button
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#181a18] border border-[#eae3d2]/25 text-xs font-mono uppercase tracking-wider text-[#eae3d2] hover:border-[#7c8e77] hover:text-[#7c8e77] transition-all cursor-pointer"
            >
              <Eye className="w-4 h-4 text-[#7c8e77]" />
              <span>Preview In-Page</span>
            </button>
          </div>
        </div>

        {/* Resume Preview Snapshot Card (Styled like an executive CV sheet) */}
        <div className="rounded-3xl bg-[#161816] border border-[#eae3d2]/15 p-6 sm:p-10 shadow-2xl relative">
          
          {/* Resume Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#eae3d2]/10 mb-6">
            <div>
              <h3 className="font-editorial-serif text-3xl sm:text-4xl text-[#eae3d2] font-normal">
                {personalInfo.name}
              </h3>
              <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#7c8e77] mt-1 font-semibold">
                {personalInfo.title} &bull; BSIT Senior
              </p>
            </div>

            <div className="flex flex-col text-xs font-mono text-[#eae3d2]/70 space-y-1">
              <span className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#7c8e77]" />
                {personalInfo.email}
              </span>
              <span className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#7c8e77]" />
                {personalInfo.phoneFormatted}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#7c8e77]" />
                {personalInfo.location}
              </span>
            </div>
          </div>

          {/* Quick CV Sections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            {/* Column 1: Objective & Degree */}
            <div className="p-4 rounded-2xl bg-[#1a1c1a] border border-[#eae3d2]/5">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#7c8e77] block mb-2 font-semibold">
                ACADEMIC CREDENTIAL
              </span>
              <h4 className="font-editorial-serif text-base text-[#eae3d2] mb-1">
                {education[0].degree}
              </h4>
              <p className="text-[#eae3d2]/60 font-light mb-3">
                {education[0].institution} &bull; {education[0].period}
              </p>
              <p className="text-[#eae3d2]/80 leading-relaxed font-light">
                Specialization in Web Systems Architecture, 3NF Relational Databases, and Full-Stack Engineering.
              </p>
            </div>

            {/* Column 2: Key Experience */}
            <div className="p-4 rounded-2xl bg-[#1a1c1a] border border-[#eae3d2]/5">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#7c8e77] block mb-2 font-semibold">
                VERIFIED WORK EXPERIENCE
              </span>
              <h4 className="font-editorial-serif text-base text-[#eae3d2] mb-1">
                {workExperience[0].role}
              </h4>
              <p className="text-[#eae3d2]/60 font-light mb-3">
                {workExperience[0].company} &bull; {workExperience[0].period}
              </p>
              <p className="text-[#eae3d2]/80 leading-relaxed font-light">
                Industrial line operations, machinery monitoring, quality inspection, and workplace safety compliance.
              </p>
            </div>

            {/* Column 3: Lead Capstone & Projects */}
            <div className="p-4 rounded-2xl bg-[#1a1c1a] border border-[#eae3d2]/5">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#7c8e77] block mb-2 font-semibold">
                FEATURED CAPSTONE
              </span>
              <h4 className="font-editorial-serif text-base text-[#eae3d2] mb-1">
                One Palayan – Kalinga Hub
              </h4>
              <p className="text-[#eae3d2]/60 font-light mb-3">
                CSWDO Palayan City &bull; ISO/IEC 25002 Tested
              </p>
              <p className="text-[#eae3d2]/80 leading-relaxed font-light">
                E-Governance appointment, beneficiary housing, and AICS crisis financial tracking system.
              </p>
            </div>
          </div>

          {/* Bottom Callout */}
          <div className="mt-8 pt-6 border-t border-[#eae3d2]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-xs font-mono text-[#eae3d2]/60 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#7c8e77]" />
              Official document: Shiloh_Abellera_Resume.pdf (Portable Document Format)
            </span>

            <a
              href={personalInfo.resumeUrl}
              download="Shiloh_Abellera_Resume.pdf"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#7c8e77] hover:text-[#eae3d2] transition-colors"
            >
              <span>Download Full Document</span>
              <Download className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
