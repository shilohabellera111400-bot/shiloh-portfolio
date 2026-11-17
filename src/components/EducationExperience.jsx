import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Briefcase, Award, Calendar, MapPin, ZoomIn, X } from 'lucide-react';

export default function EducationExperience() {
  const { education, workExperience, certifications } = portfolioData;
  const [activeTab, setActiveTab] = useState('education'); // 'education', 'experience', 'certifications'
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="timeline" className="py-20 sm:py-28 px-5 sm:px-8 bg-[#082015] text-[#dfd7c7] border-b border-[#c5a059]/20 relative">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#c5a059]/15 pb-6 mb-12">
          <div>
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#c5a059] block mb-2 font-semibold">
              TRAJECTORY &amp; CREDENTIALS
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#dfd7c7]">
              EDUCATION &amp; EXPERIENCE
            </h2>
          </div>

          {/* Minimalist Switcher */}
          <div className="inline-flex items-center p-1 rounded-full bg-[#0a271a] border border-[#c5a059]/30">
            <button
              onClick={() => setActiveTab('education')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#c5a059] text-[#071d12] font-bold shadow-sm'
                  : 'text-[#dfd7c7]/70 hover:text-white'
              }`}
            >
              Education
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'experience'
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#c5a059] text-[#071d12] font-bold shadow-sm'
                  : 'text-[#dfd7c7]/70 hover:text-white'
              }`}
            >
              Work Experience
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'certifications'
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#c5a059] text-[#071d12] font-bold shadow-sm'
                  : 'text-[#dfd7c7]/70 hover:text-white'
              }`}
            >
              Certifications ({certifications.length})
            </button>
          </div>
        </div>

        {/* Tab 1: Educational Background */}
        {activeTab === 'education' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0d2f1f] border border-[#c5a059]/25 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
              >
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-[#c5a059]/15 mb-3">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#c5a059]">
                      {edu.level}
                    </span>
                    <span className="font-mono text-[9px] text-[#dfd7c7]/50">
                      {edu.period}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-sm sm:text-base font-semibold text-[#dfd7c7] mb-1">
                    {edu.institution}
                  </h3>

                  {edu.degree && (
                    <p className="text-xs font-mono text-[#e5c158] uppercase tracking-wider mb-2">
                      {edu.degree}
                    </p>
                  )}

                  <p className="text-xs text-[#dfd7c7]/65 font-light leading-relaxed font-sans mb-4">
                    {edu.location} &bull; <strong className="text-[#c5a059] font-normal">{edu.status}</strong>
                  </p>

                  <ul className="space-y-1.5 border-t border-white/5 pt-3">
                    {edu.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="text-[11px] text-[#dfd7c7]/75 font-light leading-snug flex items-start gap-1.5">
                        <span className="text-[#c5a059] mt-0.5">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Work Experience */}
        {activeTab === 'experience' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workExperience.map((exp, idx) => (
              <div
                key={idx}
                className="p-7 sm:p-8 rounded-2xl bg-[#0d2f1f] border border-[#c5a059]/25 shadow-[0_15px_35px_rgba(0,0,0,0.6)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#c5a059]/15 mb-4">
                    <span className="font-mono text-[10px] text-[#c5a059] uppercase tracking-widest">
                      {exp.period}
                    </span>
                    <span className="font-mono text-[9px] text-[#dfd7c7]/60 uppercase px-2.5 py-0.5 rounded-full border border-white/10">
                      {exp.type}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-xl sm:text-2xl text-[#dfd7c7] font-semibold mb-1">
                    {exp.role}
                  </h3>

                  <p className="font-mono text-xs text-[#e5c158] uppercase tracking-wider mb-4">
                    {exp.company} &bull; {exp.location}
                  </p>

                  <div className="space-y-2 mb-6">
                    {exp.responsibilities.map((r, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2 text-xs text-[#dfd7c7]/80 font-light leading-relaxed">
                        <span className="text-[#c5a059] font-bold">•</span>
                        <span>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#c5a059]/15 flex flex-wrap gap-2">
                  {exp.skillsLearned.map((s, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] font-mono px-3 py-1 rounded-full bg-[#0a271a] border border-[#c5a059]/25 text-[#c5a059]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Official Certifications with Modal */}
        {activeTab === 'certifications' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="group cursor-pointer p-5 rounded-2xl bg-[#0d2f1f] border border-[#c5a059]/25 hover:border-[#e5c158]/60 transition-all duration-300 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
              >
                <div>
                  {/* Certificate Image Thumbnail */}
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#c5a059]/20 bg-[#06190f] mb-4">
                    <img
                      src={cert.certificateImage}
                      alt={cert.title}
                      className="w-full h-full object-contain p-1 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-[#082015]/90 border border-[#c5a059]/40 flex items-center justify-center text-[#c5a059]">
                      <ZoomIn className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <span className="font-mono text-[9px] text-[#c5a059] uppercase tracking-widest block mb-1">
                    {cert.category} &bull; {cert.date}
                  </span>

                  <h3 className="font-cinzel text-sm sm:text-base font-semibold text-[#dfd7c7] group-hover:text-[#e5c158] transition-colors line-clamp-1 mb-2">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-[#dfd7c7]/65 font-light leading-relaxed line-clamp-2 mb-4">
                    {cert.shortDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#c5a059]/10 flex items-center justify-between text-[10px] font-mono text-[#c5a059]">
                  <span>CLICK TO VIEW CREDENTIAL</span>
                  <span>→</span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Certificate Inspection Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#04120a]/90 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-3xl bg-[#082015] border border-[#c5a059]/35 rounded-3xl p-6 sm:p-8 text-[#dfd7c7] shadow-2xl max-h-[92vh] overflow-y-auto">
            <div className="flex items-start justify-between pb-4 border-b border-[#c5a059]/15 mb-6">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#c5a059] block mb-1">
                  OFFICIAL CERTIFICATE &bull; {selectedCert.category}
                </span>
                <h3 className="font-cinzel text-2xl text-[#dfd7c7]">
                  {selectedCert.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="w-8 h-8 rounded-full bg-[#0a271a] border border-[#c5a059]/35 text-[#dfd7c7] hover:text-white flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[#c5a059]/25 bg-[#06190f] mb-6">
              <img
                src={selectedCert.certificateImage}
                alt={selectedCert.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="space-y-4 text-xs font-sans">
              <div>
                <span className="font-mono text-[10px] text-[#c5a059] uppercase tracking-wider block font-semibold mb-1">
                  PROGRAM OVERVIEW
                </span>
                <p className="text-[#dfd7c7]/85 leading-relaxed font-light">
                  {selectedCert.shortDescription}
                </p>
              </div>

              <div>
                <span className="font-mono text-[10px] text-[#c5a059] uppercase tracking-wider block font-semibold mb-1">
                  CORE COMPETENCIES &amp; TOPICS
                </span>
                <ul className="space-y-1.5 pl-2">
                  {selectedCert.topics.map((t, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[#dfd7c7]/75 font-light">
                      <span className="text-[#c5a059]">•</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-3 border-t border-[#c5a059]/15 font-mono text-[10px]">
                <div>
                  <span className="text-[#c5a059] uppercase block">ORGANIZER / PLATFORM</span>
                  <span className="text-[#dfd7c7]/80">{selectedCert.organizer}</span>
                </div>
                <div>
                  <span className="text-[#c5a059] uppercase block">SPEAKER / INSTRUCTOR</span>
                  <span className="text-[#dfd7c7]/80">{selectedCert.speaker}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
