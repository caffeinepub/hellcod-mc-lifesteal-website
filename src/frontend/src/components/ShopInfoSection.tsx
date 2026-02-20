import { ShoppingBag, Key, Sparkles } from 'lucide-react';
import { SiDiscord } from 'react-icons/si';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function ShopInfoSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="shop" ref={ref} className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className={`fade-in-up ${isVisible ? 'visible' : ''}`}>
          {/* Main Shop Card */}
          <div className="backdrop-blur-xl bg-gradient-to-br from-blue-900/40 via-blue-800/30 to-blue-900/40 rounded-3xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3),0_0_60px_rgba(0,200,255,0.15)] p-8 sm:p-10 md:p-12 space-y-8 sm:space-y-10">
            {/* Header */}
            <div className="text-center space-y-4 sm:space-y-6">
              <div className="inline-block backdrop-blur-md bg-purple/30 px-6 py-3 rounded-full border border-purple/40">
                <p className="text-purple font-bold text-base sm:text-lg flex items-center justify-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  PREMIUM SHOP
                  <Sparkles className="w-5 h-5" />
                </p>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
                Exclusive <span className="text-cyan drop-shadow-[0_0_15px_rgba(0,255,255,0.6)]">Premium Items</span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-icy-blue leading-relaxed">
                Unlock powerful items and crate keys to dominate the server
              </p>
            </div>

            {/* Shop Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {/* Premium Items Card */}
              <div className="backdrop-blur-lg bg-gradient-to-br from-cyan/20 to-cyan/10 rounded-2xl border border-cyan/30 p-6 sm:p-8 space-y-4 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-cyan/20 border border-cyan/40 mx-auto">
                  <ShoppingBag className="w-8 h-8 text-cyan" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-center text-white">
                  Premium Items
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-center text-icy-blue leading-relaxed">
                  Exclusive gear, weapons, and tools to give you the edge in battle
                </p>
              </div>

              {/* Crate Keys Card */}
              <div className="backdrop-blur-lg bg-gradient-to-br from-purple/20 to-purple/10 rounded-2xl border border-purple/30 p-6 sm:p-8 space-y-4 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple/20 border border-purple/40 mx-auto">
                  <Key className="w-8 h-8 text-purple" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-center text-white">
                  Crate Keys
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-center text-icy-blue leading-relaxed">
                  Unlock mystery crates filled with rare and legendary rewards
                </p>
              </div>
            </div>

            {/* Discord Purchase Notice */}
            <div className="backdrop-blur-lg bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-2xl border border-white/20 p-8 sm:p-10 space-y-6">
              <div className="flex items-center justify-center gap-4">
                <SiDiscord className="w-10 h-10 sm:w-12 sm:h-12 text-cyan" />
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white">
                  How to Purchase
                </h3>
              </div>
              <div className="space-y-4">
                <p className="text-base sm:text-lg md:text-xl text-center text-white leading-relaxed">
                  🎮 All premium items and crate keys are available exclusively through our <span className="text-cyan font-bold">Discord server</span>
                </p>
                <p className="text-sm sm:text-base md:text-lg text-center text-icy-blue leading-relaxed">
                  Join our Discord community to browse the shop, make purchases, and get instant delivery!
                </p>
              </div>
              <div className="pt-4 text-center">
                <a
                  href="https://discord.gg/PqWapJ3AqU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 sm:gap-4 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-cyan to-purple rounded-2xl text-base sm:text-lg md:text-xl font-bold text-white hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all duration-300 min-w-[44px] min-h-[44px]"
                >
                  <SiDiscord className="w-6 h-6 sm:w-7 sm:h-7" />
                  Visit Shop on Discord
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
