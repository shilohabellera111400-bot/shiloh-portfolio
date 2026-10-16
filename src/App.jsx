import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import WorkProcess from './components/WorkProcess';
import QuoteCard from './components/QuoteCard';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VercelGuideModal from './components/VercelGuideModal';

export default function App() {
  const [isVercelGuideOpen, setIsVercelGuideOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] font-sans antialiased selection:bg-red-500/30 selection:text-red-200 relative overflow-x-hidden">
      {/* Top Navbar */}
      <Navbar onOpenVercelGuide={() => setIsVercelGuideOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenVercelGuide={() => setIsVercelGuideOpen(true)} />
        <TechMarquee />
        <Projects />
        <Achievements />
        <Skills />
        <WorkProcess />
        <QuoteCard />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Deployment Guide Modal */}
      <VercelGuideModal
        isOpen={isVercelGuideOpen}
        onClose={() => setIsVercelGuideOpen(false)}
      />
    </div>
  );
}
