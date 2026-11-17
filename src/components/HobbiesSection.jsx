import React, { useState, useEffect, useRef } from 'react';
import {
  Palette,
  Mic2,
  Trophy,
  Gamepad2,
  Zap,
  Maximize2,
  X,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Heart,
  Music,
  Activity,
  CheckCircle2,
  Eye,
  LayoutGrid,
  Compass,
  RotateCw,
  Play,
  Pause
} from 'lucide-react';

export default function HobbiesSection({ isOpen, onToggle, onOpen }) {
  // Active Tab: 'artworks' | 'singing' | 'basketball' | 'gaming'
  const [activeTab, setActiveTab] = useState('artworks');

  // Artworks View Mode: 'wheel' (Rotary Card Wheel like video) | 'grid' (Compact Matrix)
  const [artworksViewMode, setArtworksViewMode] = useState('wheel');

  // Active artwork index for Rotary Wheel
  const [activeArtworkIndex, setActiveArtworkIndex] = useState(0);

  // Hover animation state: when hovering those pictures, circular animation goes on
  const [isHoveringPictures, setIsHoveringPictures] = useState(false);

  // Active game in gaming tab (all 5 existing preserved)
  const [activeGame, setActiveGame] = useState(0);

  // Fullscreen Lightbox modal for artworks
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  // Drag interaction state for Rotary Wheel
  const wheelRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  // Active video index for Singing Chamfered Cards Carousel
  const [activeVideoIndex, setActiveVideoIndex] = useState(1);
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const videoRefs = useRef({});

  // 3 Singing Performance Videos with Chamfered Card Showcase
  const singingVideos = [
    {
      id: 'church_worship',
      title: 'Church Worship Solo',
      badge: '01 • WORSHIP SOLO',
      duration: '0:36',
      src: '/videos/singing/church-singing-performance-1.mp4',
      poster: '/videos/singing/video1_thumb.jpg',
      setting: 'Church Stage & Worship Service',
      tagline: 'mostly in church performance',
      highlight: 'Live stage solo worship with choral ensemble under sanctuary lighting.',
    },
    {
      id: 'aura_rhythms',
      title: 'Aura Rhythms Stage',
      badge: '02 • LIVE STAGE',
      duration: '0:30',
      src: '/videos/singing/church-singing-performance-2.mp4',
      poster: '/videos/singing/video2_thumb.jpg',
      setting: 'ASEAN Arts & Culture Celebration',
      tagline: 'mostly in church performance',
      highlight: 'Live stage solo performance celebrating regional acoustic rhythms.',
    },
    {
      id: 'outdoor_session',
      title: 'Outdoor Live Vocal Session',
      badge: '03 • STUDIO MIC',
      duration: '0:46',
      src: '/videos/singing/church-singing-performance-3.mp4',
      poster: '/videos/singing/video3_thumb.jpg',
      setting: 'Live Acoustic Condenser Mic Recording',
      tagline: 'mostly in church performance',
      highlight: 'Expressive acoustic worship recorded live with a studio condenser microphone.',
    },
  ];

  const handlePlayPauseVideo = (videoId) => {
    const el = videoRefs.current[videoId];
    if (!el) return;
    if (el.paused) {
      Object.keys(videoRefs.current).forEach((key) => {
        if (key !== videoId && videoRefs.current[key]) {
          videoRefs.current[key].pause();
        }
      });
      el.play();
      setPlayingVideoId(videoId);
    } else {
      el.pause();
      setPlayingVideoId(null);
    }
  };

  const handleNextVideo = () => {
    setActiveVideoIndex((prev) => (prev + 1) % singingVideos.length);
  };

  const handlePrevVideo = () => {
    setActiveVideoIndex((prev) => (prev - 1 + singingVideos.length) % singingVideos.length);
  };

  // Active basketball shot index
  const [activeBasketballIndex, setActiveBasketballIndex] = useState(0);

  // 5 Basketball Photographic Plates
  const basketballShots = [
    {
      id: 'sanipit_24',
      title: 'Sanipit 24 • Game Transition',
      category: 'Competitive League Match',
      medium: 'Shooting Guard • Jersey #24',
      year: 'Game Day',
      src: '/images/hobbies/basketball/basketball-game-sanipit-24.jpg',
      aspect: 'aspect-[3/4]',
      summary: 'In-game transition sprint wearing the Sanipit #24 teal-gradient jersey and shooting arm compression sleeve, executing high-tempo fast breaks and transition perimeter defense.',
      badge: '01 • IN-GAME MATCH'
    },
    {
      id: 'night_court',
      title: 'Night Scrimmage Sideline',
      category: 'Night Scrimmage & Strategy',
      medium: 'Payawal #5 Jersey • Outdoor Floodlights',
      year: 'Evening Run',
      src: '/images/hobbies/basketball/basketball-night-court-sideline.jpg',
      aspect: 'aspect-[4/3]',
      summary: 'Observing court spacing and defensive rotations under outdoor night floodlights during full-court competitive scrimmage, wearing Payawal #5 pink-edition kit.',
      badge: '02 • NIGHT COURT'
    },
    {
      id: 'team_bench',
      title: 'Courtside Team Chemistry',
      category: 'Team Bonding & Brotherhood',
      medium: 'Post-Game Bench • Game Ball',
      year: 'Community Run',
      src: '/images/hobbies/basketball/basketball-team-bench-selfie.jpg',
      aspect: 'aspect-[4/3]',
      summary: 'Courtside brotherhood and post-pickup smiles with teammates, celebrating mutual hustle, selfless passing, and competitive camaraderie on the local court.',
      badge: '03 • TEAM CHEMISTRY'
    },
    {
      id: 'court_stance',
      title: 'Defensive Stance & Spacing',
      category: 'On-Court Tactical Focus',
      medium: 'Perimeter Guard • Jersey #24',
      year: 'Tactical Play',
      src: '/images/hobbies/basketball/basketball-court-stance-jersey-24.jpg',
      aspect: 'aspect-[3/4]',
      summary: 'Focused court vision and ready athletic posture by the key pillar, tracking off-ball cutters and communicating switches with the backcourt.',
      badge: '04 • DEFENSIVE READS'
    },
    {
      id: 'molten_fiba',
      title: 'Game-Ready • Molten FIBA',
      category: 'Hardwood / Covered Court Focus',
      medium: 'Molten Official Leather Ball',
      year: 'Pre-Game Prep',
      src: '/images/hobbies/basketball/basketball-covered-court-molten-fiba.jpg',
      aspect: 'aspect-[3/4]',
      summary: 'Pre-game court focus on the covered court with the official Molten FIBA ball, tuning mental readiness, rhythm, and shooting mechanics before tip-off.',
      badge: '05 • PRE-GAME RHYTHM'
    }
  ];

  const handleNextBasketball = () => {
    setActiveBasketballIndex((prev) => (prev + 1) % basketballShots.length);
  };

  const handlePrevBasketball = () => {
    setActiveBasketballIndex((prev) => (prev - 1 + basketballShots.length) % basketballShots.length);
  };

  // Pause videos when switching away from singing tab or collapsing hobbies
  useEffect(() => {
    if (activeTab !== 'singing' || !isOpen) {
      Object.values(videoRefs.current).forEach((el) => {
        if (el && !el.paused) el.pause();
      });
      setPlayingVideoId(null);
    }
  }, [activeTab, isOpen]);

  // All 8 Original Artworks (including 5 newly uploaded + 3 previous)
  const artworks = [
    {
      id: 'karina',
      title: 'Karina (aespa)',
      category: 'Hyper-Realistic Portraiture',
      medium: 'Graphite & Charcoal on Vellum',
      year: '2023',
      src: '/images/hobbies/artworks/karina-aespa-portrait.jpg',
      aspect: 'aspect-[3/4]',
      summary: 'Masterpiece hyper-realistic portrait of Karina (aespa) crafted with meticulous skin tone gradation, hair fiber detailing, and lifelike ocular reflections.'
    },
    {
      id: 'chaewon',
      title: 'Kim Chae-won (LE SSERAFIM)',
      category: 'Hyper-Realistic Portraiture',
      medium: 'Charcoal & Carbon Pencil on Board',
      year: '2023',
      src: '/images/hobbies/artworks/chaewon-lesserafim-portrait.jpg',
      aspect: 'aspect-[3/4]',
      summary: 'High-contrast charcoal portrait of Chaewon featuring subtle facial bruising texturing, realistic hair highlights, and intense cinematic expression.'
    },
    {
      id: 'jennie',
      title: 'Jennie Kim (BLACKPINK)',
      category: 'Realistic Color Pencil Art',
      medium: 'Prismacolor Pencils & Oil Blending',
      year: '2022',
      src: '/images/hobbies/artworks/jennie-blackpink-portrait.jpg',
      aspect: 'aspect-[3/4]',
      summary: 'Vibrant color pencil study of Jennie Kim capturing luminous skin tones, glossy leather jacket textures, and sharp gaze.'
    },
    {
      id: 'istana',
      title: 'Istana Nurul Iman',
      category: 'Architectural Landscape Rendering',
      medium: 'Gouache & Watercolor on Cold-Press Board',
      year: '2022',
      src: '/images/hobbies/artworks/istana-nurul-iman-brunei.jpg',
      aspect: 'aspect-[4/3]',
      summary: 'Expressive architectural gouache painting of the Sultanate of Brunei official palace featuring warm golden dome lighting and aquatic reflections.'
    },
    {
      id: 'japanese_pagoda',
      title: 'Japanese Pagoda & Nachi Falls',
      category: 'Architectural Sketchbook Study',
      medium: 'Gouache & Technical Ink on Sketchbook',
      year: '2022',
      src: '/images/hobbies/artworks/japanese-pagoda-architecture.jpg',
      aspect: 'aspect-[3/4]',
      summary: 'Vibrant sketchbook painting of Seiganto-ji red pagoda nestled against Nachi Falls in Wakayama, Japan, with traditional timber framing details.'
    },
    {
      id: 'plate_a100',
      title: 'Proposed Two-Storey Residence',
      category: 'NEUST Architectural Major Plate A100',
      medium: 'Hand-Drafted Drafting Ink & Copic Render',
      year: '2021 – 2022',
      src: '/images/hobbies/artworks/architectural-perspective-plate-a100.jpg',
      aspect: 'aspect-[4/3]',
      summary: 'Comprehensive academic architectural plate featuring two-point exterior perspective, landscape rendering, site development plan, and vicinity mapping.'
    },
    {
      id: 'plate_a101',
      title: 'Ground & Second Floor Plans',
      category: 'NEUST Architectural Major Plate A101',
      medium: 'Technical Pen & Scaled Grid Layout',
      year: '2021 – 2022',
      src: '/images/hobbies/artworks/architectural-floor-plan-plate-a101.jpg',
      aspect: 'aspect-[4/3]',
      summary: 'Hand-drafted technical floor plans illustrating residential spatial programming, structural column gridlines, dimension schedules, and callouts.'
    },
    {
      id: 'mobi_chewy',
      title: 'Mobi & Chewy: Moral Dilemma',
      category: 'Original Hand-Drawn Comic Art',
      medium: 'Ink & Colored Markers on Board',
      year: 'Original Comic',
      src: '/images/hobbies/artworks/mobi-and-chewy-comic.jpg',
      aspect: 'aspect-[16/10]',
      summary: 'Hand-drawn comic strip exploring moral conviction, faith, and the dilemma of church choir worship versus school rehearsal through expressive narrative paneling.'
    },
    {
      id: 'papercut_shadowbox',
      title: 'Midnight Forest Shadow Box',
      category: '3D Paper-Cut Light Box Art',
      medium: 'Layered Paper Silhouette & LED Backlight',
      year: '2023',
      src: '/images/hobbies/artworks/papercut-shadowbox-silhouette.jpg',
      aspect: 'aspect-[3/4]',
      summary: 'Handcrafted multi-layered paper-cut shadow box in a custom black shadow frame, illuminating a silhouetted couple holding hands beneath a radiant violet moonlit forest.'
    },
    {
      id: 'waterfall_landscape',
      title: 'Cascade Falls & Mountain Vista',
      category: 'Scenic Landscape Study',
      medium: 'Gouache & Acrylic on Watercolor Paper',
      year: '2022',
      src: '/images/hobbies/artworks/mountain-waterfall-landscape.jpg',
      aspect: 'aspect-[4/3]',
      summary: 'Expressive landscape painting capturing roaring cascade waterfalls over rugged cliff faces, alpine pine trees, vibrant meadow foliage, and misty purple mountain peaks.'
    }
  ];

  // Preserved 5 gaming titles
  const games = [
    {
      id: 'cod',
      title: 'Call of Duty',
      genre: 'Tactical FPS',
      role: 'Tactical Combat & Breach',
      badge: 'Action-Packed',
      accent: '#e5c158',
      description: 'I enjoy action-packed gameplay, tactical combat, and competitive matches.'
    },
    {
      id: 'pubg',
      title: 'PUBG Mobile',
      genre: 'Battle Royale',
      role: 'Survival Strategist',
      badge: 'Survival & Tactics',
      accent: '#d4af37',
      description: 'I enjoy battle royale gameplay, survival strategies, and teamwork.'
    },
    {
      id: 'mlbb',
      title: 'Mobile Legends: Bang Bang',
      genre: '5v5 MOBA',
      role: 'Strategic Teamwork',
      badge: 'Competitive MOBA',
      accent: '#c5a059',
      description: 'I enjoy competitive MOBA matches, teamwork, and strategic gameplay.'
    },
    {
      id: 'hok',
      title: 'Honor of Kings',
      genre: 'Hero Arena',
      role: 'Team Coordination',
      badge: 'Hero Coordination',
      accent: '#aa8028',
      description: 'I enjoy hero-based combat, team coordination, and competitive matches.'
    },
    {
      id: 'valorant',
      title: 'VALORANT',
      genre: 'Tactical Shooter',
      role: 'Precision & Duelist',
      badge: 'Tactical Precision',
      accent: '#e5c158',
      description: 'I enjoy tactical shooting, precision, strategy, and team-based competition.'
    }
  ];

  // Rotary Wheel Navigation
  const handleNextArtwork = () => {
    setActiveArtworkIndex((prev) => (prev + 1) % artworks.length);
  };

  const handlePrevArtwork = () => {
    setActiveArtworkIndex((prev) => (prev - 1 + artworks.length) % artworks.length);
  };


  // Keyboard navigation for Rotary Wheel
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen || selectedArtwork || activeTab !== 'artworks') return;
      if (e.key === 'ArrowRight') handleNextArtwork();
      if (e.key === 'ArrowLeft') handlePrevArtwork();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedArtwork, activeTab, artworks.length]);

  // Touch & Mouse Drag handlers for the Rotary Wheel
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX || (e.touches && e.touches[0].clientX) || 0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const diff = currentX - startX;
    if (Math.abs(diff) > 45) {
      if (diff > 0) handlePrevArtwork();
      else handleNextArtwork();
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const activeArtwork = artworks[activeArtworkIndex];

  // -------------------------------------------------------------
  // COLLAPSED STATE: Discrete Recruiter-Friendly Teaser Bar
  // -------------------------------------------------------------
  if (!isOpen) {
    return (
      <section id="hobbies" className="py-6 px-5 sm:px-8 bg-[#06180e] border-b border-[#c5a059]/20 transition-all duration-500">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <span className="w-2 h-2 rounded-full bg-[#c5a059]/60 shrink-0" />
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#c5a059]">
                CREATIVE DOWNTIME &amp; PERSONAL PASSIONS
              </p>
              <h3 className="font-cinzel text-xs sm:text-sm text-[#dfd7c7] uppercase font-semibold">
                HOBBIES: {artworks.length} ARTWORKS, SINGING, BASKETBALL &amp; GAMING
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpen}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#c5a059]/40 bg-[#082015] text-[#e5c158] font-mono text-[10px] uppercase tracking-widest hover:bg-[#c5a059] hover:text-[#050a07] transition-all cursor-pointer shadow-md active:scale-95 whitespace-nowrap"
          >
            <span>REVEAL HOBBIES SECTION</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>
    );
  }

  // -------------------------------------------------------------
  // EXPANDED STATE: Full Luxury Hobbies Section directly below About Me
  // -------------------------------------------------------------
  return (
    <section id="hobbies" className="py-16 sm:py-24 px-5 sm:px-8 bg-[#082015] text-[#dfd7c7] border-b border-[#c5a059]/20 relative overflow-hidden transition-all duration-700 animate-in fade-in">
      
      {/* Embedded Animation Keyframes for Continuous Circular Motion (like About Me, with added speed) */}
      <style>{`
        @keyframes continuousCircularOrbit {
          0% {
            transform: rotate(-7.5deg);
          }
          50% {
            transform: rotate(7.5deg);
          }
          100% {
            transform: rotate(-7.5deg);
          }
        }
        .animate-circular-orbital-motion {
          animation: continuousCircularOrbit 5.5s ease-in-out infinite;
        }
      `}</style>
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-[#145a35]/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-[#c5a059]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Header with Hide / Collapse Control */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#c5a059]/15 pb-5 mb-8 sm:mb-10">
          <div>
            <div className="flex items-center gap-2 mb-1.5 font-mono text-[9px] uppercase tracking-[0.3em] text-[#c5a059] font-semibold">
              <Sparkles className="w-3 h-3 text-[#c5a059]" />
              <span>PERSONAL PASSIONS &bull; NEXT TO ABOUT ME</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#dfd7c7]">
              HOBBIES
            </h2>
          </div>

          {/* Quick Collapse Button */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onToggle}
              title="Hide Hobbies for Professional Job Review"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#c5a059]/35 bg-[#050a07] text-[#dfd7c7] hover:border-[#e5c158] hover:text-[#e5c158] font-mono text-[10px] uppercase tracking-wider transition-all cursor-pointer shadow-md active:scale-95"
            >
              <span>HIDE HOBBIES SECTION</span>
              <X className="w-3.5 h-3.5 text-[#c5a059]" />
            </button>
          </div>
        </div>

        {/* Sleek Minimalist Category Navigation Pills (Replacing the bulky category cards) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none mb-6">
          <button
            type="button"
            onClick={() => setActiveTab('artworks')}
            className={`px-4 py-2 rounded-full border text-[10px] font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'artworks'
                ? 'bg-gradient-to-r from-[#d4af37] via-[#c5a059] to-[#aa8028] text-[#050a07] font-bold border-[#e5c158] shadow-[0_0_18px_rgba(229,193,88,0.35)]'
                : 'bg-[#06180e] text-[#dfd7c7]/75 border-[#c5a059]/25 hover:border-[#c5a059]/60 hover:text-white'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>01 &bull; DRAWING &amp; ARTWORKS ({artworks.length} PLATES)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('singing')}
            className={`px-4 py-2 rounded-full border text-[10px] font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'singing'
                ? 'bg-gradient-to-r from-[#d4af37] via-[#c5a059] to-[#aa8028] text-[#050a07] font-bold border-[#e5c158] shadow-[0_0_18px_rgba(229,193,88,0.35)]'
                : 'bg-[#06180e] text-[#dfd7c7]/75 border-[#c5a059]/25 hover:border-[#c5a059]/60 hover:text-white'
            }`}
          >
            <Mic2 className="w-3.5 h-3.5" />
            <span>02 &bull; SINGING</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('basketball')}
            className={`px-4 py-2 rounded-full border text-[10px] font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'basketball'
                ? 'bg-gradient-to-r from-[#d4af37] via-[#c5a059] to-[#aa8028] text-[#050a07] font-bold border-[#e5c158] shadow-[0_0_18px_rgba(229,193,88,0.35)]'
                : 'bg-[#06180e] text-[#dfd7c7]/75 border-[#c5a059]/25 hover:border-[#c5a059]/60 hover:text-white'
            }`}
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>03 &bull; BASKETBALL ({basketballShots.length} SHOTS)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('gaming')}
            className={`px-4 py-2 rounded-full border text-[10px] font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'gaming'
                ? 'bg-gradient-to-r from-[#d4af37] via-[#c5a059] to-[#aa8028] text-[#050a07] font-bold border-[#e5c158] shadow-[0_0_18px_rgba(229,193,88,0.35)]'
                : 'bg-[#06180e] text-[#dfd7c7]/75 border-[#c5a059]/25 hover:border-[#c5a059]/60 hover:text-white'
            }`}
          >
            <Gamepad2 className="w-3.5 h-3.5" />
            <span>04 &bull; GAMING (ASHIRO)</span>
          </button>
        </div>

        {/* ===================================================================== */}
        {/* TAB 1: DRAWING & ARTWORKS - ROTARY CARD WHEEL (INSPIRED BY VIDEO)    */}
        {/* ===================================================================== */}
        {activeTab === 'artworks' && (
          <div className="space-y-6 animate-in fade-in duration-500">
            
            {/* Sub-header with View Switcher */}
            <div className="flex items-center justify-between border-b border-[#c5a059]/15 pb-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#c5a059]">
                <Compass className="w-3.5 h-3.5 text-[#e5c158]" />
                <span className="uppercase tracking-widest font-semibold">
                  ROTARY WHEEL SHOWCASE &bull; {artworks.length} CURATED ARTWORKS
                </span>
              </div>

              <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#04120a] border border-[#c5a059]/25 text-[9px] font-mono">
                <button
                  type="button"
                  onClick={() => setArtworksViewMode('wheel')}
                  className={`px-3 py-1 rounded-full transition-all cursor-pointer uppercase ${
                    artworksViewMode === 'wheel'
                      ? 'bg-[#c5a059] text-[#050a07] font-bold'
                      : 'text-[#dfd7c7]/60 hover:text-white'
                  }`}
                >
                  ROTARY WHEEL
                </button>
                <button
                  type="button"
                  onClick={() => setArtworksViewMode('grid')}
                  className={`px-3 py-1 rounded-full transition-all cursor-pointer uppercase ${
                    artworksViewMode === 'grid'
                      ? 'bg-[#c5a059] text-[#050a07] font-bold'
                      : 'text-[#dfd7c7]/60 hover:text-white'
                  }`}
                >
                  COMPACT GRID
                </button>
              </div>
            </div>

            {/* ------------------------------------------------------------- */}
            {/* VIEW A: ROTARY CARD WHEEL (Expanded to Fit Full Container)    */}
            {/* ------------------------------------------------------------- */}
            {artworksViewMode === 'wheel' && (
              <div
                ref={wheelRef}
                onMouseEnter={() => setIsHoveringPictures(true)}
                onMouseLeave={() => setIsHoveringPictures(false)}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onTouchStart={handleMouseDown}
                onTouchMove={handleMouseMove}
                onTouchEnd={handleMouseUp}
                className="relative w-full max-w-6xl mx-auto h-[560px] sm:h-[620px] lg:h-[650px] rounded-3xl bg-gradient-to-b from-[#06180e] via-[#05130b] to-[#030d07] border border-[#c5a059]/30 overflow-hidden select-none cursor-grab active:cursor-grabbing shadow-[0_25px_60px_rgba(0,0,0,0.85)]"
              >
                {/* Background Ambient Radial Glows */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[650px] rounded-full bg-[#155a36]/25 blur-[140px] pointer-events-none" />
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full bg-[#c5a059]/10 blur-[100px] pointer-events-none" />

                {/* THE ROTARY WHEEL HUB & CARDS ANCHOR AT BOTTOM CENTER */}
                <div className="absolute left-1/2 bottom-[35px] sm:bottom-[40px] w-0 h-0">

                  {/* 1. FAN OF ARTWORK CARDS ORBITING THE DIAL - EXPANDED TO FILL CONTAINER */}
                  <div
                    className="animate-circular-orbital-motion pointer-events-none"
                    style={{
                      transformOrigin: '0px 0px',
                      willChange: 'transform',
                      animationPlayState: isDragging ? 'paused' : 'running',
                    }}
                  >
                    {artworks.map((art, idx) => {
                      // Circular offset modulo array length
                      let offset = idx - activeArtworkIndex;
                      while (offset > Math.floor(artworks.length / 2)) offset -= artworks.length;
                      while (offset <= -Math.floor(artworks.length / 2)) offset += artworks.length;

                      const isCenter = offset === 0;

                      // Angle step: tailored for dynamic artwork count to fit container width gracefully
                      const angleStep = artworks.length > 8 ? 17.5 : 21;
                      const angle = offset * angleStep;
                      const rad = (angle * Math.PI) / 180;
                      
                      // Orbit radius: widened to fit the big container width gracefully
                      const radius = typeof window !== 'undefined' && window.innerWidth < 640 ? 230 : typeof window !== 'undefined' && window.innerWidth < 1024 ? 315 : 385;
                      const x = radius * Math.sin(rad);
                      const y = radius * Math.cos(rad);

                      // Visual attributes
                      const scale = isCenter ? 1.05 : Math.max(0.76, 1 - Math.abs(offset) * 0.06);
                      const opacity = isCenter ? 1 : Math.max(0.55, 1 - Math.abs(offset) * 0.11);
                      const zIndex = 40 - Math.abs(offset) * 4;

                      return (
                        <div
                          key={art.id}
                          onClick={(e) => {
                            e.stopPropagation();
                            if (isCenter) {
                              setSelectedArtwork(art);
                            } else {
                              setActiveArtworkIndex(idx);
                            }
                          }}
                          className={`absolute w-[150px] sm:w-[195px] lg:w-[230px] h-[210px] sm:h-[275px] lg:h-[320px] rounded-2xl overflow-hidden cursor-pointer pointer-events-auto transition-all duration-500 ease-out flex flex-col justify-between group/card ${
                            isCenter
                              ? 'border-2 border-[#e5c158] shadow-[0_20px_50px_rgba(229,193,88,0.55)] ring-1 ring-[#f5d77f]/50'
                              : 'border border-[#c5a059]/30 shadow-[0_12px_30px_rgba(0,0,0,0.75)] hover:border-[#e5c158] hover:shadow-[0_15px_40px_rgba(229,193,88,0.45)] hover:brightness-110'
                          }`}
                          style={{
                            transform: `translate(${x}px, ${-y}px) rotate(${angle}deg) translate(-50%, -50%) scale(${scale})`,
                            opacity: opacity,
                            zIndex: zIndex,
                            backgroundColor: '#04120a',
                            transition: isDragging ? 'none' : 'transform 600ms cubic-bezier(0.16, 1, 0.3, 1), opacity 500ms, filter 500ms',
                          }}
                        >
                          {/* Artwork Image */}
                          <div className="relative w-full h-full bg-[#020604] overflow-hidden">
                            <img
                              src={art.src}
                              alt={art.title}
                              className={`w-full h-full object-cover transition-transform duration-500 ${
                                isCenter ? 'scale-105 brightness-105' : 'brightness-90 group-hover/card:brightness-110 group-hover/card:scale-105'
                              }`}
                            />
                            
                            {/* Top Shadow & Bottom Gradient */}
                            <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-black/60 to-transparent" />
                            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#04120a] via-[#04120a]/75 to-transparent" />

                            {/* Index Chip */}
                            <span className="absolute top-2.5 left-2.5 text-[8.5px] font-mono font-bold px-2 py-0.5 rounded bg-[#04120a]/90 text-[#e5c158] border border-[#c5a059]/35 uppercase">
                              {String(idx + 1).padStart(2, '0')}
                            </span>

                            {/* Enlarge Hint on Center Card */}
                            {isCenter && (
                              <div className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-[#050a07]/90 border border-[#e5c158] flex items-center justify-center text-[#e5c158] shadow-md animate-pulse">
                                <Maximize2 className="w-3 h-3" />
                              </div>
                            )}

                            {/* Card Bottom Mini Title */}
                            <div className="absolute bottom-3 inset-x-3">
                              <span className="font-mono text-[7.5px] sm:text-[8px] text-[#c5a059] uppercase tracking-wider block truncate">
                                {art.category}
                              </span>
                              <h4 className="font-cinzel text-xs sm:text-[13px] font-bold text-[#dfd7c7] uppercase leading-tight truncate mt-0.5">
                                {art.title}
                              </h4>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* 2. THE CIRCULAR COMPASS DIAL (Showing MAIN NAME "DRAWING & ARTWORKS") */}
                  <div
                    className="absolute -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[360px] lg:w-[380px] h-[320px] sm:h-[360px] lg:h-[380px] rounded-full border border-[#c5a059]/40 bg-[#05140c]/98 shadow-[0_-15px_50px_rgba(0,0,0,0.92)] backdrop-blur-md flex flex-col items-center pt-2.5 z-40"
                    style={{
                      left: '0px',
                      top: '0px',
                    }}
                  >
                    {/* SVG Compass Rings (Clean Geometric Guides with Zero Overlapping Text) */}
                    <div className="absolute inset-0 pointer-events-none">
                      <svg viewBox="0 0 380 380" className="w-full h-full">
                        {/* Concentric inner dashed guide rings */}
                        <circle cx="190" cy="190" r="174" fill="none" stroke="#c5a059" strokeOpacity="0.25" strokeDasharray="3 3" />
                        <circle cx="190" cy="190" r="142" fill="none" stroke="#c5a059" strokeOpacity="0.14" />
                        <circle cx="190" cy="190" r="105" fill="none" stroke="#c5a059" strokeOpacity="0.08" strokeDasharray="2 2" />
                      </svg>
                    </div>

                    {/* THE MAIN CATEGORY NAME ("DRAWING & ARTWORKS") */}
                    <div className="flex flex-col items-center z-20 select-none pt-1">
                      <span className="text-[#e5c158] text-[11px] leading-none mb-0.5 font-bold animate-pulse">
                        ▲
                      </span>
                      <span className="font-mono text-[10.5px] sm:text-[12px] font-black uppercase tracking-[0.25em] text-[#e5c158] drop-shadow-[0_0_12px_rgba(229,193,88,0.6)]">
                        DRAWING &amp; ARTWORKS
                      </span>
                    </div>

                    {/* Active Artwork Information Hub Inside Dial */}
                    <div className="mt-2.5 px-4 text-center z-20 max-w-[280px]">
                      <h4 className="font-cinzel text-xs sm:text-sm font-bold text-[#dfd7c7] uppercase leading-snug truncate">
                        {activeArtwork.title}
                      </h4>
                      <p className="font-mono text-[8.5px] text-[#c5a059]/85 uppercase tracking-wider truncate mt-0.5">
                        {activeArtwork.medium}
                      </p>

                      {/* Interactive Controls: Prev / Enlarge / Next */}
                      <div className="flex items-center justify-center gap-2.5 mt-2.5">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePrevArtwork();
                          }}
                          className="p-1.5 rounded-full bg-[#082015] border border-[#c5a059]/40 hover:border-[#e5c158] text-[#dfd7c7] hover:text-[#e5c158] transition-all cursor-pointer shadow-sm active:scale-90"
                          title="Previous Artwork"
                        >
                          <ChevronLeft className="w-3.5 h-3.5" />
                        </button>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedArtwork(activeArtwork);
                          }}
                          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#c5a059] to-[#aa8028] text-[#050a07] font-mono text-[9.5px] uppercase font-bold tracking-wider hover:brightness-110 transition-all shadow-md active:scale-95 cursor-pointer"
                        >
                          <Maximize2 className="w-3 h-3" />
                          <span>ENLARGE</span>
                        </button>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleNextArtwork();
                          }}
                          className="p-1.5 rounded-full bg-[#082015] border border-[#c5a059]/40 hover:border-[#e5c158] text-[#dfd7c7] hover:text-[#e5c158] transition-all cursor-pointer shadow-sm active:scale-90"
                          title="Next Artwork"
                        >
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* 8 Pagination Pips */}
                      <div className="flex items-center justify-center gap-1.5 mt-2.5">
                        {artworks.map((_, i) => (
                          <span
                            key={i}
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveArtworkIndex(i);
                            }}
                            className={`h-1 rounded-full transition-all cursor-pointer ${
                              i === activeArtworkIndex
                                ? 'w-4 bg-[#e5c158]'
                                : 'w-1 bg-[#c5a059]/35 hover:bg-[#c5a059]/70'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                  </div>

                </div>

                {/* Subtle User Instruction in Bottom Right */}
                <div className="absolute bottom-3 right-4 z-50 pointer-events-none hidden sm:block">
                  <span className="font-mono text-[8px] uppercase tracking-widest text-[#c5a059]/60">
                    HOVER PICTURES TO ANIMATE &bull; CLICK TO INSPECT &bull; ARROWS ACTIVE
                  </span>
                </div>
              </div>
            )}

            {/* ------------------------------------------------------------- */}
            {/* VIEW B: COMPACT MATRIX GRID (Reduced Card Sizes)             */}
            {/* ------------------------------------------------------------- */}
            {artworksViewMode === 'grid' && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4 animate-in fade-in duration-500">
                {artworks.map((art, idx) => (
                  <div
                    key={art.id}
                    onClick={() => setSelectedArtwork(art)}
                    className="group/compact cursor-pointer rounded-xl border border-[#c5a059]/20 bg-[#082015] hover:border-[#e5c158] hover:shadow-[0_15px_30px_rgba(0,0,0,0.8)] p-2.5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
                  >
                    <div>
                      {/* Compact Thumbnail Frame */}
                      <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-white/10 bg-[#04120a] mb-2">
                        <img
                          src={art.src}
                          alt={art.title}
                          className="w-full h-full object-cover filter contrast-[1.04] group-hover/compact:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute top-1.5 left-1.5 text-[7.5px] font-mono font-bold px-1.5 py-0.5 rounded bg-[#04120a]/90 text-[#dfd7c7]">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <div className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-[#04120a]/90 border border-[#c5a059]/40 flex items-center justify-center text-[#c5a059] group-hover/compact:bg-[#c5a059] group-hover/compact:text-[#050a07] transition-all">
                          <Maximize2 className="w-2.5 h-2.5" />
                        </div>
                      </div>

                      <span className="font-mono text-[7.5px] text-[#c5a059] uppercase tracking-wider block truncate mb-0.5">
                        {art.category}
                      </span>
                      <h4 className="font-cinzel text-xs font-semibold text-[#dfd7c7] uppercase truncate leading-tight group-hover/compact:text-[#e5c158] transition-colors">
                        {art.title}
                      </h4>
                    </div>

                    <div className="pt-1.5 border-t border-[#c5a059]/10 mt-2 flex items-center justify-between text-[8px] font-mono text-[#c5a059]">
                      <span className="truncate">{art.medium.split('&')[0].trim()}</span>
                      <span className="text-[#e5c158]">&rarr;</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        )}

        {/* ===================================================================== */}
        {/* TAB 2: SINGING (CHAMFERED CARDS WITH 3 PLAYABLE VIDEOS)               */}
        {/* ===================================================================== */}
        {activeTab === 'singing' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            {/* Header / Intro Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#06180e] via-[#05140c] to-[#041009] border border-[#c5a059]/30 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#155a36]/20 rounded-full blur-[100px] pointer-events-none" />
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2 max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#082015] border border-[#c5a059]/30 text-[9px] font-mono text-[#e5c158] uppercase tracking-widest">
                    <Music className="w-3 h-3 text-[#e5c158]" />
                    <span>VOCAL PASSION &bull; LIVE ACOUSTIC PERFORMANCES</span>
                  </div>

                  <h3 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl text-[#dfd7c7] font-normal leading-tight">
                    SINGING
                  </h3>

                  <p className="text-xs sm:text-sm text-[#dfd7c7]/85 font-light leading-relaxed font-sans">
                    Singing is a passionate personal outlet of mine, <strong className="text-[#e5c158] font-medium font-mono">mostly in church performance</strong> and live worship. Serving with vocal devotion nurtures acoustic listening, expressive delivery, and sincere stage presence.
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <div className="px-4 py-2.5 rounded-2xl bg-[#04120a] border border-[#c5a059]/35 text-center shadow-lg">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#c5a059] block">ARCHIVAL REEL</span>
                    <span className="font-cinzel text-base sm:text-lg font-bold text-[#e5c158]">3 PERFORMANCES</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CHAMFERED CARDS CAROUSEL STAGE (Matching the User's Reference Layout) */}
            <div className="relative w-full py-4 px-1 sm:px-4">
              
              {/* Carousel Cards Grid / Flex Stage */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center max-w-6xl mx-auto">
                {singingVideos.map((vid, idx) => {
                  const isActive = activeVideoIndex === idx;
                  const isPlaying = playingVideoId === vid.id;

                  return (
                    <div
                      key={vid.id}
                      onClick={() => {
                        if (!isActive) {
                          setActiveVideoIndex(idx);
                        }
                      }}
                      className={`relative transition-all duration-500 cursor-pointer ${
                        isActive
                          ? 'z-30 md:scale-105 filter drop-shadow-[0_20px_50px_rgba(229,193,88,0.35)]'
                          : 'z-20 md:scale-95 opacity-80 hover:opacity-100 filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)]'
                      }`}
                      style={{
                        clipPath: 'polygon(22px 0%, calc(100% - 22px) 0%, 100% 22px, 100% calc(100% - 22px), calc(100% - 22px) 100%, 22px 100%, 0% calc(100% - 22px), 0% 22px)',
                        background: isActive
                          ? 'linear-gradient(135deg, #f5d77f 0%, #c5a059 45%, #e5c158 75%, #aa8028 100%)'
                          : 'linear-gradient(135deg, rgba(197,160,89,0.4) 0%, rgba(197,160,89,0.15) 100%)',
                        padding: '1.5px',
                      }}
                    >
                      {/* Inner Chamfered Container */}
                      <div
                        className="w-full h-full bg-gradient-to-b from-[#082015] via-[#05140c] to-[#030d07] p-5 sm:p-6 flex flex-col justify-between min-h-[470px] sm:min-h-[500px]"
                        style={{
                          clipPath: 'polygon(21px 0%, calc(100% - 21px) 0%, 100% 21px, 100% calc(100% - 21px), calc(100% - 21px) 100%, 21px 100%, 0% calc(100% - 21px), 0% 21px)',
                        }}
                      >
                        {/* Card Header: Title & Duration Badge */}
                        <div className="flex items-start justify-between gap-3 mb-2.5">
                          <div className="space-y-1">
                            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#c5a059] block font-bold">
                              {vid.badge}
                            </span>
                            <h4 className="font-cinzel text-base sm:text-lg font-bold text-[#dfd7c7] uppercase leading-tight">
                              {vid.title}
                            </h4>
                            <p className="font-mono text-[9px] text-[#e5c158] tracking-wider uppercase font-semibold">
                              {vid.tagline}
                            </p>
                          </div>

                          <div className="px-2.5 py-1 rounded bg-[#04120a] border border-[#c5a059]/40 text-[#e5c158] font-mono text-[10px] font-bold shrink-0 shadow-sm">
                            {vid.duration}
                          </div>
                        </div>

                        {/* Video Player Window */}
                        <div className="relative w-full aspect-[16/10] bg-[#020604] rounded-xl overflow-hidden border border-[#c5a059]/30 shadow-inner my-2 group/player">
                          <video
                            ref={(el) => (videoRefs.current[vid.id] = el)}
                            src={vid.src}
                            poster={vid.poster}
                            controls
                            playsInline
                            preload="metadata"
                            onPlay={() => {
                              setPlayingVideoId(vid.id);
                              Object.keys(videoRefs.current).forEach((id) => {
                                if (id !== vid.id && videoRefs.current[id]) {
                                  videoRefs.current[id].pause();
                                }
                              });
                            }}
                            onPause={() => {
                              if (playingVideoId === vid.id) setPlayingVideoId(null);
                            }}
                            onEnded={() => {
                              if (playingVideoId === vid.id) setPlayingVideoId(null);
                            }}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Video Subtitle & Setting */}
                        <div className="my-2 px-1">
                          <span className="font-mono text-[8px] uppercase tracking-wider text-[#c5a059] block truncate font-medium">
                            VENUE &bull; {vid.setting}
                          </span>
                          <p className="text-[11px] text-[#dfd7c7]/80 font-sans line-clamp-2 mt-0.5 leading-snug font-light">
                            {vid.highlight}
                          </p>
                        </div>

                        {/* Chamfered Action Button matching reference image */}
                        <div className="pt-3 border-t border-[#c5a059]/15">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handlePlayPauseVideo(vid.id);
                            }}
                            className={`w-full py-2.5 px-4 font-mono text-[11px] uppercase tracking-widest font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95 ${
                              isPlaying
                                ? 'bg-[#082015] border border-[#e5c158] text-[#e5c158] hover:bg-[#e5c158]/10'
                                : 'bg-gradient-to-r from-[#d4af37] via-[#c5a059] to-[#aa8028] text-[#050a07] hover:brightness-110 shadow-[0_5px_15px_rgba(229,193,88,0.3)]'
                            }`}
                            style={{
                              clipPath: 'polygon(10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0% calc(100% - 10px), 0% 10px)',
                            }}
                          >
                            {isPlaying ? (
                              <>
                                <Pause className="w-3.5 h-3.5 fill-current" />
                                <span>PAUSE VIDEO</span>
                              </>
                            ) : (
                              <>
                                <Play className="w-3.5 h-3.5 fill-current" />
                                <span>PLAY VIDEO</span>
                              </>
                            )}
                          </button>
                        </div>

                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Navigation Controls Bar */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  type="button"
                  onClick={handlePrevVideo}
                  className="p-2 rounded-full bg-[#082015] border border-[#c5a059]/40 hover:border-[#e5c158] text-[#dfd7c7] hover:text-[#e5c158] transition-all cursor-pointer shadow-sm active:scale-90"
                  title="Previous Video"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2">
                  {singingVideos.map((vid, idx) => (
                    <button
                      key={vid.id}
                      type="button"
                      onClick={() => setActiveVideoIndex(idx)}
                      className={`font-mono text-[10px] uppercase tracking-wider px-3.5 py-1 rounded-full border transition-all cursor-pointer ${
                        activeVideoIndex === idx
                          ? 'bg-[#c5a059] text-[#050a07] font-bold border-[#e5c158] shadow-[0_0_12px_rgba(229,193,88,0.4)]'
                          : 'bg-[#06180e] text-[#dfd7c7]/60 border-[#c5a059]/25 hover:border-[#e5c158] hover:text-[#dfd7c7]'
                      }`}
                    >
                      0{idx + 1}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleNextVideo}
                  className="p-2 rounded-full bg-[#082015] border border-[#c5a059]/40 hover:border-[#e5c158] text-[#dfd7c7] hover:text-[#e5c158] transition-all cursor-pointer shadow-sm active:scale-90"
                  title="Next Video"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Additional 3 Highlights Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#06180e] border border-[#c5a059]/20 shadow-md">
                <div className="flex items-center gap-2 mb-1.5">
                  <Heart className="w-3.5 h-3.5 text-[#e5c158]" />
                  <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-[#dfd7c7]">
                    Live Worship &bull; Church Performance
                  </h4>
                </div>
                <p className="text-[11px] text-[#dfd7c7]/70 font-light font-sans pl-5.5 leading-relaxed">
                  Serving in church gatherings and choral worship with humble vocal praise, spiritual gratitude, and devotion.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#06180e] border border-[#c5a059]/20 shadow-md">
                <div className="flex items-center gap-2 mb-1.5">
                  <Mic2 className="w-3.5 h-3.5 text-[#e5c158]" />
                  <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-[#dfd7c7]">
                    Acoustic Projection &amp; Presence
                  </h4>
                </div>
                <p className="text-[11px] text-[#dfd7c7]/70 font-light font-sans pl-5.5 leading-relaxed">
                  Projecting clean vocal tone, breath discipline, and emotive resonance across open stages and live microphones.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#06180e] border border-[#c5a059]/20 shadow-md">
                <div className="flex items-center gap-2 mb-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e5c158]" />
                  <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-[#dfd7c7]">
                    Choral Blend &amp; Timing
                  </h4>
                </div>
                <p className="text-[11px] text-[#dfd7c7]/70 font-light font-sans pl-5.5 leading-relaxed">
                  Balancing dynamic volume and harmonic sync with ensemble musicians and worship leaders.
                </p>
              </div>
            </div>

          </div>
        )}

        {/* ===================================================================== */}
        {/* TAB 3: PLAYING BASKETBALL (5 ATHLETIC PHOTOGRAPHIC PLATES)            */}
        {/* ===================================================================== */}
        {activeTab === 'basketball' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            {/* Header / Intro Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#06180e] via-[#05140c] to-[#041009] border border-[#c5a059]/30 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#155a36]/20 rounded-full blur-[100px] pointer-events-none" />
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2 max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#082015] border border-[#c5a059]/30 text-[9px] font-mono text-[#e5c158] uppercase tracking-widest">
                    <Activity className="w-3 h-3 text-emerald-400" />
                    <span>ATHLETIC DISCIPLINE &bull; RECREATION &bull; COURT VISION</span>
                  </div>

                  <h3 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl text-[#dfd7c7] font-normal leading-tight">
                    BASKETBALL
                  </h3>

                  <blockquote className="font-editorial-serif italic text-xs sm:text-sm text-[#e5c158] font-light leading-relaxed border-l-2 border-[#c5a059] pl-3.5 my-1.5">
                    "On the court, split-second reads and selfless passing mirror the agility and trust required in high-performing engineering teams."
                  </blockquote>

                  <p className="text-xs sm:text-sm text-[#dfd7c7]/85 font-light leading-relaxed font-sans">
                    Basketball is my primary athletic outlet for competitive cardio, physical endurance, and active mental recharge. Playing competitive pickup games sharpens split-second situational awareness, court vision, and transition defense.
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <div className="px-4 py-2.5 rounded-2xl bg-[#04120a] border border-[#c5a059]/35 text-center shadow-lg">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#c5a059] block">COURT GALLERY</span>
                    <span className="font-cinzel text-base sm:text-lg font-bold text-[#e5c158]">{basketballShots.length} PLATES</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ATHLETIC SPOTLIGHT SHOWCASE: Hero Viewer + 5 Interactive Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              
              {/* Left Column (lg:col-span-7): Featured Hero Spotlight Card */}
              <div className="lg:col-span-7 rounded-3xl bg-[#06180e] border border-[#c5a059]/35 overflow-hidden shadow-2xl p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  {/* Spotlight Top Bar */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#c5a059]/15">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#e5c158] animate-pulse" />
                      <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#c5a059] font-bold">
                        {basketballShots[activeBasketballIndex].badge}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedArtwork(basketballShots[activeBasketballIndex])}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#082015] border border-[#c5a059]/40 hover:border-[#e5c158] text-[#dfd7c7] hover:text-[#e5c158] font-mono text-[9px] uppercase tracking-wider transition-all cursor-pointer shadow-sm active:scale-95"
                    >
                      <Maximize2 className="w-3 h-3 text-[#e5c158]" />
                      <span>ENLARGE</span>
                    </button>
                  </div>

                  {/* Hero Photo Window */}
                  <div
                    onClick={() => setSelectedArtwork(basketballShots[activeBasketballIndex])}
                    className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden border border-[#c5a059]/30 bg-[#020604] group cursor-pointer shadow-inner"
                  >
                    <img
                      src={basketballShots[activeBasketballIndex].src}
                      alt={basketballShots[activeBasketballIndex].title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-[1.03]"
                    />
                    
                    {/* Atmospheric Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 pointer-events-none" />

                    {/* Bottom Floating Info Badge */}
                    <div className="absolute bottom-3 inset-x-3 sm:bottom-4 sm:inset-x-4 flex items-end justify-between gap-3 pointer-events-none">
                      <div>
                        <span className="font-mono text-[8.5px] uppercase tracking-wider text-[#e5c158] bg-[#04120a]/90 px-2 py-0.5 rounded border border-[#c5a059]/40">
                          {basketballShots[activeBasketballIndex].medium}
                        </span>
                        <h4 className="font-cinzel text-lg sm:text-xl font-bold text-[#dfd7c7] uppercase leading-tight drop-shadow-md mt-1">
                          {basketballShots[activeBasketballIndex].title}
                        </h4>
                      </div>

                      <div className="w-8 h-8 rounded-full bg-[#050a07]/90 border border-[#e5c158] flex items-center justify-center text-[#e5c158] shadow-lg shrink-0">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>

                  {/* Summary Narrative */}
                  <p className="text-xs text-[#dfd7c7]/80 font-sans font-light leading-relaxed mt-4 pt-3 border-t border-[#c5a059]/15">
                    {basketballShots[activeBasketballIndex].summary}
                  </p>
                </div>

                {/* Hero Navigation Controls */}
                <div className="flex items-center justify-between pt-4 mt-4 border-t border-[#c5a059]/15">
                  <button
                    type="button"
                    onClick={handlePrevBasketball}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#082015] border border-[#c5a059]/30 hover:border-[#e5c158] text-[#dfd7c7] hover:text-[#e5c158] font-mono text-[9px] uppercase tracking-wider transition-all cursor-pointer active:scale-95"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>PREV</span>
                  </button>

                  <div className="flex items-center gap-1.5">
                    {basketballShots.map((_, i) => (
                      <span
                        key={i}
                        onClick={() => setActiveBasketballIndex(i)}
                        className={`h-1.5 rounded-full transition-all cursor-pointer ${
                          i === activeBasketballIndex
                            ? 'w-6 bg-[#e5c158] shadow-[0_0_8px_rgba(229,193,88,0.6)]'
                            : 'w-1.5 bg-[#c5a059]/35 hover:bg-[#c5a059]/75'
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={handleNextBasketball}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#082015] border border-[#c5a059]/30 hover:border-[#e5c158] text-[#dfd7c7] hover:text-[#e5c158] font-mono text-[9px] uppercase tracking-wider transition-all cursor-pointer active:scale-95"
                  >
                    <span>NEXT</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

              {/* Right Column (lg:col-span-5): 5 Interactive Court Cards */}
              <div className="lg:col-span-5 space-y-3">
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#c5a059] block font-bold mb-1">
                  COURT SHOTS ARCHIVE &bull; SELECT TO VIEW
                </span>

                {basketballShots.map((shot, idx) => {
                  const isCurrent = activeBasketballIndex === idx;

                  return (
                    <div
                      key={shot.id}
                      onClick={() => setActiveBasketballIndex(idx)}
                      className={`p-3 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center gap-3.5 group ${
                        isCurrent
                          ? 'bg-[#0a271a] border-[#e5c158] shadow-[0_10px_25px_rgba(229,193,88,0.25)] ring-1 ring-[#f5d77f]/40 translate-x-1'
                          : 'bg-[#06180e] border-[#c5a059]/25 hover:border-[#c5a059]/70 hover:bg-[#072014]'
                      }`}
                    >
                      {/* Thumbnail Frame */}
                      <div className="relative w-20 h-16 sm:w-24 sm:h-20 rounded-xl overflow-hidden border border-[#c5a059]/30 bg-[#020604] shrink-0">
                        <img
                          src={shot.src}
                          alt={shot.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-[1.03]"
                        />
                        <span className="absolute top-1 left-1 font-mono text-[7px] font-bold px-1.5 py-0.5 rounded bg-[#04120a]/90 text-[#e5c158] border border-[#c5a059]/30">
                          0{idx + 1}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-0.5">
                          <span className="font-mono text-[8px] uppercase tracking-wider text-[#e5c158] truncate">
                            {shot.category}
                          </span>
                          <span className="font-mono text-[7.5px] text-[#c5a059]/70 shrink-0">
                            {shot.year}
                          </span>
                        </div>

                        <h4 className={`font-cinzel text-xs sm:text-sm font-bold uppercase truncate transition-colors ${
                          isCurrent ? 'text-[#e5c158]' : 'text-[#dfd7c7] group-hover:text-white'
                        }`}>
                          {shot.title}
                        </h4>

                        <p className="text-[10px] text-[#dfd7c7]/65 truncate font-sans mt-0.5">
                          {shot.medium}
                        </p>
                      </div>

                      <div className={`p-1.5 rounded-full border transition-all shrink-0 ${
                        isCurrent
                          ? 'bg-[#c5a059] border-[#e5c158] text-[#050a07]'
                          : 'border-[#c5a059]/30 text-[#c5a059] group-hover:border-[#e5c158]'
                      }`}>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* 4 Court Attribute Metric Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-2">
              <div className="p-4 rounded-2xl bg-[#06180e] border border-[#c5a059]/20 shadow-md">
                <span className="font-mono text-[8.5px] uppercase tracking-wider text-[#c5a059] block mb-1">
                  01 &bull; COURT PROFILE
                </span>
                <h4 className="font-cinzel text-xs font-bold text-[#dfd7c7] uppercase">
                  Playmaker &bull; Guard #24 &amp; #5
                </h4>
                <p className="text-[10.5px] text-[#dfd7c7]/65 mt-1 font-sans leading-snug">
                  Ball distribution, perimeter spacing, and transition tempo control.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#06180e] border border-[#c5a059]/20 shadow-md">
                <span className="font-mono text-[8.5px] uppercase tracking-wider text-[#c5a059] block mb-1">
                  02 &bull; TEAM CHEMISTRY
                </span>
                <h4 className="font-cinzel text-xs font-bold text-[#dfd7c7] uppercase">
                  Selfless Passing Culture
                </h4>
                <p className="text-[10.5px] text-[#dfd7c7]/65 mt-1 font-sans leading-snug">
                  High-percentage assists and defensive hustle over individual scoring.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#06180e] border border-[#c5a059]/20 shadow-md">
                <span className="font-mono text-[8.5px] uppercase tracking-wider text-[#c5a059] block mb-1">
                  03 &bull; PHYSICAL DISCIPLINE
                </span>
                <h4 className="font-cinzel text-xs font-bold text-[#dfd7c7] uppercase">
                  Cardio &bull; Stamina
                </h4>
                <p className="text-[10.5px] text-[#dfd7c7]/65 mt-1 font-sans leading-snug">
                  Aerobic endurance and quick footwork developed through full-court scrimmages.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#06180e] border border-[#c5a059]/20 shadow-md">
                <span className="font-mono text-[8.5px] uppercase tracking-wider text-[#c5a059] block mb-1">
                  04 &bull; ENGINEERING LINK
                </span>
                <h4 className="font-cinzel text-xs font-bold text-[#dfd7c7] uppercase">
                  Split-Second Reflex
                </h4>
                <p className="text-[10.5px] text-[#dfd7c7]/65 mt-1 font-sans leading-snug">
                  Translating rapid spatial analysis from the court directly into agile software sprints.
                </p>
              </div>
            </div>

          </div>
        )}

        {/* ===================================================================== */}
        {/* TAB 4: GAMING (ASHIRO) - ALL EXISTING PRESERVED                       */}
        {/* ===================================================================== */}
        {activeTab === 'gaming' && (
          <div className="animate-in fade-in duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Heading + Poster Card with Shiloh's Cutout */}
              <div className="lg:col-span-5 flex flex-col items-start">
                <div className="flex items-center gap-2 mb-1">
                  <Gamepad2 className="w-4 h-4 text-[#c5a059]" />
                  <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#c5a059] font-semibold">
                    TACTICAL GAMING &amp; ALTER-EGO
                  </p>
                </div>
                
                <h3 className="font-cinzel text-4xl sm:text-5xl font-normal tracking-tight text-[#dfd7c7] uppercase leading-[0.9] mb-4">
                  ASHIRO
                </h3>

                <div className="relative w-full max-w-[320px] sm:max-w-[350px] aspect-[4/5] rounded-3xl bg-[#06180e] border border-[#c5a059]/35 p-5 flex flex-col justify-between overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.7)] hover:border-[#e5c158]/60 transition-all duration-500 group">
                  
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full bg-[#145a35]/75 z-0 shadow-[0_0_60px_rgba(20,90,53,0.7)]" />
                  
                  <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none opacity-20">
                    <span className="font-cinzel text-7xl sm:text-8xl font-black text-[#c5a059] uppercase tracking-tighter">
                      ASHIRO
                    </span>
                  </div>

                  <div className="flex items-center justify-between z-10 text-[8.5px] font-mono uppercase tracking-widest text-[#dfd7c7]/80 border-b border-[#c5a059]/15 pb-2">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                      PH &bull; SOUTHEAST ASIA
                    </span>
                    <span className="text-[#c5a059] font-semibold tracking-wider">
                      ONLINE &bull; READY
                    </span>
                  </div>

                  <div className="relative z-10 w-full h-[76%] flex items-center justify-center py-2">
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full p-2.5 flex items-center justify-center bg-gradient-to-b from-[#082015] via-[#05140c] to-[#030d07] border-2 border-[#c5a059]/40 shadow-[0_0_40px_rgba(20,90,53,0.6)] group-hover:border-[#e5c158] group-hover:shadow-[0_0_50px_rgba(229,193,88,0.35)] transition-all duration-500">
                      <div className="absolute inset-0 rounded-full bg-radial from-[#e5c158]/10 via-transparent to-transparent pointer-events-none animate-pulse" />
                      <img
                        src="/images/gaming/ashiro-gaming-emblem-clean.png"
                        alt="Ashiro Gaming Emblem"
                        className="w-full h-full object-contain filter drop-shadow-[0_12px_28px_rgba(0,0,0,0.9)] group-hover:scale-105 transition-transform duration-500"
                        loading="eager"
                      />
                    </div>
                  </div>

                  <div className="z-10 pt-2.5 border-t border-[#c5a059]/15 flex items-center justify-between text-xs font-mono">
                    <div>
                      <span className="text-[#dfd7c7] font-cinzel font-bold text-xs tracking-wider block leading-tight">
                        ALIAS: ASHIRO
                      </span>
                      <span className="text-[8.5px] text-[#c5a059] uppercase tracking-wider">
                        FPS &bull; MOBA SPECIALIST
                      </span>
                    </div>
                    
                    <div className="flex items-end gap-1 h-3.5">
                      <span className="w-1 bg-[#c5a059] rounded-full animate-bounce [animation-delay:0ms] h-2.5" />
                      <span className="w-1 bg-[#e5c158] rounded-full animate-bounce [animation-delay:150ms] h-3.5" />
                      <span className="w-1 bg-[#c5a059] rounded-full animate-bounce [animation-delay:300ms] h-2" />
                      <span className="w-1 bg-emerald-400 rounded-full animate-bounce [animation-delay:450ms] h-3.5" />
                    </div>
                  </div>

                </div>

                <p className="mt-3 text-[9px] font-mono text-[#c5a059]/70 uppercase tracking-widest">
                  Where tactical reflex meets strategic patience.
                </p>
              </div>

              {/* Right Column: Gaming Roster */}
              <div className="lg:col-span-7 space-y-3.5">
                <div className="mb-4">
                  <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#c5a059] block font-semibold mb-0.5">
                    ACTIVE TITLES &amp; COMPETITIVE GENRES
                  </span>
                  <h4 className="font-cinzel text-xl sm:text-2xl text-[#dfd7c7] font-normal uppercase tracking-wider">
                    Gaming Roster
                  </h4>
                  <p className="text-xs text-[#dfd7c7]/75 font-light mt-0.5 font-sans">
                    Competitive games and tactical titles I actively play during personal downtime to hone teamwork, sharp focus, and strategic thinking.
                  </p>
                </div>

                {/* 5 Game Cards */}
                <div className="space-y-2.5">
                  {games.map((game, index) => {
                    const isSelected = activeGame === index;

                    return (
                      <div
                        key={game.id}
                        onClick={() => setActiveGame(index)}
                        className={`p-3.5 rounded-2xl cursor-pointer transition-all duration-300 border relative overflow-hidden ${
                          isSelected
                            ? 'bg-[#06180e] border-[#e5c158] shadow-[0_10px_30px_rgba(0,0,0,0.6)] translate-x-1 sm:translate-x-2'
                            : 'bg-[#04120a] border-[#c5a059]/20 hover:border-[#c5a059]/50 hover:bg-[#082015]'
                        }`}
                      >
                        {isSelected && (
                          <div
                            className="absolute left-0 top-0 bottom-0 w-1.5"
                            style={{ background: `linear-gradient(to bottom, ${game.accent}, #145a35)` }}
                          />
                        )}

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                          <div>
                            <div className="flex items-center gap-2.5 mb-0.5">
                              <h4 className="font-cinzel text-xs sm:text-sm font-bold text-[#dfd7c7] tracking-wider uppercase">
                                {game.title}
                              </h4>
                              <span className="text-[8.5px] font-mono uppercase px-2 py-0.5 rounded-full border border-[#c5a059]/30 bg-[#06180e] text-[#c5a059]">
                                {game.badge}
                              </span>
                            </div>
                            <p className="text-[11px] text-[#dfd7c7]/80 font-light leading-relaxed font-sans">
                              {game.description}
                            </p>
                          </div>

                          <div className="shrink-0 text-left sm:text-right flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-t-0 border-white/5 pt-1.5 sm:pt-0">
                            <span className="text-[9.5px] font-mono text-[#c5a059] uppercase tracking-wider font-semibold">
                              {game.role}
                            </span>
                            <span className="text-[8.5px] font-mono text-[#dfd7c7]/40 uppercase tracking-widest">
                              {game.genre}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="p-3 rounded-2xl bg-[#04120a] border border-[#c5a059]/20 flex items-center gap-2.5 text-xs text-[#dfd7c7]/75 font-light">
                  <Zap className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                  <span className="font-sans text-[11px]">
                    Gaming fosters rapid situational awareness, high-pressure communication, and collaborative problem-solving directly transferrable to software engineering.
                  </span>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>

      {/* ------------------------------------------------------------- */}
      {/* ARTWORK INSPECTION LIGHTBOX MODAL                             */}
      {/* ------------------------------------------------------------- */}
      {selectedArtwork && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#030d07]/95 backdrop-blur-xl animate-in fade-in"
          onClick={() => setSelectedArtwork(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#082015] border border-[#c5a059]/40 rounded-3xl p-4 sm:p-7 text-[#dfd7c7] shadow-[0_30px_80px_rgba(0,0,0,0.95)] max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-3 border-b border-[#c5a059]/20 mb-4">
              <div>
                <span className="font-mono text-[8.5px] uppercase tracking-[0.25em] text-[#c5a059] font-bold block mb-1">
                  {selectedArtwork.category}
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl text-[#dfd7c7] uppercase">
                  {selectedArtwork.title}
                </h3>
                <p className="font-editorial-serif italic text-xs sm:text-sm text-[#e5c158] mt-0.5">
                  {selectedArtwork.medium} &bull; <span className="font-mono not-italic uppercase text-[9.5px] text-[#dfd7c7]/65">{selectedArtwork.year}</span>
                </p>
              </div>

              <button
                onClick={() => setSelectedArtwork(null)}
                className="w-8 h-8 rounded-full bg-[#0a271a] border border-[#c5a059]/35 text-[#dfd7c7] hover:text-white hover:border-[#e5c158] flex items-center justify-center transition-all cursor-pointer shadow-md"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* High-Res Artwork Viewer */}
            <div className="rounded-2xl overflow-hidden border border-[#c5a059]/30 bg-[#020604] mb-4 flex items-center justify-center max-h-[64vh]">
              <img
                src={selectedArtwork.src}
                alt={selectedArtwork.title}
                className="max-h-[60vh] w-auto max-w-full object-contain filter contrast-[1.04]"
              />
            </div>

            {/* Description */}
            <div className="p-3.5 rounded-xl bg-[#04120a] border border-[#c5a059]/20 text-xs font-sans text-[#dfd7c7]/80 font-light leading-relaxed">
              {selectedArtwork.summary}
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
