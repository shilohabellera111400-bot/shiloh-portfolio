import React, { useState } from 'react';
import { Rocket, Terminal, Code, Cpu, Shield, Sparkles, Play, Flame, Layers } from 'lucide-react';

export default function RocketGameSection() {
  const [activeTab, setActiveTab] = useState('overview');

  const pythonSnippet = `# Cartesian Plane Projection Logic (rocket game.py)
import pygame, random

grid_size = 50

def cartesian_to_screen(x, y, origin_x, origin_y):
    """Maps algebraic (x, y) coordinates to screen pixels."""
    return origin_x + x * grid_size, origin_y - y * grid_size

def screen_to_cartesian(mx, my, origin_x, origin_y):
    """Converts mouse click pixel positions to Cartesian integer coordinates."""
    return (mx - origin_x) // grid_size, (origin_y - my) // grid_size

# Game Mechanics & Level Scaling
level = 1
total_fuel = level + 4

def generate_fuel_positions():
    fuel_positions = set()
    while len(fuel_positions) < total_fuel:
        fuel_positions.add((random.randint(-4, 4), random.randint(-4, 4)))
    return list(fuel_positions)

# Real-time Physics & Gravity Engine
if rocket_launched:
    rocket_velocity -= 1          # Upward thrust acceleration
    rocket_cy += rocket_velocity
elif falling:
    rocket_velocity += 0.3        # Gravitational pull downwards
    rocket_cy += rocket_velocity`;

  return (
    <section id="rocket-game" className="px-5 sm:px-6 py-24 sm:py-36 bg-[#09090d] text-white relative overflow-hidden border-t border-white/10">
      {/* Space & Particle Glow Accents */}
      <div className="absolute top-1/4 -right-10 w-96 h-96 bg-red-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono font-semibold uppercase tracking-[0.25em] mb-4">
              <Rocket className="w-3.5 h-3.5" />
              Python &bull; Pygame Project
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Rocket Launch <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-500">— Cartesian Game</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
              An educational space navigation simulation engineered in Python. Combines algebraic Cartesian coordinate mapping, real-time gravitational descent, procedural fuel canister distribution, and Pygame state machine architecture.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-2 p-1 rounded-2xl bg-white/[0.04] border border-white/10 self-start md:self-end">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                activeTab === 'overview'
                  ? 'bg-red-600 text-white shadow-[0_0_15px_-3px_rgba(239,68,68,0.7)]'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              System Overview
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all flex items-center gap-1.5 ${
                activeTab === 'code'
                  ? 'bg-red-600 text-white shadow-[0_0_15px_-3px_rgba(239,68,68,0.7)]'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Code className="w-3.5 h-3.5" />
              Source Snippet
            </button>
          </div>
        </div>

        {/* Main Interactive Showcase Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Authentic Gameplay Screenshot & Sprite Inspector */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            
            {/* Screenshot Frame with Cyber HUD Elements */}
            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-black/80 shadow-[0_20px_50px_rgba(0,0,0,0.9)] group">
              
              {/* Window Titlebar */}
              <div className="px-4 py-3 bg-[#13131a] border-b border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  <span className="ml-2 text-neutral-300 font-semibold">pygame_app &bull; Rocket Launch.py</span>
                </div>
                <span className="text-[11px] text-red-400">800x600 · 60 FPS</span>
              </div>

              {/* Real Game Screenshot */}
              <div className="relative aspect-[4/3] bg-neutral-950 overflow-hidden flex items-center justify-center">
                <img
                  src="/images/rocket/rocket-gameplay.png"
                  alt="Rocket Launch Pygame Gameplay Screenshot"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />

                {/* Live HUD Floating Chips */}
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-[11px] font-mono text-neutral-200">
                  <span className="text-red-400 font-bold">GRID:</span> 50px &bull; Origin (0,0)
                </div>
                <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-[11px] font-mono text-neutral-200">
                  <span className="text-amber-400 font-bold">QUOTA:</span> Level + 4 Tanks
                </div>
                <div className="absolute bottom-3 inset-x-3 bg-black/85 backdrop-blur-md p-3 rounded-2xl border border-white/15 flex items-center justify-between text-xs font-mono">
                  <span className="text-neutral-300">
                    Mechanic: Click Cartesian coordinates before rocket descends
                  </span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    Pygame 2.x
                  </span>
                </div>
              </div>

            </div>

            {/* Sprites Showcase Bar */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Authored Sprites:
              </span>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <img src="/images/rocket/RocketSymbol (2).png" alt="Rocket" className="w-7 h-7 object-contain" />
                  <span className="text-xs font-mono text-neutral-300">Rocket (130x180)</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/images/rocket/Gas tank.png" alt="Fuel" className="w-6 h-6 object-contain" />
                  <span className="text-xs font-mono text-neutral-300">Fuel Tank</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/images/rocket/ExplotionEffect.png" alt="Explosion" className="w-7 h-7 object-contain" />
                  <span className="text-xs font-mono text-neutral-300">Explosion VFX</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Code Snippet or Feature Deep-Dive */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {activeTab === 'overview' ? (
              <div className="space-y-3.5">
                
                {/* Feature 1 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#13131b] border border-white/10 hover:border-red-500/40 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
                      <Layers className="w-4 h-4" />
                    </div>
                    <h4 className="text-base font-bold text-white">Cartesian Coordinate System</h4>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed font-light">
                    Engineered custom bidirectional coordinate converters (<code className="text-red-300 font-mono">cartesian_to_screen</code> and <code className="text-red-300 font-mono">screen_to_cartesian</code>) mapping screen pixels to a centered algebraic plane with 50-pixel intervals.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#13131b] border border-white/10 hover:border-red-500/40 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                      <Flame className="w-4 h-4" />
                    </div>
                    <h4 className="text-base font-bold text-white">Kinetic Physics &amp; Gravity Fall</h4>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed font-light">
                    Continuous gravitational acceleration pulls the rocket downward (<code className="text-amber-300 font-mono">+0.3 velocity</code>). Collecting required fuel engages upward propulsion (<code className="text-amber-300 font-mono">-1.0 thrust</code>) for a successful launch.
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#13131b] border border-white/10 hover:border-red-500/40 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <h4 className="text-base font-bold text-white">Dynamic Objective &amp; Level Scaling</h4>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed font-light">
                    Generates randomized coordinates <code className="text-rose-300 font-mono">(random.randint(-4, 4))</code> for gas tanks, scaling required collection quota by <code className="text-rose-300 font-mono">level + 4</code> as difficulty increases.
                  </p>
                </div>

                {/* Feature 4 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#13131b] border border-white/10 hover:border-red-500/40 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                      <Terminal className="w-4 h-4" />
                    </div>
                    <h4 className="text-base font-bold text-white">State Machine &amp; Particle Detonation</h4>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed font-light">
                    Handles start menu, playing state, explosive crash detection on collision/timeout, safe orbit transit, and instantaneous game reset cycle.
                  </p>
                </div>

              </div>
            ) : (
              /* Code Viewer */
              <div className="rounded-2xl bg-[#0e0e14] border border-white/10 overflow-hidden shadow-xl">
                <div className="px-4 py-2.5 bg-[#171720] border-b border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span className="flex items-center gap-2 text-neutral-300">
                    <Terminal className="w-3.5 h-3.5 text-red-400" />
                    rocket game.py
                  </span>
                  <span>Python 3 &bull; Pygame</span>
                </div>
                <pre className="p-4 text-xs font-mono text-neutral-300 overflow-x-auto leading-relaxed max-h-[420px] scrollbar-thin">
                  <code>{pythonSnippet}</code>
                </pre>
              </div>
            )}

            {/* Quick Tech Specs Bar */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-red-950/20 to-black/60 border border-red-500/20 text-xs font-mono text-neutral-400 flex flex-wrap items-center justify-between gap-2">
              <span>Stack: <strong className="text-white">Python 3 &bull; Pygame</strong></span>
              <span>Resolution: <strong className="text-white">800 &times; 600</strong></span>
              <span>Status: <strong className="text-emerald-400">Complete &bull; Tested</strong></span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
