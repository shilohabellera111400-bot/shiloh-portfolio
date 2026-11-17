import React, { useState } from 'react';
import { Gamepad2, Zap, Trophy, Crosshair, Sparkles } from 'lucide-react';

export default function GamingSection() {
  const [activeGame, setActiveGame] = useState(0);

  const games = [
    {
      id: "cod",
      title: "Call of Duty",
      genre: "Tactical FPS",
      role: "Tactical Combat & Breach",
      badge: "Action-Packed",
      accent: "#e5c158",
      description: "I enjoy action-packed gameplay, tactical combat, and competitive matches."
    },
    {
      id: "pubg",
      title: "PUBG Mobile",
      genre: "Battle Royale",
      role: "Survival Strategist",
      badge: "Survival & Tactics",
      accent: "#d4af37",
      description: "I enjoy battle royale gameplay, survival strategies, and teamwork."
    },
    {
      id: "mlbb",
      title: "Mobile Legends: Bang Bang",
      genre: "5v5 MOBA",
      role: "Strategic Teamwork",
      badge: "Competitive MOBA",
      accent: "#c5a059",
      description: "I enjoy competitive MOBA matches, teamwork, and strategic gameplay."
    },
    {
      id: "hok",
      title: "Honor of Kings",
      genre: "Hero Arena",
      role: "Team Coordination",
      badge: "Hero Coordination",
      accent: "#aa8028",
      description: "I enjoy hero-based combat, team coordination, and competitive matches."
    },
    {
      id: "valorant",
      title: "VALORANT",
      genre: "Tactical Shooter",
      role: "Precision & Duelist",
      badge: "Tactical Precision",
      accent: "#e5c158",
      description: "I enjoy tactical shooting, precision, strategy, and team-based competition."
    }
  ];

  return (
    <section id="hobbies" className="py-20 sm:py-28 px-5 sm:px-8 bg-[#0a2618] text-[#dfd7c7] border-b border-[#c5a059]/20 relative overflow-hidden">
      
      {/* Background Emerald Ambient Glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#145a35]/35 rounded-full blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading + Poster Card with Shiloh's Cutout */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-1">
              <Gamepad2 className="w-4 h-4 text-[#c5a059]" />
              <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#c5a059] font-semibold">
                GAMING HOBBIES &amp; ALTER-EGO
              </p>
            </div>
            
            <h2 className="font-cinzel text-5xl sm:text-7xl font-normal tracking-tight text-[#dfd7c7] uppercase leading-[0.9] mb-6">
              ASHIRO
            </h2>

            {/* Poster Card Container with Shiloh's Real Cutout */}
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/5] rounded-3xl bg-[#082015] border border-[#c5a059]/35 p-6 flex flex-col justify-between overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.7)] hover:border-[#e5c158]/60 transition-all duration-500 group">
              
              {/* Background Deep Emerald Glow Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#145a35]/75 z-0 shadow-[0_0_60px_rgba(20,90,53,0.7)]" />
              
              {/* Giant Background Word: ASHIRO */}
              <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none opacity-20">
                <span className="font-cinzel text-8xl sm:text-9xl font-black text-[#c5a059] uppercase tracking-tighter">
                  ASHIRO
                </span>
              </div>

              {/* Card Top Metadata HUD */}
              <div className="flex items-center justify-between z-10 text-[9px] font-mono uppercase tracking-widest text-[#dfd7c7]/80 border-b border-[#c5a059]/15 pb-2.5">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  PH &bull; SOUTHEAST ASIA
                </span>
                <span className="text-[#c5a059] font-semibold tracking-wider">
                  ONLINE &bull; READY
                </span>
              </div>

              {/* Shiloh's Cutout */}
              <div className="relative z-10 w-full h-[76%] flex items-end justify-center">
                <img
                  src="/images/gaming/ashiro-cutout.png"
                  alt="Shiloh - Ashiro Alter-Ego"
                  className="w-auto h-full max-h-[360px] object-contain object-bottom filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.95)] group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
              </div>

              {/* Card Bottom HUD with Equalizer Animation */}
              <div className="z-10 pt-3 border-t border-[#c5a059]/15 flex items-center justify-between text-xs font-mono">
                <div>
                  <span className="text-[#dfd7c7] font-cinzel font-bold text-xs tracking-wider block leading-tight">
                    ALIAS: ASHIRO
                  </span>
                  <span className="text-[9px] text-[#c5a059] uppercase tracking-wider">
                    FPS &bull; MOBA SPECIALIST
                  </span>
                </div>
                
                {/* Audio/HUD Equalizer Bars */}
                <div className="flex items-end gap-1 h-4">
                  <span className="w-1 bg-[#c5a059] rounded-full animate-bounce [animation-delay:0ms] h-3" />
                  <span className="w-1 bg-[#e5c158] rounded-full animate-bounce [animation-delay:150ms] h-4" />
                  <span className="w-1 bg-[#c5a059] rounded-full animate-bounce [animation-delay:300ms] h-2" />
                  <span className="w-1 bg-emerald-400 rounded-full animate-bounce [animation-delay:450ms] h-4" />
                </div>
              </div>

            </div>

            <p className="mt-4 text-[10px] font-mono text-[#c5a059]/70 uppercase tracking-widest">
              Where tactical reflex meets strategic patience.
            </p>
          </div>

          {/* Right Column: Gaming Hobbies Roster */}
          <div className="lg:col-span-7 space-y-4">
            <div className="mb-6">
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#c5a059] block font-semibold mb-1">
                ACTIVE TITLES &amp; FAVORITE GENRES
              </span>
              <h3 className="font-cinzel text-2xl sm:text-3xl text-[#dfd7c7] font-normal uppercase tracking-wider">
                Gaming Hobbies
              </h3>
              <p className="text-xs sm:text-sm text-[#dfd7c7]/75 font-light mt-1 font-sans">
                Competitive games and tactical titles I actively play during personal downtime to hone teamwork, sharp focus, and strategic thinking.
              </p>
            </div>

            {/* Games Interactive Cards */}
            <div className="space-y-3">
              {games.map((game, index) => {
                const isSelected = activeGame === index;

                return (
                  <div
                    key={game.id}
                    onClick={() => setActiveGame(index)}
                    className={`p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-300 border relative overflow-hidden ${
                      isSelected
                        ? 'bg-[#082015] border-[#e5c158] shadow-[0_10px_30px_rgba(0,0,0,0.6)] translate-x-1 sm:translate-x-3'
                        : 'bg-[#0d2f1f] border-[#c5a059]/20 hover:border-[#c5a059]/50 hover:bg-[#113825]'
                    }`}
                  >
                    {/* Active Accent Bar on left */}
                    {isSelected && (
                      <div
                        className="absolute left-0 top-0 bottom-0 w-1.5"
                        style={{ background: `linear-gradient(to bottom, ${game.accent}, #145a35)` }}
                      />
                    )}

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h4 className="font-cinzel text-sm sm:text-base font-bold text-[#dfd7c7] tracking-wider uppercase">
                            {game.title}
                          </h4>
                          <span
                            className="text-[9px] font-mono uppercase px-2.5 py-0.5 rounded-full border border-[#c5a059]/30 bg-[#082015] text-[#c5a059]"
                          >
                            {game.badge}
                          </span>
                        </div>
                        <p className="text-xs text-[#dfd7c7]/80 font-light leading-relaxed font-sans">
                          {game.description}
                        </p>
                      </div>

                      <div className="shrink-0 text-left sm:text-right flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-t-0 border-white/5 pt-2 sm:pt-0">
                        <span className="text-[10px] font-mono text-[#c5a059] uppercase tracking-wider font-semibold">
                          {game.role}
                        </span>
                        <span className="text-[9px] font-mono text-[#dfd7c7]/40 uppercase tracking-widest">
                          {game.genre}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Gaming Synergy Quote */}
            <div className="p-4 rounded-2xl bg-[#0d2f1f] border border-[#c5a059]/25 flex items-center gap-3 text-xs text-[#dfd7c7]/75 font-light">
              <Zap className="w-4 h-4 text-[#c5a059] shrink-0" />
              <span className="font-sans">
                Gaming fosters rapid situational awareness, high-pressure communication, and collaborative problem-solving directly transferrable to software engineering.
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
