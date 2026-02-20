import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function RewardsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="rewards" ref={ref} className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className={`space-y-10 sm:space-y-12 fade-in-up ${isVisible ? 'visible' : ''}`}>
          {/* Section Title */}
          <div className="text-center space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
              Exclusive <span className="text-cyan drop-shadow-[0_0_15px_rgba(0,255,255,0.6)]">Rewards</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-icy-blue leading-relaxed">
              Compete for amazing prizes and upcoming features
            </p>
          </div>

          {/* Premium Reward Card */}
          <div className="backdrop-blur-xl bg-gradient-to-br from-blue-900/40 via-blue-800/30 to-blue-900/40 rounded-3xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3),0_0_60px_rgba(0,200,255,0.15)] p-8 sm:p-10 md:p-12 hover:scale-[1.02] transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img 
                src="/assets/generated/trophy-icon-light.dim_64x64.png" 
                alt="Trophy" 
                className="w-28 h-28 sm:w-32 sm:h-32 animate-pulse-glow shrink-0"
                style={{ imageRendering: 'pixelated' }}
              />
              <div className="flex-1 space-y-4 text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white">
                  🏆 Special Reward
                </h3>
                <p className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed">
                  First player to reach <span className="text-cyan font-bold text-2xl sm:text-3xl">100M</span> in-game 
                  money will receive a <span className="text-purple font-bold">FREE Premium Account!</span>
                </p>
                <p className="text-base sm:text-lg text-icy-blue leading-relaxed">
                  Will you be the one to claim this legendary prize?
                </p>
              </div>
            </div>
          </div>

          {/* Coming Soon Card */}
          <div className="backdrop-blur-lg bg-gradient-to-br from-purple/20 to-purple/10 rounded-3xl border border-purple/30 p-8 sm:p-10 md:p-12 shadow-[0_8px_32px_rgba(168,85,247,0.2)]">
            <div className="text-center space-y-4 sm:space-y-6">
              <div className="inline-block backdrop-blur-md bg-purple/30 px-6 py-3 rounded-full border border-purple/40">
                <p className="text-purple font-bold text-base sm:text-lg">⚡ COMING SOON</p>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white">
                Practice PvP Mode
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-icy-blue max-w-2xl mx-auto leading-relaxed">
                Sharpen your combat skills in our upcoming practice arena. 
                Perfect your techniques before entering the real battlefield!
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="backdrop-blur-lg bg-gradient-to-br from-cyan/20 to-cyan/10 rounded-2xl border border-cyan/30 p-6 text-center space-y-2 hover:scale-105 transition-transform">
              <p className="text-3xl sm:text-4xl font-bold text-white">24/7</p>
              <p className="text-sm sm:text-base text-icy-blue">Online</p>
            </div>
            <div className="backdrop-blur-lg bg-gradient-to-br from-purple/20 to-purple/10 rounded-2xl border border-purple/30 p-6 text-center space-y-2 hover:scale-105 transition-transform">
              <p className="text-3xl sm:text-4xl font-bold text-white">Fresh</p>
              <p className="text-sm sm:text-base text-icy-blue">Server</p>
            </div>
            <div className="backdrop-blur-lg bg-gradient-to-br from-cyan/20 to-purple/10 rounded-2xl border border-white/20 p-6 text-center space-y-2 hover:scale-105 transition-transform">
              <p className="text-3xl sm:text-4xl font-bold text-white">VPS</p>
              <p className="text-sm sm:text-base text-icy-blue">Performance</p>
            </div>
            <div className="backdrop-blur-lg bg-gradient-to-br from-cyan/20 to-cyan/10 rounded-2xl border border-cyan/30 p-6 text-center space-y-2 hover:scale-105 transition-transform">
              <p className="text-3xl sm:text-4xl font-bold text-white">100M</p>
              <p className="text-sm sm:text-base text-icy-blue">Prize Goal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
