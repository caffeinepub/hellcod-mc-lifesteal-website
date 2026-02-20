import { useState } from 'react';
import { Copy, Check, Gamepad2 } from 'lucide-react';
import { SiDiscord } from 'react-icons/si';

export default function HeroSection() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('hellcod.ddns.net:19100');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 sm:pt-24 pb-12 sm:pb-16 px-4">
      <div className="relative z-10 container mx-auto max-w-6xl">
        <div className="flex flex-col items-center space-y-8 sm:space-y-12 md:space-y-16">
          {/* Hero Title */}
          <div className="text-center space-y-4 sm:space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-white leading-tight px-2">
              Welcome to <span className="text-cyan drop-shadow-[0_0_20px_rgba(0,255,255,0.6)] animate-pulse-glow">HellCod MC</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-icy-blue font-medium leading-relaxed px-2">
              The Ultimate <span className="text-purple font-bold">Lifesteal SMP</span> Experience
            </p>
          </div>

          {/* Server IP Card - Premium Glassmorphism */}
          <div className="w-full max-w-2xl backdrop-blur-xl bg-gradient-to-br from-blue-900/40 via-blue-800/30 to-blue-900/40 rounded-3xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3),0_0_60px_rgba(0,200,255,0.15)] p-6 sm:p-8 md:p-10">
            <div className="space-y-4 sm:space-y-6">
              <div className="text-center">
                <p className="text-sm sm:text-base text-icy-blue/80 font-medium mb-2 sm:mb-3">
                  SERVER IP
                </p>
                <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
                  <code className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-mono font-bold text-white animate-pulse-text px-3 py-2 rounded-lg bg-black/20">
                    hellcod.ddns.net:19100
                  </code>
                  <button
                    onClick={copyToClipboard}
                    className="p-3 sm:p-4 rounded-xl bg-cyan/20 hover:bg-cyan/30 border border-cyan/40 text-cyan transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] min-w-[44px] min-h-[44px]"
                    style={{ imageRendering: 'pixelated' }}
                    aria-label="Copy server IP"
                  >
                    {copied ? (
                      <Check className="w-5 h-5 sm:w-6 sm:h-6" />
                    ) : (
                      <Copy className="w-5 h-5 sm:w-6 sm:h-6" />
                    )}
                  </button>
                </div>
                {copied && (
                  <p className="text-sm text-cyan mt-2 animate-fade-in">
                    ✓ Copied to clipboard!
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Info Cards Grid */}
          <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {/* Game Mode Card */}
            <div className="group backdrop-blur-lg bg-gradient-to-br from-cyan/20 to-cyan/10 rounded-2xl border border-cyan/30 p-6 sm:p-8 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:-translate-y-2">
              <div className="flex flex-col items-center text-center space-y-3">
                <Gamepad2 className="w-10 h-10 sm:w-12 sm:h-12 text-cyan group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-xs sm:text-sm text-icy-blue/70 font-medium mb-1">
                    GAME MODE
                  </p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                    Lifesteal SMP
                  </p>
                </div>
              </div>
            </div>

            {/* Version Card */}
            <div className="group backdrop-blur-lg bg-gradient-to-br from-purple/20 to-purple/10 rounded-2xl border border-purple/30 p-6 sm:p-8 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:-translate-y-2">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="text-3xl sm:text-4xl">🎮</div>
                <div>
                  <p className="text-xs sm:text-sm text-icy-blue/70 font-medium mb-1">
                    VERSION
                  </p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                    Any Version Can Play
                  </p>
                </div>
              </div>
            </div>

            {/* Support Card */}
            <div className="group backdrop-blur-lg bg-gradient-to-br from-cyan/20 to-purple/10 rounded-2xl border border-white/20 p-6 sm:p-8 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(100,200,255,0.3)] hover:-translate-y-2">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="text-3xl sm:text-4xl">⚔️</div>
                <div>
                  <p className="text-xs sm:text-sm text-icy-blue/70 font-medium mb-1">
                    USER SUPPORT
                  </p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                    Java & Bedrock
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Join Now Button */}
          <div className="pt-4 sm:pt-8">
            <a
              href="https://discord.gg/PqWapJ3AqU"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 sm:gap-4 px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 bg-gradient-to-r from-cyan via-purple to-cyan bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-2xl text-lg sm:text-xl md:text-2xl font-bold text-white shadow-[0_0_30px_rgba(0,255,255,0.4)] hover:shadow-[0_0_50px_rgba(0,255,255,0.6)] transition-all duration-500 hover:scale-110 animate-bounce-subtle min-w-[44px] min-h-[44px]"
              style={{ imageRendering: 'pixelated' }}
            >
              <SiDiscord className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 group-hover:rotate-12 transition-transform" />
              Join Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
