import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, MapPin, Code, Database, Sparkles, CheckCircle2 } from 'lucide-react';

export default function About() {
  const { personalInfo, education } = portfolioData;

  return (
    <section id="about" className="px-5 sm:px-6 py-20 sm:py-32 border-t border-white/10 bg-[#0c0c10]/40 relative">
      <div className="mx-auto max-w-6xl grid lg:grid-cols-12 gap-10 lg:gap-14">
        {/* Left Column: Heading */}
        <div className="lg:col-span-4">
          <p className="text-xs sm:text-sm uppercase tracking-[0.28em] text-red-400 font-semibold mb-3">
            About Me
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl tracking-tight text-white">
            A builder at <span className="italic text-red-500">heart</span>.
          </h2>

          <div className="mt-8 p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-3 mb-3">
              <GraduationCap className="w-5 h-5 text-red-400" />
              <h4 className="text-sm font-semibold text-white">Alma Mater</h4>
            </div>
            <p className="text-xs text-neutral-300 font-medium">
              Nueva Ecija University of Science and Technology
            </p>
            <p className="text-xs text-neutral-500 mt-1">
              College of Information and Communications Technology (CICT)
            </p>
          </div>
        </div>

        {/* Right Column: Narrative & Education Card */}
        <div className="lg:col-span-8 space-y-6 text-base sm:text-lg text-neutral-300 leading-relaxed font-light">
          <p>
            I'm <strong className="text-white font-medium">Shiloh Abellera</strong> — an Information Technology senior at 
            <span className="text-white font-medium"> Nueva Ecija University of Science and Technology (NEUST)</span>, full-stack developer, and visual artist. 
            I engineer responsive web portals, robust backend architectures, and database-driven solutions designed to modernize public governance and institutional workflows.
          </p>

          <p>
            My flagship capstone project is <strong className="text-white font-medium">One-Palayan Kalinga Hub</strong> — an integrated web platform for the City Social Welfare and Development Office (CSWDO) of Palayan City that unifies social service appointments, housing beneficiary management, and AICS crisis tracking, evaluated under ISO/IEC 25002:2024 software quality standards. Additionally, I built <strong className="text-white font-medium">ProcLink System</strong>, an enterprise procurement and records management system with a 4-tier approval pipeline that eliminates administrative bottlenecks.
          </p>

          <p>
            Beyond code, I am a passionate <strong className="text-white font-medium">Art Lover &amp; Charcoal Portrait Artist</strong>, vocalist, and audio editor utilizing tools like <strong className="text-white font-medium">Adobe Audition</strong>. This artistic discipline gives me a unique perspective on user experience: approaching software not merely as lines of syntax, but as an elegant, human-centered composition of visual proportion, harmony, and functional utility.
          </p>

          {/* Education Card */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <h3 className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-4">
              Formal Education
            </h3>

            {education.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl border border-white/10 bg-[#121218]/90 backdrop-blur-md hover:border-red-500/30 transition-all shadow-md"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {edu.degree}
                  </h4>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-red-950/60 text-red-300 border border-red-500/30 w-fit">
                    {edu.period}
                  </span>
                </div>

                <p className="text-sm font-medium text-red-400 mb-1">
                  {edu.institution}
                </p>
                <p className="text-xs text-neutral-400 mb-4">
                  {edu.campus} · <span className="text-neutral-300">{edu.status}</span>
                </p>

                <div className="space-y-2 pt-3 border-t border-white/10">
                  {edu.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
