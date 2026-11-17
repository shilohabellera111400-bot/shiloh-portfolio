import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VisionExpertise from './components/VisionExpertise';
import About from './components/About';
import Projects from './components/Projects';
import Philosophy from './components/Philosophy';
import Skills from './components/Skills';
import EducationExperience from './components/EducationExperience';
import HobbiesSection from './components/HobbiesSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import VercelGuideModal from './components/VercelGuideModal';

export default function App() {
  const [isVercelGuideOpen, setIsVercelGuideOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isHobbiesOpen, setIsHobbiesOpen] = useState(false);

  const handleToggleHobbies = () => {
    setIsHobbiesOpen((prev) => {
      const next = !prev;
      if (next) {
        setTimeout(() => {
          document.getElementById('hobbies')?.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      }
      return next;
    });
  };

  const handleOpenHobbies = () => {
    setIsHobbiesOpen(true);
    setTimeout(() => {
      document.getElementById('hobbies')?.scrollIntoView({ behavior: 'smooth' });
    }, 120);
  };

  return (
    <div className="min-h-screen bg-[#071d12] text-[#dfd7c7] font-sans antialiased selection:bg-[#c5a059]/30 selection:text-[#f5f0e6] relative overflow-x-hidden">
      
      {/* Fixed Luxury Navigation */}
      <Navbar
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
        onOpenHobbies={handleOpenHobbies}
      />

      <main>
        {/* 1. Hero Opening Section */}
        <Hero
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
        />

        {/* 2. Vision and Expertise Section (Horizontal Layout) */}
        <VisionExpertise />

        {/* 3. About Me & Personal Strengths */}
        <About
          onToggleHobbies={handleToggleHobbies}
          isHobbiesOpen={isHobbiesOpen}
        />

        {/* 4. Hobbies & Creative Pursuits (Positioned Directly Below About Me as Requested!) */}
        <HobbiesSection
          isOpen={isHobbiesOpen}
          onToggle={handleToggleHobbies}
          onOpen={handleOpenHobbies}
        />

        {/* 5. Featured Projects Gallery */}
        <Projects />

        {/* 6. Certifications & Webinars Attended + Development Philosophy */}
        <Philosophy />

        {/* 7. Technologies and Skills (Categorized Editorial Stack) */}
        <Skills />

        {/* 8. Educational Background and Professional Experience Timeline */}
        <EducationExperience />

        {/* 9. Contact Section (Direct info, Form, Luxury Business Card) */}
        <Contact />
      </main>

      {/* 10. Minimalist Luxury Footer */}
      <Footer />

      {/* In-Page PDF Resume Viewer Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      {/* Cloud Deployment Guide Modal */}
      <VercelGuideModal
        isOpen={isVercelGuideOpen}
        onClose={() => setIsVercelGuideOpen(false)}
      />

    </div>
  );
}
