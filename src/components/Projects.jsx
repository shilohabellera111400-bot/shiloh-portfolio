import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, ChevronLeft, ChevronRight, CheckCircle2, Shield, Eye, Layers } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function Projects() {
  const { projects } = portfolioData;

  // Track active view per project: { [projectId]: viewIndex }
  const [activeViews, setActiveViews] = useState({
    "01": 0,
    "02": 0,
    "03": 0,
    "04": 0,
  });

  const handleSelectView = (projectId, viewIndex) => {
    setActiveViews((prev) => ({
      ...prev,
      [projectId]: viewIndex,
    }));
  };

  const handleNextView = (projectId, totalViews) => {
    setActiveViews((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % totalViews,
    }));
  };

  const handlePrevView = (projectId, totalViews) => {
    setActiveViews((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + totalViews) % totalViews,
    }));
  };

  return (
    <section id="work" className="px-5 sm:px-6 py-20 sm:py-32 relative">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 sm:mb-16">
          <div className="min-w-0">
            <p className="text-xs sm:text-sm uppercase tracking-[0.28em] text-red-400 font-semibold mb-3">
              Selected Work
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-tight text-white">
              Systems I'm proud of<span className="text-red-500">.</span>
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
            Full-stack systems and web applications engineered to solve community, medical, and real-world operations.
          </p>
        </div>

        {/* Project List */}
        <div className="space-y-8 sm:space-y-10">
          {projects.map((project) => {
            const currentViewIndex = activeViews[project.id] || 0;
            const currentView = project.views[currentViewIndex] || project.views[0];

            return (
              <div
                key={project.id}
                className="group relative grid lg:grid-cols-12 gap-6 lg:gap-8 p-5 sm:p-7 md:p-9 rounded-3xl border border-white/10 bg-[#121217]/70 backdrop-blur-xl hover:border-red-500/40 hover:bg-[#15151c]/90 transition-all duration-300 shadow-xl"
              >
                {/* Column 1: Index Number */}
                <div className="lg:col-span-1 text-sm font-mono text-neutral-500 group-hover:text-red-400 transition-colors">
                  {project.id}
                </div>

                {/* Column 2: Details & Technology */}
                <div className="lg:col-span-4 min-w-0 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl tracking-tight text-white group-hover:text-red-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 mb-3 text-[11px] sm:text-xs uppercase tracking-widest text-neutral-400 font-medium">
                      {project.type}
                    </p>
                    <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                      {project.summary}
                    </p>

                    {/* Tech Badges */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] sm:text-xs px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-neutral-300 hover:border-red-500/40 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions: Links */}
                  <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-4 text-xs font-medium text-neutral-400">
                    <span className="flex items-center gap-1.5 text-neutral-300">
                      <Layers className="w-3.5 h-3.5 text-red-400" />
                      {project.views.length} Interactive Views
                    </span>
                    <span className="h-1 w-1 rounded-full bg-neutral-600" />
                    <span className="text-red-400 font-medium">Production Capstone</span>
                  </div>
                </div>

                {/* Column 3: Interactive Role Selector & Live View Simulation */}
                <div className="lg:col-span-7 min-w-0">
                  <div className="relative flex flex-col sm:flex-row gap-3.5 min-w-0">
                    {/* View Switcher Buttons */}
                    <div className="flex flex-row sm:flex-col gap-2 shrink-0">
                      {project.views.map((view, idx) => {
                        const isActive = idx === currentViewIndex;
                        return (
                          <button
                            key={view.id}
                            onClick={() => handleSelectView(project.id, idx)}
                            aria-pressed={isActive}
                            className={`group relative flex flex-1 sm:flex-none flex-row sm:flex-col items-center justify-center gap-1.5 sm:gap-1 rounded-2xl border px-3 py-2.5 sm:py-3.5 text-[10px] font-bold uppercase tracking-[0.14em] transition-all cursor-pointer ${
                              isActive
                                ? 'border-red-500 bg-red-600 text-white shadow-[0_0_25px_-5px_#ef4444]'
                                : 'border-white/10 bg-white/[0.03] text-neutral-400 hover:border-red-500/40 hover:text-white'
                            }`}
                          >
                            <span className="text-base leading-none">{view.icon}</span>
                            <span>{view.label}</span>
                            {isActive && (
                              <span className="hidden sm:block absolute -right-1.5 top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-red-400 animate-pulse" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* View Display Screen */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#09090c] p-4 sm:p-5 flex flex-col justify-between min-h-[290px] sm:min-h-[340px] relative shadow-inner">
                        {/* Top bar simulating browser / dashboard */}
                        <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                            <span className="ml-2 text-[10px] text-neutral-400 font-mono">
                              system://{project.id}-{currentView.id}.local
                            </span>
                          </div>
                          <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/30">
                            {currentView.badge}
                          </span>
                        </div>

                        {/* Interactive UI Mockup Card Representation */}
                        <div className="flex-1 flex flex-col justify-center py-2">
                          <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-lg">{currentView.icon}</span>
                              <h4 className="font-serif text-lg text-white font-semibold">
                                {currentView.label} Overview
                              </h4>
                            </div>
                            <p className="text-xs sm:text-sm text-neutral-300 mb-4 leading-relaxed font-light">
                              {currentView.description}
                            </p>

                            {/* Features list */}
                            <div className="space-y-2">
                              {currentView.highlights.map((h, i) => (
                                <div key={i} className="flex items-center gap-2 text-xs text-neutral-300">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-red-400 shrink-0" />
                                  <span>{h}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Bottom View Indicators & Controls */}
                        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                          <div className="flex gap-1.5 items-center">
                            {project.views.map((_, i) => (
                              <button
                                key={i}
                                onClick={() => handleSelectView(project.id, i)}
                                aria-label={`Go to view ${i + 1}`}
                                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                                  i === currentViewIndex
                                    ? 'w-6 bg-red-500 shadow-[0_0_8px_#ef4444]'
                                    : 'w-2 bg-neutral-700 hover:bg-neutral-500'
                                }`}
                              />
                            ))}
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handlePrevView(project.id, project.views.length)}
                              className="h-7 w-7 rounded-full border border-white/10 bg-white/[0.05] hover:bg-red-600/30 text-white flex items-center justify-center text-xs transition-colors cursor-pointer"
                              aria-label="Previous view"
                            >
                              <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleNextView(project.id, project.views.length)}
                              className="h-7 w-7 rounded-full border border-white/10 bg-white/[0.05] hover:bg-red-600/30 text-white flex items-center justify-center text-xs transition-colors cursor-pointer"
                              aria-label="Next view"
                            >
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
