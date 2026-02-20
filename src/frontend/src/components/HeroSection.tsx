import { useState, useRef, useEffect } from 'react';
import { Copy, Check, Gamepad2 } from 'lucide-react';
import { SiDiscord } from 'react-icons/si';

export default function HeroSection() {
  const [copied, setCopied] = useState(false);
  const [magneticOffset, setMagneticOffset] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const rafRef = useRef<number | undefined>(undefined);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('hellcod.ddns.net:19100');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovering) return;

      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      
      const maxOffset = 3;
      const offsetX = Math.max(-maxOffset, Math.min(maxOffset, deltaX * 0.15));
      const offsetY = Math.max(-maxOffset, Math.min(maxOffset, deltaY * 0.15));

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        setMagneticOffset({ x: offsetX, y: offsetY });
      });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => {
      setIsHovering(false);
      setMagneticOffset({ x: 0, y: 0 });
    };

    const handleClick = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const id = Date.now();
      setRipples(prev => [...prev, { id, x, y }]);
      
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== id));
      }, 600);
    };

    button.addEventListener('mousemove', handleMouseMove, { passive: true });
    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);
    button.addEventListener('click', handleClick);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
      button.removeEventListener('click', handleClick);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isHovering]);

  // Hero text reveal animation
  const titleWords = ['Welcome', 'to', 'HellCod', 'MC'];
  const subtitleWords = ['The', 'Ultimate', 'Lifesteal', 'SMP', 'Experience'];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 sm:pt-24 pb-12 sm:pb-16 px-4">
      <div className="relative z-10 container mx-auto max-w-6xl">
        <div className="flex flex-col items-center space-y-8 sm:space-y-12 md:space-y-16">
          {/* Hero Title with reveal animation */}
          <div className="text-center space-y-4 sm:space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-foreground leading-tight px-2">
              {titleWords.map((word, i) => (
                <span
                  key={i}
                  className="inline-block animate-hero-text-reveal"
                  style={{
                    animationDelay: `${i * 0.1}s`,
                    opacity: 0,
                  }}
                >
                  {word === 'HellCod' ? (
                    <span className="relative inline-block">
                      <span className="text-purple drop-shadow-[0_0_20px_rgba(168,85,247,0.6)] animate-shimmer-sweep" style={{ animationDelay: '0.8s' }}>
                        {word}
                      </span>
                    </span>
                  ) : (
                    word
                  )}{' '}
                </span>
              ))}
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground/80 font-medium leading-relaxed px-2">
              {subtitleWords.map((word, i) => (
                <span
                  key={i}
                  className="inline-block animate-hero-text-reveal"
                  style={{
                    animationDelay: `${0.4 + i * 0.08}s`,
                    opacity: 0,
                  }}
                >
                  {word === 'Lifesteal' ? (
                    <span className="relative inline-block">
                      <span className="text-purple font-bold animate-shimmer-sweep" style={{ animationDelay: '1.2s' }}>
                        {word}
                      </span>
                    </span>
                  ) : (
                    word
                  )}{' '}
                </span>
              ))}
            </p>
          </div>

          {/* Server IP Card - Floating animation */}
          <div className="w-full max-w-2xl backdrop-blur-xl bg-gradient-to-br from-card/80 via-purple-dark/20 to-card/80 rounded-3xl border border-purple/30 shadow-glass p-6 sm:p-8 md:p-10 animate-float-subtle">
            <div className="space-y-4 sm:space-y-6">
              <div className="text-center">
                <p className="text-sm sm:text-base text-muted-foreground font-medium mb-2 sm:mb-3">
                  SERVER IP
                </p>
                <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
                  <code 
                    className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-mono font-bold text-foreground animate-pulse-text-purple px-3 py-2 rounded-lg bg-background/50 transition-all duration-300 ${
                      copied ? 'animate-text-brighten' : ''
                    }`}
                  >
                    hellcod.ddns.net:19100
                  </code>
                  <button
                    onClick={copyToClipboard}
                    className="relative p-3 sm:p-4 rounded-xl bg-purple/20 hover:bg-purple/30 border border-purple/40 text-purple transition-all duration-300 hover:scale-110 hover:shadow-glow-purple min-w-[44px] min-h-[44px] overflow-hidden"
                    style={{ imageRendering: 'pixelated' }}
                    aria-label="Copy server IP"
                  >
                    {copied ? (
                      <>
                        <Check className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
                        <span className="absolute inset-0 animate-checkmark-fade">
                          <Check className="w-5 h-5 sm:w-6 sm:h-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-purple" />
                        </span>
                        <span className="absolute inset-0 rounded-xl bg-purple/30 animate-glow-expand" />
                      </>
                    ) : (
                      <Copy className="w-5 h-5 sm:w-6 sm:h-6" />
                    )}
                  </button>
                </div>
                {copied && (
                  <p className="text-sm text-purple mt-2 animate-fade-in">
                    ✓ Copied to clipboard!
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Info Cards Grid */}
          <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {/* Game Mode Card */}
            <div className="group border-trace-container backdrop-blur-lg bg-gradient-to-br from-purple/20 to-purple/10 rounded-2xl border border-purple/30 p-6 sm:p-8 transition-all duration-300 hover:scale-105 hover:shadow-glow-purple hover:-translate-y-2">
              <div className="flex flex-col items-center text-center space-y-3">
                <Gamepad2 className="w-10 h-10 sm:w-12 sm:h-12 text-purple group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium mb-1">
                    GAME MODE
                  </p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">
                    Lifesteal SMP
                  </p>
                </div>
              </div>
            </div>

            {/* Version Card */}
            <div className="group border-trace-container backdrop-blur-lg bg-gradient-to-br from-purple/20 to-purple/10 rounded-2xl border border-purple/30 p-6 sm:p-8 transition-all duration-300 hover:scale-105 hover:shadow-glow-purple hover:-translate-y-2">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="text-3xl sm:text-4xl">🎮</div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium mb-1">
                    VERSION
                  </p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">
                    Any Version Can Play
                  </p>
                </div>
              </div>
            </div>

            {/* Support Card */}
            <div className="group border-trace-container backdrop-blur-lg bg-gradient-to-br from-purple/20 to-purple/10 rounded-2xl border border-purple/30 p-6 sm:p-8 transition-all duration-300 hover:scale-105 hover:shadow-glow-purple hover:-translate-y-2">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="text-3xl sm:text-4xl">⚔️</div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium mb-1">
                    USER SUPPORT
                  </p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">
                    Java & Bedrock
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Join Now Button - Magnetic effect */}
          <div className="pt-4 sm:pt-8">
            <a
              ref={buttonRef}
              href="https://discord.gg/PqWapJ3AqU"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 sm:gap-4 px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 bg-gradient-to-r from-purple via-purple-light to-purple bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-2xl text-lg sm:text-xl md:text-2xl font-bold text-white shadow-glow-purple hover:shadow-glow-purple-intense transition-all duration-300 min-w-[44px] min-h-[44px] overflow-hidden"
              style={{
                imageRendering: 'pixelated',
                transform: `translate3d(${magneticOffset.x}px, ${magneticOffset.y}px, 0)`,
                willChange: 'transform',
              }}
            >
              <SiDiscord className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 group-hover:rotate-12 transition-transform relative z-10" />
              <span className="relative z-10">Join Now</span>
              {ripples.map(ripple => (
                <span
                  key={ripple.id}
                  className="absolute rounded-full bg-white/30 animate-ripple pointer-events-none"
                  style={{
                    left: ripple.x,
                    top: ripple.y,
                    width: '20px',
                    height: '20px',
                    marginLeft: '-10px',
                    marginTop: '-10px',
                  }}
                />
              ))}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
