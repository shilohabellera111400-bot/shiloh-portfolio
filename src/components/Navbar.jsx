import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Menu, X, ArrowUpRight, Rocket, ShieldCheck } from 'lucide-react';

export default function Navbar({ onOpenVercelGuide }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-[#09090b]/80 border-b border-white/10 shadow-lg shadow-black/40'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="mx-auto max-w-6xl px-5 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <a
          href="#top"
          className="font-serif text-xl sm:text-2xl font-bold tracking-tight flex items-center gap-2 group"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500 shadow-[0_0_12px_#ef4444]"></span>
          </span>
          <span className="text-white group-hover:text-red-400 transition-colors">
            {portfolioData.personalInfo.firstName}
          </span>
          <span className="text-red-500">.</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-400">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-500 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-3">
          {/* Vercel & GitHub Deploy Helper Button */}
          <button
            onClick={onOpenVercelGuide}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-red-950/60 text-red-300 border border-red-500/30 hover:bg-red-900/50 hover:border-red-500/60 transition-all cursor-pointer"
            title="How to deploy to Vercel & GitHub"
          >
            <Rocket className="w-3.5 h-3.5 text-red-400" />
            <span>Deploy to Vercel</span>
          </button>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-red-600 text-white px-4 py-2 text-xs sm:text-sm font-semibold hover:bg-red-500 transition-all shadow-[0_0_20px_-5px_#ef4444] active:scale-95"
          >
            Get in touch
            <span aria-hidden="true">→</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-red-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/10 bg-[#0c0c0e]/95 backdrop-blur-2xl px-6 py-6 transition-all animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-4 text-base font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-neutral-300 hover:text-red-400 transition-colors py-1 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-neutral-600">→</span>
              </a>
            ))}

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenVercelGuide();
                }}
                className="w-full py-2.5 rounded-full text-xs font-semibold bg-red-950/60 text-red-300 border border-red-500/30 flex items-center justify-center gap-2"
              >
                <Rocket className="w-4 h-4 text-red-400" />
                <span>How to Deploy on Vercel & GitHub</span>
              </button>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-full bg-red-600 text-white text-sm font-semibold hover:bg-red-500 shadow-[0_0_20px_-5px_#ef4444]"
              >
                Get in touch →
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
