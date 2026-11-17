import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Award, Calendar, ExternalLink, X, MapPin, CheckCircle2, ZoomIn, ShieldCheck, Info } from 'lucide-react';

export default function Certifications() {
  const { certifications } = portfolioData;
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="py-20 sm:py-28 px-5 sm:px-8 bg-[#121312] text-[#f5f5f0] border-b border-[#eae3d2]/10 relative">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-14">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#eae3d2]/60 mb-1">
              CONTINUOUS LEARNING &amp; CREDENTIALS
            </p>
            <h2 className="font-condensed text-6xl sm:text-8xl font-bold tracking-tight text-[#7c8e77] uppercase leading-[0.88] mb-4">
              SEMINARS &amp; CERTS
            </h2>
            <p className="text-xs sm:text-sm text-[#eae3d2]/70 leading-relaxed font-light">
              Official Certificates of Participation and Completion earned through specialized technical webinars and ICT skills trainings. Click any certificate to read its description and competencies.
            </p>
          </div>

          <div className="lg:col-span-7 flex flex-wrap items-center justify-start lg:justify-end gap-3 self-end">
            <div className="px-4 py-2 rounded-full bg-[#181a18] border border-[#eae3d2]/10 text-xs font-mono text-[#eae3d2]/80 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#7c8e77]" />
              <span>Official Certificates as Primary Showcase</span>
            </div>
          </div>
        </div>

        {/* Certificate Cards Grid: Certificate is the MAIN Photo! */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="group cursor-pointer rounded-3xl p-5 sm:p-6 bg-[#161816] border border-[#eae3d2]/12 hover:border-[#7c8e77]/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Official Certificate Image as MAIN Photo */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#eae3d2]/10 bg-black/60 mb-5 group-hover:border-[#7c8e77]/40 transition-colors">
                  <img
                    src={cert.certificateImage}
                    alt={`${cert.title} Certificate`}
                    className="w-full h-full object-contain p-1 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                  
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/75 backdrop-blur-sm border border-white/15 text-[#eae3d2] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4 text-[#7c8e77]" />
                  </div>

                  <span className="absolute bottom-3 left-3 text-[10px] font-mono uppercase tracking-wider text-[#eae3d2] px-2.5 py-1 rounded bg-black/85 backdrop-blur-md border border-white/10">
                    {cert.category}
                  </span>
                </div>

                {/* Date & Schedule */}
                <div className="flex items-center justify-between text-[11px] font-mono text-[#7c8e77] mb-2">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    {cert.date}
                  </span>
                  {cert.certificateId && (
                    <span className="text-[10px] font-mono text-[#eae3d2]/50 uppercase">
                      ID: {cert.certificateId}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-editorial-serif text-xl sm:text-2xl text-[#eae3d2] font-normal leading-tight group-hover:text-[#7c8e77] transition-colors mb-2">
                  {cert.title}
                </h3>

                {/* Short preview description */}
                <p className="text-xs text-[#eae3d2]/60 font-light leading-relaxed line-clamp-2 mb-4">
                  {cert.shortDescription}
                </p>
              </div>

              {/* Bottom: Click prompt */}
              <div className="pt-3 border-t border-[#eae3d2]/10 flex items-center justify-between text-xs font-mono text-[#eae3d2]/70">
                <span className="text-[11px] text-[#7c8e77] group-hover:text-white transition-colors flex items-center gap-1">
                  <span>View Details &amp; Info</span>
                  <span>→</span>
                </span>
                <Award className="w-4 h-4 text-[#7c8e77]" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Certificate & Seminar Description Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-3xl bg-[#161816] border border-[#eae3d2]/20 rounded-3xl p-6 sm:p-8 text-[#f5f5f0] shadow-2xl max-h-[92vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-[#eae3d2]/10 mb-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#7c8e77] block font-semibold mb-1">
                  OFFICIAL CERTIFICATE &bull; {selectedCert.category}
                </span>
                <h3 className="font-editorial-serif text-2xl sm:text-3xl text-[#eae3d2]">
                  {selectedCert.title}
                </h3>
                {selectedCert.subtitle && (
                  <p className="text-xs font-mono uppercase tracking-wider text-[#eae3d2]/60 mt-0.5">
                    {selectedCert.subtitle}
                  </p>
                )}
              </div>

              <button
                onClick={() => setSelectedCert(null)}
                className="w-9 h-9 rounded-full bg-[#222622] hover:bg-[#7c8e77] hover:text-[#121312] flex items-center justify-center transition-colors shrink-0 ml-4 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-6">
              
              {/* Main Certificate Display */}
              <div className="rounded-2xl overflow-hidden border border-[#eae3d2]/15 bg-black/80 max-h-96 flex items-center justify-center p-2">
                <img
                  src={selectedCert.certificateImage}
                  alt={selectedCert.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Seminar Short Info / Description */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#1e211e] border border-[#7c8e77]/30">
                <div className="flex items-center gap-2 mb-2 text-[#7c8e77]">
                  <Info className="w-4 h-4" />
                  <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                    Seminar Overview &amp; Description
                  </span>
                </div>
                <p className="text-sm text-[#eae3d2]/90 leading-relaxed font-light">
                  {selectedCert.shortDescription}
                </p>
              </div>

              {/* Seminar Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-[#181a18] border border-[#eae3d2]/10 text-xs font-mono">
                <div>
                  <span className="text-[#eae3d2]/50 block uppercase text-[10px]">Organizer</span>
                  <span className="text-[#eae3d2] font-semibold">{selectedCert.organizer}</span>
                </div>
                <div>
                  <span className="text-[#eae3d2]/50 block uppercase text-[10px]">Resource Speaker</span>
                  <span className="text-[#eae3d2] font-semibold">{selectedCert.speaker}</span>
                </div>
                <div>
                  <span className="text-[#eae3d2]/50 block uppercase text-[10px]">Date Conducted</span>
                  <span className="text-[#7c8e77] font-semibold">{selectedCert.date}</span>
                </div>
                <div>
                  <span className="text-[#eae3d2]/50 block uppercase text-[10px]">Platform / Venue</span>
                  <span className="text-[#eae3d2]">{selectedCert.platform}</span>
                </div>
              </div>

              {/* Key Topics & Learnings */}
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#eae3d2]/60 mb-3">
                  Core Topics &amp; Competencies Acquired
                </h4>
                <div className="space-y-2">
                  {selectedCert.topics.map((t, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#eae3d2]/85 font-light">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#7c8e77] shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Secondary Session Documentation Photo */}
              {selectedCert.documentationImage && (
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#eae3d2]/50 block mb-2">
                    Webinar Session Photo Documentation:
                  </span>
                  <div className="rounded-xl overflow-hidden border border-[#eae3d2]/10 max-h-48 bg-black/50">
                    <img
                      src={selectedCert.documentationImage}
                      alt="Session documentation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}

              {/* Modal Footer */}
              <div className="pt-4 border-t border-[#eae3d2]/10 flex items-center justify-between">
                <span className="font-mono text-xs text-[#7c8e77]">
                  Extracted from Shiloh Abellera's Official Narrative Report
                </span>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-6 py-2.5 rounded-full bg-[#eae3d2] text-[#121312] text-xs font-mono uppercase tracking-wider font-semibold hover:bg-white cursor-pointer"
                >
                  Close
                </button>
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
}
