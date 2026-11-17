import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Award, ZoomIn, X, Calendar, ShieldCheck, ExternalLink } from 'lucide-react';

export default function Philosophy() {
  const { personalInfo, certifications } = portfolioData;
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="philosophy" className="py-20 sm:py-24 px-5 sm:px-8 bg-[#082015] text-[#dfd7c7] border-b border-[#c5a059]/20 relative">
      <div className="mx-auto max-w-7xl">
        
        {/* Top: Official Certifications & Webinars Attended (Clickable to view certificates) */}
        <div className="border-b border-[#c5a059]/15 pb-12 mb-14">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-[#c5a059] mb-1 font-semibold">
                CREDENTIALS &amp; PROFESSIONAL DEVELOPMENT
              </p>
              <h2 className="font-cinzel text-xl sm:text-2xl text-[#dfd7c7] uppercase tracking-wider">
                CERTIFICATIONS &amp; WEBINARS ATTENDED
              </h2>
            </div>
            <span className="font-mono text-[10px] text-[#c5a059] uppercase tracking-widest hidden sm:inline-block">
              CLICK ANY ITEM TO INSPECT CREDENTIAL ↗
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-stretch">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="group cursor-pointer p-3.5 border border-[#c5a059]/20 rounded-xl bg-[#0d2f1f] hover:border-[#e5c158] hover:bg-[#123b26] transition-all duration-300 flex flex-col justify-between shadow-lg text-left"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059] group-hover:scale-125 transition-transform" />
                    <Award className="w-3.5 h-3.5 text-[#c5a059] group-hover:text-[#e5c158] transition-colors" />
                  </div>

                  <h3 className="font-cinzel text-[11px] font-bold tracking-wider text-[#dfd7c7] group-hover:text-[#e5c158] transition-colors line-clamp-2 leading-tight uppercase mb-1">
                    {cert.title}
                  </h3>

                  <p className="font-mono text-[8.5px] text-[#c5a059]/75 tracking-wider uppercase line-clamp-1 mb-2">
                    {cert.organizer.split('(')[0].trim()}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#c5a059]/10 flex items-center justify-between text-[8px] font-mono text-[#c5a059]">
                  <span>{cert.date.split(',')[0]}</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">↗</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: Luxury Development Philosophy Block matching Reference Quote Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0a2618] border border-[#c5a059]/25 rounded-3xl p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden">
          
          {/* Subtle gold radial ambient */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#c5a059]/5 rounded-full blur-[100px] pointer-events-none" />

          {/* Left Column: Quote Icon, Philosophy & Statement */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div className="flex items-start gap-4 mb-4">
              <span className="font-cinzel text-5xl sm:text-6xl text-[#c5a059] leading-none select-none">
                “
              </span>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#c5a059] block mb-2 font-semibold">
                  DEVELOPMENT PHILOSOPHY
                </span>
                <h3 className="font-editorial-serif italic text-2xl sm:text-3xl lg:text-4xl text-[#dfd7c7] font-normal leading-snug mb-4">
                  "{personalInfo.quote}"
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#dfd7c7]/80 font-light leading-relaxed max-w-2xl font-sans pl-10 mb-6">
              I believe software is most powerful when algorithmic rigor meets artistic clarity. Every line of backend logic and every pixel of typography should serve a distinct purpose—building resilient digital systems that solve authentic human problems and endure over time.
            </p>

            <div className="pl-10 flex items-center gap-4 text-xs font-mono">
              <span className="text-[#c5a059] font-semibold tracking-wider uppercase">
                — SHILOH ABELLERA
              </span>
              <span className="text-[#dfd7c7]/40">|</span>
              <span className="text-[#dfd7c7]/60 tracking-widest uppercase text-[10px]">
                FULL STACK DEVELOPER &amp; GRAPHIC DESIGNER
              </span>
            </div>
          </div>

          {/* Right Column: Cinematic Portrait of Shiloh */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-40 sm:w-48 aspect-[3/4] rounded-2xl overflow-hidden border border-[#c5a059]/30 shadow-2xl bg-[#082015]">
              <img
                src="/images/cinematic/shiloh_lantern_night.jpg"
                alt="Shiloh Abellera"
                className="w-full h-full object-cover filter contrast-[1.05] brightness-[0.95]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#082015] via-transparent to-transparent opacity-60" />
            </div>
          </div>

        </div>

      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#04120a]/90 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-3xl bg-[#082015] border border-[#c5a059]/35 rounded-3xl p-6 sm:p-8 text-[#dfd7c7] shadow-[0_25px_60px_rgba(0,0,0,0.85)] max-h-[92vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-[#c5a059]/15 mb-6">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#c5a059] block mb-1">
                  OFFICIAL CERTIFICATE &bull; {selectedCert.category}
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl text-[#dfd7c7]">
                  {selectedCert.title}
                </h3>
                {selectedCert.subtitle && (
                  <p className="text-xs font-mono uppercase tracking-wider text-[#dfd7c7]/60 mt-1">
                    {selectedCert.subtitle}
                  </p>
                )}
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="w-8 h-8 rounded-full bg-[#0a271a] border border-[#c5a059]/35 text-[#dfd7c7] hover:text-white flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Certificate Image View */}
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[#c5a059]/25 bg-[#06190f] mb-6">
              <img
                src={selectedCert.certificateImage}
                alt={selectedCert.title}
                className="w-full h-full object-contain p-1"
              />
            </div>

            {/* Certificate Details */}
            <div className="space-y-4 text-xs font-sans">
              <div>
                <span className="font-mono text-[10px] text-[#c5a059] uppercase tracking-wider block font-semibold mb-1">
                  SEMINAR / TRAINING DESCRIPTION
                </span>
                <p className="text-[#dfd7c7]/85 leading-relaxed font-light">
                  {selectedCert.shortDescription}
                </p>
              </div>

              <div>
                <span className="font-mono text-[10px] text-[#c5a059] uppercase tracking-wider block font-semibold mb-1">
                  TOPICS &amp; COMPETENCIES COVERED
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

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#c5a059]/15 font-mono text-[10px]">
                <div>
                  <span className="text-[#c5a059] uppercase block mb-0.5">ORGANIZER / PLATFORM</span>
                  <span className="text-[#dfd7c7]/80">{selectedCert.organizer}</span>
                </div>
                <div>
                  <span className="text-[#c5a059] uppercase block mb-0.5">RESOURCE SPEAKER</span>
                  <span className="text-[#dfd7c7]/80">{selectedCert.speaker}</span>
                </div>
                <div>
                  <span className="text-[#c5a059] uppercase block mb-0.5">SCHEDULE / CERT ID</span>
                  <span className="text-[#dfd7c7]/80">{selectedCert.date} {selectedCert.certificateId && `• ${selectedCert.certificateId}`}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
