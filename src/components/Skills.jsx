import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Code2, Server, Database, Terminal, Palette, Wrench, Sparkles, Check } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Capabilities', icon: Sparkles },
    { id: 'frontend', label: 'Frontend Development', icon: Code2 },
    { id: 'backend', label: 'Backend Development', icon: Server },
    { id: 'database', label: 'Database Architecture', icon: Database },
    { id: 'languages', label: 'Programming Languages', icon: Terminal },
    { id: 'design', label: 'Design & Creative', icon: Palette },
    { id: 'tools', label: 'Development Tools', icon: Wrench },
  ];

  const skillGroups = [
    {
      category: 'frontend',
      title: 'Frontend Development',
      skills: [
        { name: 'React.js Applications', level: 'Advanced', highlight: 'Component Architecture & State' },
        { name: 'JavaScript (ES6+)', level: 'Advanced', highlight: 'Asynchronous Programming & DOM' },
        { name: 'Tailwind CSS', level: 'Expert', highlight: 'Utility-first Modern Layouts' },
        { name: 'HTML5 & Semantic Markup', level: 'Expert', highlight: 'Accessible Document Structures' },
        { name: 'CSS3 & Responsive Design', level: 'Expert', highlight: 'Grid, Flexbox & Animations' },
        { name: 'Bootstrap 5 Framework', level: 'Proficient', highlight: 'Enterprise Rapid UI' },
      ]
    },
    {
      category: 'backend',
      title: 'Backend Development',
      skills: [
        { name: 'PHP & MVC Architecture', level: 'Advanced', highlight: 'Model-View-Controller Frameworks' },
        { name: 'RESTful API Engineering', level: 'Advanced', highlight: 'Endpoint Routing & JSON Serialization' },
        { name: 'Session & Auth Security', level: 'Proficient', highlight: 'Role-Based Access Control (RBAC)' },
        { name: 'Server-Side Business Logic', level: 'Advanced', highlight: 'Sequential Approval Pipelines' },
      ]
    },
    {
      category: 'database',
      title: 'Database Management',
      skills: [
        { name: 'MySQL & MariaDB', level: 'Advanced', highlight: 'Relational Schema Design & Indexing' },
        { name: '3NF Database Normalization', level: 'Expert', highlight: 'Eliminating Redundancy & Anomaly' },
        { name: 'Complex SQL Queries', level: 'Advanced', highlight: 'Multi-table Joins & Aggregations' },
        { name: 'Row-Level Security (RLS)', level: 'Proficient', highlight: 'Resident & Beneficiary Privacy' },
      ]
    },
    {
      category: 'languages',
      title: 'Programming Languages',
      skills: [
        { name: 'PHP', level: 'Primary Backend', highlight: 'Object-Oriented Web Systems' },
        { name: 'JavaScript', level: 'Primary Client', highlight: 'Modern ES Next Syntax' },
        { name: 'Python 3', level: 'Algorithmic', highlight: 'Pygame & Physics Calculations' },
        { name: 'TypeScript', level: 'Mobile / Angular', highlight: 'Type Safety & Interfaces' },
      ]
    },
    {
      category: 'design',
      title: 'Design and Creative Tools',
      skills: [
        { name: 'Charcoal Portrait Realism', level: 'Fine Art Discipline', highlight: 'Light, Shadow & Proportion' },
        { name: 'UI/UX Wireframing & Prototyping', level: 'Applied Design', highlight: 'User Journey & Visual Hierarchy' },
        { name: 'Adobe Audition Audio Editing', level: 'Acoustic Mastery', highlight: 'Spectral Cleaning & Vocal Mixing' },
        { name: 'Digital Graphics & Branding', level: 'Brand Identity', highlight: 'Logo Systems & Color Harmony' },
      ]
    },
    {
      category: 'tools',
      title: 'Development Tools & DevOps',
      skills: [
        { name: 'Git & GitHub', level: 'Daily Standard', highlight: 'Version Control & Repositories' },
        { name: 'Vercel Cloud Deployment', level: 'Production Host', highlight: 'CI/CD & Serverless Edge' },
        { name: 'Ionic 7 & Capacitor', level: 'Hybrid Mobile', highlight: 'Cross-platform Emulation' },
        { name: 'Pygame Game Engine', level: 'Simulation Engine', highlight: 'State Machines & Collisions' },
      ]
    }
  ];

  const filteredGroups = activeCategory === 'all'
    ? skillGroups
    : skillGroups.filter(g => g.category === activeCategory);

  return (
    <section id="skills" className="py-20 sm:py-28 px-5 sm:px-8 bg-[#0a2618] text-[#dfd7c7] border-b border-[#c5a059]/20 relative">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#c5a059]/15 pb-6 mb-12">
          <div>
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#c5a059] block mb-2 font-semibold">
              TECHNICAL CAPABILITIES
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#dfd7c7]">
              TECHNOLOGIES &amp; SKILLS
            </h2>
          </div>

          {/* Minimalist Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-[#d4af37] to-[#c5a059] text-[#071d12] font-bold shadow-sm'
                    : 'bg-[#0d2f1f] border border-[#c5a059]/25 text-[#dfd7c7]/75 hover:border-[#c5a059]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredGroups.map((group, gIdx) => (
            <div
              key={gIdx}
              className="p-6 sm:p-7 rounded-2xl bg-[#0d2f1f] border border-[#c5a059]/25 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:border-[#c5a059]/60 hover:bg-[#113825] transition-all"
            >
              <div>
                {/* Group Title */}
                <div className="flex items-center justify-between pb-3 border-b border-[#c5a059]/15 mb-4">
                  <h3 className="font-cinzel text-xs font-bold uppercase tracking-[0.2em] text-[#e5c158]">
                    {group.title}
                  </h3>
                  <span className="font-mono text-[9px] text-[#c5a059]/50 uppercase tracking-widest">
                    0{gIdx + 1}
                  </span>
                </div>

                {/* Skills list */}
                <div className="space-y-3.5">
                  {group.skills.map((s, sIdx) => (
                    <div key={sIdx} className="group/item">
                      <div className="flex items-center justify-between text-xs font-mono mb-1">
                        <span className="text-[#dfd7c7] font-medium group-hover/item:text-[#e5c158] transition-colors">
                          {s.name}
                        </span>
                        <span className="text-[10px] text-[#c5a059] tracking-wider uppercase">
                          {s.level}
                        </span>
                      </div>
                      <p className="text-[11px] font-sans text-[#dfd7c7]/55 font-light leading-snug">
                        {s.highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom hairline accent */}
              <div className="pt-4 mt-4 border-t border-[#c5a059]/10 flex items-center justify-between text-[9px] font-mono text-[#c5a059]/50 uppercase tracking-widest">
                <span>VERIFIED PRODUCTION STACK</span>
                <span>NEUST CICT</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
