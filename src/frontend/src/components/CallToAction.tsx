import { SiDiscord } from 'react-icons/si';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function CallToAction() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className={`space-y-10 sm:space-y-12 fade-in-up ${isVisible ? 'visible' : ''}`}>
          {/* Main CTA */}
          <div className="backdrop-blur-xl bg-gradient-to-br from-blue-900/40 via-blue-800/30 to-blue-900/40 rounded-3xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3),0_0_60px_rgba(0,200,255,0.15)] p-8 sm:p-12 md:p-16 space-y-8 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
              Ready to <span className="text-cyan drop-shadow-[0_0_15px_rgba(0,255,255,0.6)]">Dominate?</span>
            </h2>
            
            {/* CTA Messages */}
            <div className="space-y-4">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-display text-white leading-relaxed">
                💎 Join now and prove your strength
              </p>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-display text-white leading-relaxed">
                👑 Become the strongest on the server
              </p>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-display text-cyan font-bold drop-shadow-[0_0_10px_rgba(0,255,255,0.5)] leading-relaxed">
                💀 Steal hearts. Rule the world.
              </p>
            </div>

            {/* Discord Button */}
            <div className="pt-6 sm:pt-8">
              <a
                href="https://discord.gg/PqWapJ3AqU"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 sm:gap-4 px-10 sm:px-12 md:px-14 py-5 sm:py-6 bg-gradient-to-r from-cyan via-purple to-cyan bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-2xl text-lg sm:text-xl md:text-2xl font-bold text-white shadow-[0_0_30px_rgba(0,255,255,0.4)] hover:shadow-[0_0_50px_rgba(0,255,255,0.6)] transition-all duration-500 hover:scale-110 min-w-[44px] min-h-[44px]"
              >
                <SiDiscord className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10" />
                Join Our Discord
              </a>
            </div>

            <p className="text-icy-blue text-base sm:text-lg md:text-xl pt-4 leading-relaxed">
              Connect with the community and stay updated!
            </p>
          </div>

          {/* Fresh Server Notice */}
          <div className="backdrop-blur-lg bg-gradient-to-br from-purple/20 to-purple/10 rounded-3xl border border-purple/30 p-8 sm:p-10 text-center space-y-4">
            <div className="inline-block backdrop-blur-md bg-purple/30 px-6 py-3 rounded-full border border-purple/40">
              <p className="text-purple font-bold text-base sm:text-lg">🚀 RECENTLY LAUNCHED</p>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-icy-blue leading-relaxed">
              We just launched and the competition has already started. 
              This is the <span className="text-cyan font-bold">best time to join</span> and 
              build your legacy from the beginning!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
