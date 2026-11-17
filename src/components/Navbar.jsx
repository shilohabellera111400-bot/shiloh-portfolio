import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Download } from 'lucide-react';
import GithubIcon from './GithubIcon';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ onOpenResumeModal, onOpenHobbies }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { personalInfo } = portfolioData;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Expertise', href: '#vision' },
    { name: 'About', href: '#about' },
    { name: 'Featured Work', href: '#work' },
    { name: 'Certifications', href: '#philosophy' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#timeline' },
    { name: 'Hobbies', href: '#hobbies' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-md bg-[#071d12]/92 border-b border-[#c5a059]/20 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.6)]'
          : 'bg-transparent border-b border-[#c5a059]/10 py-5'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between">
        
        {/* Luxury Custom Monogram Emblem Logo (SA: Shiloh Abellera) */}
        <a href="#top" className="flex items-center group py-0.5" title="Shiloh Abellera — Return to Top">
          <img
            src="/images/logo/shiloh-monogram-gold.png"
            alt="Shiloh Abellera Logo"
            className="h-10 sm:h-12 w-auto object-contain transition-all duration-300 filter drop-shadow-[0_0_8px_rgba(197,160,89,0.35)] group-hover:drop-shadow-[0_0_18px_rgba(245,215,127,0.75)] group-hover:scale-105 active:scale-95"
          />
        </a>

        {/* Minimalist Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 text-[11px] font-mono uppercase tracking-[0.22em] text-[#dfd7c7]/75">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                if (link.name === 'Hobbies') {
                  onOpenHobbies?.();
                }
              }}
              className="hover:text-[#e5c158] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#c5a059] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Action Icons & Direct CTA */}
        <div className="flex items-center gap-3">
          
          {/* GitHub Profile */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[#c5a059]/25 bg-[#07120a] text-[#dfd7c7] hover:text-[#e5c158] hover:border-[#e5c158] transition-all"
            title="GitHub Profile"
          >
            <GithubIcon className="w-3.5 h-3.5" />
          </a>

          {/* Download Resume Button */}
          <a
            href={personalInfo.resumeUrl}
            download="Shiloh_Abellera_Resume.pdf"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-mono tracking-widest uppercase border border-[#c5a059]/30 bg-[#07120a] text-[#dfd7c7] hover:border-[#e5c158] hover:text-[#e5c158] transition-all"
            title="Download PDF Resume"
          >
            <Download className="w-3 h-3 text-[#c5a059]" />
            <span>RESUME</span>
          </a>

          {/* Primary Luxury CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#c5a059] to-[#aa8028] text-[#050a07] text-[11px] font-mono font-bold tracking-widest uppercase hover:brightness-110 transition-all shadow-[0_0_15px_rgba(197,160,89,0.3)] active:scale-95"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#dfd7c7]/80 hover:text-white"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#c5a059]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#082216] border-b border-[#c5a059]/25 px-6 py-6 animate-in slide-in-from-top">
          <div className="flex flex-col space-y-4 text-xs font-mono uppercase tracking-[0.2em] text-[#dfd7c7]/80">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  if (link.name === 'Hobbies') {
                    onOpenHobbies?.();
                  }
                  setMobileMenuOpen(false);
                }}
                className="hover:text-[#e5c158] py-1 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={personalInfo.resumeUrl}
                download="Shiloh_Abellera_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono border border-[#c5a059]/40 text-[#dfd7c7]"
              >
                <Download className="w-3 h-3 text-[#c5a059]" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
