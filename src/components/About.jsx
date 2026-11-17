import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  Download,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Camera,
  RotateCw,
  RotateCcw,
  Play,
  Pause,
  Sparkles
} from 'lucide-react';

export default function About({ onToggleHobbies, isHobbiesOpen }) {
  const { personalInfo } = portfolioData;

  // 7 Wide Curved Segments for the Radial Archival Fan
  // Scaled & Compact Geometry (400x890): Wide, open photographic frames with individual radial pop-out vectors
  const fanSectors = [
    {
      id: 'sunset',
      title: 'Sunset Vista',
      mood: 'Golden Hour Horizon',
      location: 'Mountain Ridge & Pines',
      src: '/images/about/shiloh-sunset-portrait.jpg',
      align: 'xMidYMin slice',
      d: 'M 95.2 1.5 A 480 480 0 0 1 214.9 77.7 L 70.6 243.8 A 260 260 0 0 0 5.8 202.5 Z',
      img: { x: -2, y: -7, width: 225, height: 258 },
      popOut: { x: 7.5, y: -11.8 },
    },
    {
      id: 'lantern',
      title: 'Lantern Night',
      mood: 'Warm Editorial Noir',
      location: 'Studio Nocturne',
      src: '/images/about/shiloh-lantern-portrait.jpg',
      align: 'xMidYMin slice',
      d: 'M 227.4 89.0 A 480 480 0 0 1 315.7 200.0 L 125.2 310.0 A 260 260 0 0 0 77.3 249.8 Z',
      img: { x: 69, y: 81, width: 254, height: 237 },
      popOut: { x: 11.0, y: -8.7 },
    },
    {
      id: 'pink_shirt',
      title: 'Radiant Summer',
      mood: 'Warm Casual Sophistication',
      location: 'Daylight Courtyard',
      src: '/images/about/shiloh-pink-shirt-portrait.jpg',
      align: 'xMidYMin slice',
      d: 'M 323.8 214.7 A 480 480 0 0 1 371.2 348.4 L 155.2 390.4 A 260 260 0 0 0 129.6 317.9 Z',
      img: { x: 122, y: 207, width: 258, height: 192 },
      popOut: { x: 13.2, y: -4.7 },
    },
    {
      id: 'bandana',
      title: 'Ashiro Persona',
      mood: 'Bandana Noir Alter-Ego',
      location: 'Urban Creative Studio',
      src: '/images/about/shiloh-bandana-portrait.jpg',
      align: 'xMidYMid slice',
      d: 'M 374.1 364.9 A 480 480 0 0 1 374.1 515.1 L 156.8 480.7 A 260 260 0 0 0 156.8 399.3 Z',
      img: { x: 149, y: 357, width: 233, height: 166 },
      popOut: { x: 14.0, y: 0.0 },
    },
    {
      id: 'nature',
      title: 'Serene Avenue',
      mood: 'Quiet Forest Serenity',
      location: 'Greenwood Walkway',
      src: '/images/about/shiloh-nature-portrait.jpg',
      align: 'xMinYMid slice',
      d: 'M 371.2 531.6 A 480 480 0 0 1 323.8 665.3 L 129.6 562.1 A 260 260 0 0 0 155.2 489.6 Z',
      img: { x: 122, y: 482, width: 258, height: 192 },
      popOut: { x: 13.2, y: 4.7 },
    },
    {
      id: 'gym',
      title: 'Athletic Discipline',
      mood: 'Strength & Training',
      location: 'Performance Studio',
      src: '/images/about/shiloh-gym-portrait.jpg',
      align: 'xMidYMin slice',
      d: 'M 315.7 680.0 A 480 480 0 0 1 227.4 791.0 L 77.3 630.2 A 260 260 0 0 0 125.2 570.0 Z',
      img: { x: 69, y: 562, width: 254, height: 237 },
      popOut: { x: 11.0, y: 8.7 },
    },
    {
      id: 'car',
      title: 'Nocturnal Drive',
      mood: 'Midnight Velocity',
      location: 'Urban Atmosphere',
      src: '/images/about/shiloh-car-portrait.jpg',
      align: 'xMidYMid slice',
      d: 'M 214.9 802.3 A 480 480 0 0 1 95.2 878.5 L 5.8 677.5 A 260 260 0 0 0 70.6 636.2 Z',
      img: { x: -2, y: 628, width: 225, height: 258 },
      popOut: { x: 7.5, y: 11.8 },
    },
  ];

  const [activeFanIndex, setActiveFanIndex] = useState(2);
  const [hoveredFanIndex, setHoveredFanIndex] = useState(null);
  const [isAutoOrbit, setIsAutoOrbit] = useState(true);
  const [rotationOffsetDeg, setRotationOffsetDeg] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const activePhoto = fanSectors[activeFanIndex];

  // Rotate circularly clockwise
  const handleRotateCw = () => {
    setActiveFanIndex((prev) => (prev + 1) % fanSectors.length);
    setRotationOffsetDeg((prev) => prev - 5.5);
  };

  // Rotate circularly counter-clockwise
  const handleRotateCcw = () => {
    setActiveFanIndex((prev) => (prev - 1 + fanSectors.length) % fanSectors.length);
    setRotationOffsetDeg((prev) => prev + 5.5);
  };

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const nextLightbox = (e) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % fanSectors.length);
  };

  const prevLightbox = (e) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + fanSectors.length) % fanSectors.length);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev + 1) % fanSectors.length);
      if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev - 1 + fanSectors.length) % fanSectors.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, fanSectors.length]);

  const coreStrengths = [
    {
      name: "Creativity",
      description: "Infusing technical architectures with visual storytelling, artistic proportion, and human-centric design."
    },
    {
      name: "Adaptability",
      description: "Swiftly mastering new frameworks, server environments, and client requirements under evolving workflows."
    },
    {
      name: "Problem-Solving",
      description: "Diagnosing complex relational bottlenecks and edge-case errors with systematic engineering discipline."
    },
    {
      name: "Continuous Learning",
      description: "Actively acquiring validated credentials in modern cloud systems, microservices, and design tools."
    },
    {
      name: "Attention to Detail",
      description: "Upholding pixel precision, normalized 3NF schemas, semantic markup, and comprehensive documentation."
    },
    {
      name: "Teamwork & Collaboration",
      description: "Communicating with cross-functional developers, stakeholders, and academic panels with humility and clarity."
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 px-5 sm:px-8 bg-[#082015] text-[#dfd7c7] border-b border-[#c5a059]/20 relative overflow-hidden">
      
      {/* Background Subtle Ambient Velvet Glow */}
      <div className="absolute top-1/4 -left-20 w-[650px] h-[650px] rounded-full bg-radial from-[#155a36]/40 via-[#0e3b24]/20 to-transparent blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[550px] rounded-full bg-[#1b6b42]/20 blur-[140px] pointer-events-none" />

      {/* Embedded Animation Keyframes for Circular Orbital Drift */}
      <style>{`
        @keyframes circularOrbitalDrift {
          0% {
            transform: rotate(-3.5deg);
          }
          50% {
            transform: rotate(3.5deg);
          }
          100% {
            transform: rotate(-3.5deg);
          }
        }
        .animate-circular-orbit {
          animation: circularOrbitalDrift 16s ease-in-out infinite;
        }
      `}</style>

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#c5a059]/15 pb-6 mb-12 sm:mb-16">
          <div>
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#c5a059] block mb-2 font-semibold">
              IDENTITY &amp; CHARACTER
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#dfd7c7]">
              ABOUT ME
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#c5a059] uppercase tracking-wider">
            <span>FULL STACK DEVELOPER &bull; GRAPHIC DESIGNER</span>
          </div>
        </div>

        {/* Main 2-Column Luxury Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16">
          
          {/* Left Column: Radial Curved Fan Gallery with Circular Motion & Hover Pop-Out */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-center justify-center">
            
            <div
              className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[360px] xl:max-w-[390px] aspect-[400/890] select-none group/fan"
              onMouseLeave={() => setHoveredFanIndex(null)}
            >
              
              {/* SVG Curved Radial Fan */}
              <svg viewBox="0 0 400 890" className="w-full h-full drop-shadow-[0_20px_45px_rgba(0,0,0,0.85)] overflow-visible">
                <defs>
                  {fanSectors.map((sector) => (
                    <clipPath id={`fan-clip-${sector.id}`} key={sector.id}>
                      <path d={sector.d} />
                    </clipPath>
                  ))}
                  <radialGradient id="fanAmbientGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#155a36" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#082015" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Inner and Outer Curved Baseline Guides */}
                <circle cx="-100" cy="440" r="260" fill="none" stroke="#c5a059" strokeOpacity="0.22" strokeDasharray="4 4" />
                <circle cx="-100" cy="440" r="480" fill="none" stroke="#c5a059" strokeOpacity="0.2" />

                {/* Dynamic Rotating Track Group (Circular Orbital Motion around Circle Center -100, 440) */}
                <g
                  style={{
                    transformOrigin: '-100px 440px',
                    transform: `rotate(${rotationOffsetDeg}deg)`,
                    transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  {/* Ambient Circular Floating Drift (Pauses on Hover or when manually toggled) */}
                  <g
                    className={isAutoOrbit && hoveredFanIndex === null ? 'animate-circular-orbit' : ''}
                    style={{
                      transformOrigin: '-100px 440px',
                    }}
                  >
                    {fanSectors.map((sector, idx) => {
                      const isHovered = hoveredFanIndex === idx;
                      const isActive = activeFanIndex === idx;
                      const hasAnyHover = hoveredFanIndex !== null;

                      // Pop-out radial vector when hovered
                      const popX = isHovered ? sector.popOut.x : (isActive ? sector.popOut.x * 0.45 : 0);
                      const popY = isHovered ? sector.popOut.y : (isActive ? sector.popOut.y * 0.45 : 0);

                      return (
                        <g
                          key={sector.id}
                          className="cursor-pointer transition-all duration-400"
                          style={{
                            transform: `translate(${popX}px, ${popY}px)`,
                            transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease',
                            opacity: hasAnyHover ? (isHovered ? 1 : 0.65) : 1,
                          }}
                          onClick={() => openLightbox(idx)}
                          onMouseEnter={() => {
                            setHoveredFanIndex(idx);
                            setActiveFanIndex(idx);
                          }}
                        >
                          {/* Photo clipped to the wide curved sector with tailored focal alignment and hover zoom */}
                          <image
                            href={sector.src}
                            x={sector.img.x}
                            y={sector.img.y}
                            width={sector.img.width}
                            height={sector.img.height}
                            preserveAspectRatio={sector.align}
                            clipPath={`url(#fan-clip-${sector.id})`}
                            className="transition-all duration-500"
                            style={{
                              filter: isHovered
                                ? 'contrast(1.12) brightness(1.08) saturate(1.06)'
                                : isActive
                                ? 'contrast(1.08) brightness(1.04)'
                                : 'contrast(1.02) brightness(0.88)',
                              transform: isHovered ? 'scale(1.035)' : 'scale(1)',
                              transformOrigin: `${sector.img.x + sector.img.width / 2}px ${sector.img.y + sector.img.height / 2}px`,
                              transition: 'transform 0.4s ease-out, filter 0.4s ease-out',
                            }}
                          />

                          {/* Golden Outline Frame with Radiant Glow on Hover */}
                          <path
                            d={sector.d}
                            fill="transparent"
                            stroke={isHovered ? '#f5d77f' : isActive ? '#e5c158' : '#c5a059'}
                            strokeWidth={isHovered ? '3.5' : isActive ? '2.5' : '1.6'}
                            strokeOpacity={isHovered ? '1' : isActive ? '0.9' : '0.4'}
                            className="transition-all duration-300"
                            style={{
                              filter: isHovered
                                ? 'drop-shadow(0 0 14px rgba(245,215,127,0.85)) drop-shadow(0 0 24px rgba(197,160,89,0.5))'
                                : isActive
                                ? 'drop-shadow(0 0 9px rgba(245,215,127,0.55))'
                                : 'none',
                              transition: 'all 0.35s ease',
                            }}
                          />
                        </g>
                      );
                    })}
                  </g>
                </g>
              </svg>

              {/* Inside the Arc: Central Editorial Information Hub with Circular Motion Controls */}
              <div className="absolute top-[50%] left-1 sm:left-2 -translate-y-1/2 w-[145px] sm:w-[160px] p-3 sm:p-3.5 rounded-2xl bg-[#082015]/95 border border-[#c5a059]/40 backdrop-blur-md shadow-[0_20px_45px_rgba(0,0,0,0.8)] z-20 transition-all duration-300">
                
                {/* Monogram, Circular Orbit Toggle & Counter Header */}
                <div className="flex items-center justify-between gap-1.5 pb-2 mb-2 border-b border-[#c5a059]/20">
                  <img
                    src="/images/logo/shiloh-monogram-gold.png"
                    alt="SA"
                    className="w-5 h-5 object-contain"
                  />

                  <div className="flex items-center gap-1.5">
                    {/* Auto Orbit Motion Toggle */}
                    <button
                      type="button"
                      onClick={() => setIsAutoOrbit(!isAutoOrbit)}
                      title={isAutoOrbit ? "Pause Circular Motion" : "Resume Circular Motion"}
                      className={`p-1 rounded-full text-[9px] border transition-all cursor-pointer ${
                        isAutoOrbit
                          ? 'border-[#e5c158] text-[#e5c158] bg-[#c5a059]/15'
                          : 'border-white/20 text-[#dfd7c7]/50 hover:text-white'
                      }`}
                    >
                      {isAutoOrbit ? <Pause className="w-2.5 h-2.5" /> : <Play className="w-2.5 h-2.5" />}
                    </button>

                    <span className="font-mono text-[8.5px] uppercase tracking-[0.15em] text-[#c5a059] font-bold">
                      0{activeFanIndex + 1} &bull; 07
                    </span>
                  </div>
                </div>

                {/* Shiloh's Name Only */}
                <div className="py-1.5 mb-2.5 text-center sm:text-left">
                  <h4 className="font-cinzel text-xs sm:text-sm text-[#dfd7c7] font-bold tracking-[0.16em] uppercase leading-snug">
                    SHILOH ABELLERA
                  </h4>
                </div>

                {/* Circular Rotation Controls: Rotate Left, View Full, Rotate Right */}
                <div className="flex items-center gap-1 mb-2">
                  <button
                    type="button"
                    onClick={handleRotateCcw}
                    title="Rotate Arc Upwards"
                    className="p-1 sm:p-1.5 rounded-full bg-[#0d2f1f] border border-[#c5a059]/35 hover:border-[#f5d77f] text-[#dfd7c7] hover:text-[#f5d77f] transition-all cursor-pointer shadow-sm active:scale-90"
                  >
                    <RotateCcw className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  </button>

                  <button
                    type="button"
                    onClick={() => openLightbox(activeFanIndex)}
                    className="flex-1 inline-flex items-center justify-center gap-1 py-1 px-1.5 rounded-full bg-[#0d2f1f] hover:bg-[#133d2a] border border-[#c5a059]/40 text-[#dfd7c7] text-[9px] font-mono uppercase tracking-wider transition-all hover:border-[#f5d77f] hover:text-[#f5d77f] cursor-pointer shadow-sm group"
                  >
                    <Maximize2 className="w-2.5 h-2.5 text-[#c5a059] group-hover:scale-110 transition-transform" />
                    <span>VIEW</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleRotateCw}
                    title="Rotate Arc Downwards"
                    className="p-1 sm:p-1.5 rounded-full bg-[#0d2f1f] border border-[#c5a059]/35 hover:border-[#f5d77f] text-[#dfd7c7] hover:text-[#f5d77f] transition-all cursor-pointer shadow-sm active:scale-90"
                  >
                    <RotateCw className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  </button>
                </div>

                {/* 7 Indicator Dots */}
                <div className="flex items-center justify-center gap-1 pt-1.5 border-t border-[#c5a059]/15">
                  {fanSectors.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setActiveFanIndex(idx);
                        setRotationOffsetDeg((idx - 2) * -3);
                      }}
                      aria-label={`View photo ${idx + 1}`}
                      className={`h-1 rounded-full transition-all cursor-pointer ${
                        activeFanIndex === idx
                          ? 'w-3.5 bg-gradient-to-r from-[#d4af37] to-[#e5c158]'
                          : 'w-1 bg-[#c5a059]/30 hover:bg-[#c5a059]/60'
                      }`}
                    />
                  ))}
                </div>

              </div>

            </div>

            {/* Bottom Subtle Prompt with Orbital Status */}
            <div className="mt-3 text-center">
              <span className="inline-flex items-center gap-1.5 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#c5a059]/80">
                <Sparkles className="w-3 h-3 text-[#c5a059]" />
                <span>CIRCULAR MOTION GALLERY &bull; HOVER TO POP-OUT &bull; CLICK TO ENLARGE</span>
              </span>
            </div>

          </div>

          {/* Right Column: Narrative Personal Statement & Strengths */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#c5a059] block mb-2 font-semibold">
                PERSONAL STATEMENT
              </span>
              <h3 className="font-editorial-serif italic text-2xl sm:text-3xl text-[#dfd7c7] font-normal leading-relaxed mb-4">
                "Bridging computational logic and human emotion through purposeful code and visual harmony."
              </h3>
              <p className="text-xs sm:text-sm text-[#dfd7c7]/80 font-light leading-relaxed font-sans mb-4">
                {personalInfo.description}
              </p>
              <p className="text-xs sm:text-sm text-[#dfd7c7]/70 font-light leading-relaxed font-sans">
                {personalInfo.background}
              </p>
            </div>

            {/* Core Strengths Grid */}
            <div className="pt-4 border-t border-[#c5a059]/15">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#c5a059] block mb-3 font-semibold">
                SELECTED PERSONAL STRENGTHS
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {coreStrengths.map((s, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#0d2f1f] border border-[#c5a059]/20 hover:border-[#c5a059]/40 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                      <h4 className="font-cinzel text-xs font-semibold uppercase tracking-wider text-[#dfd7c7]">
                        {s.name}
                      </h4>
                    </div>
                    <p className="text-[11px] text-[#dfd7c7]/65 font-light leading-relaxed font-sans pl-3.5">
                      {s.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* My Hobbies Action Button (Unlocks & Navigates to Hobbies Section) */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onToggleHobbies}
                className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#c5a059] to-[#aa8028] text-[#071d12] font-mono text-xs uppercase font-bold tracking-wider hover:brightness-110 transition-all shadow-[0_0_20px_rgba(197,160,89,0.35)] active:scale-95 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#071d12]" />
                <span>MY HOBBIES</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#071d12] transition-transform duration-300 ${isHobbiesOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* FULL-SCREEN LUXURY LIGHTBOX MODAL */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#04120a]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Top Bar with Counter and Close Button */}
          <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
            <div className="flex items-center gap-3">
              <span className="font-cinzel text-sm sm:text-base text-[#e5c158] font-bold">
                SHILOH ABELLERA
              </span>
              <span className="text-[#c5a059]/40">&bull;</span>
              <span className="font-mono text-xs text-[#dfd7c7]/70 uppercase tracking-widest">
                {lightboxIndex + 1} / {fanSectors.length}
              </span>
            </div>

            <button
              onClick={() => setLightboxOpen(false)}
              className="p-2 rounded-full bg-[#0d2f1f] border border-[#c5a059]/35 text-[#dfd7c7] hover:text-white hover:border-[#f5d77f] transition-all cursor-pointer shadow-lg"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation: Previous Arrow */}
          <button
            onClick={prevLightbox}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#0d2f1f]/90 border border-[#c5a059]/35 text-[#dfd7c7] hover:text-[#f5d77f] hover:border-[#f5d77f] transition-all cursor-pointer shadow-2xl z-20"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Center Image Container */}
          <div
            className="relative max-w-4xl max-h-[82vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#c5a059]/40 shadow-[0_30px_70px_rgba(0,0,0,0.9)] bg-[#082015]">
              <img
                src={fanSectors[lightboxIndex].src}
                alt={fanSectors[lightboxIndex].title}
                className="max-h-[72vh] w-auto max-w-full object-contain filter contrast-[1.04]"
              />

              {/* Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 bg-gradient-to-t from-[#04120a] via-[#04120a]/85 to-transparent flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-[#c5a059]/20">
                <div>
                  <h3 className="font-cinzel text-base sm:text-lg text-[#dfd7c7] font-semibold">
                    {fanSectors[lightboxIndex].title}
                  </h3>
                  <p className="font-editorial-serif italic text-xs sm:text-sm text-[#e5c158]">
                    {fanSectors[lightboxIndex].mood} &bull; <span className="font-mono not-italic uppercase text-[10px] text-[#dfd7c7]/60">{fanSectors[lightboxIndex].location}</span>
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#c5a059]/80">
                    USE ARROW KEYS OR SWIPE
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation: Next Arrow */}
          <button
            onClick={nextLightbox}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#0d2f1f]/90 border border-[#c5a059]/35 text-[#dfd7c7] hover:text-[#f5d77f] hover:border-[#f5d77f] transition-all cursor-pointer shadow-2xl z-20"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

        </div>
      )}

    </section>
  );
}
