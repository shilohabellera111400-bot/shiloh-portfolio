import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, MapPin, Copy, Check, Send, Sparkles } from 'lucide-react';
import GithubIcon from './GithubIcon';
import confetti from 'canvas-confetti';

export default function Contact() {
  const { personalInfo } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ef4444', '#f87171', '#ffffff']
    });

    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="px-5 sm:px-6 py-20 sm:py-32 border-t border-white/10 relative overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <p className="text-xs sm:text-sm uppercase tracking-[0.28em] text-red-400 font-semibold mb-4 sm:mb-6">
          Contact &amp; Collaboration
        </p>

        <h2 className="font-serif text-[clamp(2.5rem,8vw,5.5rem)] tracking-tight leading-[0.98] text-white max-w-4xl">
          Let's build something
          <br />
          <span className="italic bg-gradient-to-r from-red-500 via-rose-400 to-red-400 bg-clip-text text-transparent">
            together.
          </span>
        </h2>

        {/* Contact Info Grid matching Rayson's portfolio */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 border-t border-white/10 pt-8 sm:pt-10">
          {/* Email Card */}
          <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-red-500/40 transition-all">
            <p className="text-xs uppercase tracking-widest text-neutral-400 mb-2 flex items-center justify-between">
              <span>Email</span>
              <button
                onClick={handleCopyEmail}
                className="text-red-400 hover:text-white flex items-center gap-1 text-[11px] font-sans lowercase cursor-pointer"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>copy</span>
                  </>
                )}
              </button>
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-base sm:text-lg text-white hover:text-red-400 transition-colors break-all font-medium"
            >
              {personalInfo.email}
            </a>
          </div>

          {/* GitHub Card */}
          <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-red-500/40 transition-all">
            <p className="text-xs uppercase tracking-widest text-neutral-400 mb-2 flex items-center gap-1.5">
              <GithubIcon className="w-3.5 h-3.5 text-red-400" />
              <span>GitHub</span>
            </p>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="text-base sm:text-lg text-white hover:text-red-400 transition-colors font-medium flex items-center gap-1"
            >
              @{personalInfo.githubUsername} ↗
            </a>
          </div>

          {/* University Card */}
          <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-red-500/40 transition-all">
            <p className="text-xs uppercase tracking-widest text-neutral-400 mb-2">
              University
            </p>
            <p className="text-base sm:text-lg text-white font-medium">
              NEUST CICT
            </p>
            <p className="text-xs text-neutral-500 mt-0.5">BSIT Program</p>
          </div>

          {/* Location Card */}
          <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-red-500/40 transition-all">
            <p className="text-xs uppercase tracking-widest text-neutral-400 mb-2 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-red-400" />
              <span>Location</span>
            </p>
            <p className="text-base sm:text-lg text-white font-medium">
              {personalInfo.location}
            </p>
            <p className="text-xs text-neutral-500 mt-0.5">Central Luzon</p>
          </div>
        </div>

        {/* Interactive Direct Message Form */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-10 rounded-3xl border border-white/10 bg-[#121218]/80 backdrop-blur-xl">
          <div className="max-w-2xl">
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold tracking-tight mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mb-6 font-light">
              Have an academic inquiry, freelance opportunity, or system development project? Drop me a message below.
            </p>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl border border-emerald-500/40 bg-emerald-950/20 text-center animate-in fade-in">
                <div className="h-12 w-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl font-bold text-white">Thank you for reaching out!</h4>
                <p className="text-sm text-neutral-300 mt-2 font-light">
                  Your message has been queued. You can also reach me directly at{' '}
                  <a href={`mailto:${personalInfo.email}`} className="text-red-400 underline">
                    {personalInfo.email}
                  </a>.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-5 px-5 py-2 rounded-full text-xs font-semibold bg-white/10 text-white hover:bg-white/20 transition-all cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maria Santos"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-white text-sm focus:outline-none focus:border-red-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. maria@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-white text-sm focus:outline-none focus:border-red-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">
                    Subject / Project Title
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Capstone Consultation / Web Development Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-white text-sm focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Hi Shiloh, I would like to discuss..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-white text-sm focus:outline-none focus:border-red-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-red-600 text-white px-7 py-3.5 text-sm font-semibold hover:bg-red-500 transition-all shadow-[0_0_25px_-5px_#ef4444] active:scale-95 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
