import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, ArrowUpRight, Check, Copy } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function Contact() {
  const { personalInfo } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 px-5 sm:px-8 bg-[#082015] text-[#dfd7c7] border-b border-[#c5a059]/20 relative">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Heading matching Reference */}
        <div className="border-b border-[#c5a059]/15 pb-8 mb-12 sm:mb-16">
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#c5a059] block mb-2 font-semibold">
            INITIATE COLLABORATION
          </span>
          <h2 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#dfd7c7] leading-[1.05]">
            LET'S CREATE <br />
            <span className="font-editorial-serif italic text-[#e5c158] font-light">
              SOMETHING MEANINGFUL
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-[#dfd7c7]/75 font-light leading-relaxed font-sans max-w-xl mt-3">
            Every great project begins with an idea. Let's turn that idea into something functional, creative, and meaningful.
          </p>
        </div>

        {/* 3-Column Luxury Arrangement matching Reference Bottom Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Column 1: Direct Contact Details */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-4 text-xs font-mono">
              
              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059] shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[9px] text-[#c5a059] uppercase block tracking-wider">ELECTRONIC MAIL</span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-[#dfd7c7] hover:text-[#e5c158] transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059] shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[9px] text-[#c5a059] uppercase block tracking-wider">DIRECT MOBILE</span>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-[#dfd7c7] hover:text-[#e5c158] transition-colors"
                  >
                    {personalInfo.phoneFormatted}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059] shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[9px] text-[#c5a059] uppercase block tracking-wider">LOCATION &bull; REGION</span>
                  <span className="text-[#dfd7c7]">
                    Bongabon, Nueva Ecija, Philippines
                  </span>
                </div>
              </div>

            </div>

            {/* Copy Email Button */}
            <div className="pt-2">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#c5a059]/30 bg-[#0d2f1f] text-xs font-mono uppercase tracking-wider text-[#dfd7c7] hover:border-[#e5c158] hover:text-[#e5c158] transition-all cursor-pointer"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-[#c5a059]" />}
                <span>{copied ? 'EMAIL COPIED TO CLIPBOARD' : 'COPY EMAIL ADDRESS'}</span>
              </button>
            </div>
          </div>

          {/* Column 2: Minimalist Interactive Contact Form */}
          <div className="lg:col-span-4 p-6 sm:p-7 rounded-2xl bg-[#0d2f1f] border border-[#c5a059]/25 shadow-[0_15px_35px_rgba(0,0,0,0.6)]">
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#c5a059] block mb-4 font-semibold">
              TRANSMIT A MESSAGE
            </span>

            {submitted ? (
              <div className="p-6 text-center">
                <span className="w-10 h-10 rounded-full bg-[#c5a059]/20 border border-[#c5a059] text-[#c5a059] inline-flex items-center justify-center mb-3">
                  ✓
                </span>
                <p className="font-cinzel text-sm text-[#dfd7c7] uppercase">
                  MESSAGE DISPATCHED
                </p>
                <p className="text-xs text-[#dfd7c7]/65 mt-1 font-light">
                  Thank you for reaching out. I will respond to your inquiry promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="YOUR FULL NAME"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#082015] border border-[#c5a059]/25 text-xs font-mono text-[#dfd7c7] placeholder-[#dfd7c7]/35 focus:border-[#e5c158] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    required
                    placeholder="EMAIL ADDRESS"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#082015] border border-[#c5a059]/25 text-xs font-mono text-[#dfd7c7] placeholder-[#dfd7c7]/35 focus:border-[#e5c158] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <textarea
                    rows="3"
                    required
                    placeholder="MESSAGE / PROJECT SPECIFICATION"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#082015] border border-[#c5a059]/25 text-xs font-mono text-[#dfd7c7] placeholder-[#dfd7c7]/35 focus:border-[#e5c158] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#c5a059] to-[#aa8028] text-[#071d12] font-mono text-xs uppercase font-bold tracking-wider hover:brightness-110 transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-3 h-3" />
                  <span>TRANSMIT DISPATCH</span>
                </button>
              </form>
            )}
          </div>

          {/* Column 3: Luxury Business Card Presentation matching Reference */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px] aspect-[16/10] rounded-2xl bg-[#0a271a] border border-[#c5a059]/35 p-6 flex flex-col justify-between shadow-[0_20px_45px_rgba(0,0,0,0.7)] hover:border-[#e5c158]/60 transition-all duration-500 group">
              
              {/* Card Header with Monogram */}
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-full border border-[#c5a059]/40 flex items-center justify-center font-cinzel text-xs font-bold text-[#c5a059]">
                  SA
                </div>
                <span className="font-mono text-[8px] text-[#c5a059] tracking-[0.25em] uppercase">
                  OFFICIAL CONTACT CARD
                </span>
              </div>

              {/* Center Identity */}
              <div className="text-center my-auto">
                <h3 className="font-cinzel text-sm sm:text-base font-bold tracking-[0.2em] text-[#dfd7c7] uppercase">
                  SHILOH ABELLERA
                </h3>
                <span className="font-mono text-[9px] text-[#c5a059] tracking-[0.25em] uppercase block mt-1">
                  FULL STACK DEVELOPER
                </span>
                <span className="font-mono text-[8px] text-[#dfd7c7]/50 tracking-[0.2em] uppercase block">
                  &amp; GRAPHIC DESIGNER
                </span>
              </div>

              {/* Card Footer */}
              <div className="pt-2 border-t border-[#c5a059]/15 flex items-center justify-between text-[8px] font-mono text-[#c5a059]/70 tracking-widest uppercase">
                <span>NEUST CICT</span>
                <span>CLASS OF 2026</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
