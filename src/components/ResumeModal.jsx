import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { X, Download, Mail, Phone, MapPin, ExternalLink, CheckCircle2 } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { personalInfo, education, workExperience, certifications, projects, skillsData } = portfolioData;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#04120a]/90 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-4xl bg-[#082015] border border-[#c5a059]/35 rounded-3xl p-6 sm:p-10 text-[#dfd7c7] shadow-2xl max-h-[92vh] overflow-y-auto">
        
        {/* Modal Top Actions */}
        <div className="flex items-center justify-between pb-4 border-b border-[#c5a059]/20 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#c5a059] font-semibold">
              Official Resume Preview &bull; Shiloh Abellera
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personalInfo.resumeUrl}
              download="Shiloh_Abellera_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#d4af37] via-[#c5a059] to-[#aa8028] text-[#071d12] text-xs font-mono uppercase tracking-wider font-bold hover:brightness-110 transition-all shadow-md"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-[#0a271a] border border-[#c5a059]/35 text-[#dfd7c7] hover:border-[#e5c158] hover:text-[#e5c158] flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted Resume Body */}
        <div className="space-y-8 bg-[#0d2f1f]/80 p-6 sm:p-8 rounded-2xl border border-[#c5a059]/20 font-sans text-xs sm:text-sm">
          
          {/* Header */}
          <div className="border-b border-[#c5a059]/20 pb-6">
            <h1 className="font-editorial-serif text-3xl sm:text-5xl text-[#e5c158] font-normal tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="font-mono text-xs uppercase tracking-widest text-[#c5a059] mt-1 font-semibold">
              BSIT GRADUATING SENIOR &bull; FULL STACK DEVELOPER &amp; GRAPHIC DESIGNER
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-1 mt-3 text-xs font-mono text-[#dfd7c7]/75">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
                {personalInfo.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
                {personalInfo.phoneFormatted}
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#c5a059]" />
                {personalInfo.email}
              </span>
            </div>
          </div>

          {/* Objective */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[#c5a059] font-bold mb-2">
              CAREER OBJECTIVE
            </h2>
            <p className="text-xs sm:text-[13px] text-[#dfd7c7]/85 font-light leading-relaxed">
              A dedicated and results-driven Information Technology professional with expertise in full-stack web development, relational database architecture (MySQL 3NF), and graphic design. Proven track record delivering production-grade systems including city government social service platforms and enterprise procurement pipelines. Seeking full-time developer and designer roles to contribute scalable, high-performance technology solutions.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[#c5a059] font-bold mb-3">
              EDUCATION
            </h2>
            <div className="space-y-3">
              {education.map((item, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h3 className="font-semibold text-xs sm:text-sm text-[#dfd7c7]">
                      {item.institution}
                    </h3>
                    <p className="text-xs text-[#dfd7c7]/70">
                      {item.degree ? `${item.degree} – ${item.specialization}` : item.level}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-[#c5a059] shrink-0">
                    {item.period}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[#c5a059] font-bold mb-3">
              FEATURED PROJECTS
            </h2>
            <div className="space-y-3">
              {projects.slice(0, 5).map((p) => (
                <div key={p.id} className="border-l-2 border-[#c5a059]/40 pl-3">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-semibold text-xs sm:text-sm text-[#dfd7c7]">
                      {p.title}
                    </h3>
                    <span className="text-[10px] font-mono text-[#c5a059] uppercase">
                      {p.role}
                    </span>
                  </div>
                  <p className="text-xs text-[#dfd7c7]/75 font-light mt-0.5 leading-relaxed">
                    {p.summary}
                  </p>
                  <p className="text-[11px] font-mono text-[#c5a059]/70 mt-1">
                    Tech: {p.technologies.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[#c5a059] font-bold mb-3">
              WORK EXPERIENCE
            </h2>
            <div className="space-y-3">
              {workExperience.map((job, idx) => (
                <div key={idx} className="border-l-2 border-[#c5a059]/40 pl-3">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="font-semibold text-xs sm:text-sm text-[#dfd7c7]">
                      {job.role} &bull; <span className="font-light text-[#dfd7c7]/70">{job.company}</span>
                    </h3>
                    <span className="text-xs font-mono text-[#c5a059] shrink-0">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-[11px] font-mono text-[#dfd7c7]/60 mb-1">{job.location}</p>
                  <ul className="space-y-1">
                    {job.responsibilities.map((r, rIdx) => (
                      <li key={rIdx} className="text-xs text-[#dfd7c7]/75 font-light flex items-start gap-1.5">
                        <span className="text-[#c5a059] mt-0.5">&bull;</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Seminars & Trainings */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[#c5a059] font-bold mb-3">
              SEMINARS &amp; TRAININGS ATTENDED
            </h2>
            <div className="space-y-2.5">
              {certifications.map((c) => (
                <div key={c.id} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs">
                  <div>
                    <h3 className="font-semibold text-[#dfd7c7]">{c.title}</h3>
                    <p className="text-[11px] text-[#dfd7c7]/65">{c.organizer} &bull; {c.speaker}</p>
                  </div>
                  <span className="font-mono text-[#c5a059] text-[11px] shrink-0">
                    {c.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Summary */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[#c5a059] font-bold mb-2">
              SKILLS SUMMARY
            </h2>
            <p className="text-xs text-[#dfd7c7]/85 leading-relaxed font-light">
              I am a hardworking person who is always actively moving and hands-on when completing tasks. I can work well with others, manage my time responsibly, organize tasks, and adapt easily to new environments. I am eager to learn new technologies and continuously expand my knowledge in web systems and information technology. In addition, I have skills in traditional and digital arts, graphic design, photo and video editing, and visual layout creation. I approach problems patiently, think of practical solutions, and handle every responsibility with dedication.
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="pt-6 mt-6 border-t border-[#c5a059]/20 flex items-center justify-between">
          <span className="text-xs font-mono text-[#dfd7c7]/60">
            Shiloh Abellera &bull; NEUST CICT
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#c5a059] to-[#aa8028] text-[#071d12] text-xs font-mono uppercase tracking-wider font-bold hover:brightness-110 cursor-pointer shadow-md"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
}
