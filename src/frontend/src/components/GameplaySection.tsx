import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function GameplaySection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="gameplay" ref={ref} className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4">
      <div className="relative container mx-auto max-w-6xl">
        <div className={`space-y-12 sm:space-y-16 fade-in-up ${isVisible ? 'visible' : ''}`}>
          {/* Section Title */}
          <div className="text-center space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
              How <span className="text-cyan drop-shadow-[0_0_15px_rgba(0,255,255,0.6)]">Lifesteal</span> Works
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-icy-blue leading-relaxed">
              In this intense Lifesteal SMP, every battle changes everything
            </p>
          </div>

          {/* Gameplay Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Heart Stealing */}
            <div className="group backdrop-blur-lg bg-gradient-to-br from-cyan/20 to-cyan/10 rounded-2xl border border-cyan/30 p-6 sm:p-8 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] hover:-translate-y-2">
              <div className="flex flex-col items-center gap-4 sm:gap-6">
                <img 
                  src="/assets/generated/heart-icon-light.dim_64x64.png" 
                  alt="Heart" 
                  className="w-14 h-14 sm:w-16 sm:h-16 group-hover:scale-110 transition-transform"
                  style={{ imageRendering: 'pixelated' }}
                />
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white text-center">
                  Steal Hearts
                </h3>
                <p className="text-sm sm:text-base text-icy-blue leading-relaxed text-center">
                  When you <span className="text-cyan font-bold">eliminate a player</span>, 
                  you steal one of their hearts. The stronger you become, the more feared you are!
                </p>
              </div>
            </div>

            {/* Losing Hearts */}
            <div className="group backdrop-blur-lg bg-gradient-to-br from-red-500/20 to-red-500/10 rounded-2xl border border-red-500/30 p-6 sm:p-8 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(239,68,68,0.4)] hover:-translate-y-2">
              <div className="flex flex-col items-center gap-4 sm:gap-6">
                <img 
                  src="/assets/generated/heart-icon-light.dim_64x64.png" 
                  alt="Heart" 
                  className="w-14 h-14 sm:w-16 sm:h-16 opacity-50 group-hover:scale-110 transition-transform"
                  style={{ imageRendering: 'pixelated' }}
                />
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white text-center">
                  Lose Hearts
                </h3>
                <p className="text-sm sm:text-base text-icy-blue leading-relaxed text-center">
                  But if you <span className="text-red-400 font-bold">die</span>, 
                  you lose one heart. Every decision matters in this high-stakes survival world!
                </p>
              </div>
            </div>

            {/* PvP Combat */}
            <div className="group backdrop-blur-lg bg-gradient-to-br from-purple/20 to-purple/10 rounded-2xl border border-purple/30 p-6 sm:p-8 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:-translate-y-2">
              <div className="flex flex-col items-center gap-4 sm:gap-6">
                <img 
                  src="/assets/generated/sword-icon-light.dim_64x64.png" 
                  alt="Sword" 
                  className="w-14 h-14 sm:w-16 sm:h-16 group-hover:scale-110 transition-transform"
                  style={{ imageRendering: 'pixelated' }}
                />
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white text-center">
                  Dominate Wars
                </h3>
                <p className="text-sm sm:text-base text-icy-blue leading-relaxed text-center">
                  Whether you're a <span className="text-purple font-bold">skilled PvP warrior</span> or 
                  a smart survival strategist, prove your strength in intense battles!
                </p>
              </div>
            </div>

            {/* Alliances */}
            <div className="group backdrop-blur-lg bg-gradient-to-br from-cyan/20 to-purple/10 rounded-2xl border border-white/20 p-6 sm:p-8 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(100,200,255,0.4)] hover:-translate-y-2">
              <div className="flex flex-col items-center gap-4 sm:gap-6">
                <img 
                  src="/assets/generated/alliance-icon-light.dim_64x64.png" 
                  alt="Alliance" 
                  className="w-14 h-14 sm:w-16 sm:h-16 group-hover:scale-110 transition-transform"
                  style={{ imageRendering: 'pixelated' }}
                />
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white text-center">
                  Build Alliances
                </h3>
                <p className="text-sm sm:text-base text-icy-blue leading-relaxed text-center">
                  <span className="text-cyan font-bold">Build alliances</span>, 
                  create rivalries, and <span className="text-purple font-bold">rise to the top</span> of 
                  the server hierarchy!
                </p>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="backdrop-blur-lg bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-3xl border border-white/20 p-8 sm:p-10 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-center mb-8 sm:mb-10 text-white">
              What Makes Us <span className="text-cyan">Special</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="flex items-start gap-4">
                <span className="text-2xl sm:text-3xl shrink-0">💎</span>
                <div>
                  <p className="font-bold text-lg sm:text-xl text-white mb-1">Nonstop Action</p>
                  <p className="text-sm sm:text-base text-icy-blue">Intense fights around the clock</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl sm:text-3xl shrink-0">💰</span>
                <div>
                  <p className="font-bold text-lg sm:text-xl text-white mb-1">Active Economy</p>
                  <p className="text-sm sm:text-base text-icy-blue">Trade, earn, and dominate</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl sm:text-3xl shrink-0">👥</span>
                <div>
                  <p className="font-bold text-lg sm:text-xl text-white mb-1">Growing Community</p>
                  <p className="text-sm sm:text-base text-icy-blue">Join players from around the world</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl sm:text-3xl shrink-0">⚡</span>
                <div>
                  <p className="font-bold text-lg sm:text-xl text-white mb-1">Full VPS Performance</p>
                  <p className="text-sm sm:text-base text-icy-blue">Lag-free gaming experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
