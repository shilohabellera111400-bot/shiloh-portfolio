import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Laptop,
  LayoutGrid,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Lock,
  Database,
  Code2,
  Eye,
  SlidersHorizontal
} from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function Projects() {
  const { projects } = portfolioData;

  // View Mode: 'spotlight' (interactive cinematic stage) or 'grid' (architectural atelier grid)
  const [viewMode, setViewMode] = useState('spotlight');
  
  // Active selected category filter
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Currently active project in spotlight mode
  const [activeProjectId, setActiveProjectId] = useState(projects[0]?.id || '01');

  // Current active screenshot inside the spotlight device frame
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Full-screen deep-dive architectural modal state
  const [modalProject, setModalProject] = useState(null);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const getProjectCategory = (project) => {
    const t = (project.type || '').toLowerCase();
    if (t.includes('capstone') || t.includes('municipal') || t.includes('governance')) return 'capstone';
    if (t.includes('enterprise') || t.includes('workflow')) return 'enterprise';
    if (t.includes('mobile') || t.includes('ionic')) return 'mobile';
    if (t.includes('game') || t.includes('python')) return 'game';
    return 'portal';
  };

  // Filter projects by category
  const categories = [
    { id: 'all', label: 'ALL ARCHIVES', count: projects.length },
    { id: 'capstone', label: 'E-GOVERNANCE & CAPSTONE', count: projects.filter(p => getProjectCategory(p) === 'capstone').length },
    { id: 'enterprise', label: 'ENTERPRISE WORKFLOW', count: projects.filter(p => getProjectCategory(p) === 'enterprise').length },
    { id: 'mobile', label: 'MOBILE APPS', count: projects.filter(p => getProjectCategory(p) === 'mobile').length },
    { id: 'portal', label: 'REGIONAL PORTALS', count: projects.filter(p => getProjectCategory(p) === 'portal').length },
    { id: 'game', label: 'GAME & PYTHON', count: projects.filter(p => getProjectCategory(p) === 'game').length },
  ];

  const filteredProjects = projects.filter((p) => {
    if (selectedCategory === 'all') return true;
    return getProjectCategory(p) === selectedCategory;
  });

  // Ensure activeProjectId is valid when filter changes
  useEffect(() => {
    if (!filteredProjects.some((p) => p.id === activeProjectId) && filteredProjects.length > 0) {
      setActiveProjectId(filteredProjects[0].id);
      setActiveImageIndex(0);
    }
  }, [selectedCategory, filteredProjects, activeProjectId]);

  // Reset active image index whenever the active project changes
  useEffect(() => {
    setActiveImageIndex(0);
  }, [activeProjectId]);

  const activeProject = projects.find((p) => p.id === activeProjectId) || projects[0];

  // Simulated browser URLs for realistic device UI
  const simulatedUrls = {
    '01': 'https://cswdo.palayan-city.gov.ph/kalinga-hub/portal',
    '02': 'https://internal.prms.enterprise.cloud/approval-pipeline',
    '03': 'https://sumacab-este.barangay-cares.ph/services',
    '04': 'http://localhost:8100/cafeteria-mobile-app/menu',
    '05': 'https://sierra-madre-explorer.tourism.ph/destinations',
    '06': 'terminal://python3/rocket-launch.py --resolution 800x600',
  };

  const currentUrl = simulatedUrls[activeProject.id] || `https://shiloh-abellera.dev/projects/${activeProject.id}`;

  // Image labels for multi-screenshot projects
  const getImageLabel = (project, idx) => {
    if (project.id === '01') {
      const labels = [
        'PUBLIC LANDING PORTAL',
        'CITIZEN DASHBOARD',
        'AICS CRISIS AID',
        'HOUSING PROGRAMS',
        'APPOINTMENT DESK',
        'CSWDO ADVISORIES',
        'RESIDENT LOGIN',
        'CITIZEN REGISTER'
      ];
      return labels[idx] || `VIEW ${idx + 1}`;
    }
    if (project.id === '02') {
      const labels = [
        'LANDING & APPROVAL CHAIN',
        'ROLE-BASED LOGIN',
        'REQUESTER DASHBOARD',
        'PURCHASE REQUEST FORM',
        'REQUEST TRACKING',
        'ADMIN CONSOLE',
        'USER ROLES MANAGEMENT',
        'SUPPLIER DIRECTORY'
      ];
      return labels[idx] || `VIEW ${idx + 1}`;
    }
    if (project.id === '04') {
      const labels = [
        'STUDENT DASHBOARD',
        'PRE-ORDER PROMOS',
        'MENU & CATEGORIES',
        'CART & CHECKOUT',
        'CANTEEN SIDE PORTAL',
        'STUDENT PROFILE'
      ];
      return labels[idx] || `VIEW ${idx + 1}`;
    }
    if (project.id === '03') {
      const labels = [
        'COMMUNITY PORTAL HOME',
        'RESIDENT DASHBOARD',
        'INCIDENT & LOGIN CONSOLE',
        'OFFICIAL LOGO EMBLEM'
      ];
      return labels[idx] || `VIEW ${idx + 1}`;
    }
    if (project.id === '05') {
      const labels = [
        'DISCOVERY LANDING HERO',
        'CATEGORIES & ATTRACTIONS',
        'DESTINATION SEARCH ENGINE',
        'RESORTS DIRECTORY & RATES',
        'RESORT DETAILS & MAP PIN',
        'ADMIN METRICS CONSOLE'
      ];
      return labels[idx] || `VIEW ${idx + 1}`;
    }
    if (project.id === '06') {
      const labels = [
        'ACTIVE FLIGHT & NAVIGATION',
        'LAUNCH PAD & START',
        'MISSION VICTORY & LEVEL UP',
        'CRASH IMPACT & EXPLOSION'
      ];
      return labels[idx] || `VIEW ${idx + 1}`;
    }
    return `VIEW 0${idx + 1}`;
  };

  // Navigate next/prev project in spotlight
  const handleNextProject = () => {
    const currentIndex = filteredProjects.findIndex((p) => p.id === activeProjectId);
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    setActiveProjectId(filteredProjects[nextIndex].id);
  };

  const handlePrevProject = () => {
    const currentIndex = filteredProjects.findIndex((p) => p.id === activeProjectId);
    const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setActiveProjectId(filteredProjects[prevIndex].id);
  };

  const openModal = (project, initialImgIdx = 0) => {
    setModalProject(project);
    setModalImageIndex(initialImgIdx);
  };

  return (
    <section id="work" className="py-20 sm:py-28 px-5 sm:px-8 bg-[#071d12] text-[#dfd7c7] border-b border-[#c5a059]/20 relative overflow-hidden">
      
      {/* Ambient Radial Luxury Glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#c5a059]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#155a36]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Header with Refined Editorial Hierarchy */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#c5a059]/15 pb-6 mb-10 sm:mb-14">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-[9px] uppercase tracking-[0.3em] text-[#c5a059] font-semibold">
              <Sparkles className="w-3 h-3 text-[#c5a059]" />
              <span>SELECTED PRODUCTION &amp; RESEARCH ARCHIVE</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#dfd7c7]">
              FEATURED WORK
            </h2>
          </div>

          {/* Interactive View Switcher (Spotlight Cinema vs Atelier Grid) */}
          <div className="flex items-center gap-3">
            <div className="p-1 rounded-full bg-[#04120a] border border-[#c5a059]/30 flex items-center shadow-inner">
              <button
                type="button"
                onClick={() => setViewMode('spotlight')}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full font-mono text-[10px] uppercase tracking-wider transition-all cursor-pointer ${
                  viewMode === 'spotlight'
                    ? 'bg-gradient-to-r from-[#d4af37] via-[#c5a059] to-[#aa8028] text-[#050a07] font-bold shadow-md'
                    : 'text-[#dfd7c7]/60 hover:text-white'
                }`}
              >
                <Laptop className="w-3.5 h-3.5" />
                <span>SPOTLIGHT STAGE</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full font-mono text-[10px] uppercase tracking-wider transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-gradient-to-r from-[#d4af37] via-[#c5a059] to-[#aa8028] text-[#050a07] font-bold shadow-md'
                    : 'text-[#dfd7c7]/60 hover:text-white'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>ATELIER GRID</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none text-[10px] font-mono tracking-wider uppercase">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full border transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.id
                  ? 'border-[#e5c158] text-[#e5c158] bg-[#c5a059]/15 shadow-[0_0_12px_rgba(197,160,89,0.2)]'
                  : 'border-[#c5a059]/20 text-[#dfd7c7]/60 hover:border-[#c5a059]/40 hover:text-[#dfd7c7] bg-[#04120a]/60'
              }`}
            >
              <span>{cat.label}</span>
              <span className="ml-1.5 text-[8.5px] opacity-60">({cat.count})</span>
            </button>
          ))}
        </div>

        {/* ---------------------------------------------------- */}
        {/* VIEW 1: SPOTLIGHT STAGE (Immersive Interactive Deck) */}
        {/* ---------------------------------------------------- */}
        {viewMode === 'spotlight' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            
            {/* The Main Spotlight Cinema Stage */}
            <div className="relative rounded-3xl border border-[#c5a059]/30 bg-gradient-to-br from-[#082015]/95 via-[#06190f]/95 to-[#04120a]/95 backdrop-blur-xl shadow-[0_30px_70px_rgba(0,0,0,0.85)] p-5 sm:p-7 lg:p-9 overflow-hidden group/stage">
              
              {/* Top Meta Status Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-6 border-b border-[#c5a059]/15">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-[#c5a059] px-2.5 py-1 rounded-md bg-[#c5a059]/10 border border-[#c5a059]/30">
                    ARCHIVE {activeProject.id} / {projects.length.toString().padStart(2, '0')}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#dfd7c7]/70">
                    {activeProject.type}
                  </span>
                </div>

                {/* Quality / Status Badge */}
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0a271a] border border-[#c5a059]/30 text-[9.5px] font-mono uppercase tracking-wider text-[#e5c158]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{activeProject.status}</span>
                  </span>
                </div>
              </div>

              {/* 2-Column Split: Device Console (Left) + System Architecture Narrative (Right) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-8">
                
                {/* Left (7 Cols): Sleek Browser / Device Mockup Frame */}
                <div className="lg:col-span-7 flex flex-col">
                  
                  <div className="relative rounded-2xl overflow-hidden border border-[#c5a059]/35 bg-[#050a07] shadow-[0_20px_50px_rgba(0,0,0,0.8)] group/mockup">
                    
                    {/* Simulated Browser Window Top Bar */}
                    <div className="px-3.5 py-2.5 bg-[#06190f] border-b border-[#c5a059]/20 flex items-center justify-between gap-3 select-none">
                      {/* Window Controls */}
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/80 inline-block" />
                      </div>

                      {/* URL / System Path Input */}
                      <div className="flex-1 max-w-md mx-auto px-3 py-1 rounded-md bg-[#04120a] border border-[#c5a059]/25 flex items-center gap-2 font-mono text-[9px] text-[#dfd7c7]/65 truncate">
                        <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                        <span className="truncate">{currentUrl}</span>
                      </div>

                      {/* Expand Button */}
                      <button
                        type="button"
                        onClick={() => openModal(activeProject, activeImageIndex)}
                        title="Expand Viewport"
                        className="p-1 rounded text-[#dfd7c7]/50 hover:text-[#e5c158] transition-colors cursor-pointer"
                      >
                        <Maximize2 className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Screenshot Display Area with Hover Zoom */}
                    <div
                      onClick={() => openModal(activeProject, activeImageIndex)}
                      className="relative aspect-[16/10] bg-[#020604] overflow-hidden cursor-zoom-in flex items-center justify-center"
                    >
                      {activeProject.id === '04' ? (
                        <>
                          {/* Ambient blurred backdrop for mobile presentation */}
                          <div
                            className="absolute inset-0 bg-cover bg-center filter blur-2xl opacity-30 scale-125"
                            style={{ backgroundImage: `url(${activeProject.images && activeProject.images.length > 0 ? activeProject.images[activeImageIndex] : ''})` }}
                          />
                          <div className="relative z-10 h-[92%] my-auto py-1 flex items-center justify-center">
                            <img
                              key={`${activeProject.id}-${activeImageIndex}`}
                              src={activeProject.images && activeProject.images.length > 0 ? activeProject.images[activeImageIndex] : '/images/projects/proclink_banner.jpg'}
                              alt={`${activeProject.title} mobile screen`}
                              className="h-full w-auto max-w-[280px] object-contain rounded-2xl shadow-[0_12px_36px_rgba(0,0,0,0.85)] border-2 border-[#c5a059]/40 filter contrast-[1.04] brightness-[0.98] transition-all duration-500 hover:scale-[1.03]"
                            />
                          </div>
                        </>
                      ) : activeProject.id === '06' ? (
                        <>
                          {/* Ambient dark starry backdrop for Pygame game canvas */}
                          <div
                            className="absolute inset-0 bg-cover bg-center filter blur-2xl opacity-25 scale-125 pointer-events-none"
                            style={{ backgroundImage: `url(${activeProject.images && activeProject.images.length > 0 ? activeProject.images[activeImageIndex] : ''})` }}
                          />
                          <div className="relative z-10 h-full w-full p-2 flex items-center justify-center">
                            <img
                              key={`${activeProject.id}-${activeImageIndex}`}
                              src={activeProject.images && activeProject.images.length > 0 ? activeProject.images[activeImageIndex] : '/images/projects/proclink_banner.jpg'}
                              alt={`${activeProject.title} Pygame Canvas`}
                              className="h-full w-auto max-w-full object-contain rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.9)] border border-[#c5a059]/35 filter contrast-[1.05] brightness-[0.98] transition-all duration-500 hover:scale-[1.02]"
                            />
                          </div>
                        </>
                      ) : (
                        <img
                          key={`${activeProject.id}-${activeImageIndex}`}
                          src={activeProject.images && activeProject.images.length > 0 ? activeProject.images[activeImageIndex] : '/images/projects/proclink_banner.jpg'}
                          alt={`${activeProject.title} screenshot`}
                          className="w-full h-full object-cover filter contrast-[1.04] brightness-[0.96] transition-all duration-700 hover:scale-105"
                        />
                      )}

                      {/* Ambient Gradient Bottom Vignette (for web screenshots) */}
                      {activeProject.id !== '04' && activeProject.id !== '06' && (
                        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#020604] via-[#020604]/40 to-transparent pointer-events-none" />
                      )}

                      {/* Expand Prompt Hint Overlay */}
                      <div className="absolute inset-0 bg-[#071d12]/40 opacity-0 group-hover/mockup:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none z-20">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#082015]/95 border border-[#e5c158] text-[#e5c158] font-mono text-[10px] uppercase tracking-widest shadow-2xl">
                          <Eye className="w-3.5 h-3.5" />
                          <span>CLICK TO ENLARGE SPECIFICATION</span>
                        </span>
                      </div>
                    </div>

                    {/* Multi-Screenshot Tab Bar (If multiple screenshots exist) */}
                    {activeProject.images && activeProject.images.length > 1 && (
                      <div className="p-2.5 bg-[#06190f] border-t border-[#c5a059]/20 flex items-center gap-2 overflow-x-auto scrollbar-none">
                        {activeProject.images.map((img, imgIdx) => (
                          <button
                            key={imgIdx}
                            type="button"
                            onClick={() => setActiveImageIndex(imgIdx)}
                            className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-[9px] font-mono uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                              activeImageIndex === imgIdx
                                ? 'bg-[#c5a059] text-[#050a07] font-bold shadow-sm'
                                : 'bg-[#04120a] border border-[#c5a059]/25 text-[#dfd7c7]/65 hover:text-white hover:border-[#c5a059]/50'
                            }`}
                          >
                            <span>{getImageLabel(activeProject, imgIdx)}</span>
                          </button>
                        ))}
                      </div>
                    )}

                  </div>

                  {/* Tech Stack Pills beneath device frame */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {activeProject.technologies.slice(0, 5).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[9.5px] font-mono px-2.5 py-1 rounded-md bg-[#04120a] border border-[#c5a059]/25 text-[#dfd7c7]/80 hover:border-[#e5c158] hover:text-[#e5c158] transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                    {activeProject.technologies.length > 5 && (
                      <span className="text-[9.5px] font-mono px-2 py-1 rounded-md bg-[#04120a] border border-[#c5a059]/15 text-[#c5a059]">
                        +{activeProject.technologies.length - 5} MORE
                      </span>
                    )}
                  </div>

                </div>

                {/* Right (5 Cols): System Architecture Narrative & Key Highlights */}
                <div className="lg:col-span-5 space-y-5">
                  
                  <div>
                    <h3 className="font-cinzel text-2xl sm:text-3xl text-[#dfd7c7] font-normal tracking-wide uppercase leading-tight mb-1.5">
                      {activeProject.title}
                    </h3>
                    <p className="font-editorial-serif italic text-sm text-[#e5c158] font-light">
                      {activeProject.subtitle}
                    </p>
                  </div>

                  {/* Institutional Client & Lead Role */}
                  <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-[#050a07]/80 border border-[#c5a059]/20 font-mono text-[9.5px]">
                    <div>
                      <span className="text-[#c5a059]/75 uppercase tracking-wider block mb-0.5">
                        CLIENT / INSTITUTION
                      </span>
                      <p className="text-[#dfd7c7] font-semibold truncate">
                        {activeProject.client}
                      </p>
                    </div>
                    <div>
                      <span className="text-[#c5a059]/75 uppercase tracking-wider block mb-0.5">
                        PRIMARY ROLE
                      </span>
                      <p className="text-[#dfd7c7] font-semibold truncate">
                        {activeProject.role}
                      </p>
                    </div>
                  </div>

                  {/* Executive Summary */}
                  <p className="text-xs sm:text-[13px] text-[#dfd7c7]/80 font-light leading-relaxed font-sans">
                    {activeProject.summary}
                  </p>

                  {/* Key Deliverables & Feats Checklist */}
                  <div className="space-y-2 pt-2 border-t border-[#c5a059]/15">
                    <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#c5a059] block font-semibold">
                      ARCHITECTURAL DELIVERABLES &amp; ACHIEVEMENTS
                    </span>
                    <ul className="space-y-2">
                      {activeProject.highlights.slice(0, 3).map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-[#dfd7c7]/75 font-light leading-snug">
                          <span className="text-[#e5c158] text-xs font-serif leading-none mt-0.5">❖</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Dual Primary Actions */}
                  <div className="pt-3 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => openModal(activeProject, activeImageIndex)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#c5a059] to-[#aa8028] text-[#050a07] font-mono text-xs uppercase font-bold tracking-wider hover:brightness-110 transition-all shadow-md active:scale-95 cursor-pointer"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>INSPECT SPECIFICATIONS</span>
                    </button>

                    <a
                      href={activeProject.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#c5a059]/35 bg-[#050a07] text-[#dfd7c7] font-mono text-xs uppercase tracking-wider hover:border-[#e5c158] hover:text-[#e5c158] transition-all"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>REPOSITORY</span>
                      <ArrowUpRight className="w-3 h-3 text-[#c5a059]" />
                    </a>
                  </div>

                </div>

              </div>

              {/* Bottom Horizontal Interactive Project Selector Rail */}
              <div className="pt-6 border-t border-[#c5a059]/15">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="font-mono text-[9.5px] uppercase tracking-[0.25em] text-[#c5a059] font-bold">
                    SELECT SYSTEM ARCHIVE ({filteredProjects.length})
                  </span>

                  {/* Scrubber Navigation Arrows */}
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={handlePrevProject}
                      title="Previous Project"
                      className="p-1.5 rounded-full bg-[#04120a] border border-[#c5a059]/30 text-[#dfd7c7] hover:border-[#e5c158] hover:text-[#e5c158] transition-all cursor-pointer active:scale-90"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNextProject}
                      title="Next Project"
                      className="p-1.5 rounded-full bg-[#04120a] border border-[#c5a059]/30 text-[#dfd7c7] hover:border-[#e5c158] hover:text-[#e5c158] transition-all cursor-pointer active:scale-90"
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* 5-Card Rail */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  {filteredProjects.map((p) => {
                    const isSelected = p.id === activeProjectId;
                    return (
                      <div
                        key={p.id}
                        onClick={() => setActiveProjectId(p.id)}
                        className={`group/card cursor-pointer p-2.5 rounded-xl border transition-all duration-300 relative flex flex-col justify-between ${
                          isSelected
                            ? 'bg-[#0f3822] border-[#e5c158] shadow-[0_0_20px_rgba(229,193,88,0.25)] -translate-y-0.5'
                            : 'bg-[#04120a]/80 border-[#c5a059]/20 hover:border-[#c5a059]/50 hover:bg-[#082015]'
                        }`}
                      >
                        {/* Mini Thumbnail */}
                        <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-white/10 mb-2 bg-[#020604]">
                          <img
                            src={p.images && p.images.length > 0 ? p.images[0] : '/images/projects/proclink_banner.jpg'}
                            alt={p.title}
                            className={`w-full h-full object-cover transition-transform duration-500 ${
                              isSelected ? 'scale-105 brightness-105' : 'brightness-75 group-hover/card:brightness-95'
                            }`}
                          />
                          <span className="absolute top-1 left-1 font-mono text-[8px] font-bold px-1.5 py-0.5 rounded bg-[#04120a]/90 text-[#dfd7c7]">
                            0{p.id}
                          </span>
                        </div>

                        {/* Title & Short Category */}
                        <div>
                          <h4 className={`font-cinzel text-xs font-semibold uppercase leading-snug line-clamp-1 transition-colors ${
                            isSelected ? 'text-[#e5c158]' : 'text-[#dfd7c7] group-hover/card:text-white'
                          }`}>
                            {p.title}
                          </h4>
                          <p className="font-mono text-[8px] text-[#c5a059]/70 uppercase tracking-wider truncate mt-0.5">
                            {p.type.split('·')[0].trim()}
                          </p>
                        </div>

                        {/* Active Indicator Line */}
                        <div className={`mt-2 h-0.5 w-full rounded-full transition-colors ${
                          isSelected ? 'bg-gradient-to-r from-[#d4af37] to-[#e5c158]' : 'bg-transparent'
                        }`} />
                      </div>
                    );
                  })}
                </div>

              </div>

            </div>

          </div>
        )}

        {/* ---------------------------------------------------- */}
        {/* VIEW 2: ATELIER GRID (Multi-Column Luxury Matrix)    */}
        {/* ---------------------------------------------------- */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 animate-in fade-in duration-500">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                onClick={() => openModal(project)}
                className="group/gridCard cursor-pointer rounded-2xl border border-[#c5a059]/25 bg-[#082015]/90 hover:border-[#e5c158] hover:shadow-[0_20px_50px_rgba(0,0,0,0.85)] p-4 sm:p-5 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1"
              >
                <div>
                  {/* Thumbnail Banner with Index Badge & Plus Overlay */}
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-[#c5a059]/20 bg-[#030d07] mb-4">
                    <img
                      src={project.images && project.images.length > 0 ? project.images[0] : '/images/projects/proclink_banner.jpg'}
                      alt={project.title}
                      className="w-full h-full object-cover filter contrast-[1.04] brightness-[0.92] group-hover/gridCard:scale-105 group-hover/gridCard:brightness-100 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#04120a] via-transparent to-transparent opacity-60" />

                    <span className="absolute top-2.5 left-2.5 text-[9px] font-mono tracking-widest text-[#dfd7c7] px-2 py-0.5 rounded bg-[#04120a]/90 border border-white/10 uppercase">
                      ARCHIVE {project.id}
                    </span>

                    <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-[#04120a]/90 border border-[#c5a059]/40 flex items-center justify-center text-[#c5a059] group-hover/gridCard:bg-[#c5a059] group-hover/gridCard:text-[#050a07] transition-all">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Metadata */}
                  <span className="font-mono text-[9px] text-[#c5a059] uppercase tracking-widest block mb-1">
                    {project.type}
                  </span>
                  <h3 className="font-cinzel text-base font-semibold text-[#dfd7c7] tracking-wider uppercase group-hover/gridCard:text-[#e5c158] transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#dfd7c7]/70 font-light leading-relaxed line-clamp-2 font-sans mb-3">
                    {project.summary}
                  </p>
                </div>

                {/* Footer Chips & Action */}
                <div>
                  <div className="flex flex-wrap gap-1 mb-3 pt-2 border-t border-[#c5a059]/10">
                    {project.technologies.slice(0, 3).map((t, i) => (
                      <span key={i} className="text-[8.5px] font-mono px-2 py-0.5 rounded bg-[#04120a] border border-[#c5a059]/15 text-[#dfd7c7]/75">
                        {t}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[8.5px] font-mono px-1.5 py-0.5 text-[#c5a059]">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-mono text-[#c5a059] pt-1">
                    <span className="uppercase tracking-widest group-hover/gridCard:text-white transition-colors">
                      VIEW SPECIFICATION
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/gridCard:translate-x-0.5 group-hover/gridCard:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      {/* ------------------------------------------------------------------ */}
      {/* FULL-SCREEN ARCHITECTURAL SPECIFICATION MODAL                      */}
      {/* ------------------------------------------------------------------ */}
      {modalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#030d07]/95 backdrop-blur-xl animate-in fade-in"
          onClick={() => setModalProject(null)}
        >
          <div
            className="relative w-full max-w-5xl bg-[#082015] border border-[#c5a059]/40 rounded-3xl p-5 sm:p-8 text-[#dfd7c7] shadow-[0_30px_80px_rgba(0,0,0,0.95)] max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-[#c5a059]/20 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#c5a059] font-bold">
                    ARCHIVE {modalProject.id} &bull; {modalProject.type}
                  </span>
                  <span className="text-xs text-[#c5a059]/40">&bull;</span>
                  <span className="text-[9px] font-mono text-emerald-400 font-semibold uppercase">
                    {modalProject.status}
                  </span>
                </div>
                <h3 className="font-cinzel text-2xl sm:text-3xl text-[#dfd7c7] font-normal uppercase">
                  {modalProject.title}
                </h3>
                <p className="font-editorial-serif italic text-xs sm:text-sm text-[#e5c158] mt-0.5">
                  {modalProject.subtitle}
                </p>
              </div>

              <button
                onClick={() => setModalProject(null)}
                className="w-9 h-9 rounded-full bg-[#0a271a] border border-[#c5a059]/35 text-[#dfd7c7] hover:text-white hover:border-[#e5c158] flex items-center justify-center transition-all cursor-pointer shadow-md"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Main Screenshot Carousel Viewer */}
            <div className="relative rounded-2xl overflow-hidden border border-[#c5a059]/25 bg-[#030a05] mb-6">
              <div className="relative aspect-[16/9] max-h-[500px] w-full flex items-center justify-center bg-[#020604] overflow-hidden">
                {modalProject.id === '04' && (
                  <div
                    className="absolute inset-0 bg-cover bg-center filter blur-3xl opacity-25 scale-125 pointer-events-none"
                    style={{ backgroundImage: `url(${modalProject.images && modalProject.images.length > 0 ? modalProject.images[modalImageIndex] : ''})` }}
                  />
                )}
                <img
                  src={modalProject.images && modalProject.images.length > 0 ? modalProject.images[modalImageIndex] : '/images/projects/proclink_banner.jpg'}
                  alt={modalProject.title}
                  className={`relative z-10 filter contrast-[1.04] ${modalProject.id === '04' ? 'h-[92%] w-auto max-w-[280px] object-contain rounded-2xl shadow-2xl border-2 border-[#c5a059]/40 my-2' : modalProject.id === '06' ? 'h-[96%] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-[#c5a059]/35 my-1' : 'w-full h-full object-contain'}`}
                />
              </div>

              {/* Multi-Screenshot Selector Strip inside Modal */}
              {modalProject.images && modalProject.images.length > 1 && (
                <div className="p-3 bg-[#04120a] border-t border-[#c5a059]/20 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 overflow-x-auto">
                    {modalProject.images.map((img, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setModalImageIndex(idx)}
                        className={`px-3 py-1 rounded text-[9px] font-mono uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                          modalImageIndex === idx
                            ? 'bg-[#c5a059] text-[#050a07] font-bold'
                            : 'bg-[#082015] border border-[#c5a059]/25 text-[#dfd7c7]/65 hover:text-white'
                        }`}
                      >
                        {getImageLabel(modalProject, idx)}
                      </button>
                    ))}
                  </div>
                  <span className="font-mono text-[9px] text-[#c5a059]/80 uppercase tracking-widest shrink-0">
                    SCREENSHOT {modalImageIndex + 1} OF {modalProject.images.length}
                  </span>
                </div>
              )}
            </div>

            {/* Detailed Architecture Breakdown Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
              
              {/* Left Column: System Overview & Deliverables */}
              <div className="md:col-span-7 space-y-5">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#c5a059] mb-2 font-bold">
                    SYSTEM OVERVIEW
                  </h4>
                  <p className="text-xs sm:text-[13px] text-[#dfd7c7]/85 font-light leading-relaxed">
                    {modalProject.summary}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#c5a059]/15">
                  <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#c5a059] mb-3 font-bold">
                    VERIFIED DELIVERABLES &amp; ACHIEVEMENTS
                  </h4>
                  <ul className="space-y-2.5">
                    {modalProject.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs text-[#dfd7c7]/80 font-light">
                        <CheckCircle2 className="w-4 h-4 text-[#e5c158] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Institutional Details & Tech Stack */}
              <div className="md:col-span-5 space-y-4 bg-[#050a07] p-5 sm:p-6 rounded-2xl border border-[#c5a059]/20 shadow-inner">
                <div>
                  <span className="font-mono text-[9px] text-[#c5a059] uppercase tracking-wider block font-semibold">
                    ROLE &amp; ARCHITECTURAL RESPONSIBILITY
                  </span>
                  <p className="text-xs font-mono text-[#dfd7c7] font-semibold mt-0.5">
                    {modalProject.role}
                  </p>
                </div>

                <div>
                  <span className="font-mono text-[9px] text-[#c5a059] uppercase tracking-wider block font-semibold">
                    CLIENT / INSTITUTIONAL PARTNER
                  </span>
                  <p className="text-xs font-mono text-[#dfd7c7]/80 mt-0.5">
                    {modalProject.client}
                  </p>
                </div>

                <div>
                  <span className="font-mono text-[9px] text-[#c5a059] uppercase tracking-wider block font-semibold">
                    STANDARDS &amp; EVALUATION
                  </span>
                  <p className="text-xs font-mono text-emerald-400 mt-0.5">
                    {modalProject.status}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#c5a059]/15">
                  <span className="font-mono text-[9px] text-[#c5a059] uppercase tracking-wider block mb-2 font-semibold">
                    VERIFIED TECHNOLOGIES
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {modalProject.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[9.5px] font-mono px-2.5 py-1 rounded bg-[#0a271a] border border-[#c5a059]/30 text-[#dfd7c7]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3">
                  <a
                    href={modalProject.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#c5a059] to-[#aa8028] text-[#050a07] font-mono text-xs uppercase font-bold tracking-wider hover:brightness-110 transition-all shadow-md active:scale-95"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>VIEW GITHUB REPOSITORY</span>
                    <ArrowUpRight className="w-3 h-3 text-[#050a07]" />
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
