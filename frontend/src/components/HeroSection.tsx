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

    const handleMouseLeave = () => {
      setIsHovering(false);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      setMagneticOffset({ x: 0, y: 0 });
    };

    if (isHovering) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isHovering]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    
    setRipples(prev => [...prev, { id, x, y }]);
    
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== id));
    }, 600);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 sm:py-24 md:py-32 z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12 sm:space-y-16 md:space-y-20">
          {/* Main Heading with Split Colors */}
          <div className="text-center space-y-6 sm:space-y-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-black leading-tight tracking-tight animate-hero-text-reveal">
              <span className="text-primary">HellCod</span> <span className="text-white">MC</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-medium leading-relaxed animate-hero-text-reveal" style={{ animationDelay: '0.1s' }}>
              Only the <span className="text-purple font-bold">Strong</span> Survive!
            </p>
          </div>

          {/* Server IP Card - Enhanced Glassmorphism */}
          <div className="flex justify-center animate-hero-text-reveal" style={{ animationDelay: '0.2s' }}>
            <div className="relative backdrop-blur-3xl bg-gradient-to-br from-card/40 via-purple-dark/30 to-card/40 rounded-3xl border-2 border-purple/50 shadow-[0_8px_32px_0_rgba(168,85,247,0.37),0_0_60px_0_rgba(168,85,247,0.2),inset_0_1px_0_0_rgba(255,255,255,0.1)] p-6 sm:p-8 md:p-10 max-w-2xl w-full before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-white/10 before:via-transparent before:to-transparent before:pointer-events-none after:absolute after:inset-0 after:rounded-3xl after:bg-gradient-to-tr after:from-transparent after:via-purple/5 after:to-purple/10 after:pointer-events-none">
              <div className="relative z-10 space-y-4 sm:space-y-6">
                <div className="flex items-center justify-center gap-3 sm:gap-4">
                  <Gamepad2 className="w-6 h-6 sm:w-8 sm:h-8 text-purple drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-primary drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]">
                    Join Now
                  </h2>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                  <code className="flex-1 text-base sm:text-lg md:text-xl lg:text-2xl font-mono text-purple bg-purple/20 backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4 rounded-xl border-2 border-purple/50 text-center break-all shadow-[0_4px_16px_0_rgba(168,85,247,0.25),inset_0_1px_0_0_rgba(255,255,255,0.1)]">
                    hellcod.ddns.net:19100
                  </code>
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-4 bg-purple/30 hover:bg-purple/40 backdrop-blur-md border-2 border-purple/60 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] min-w-[44px] min-h-[44px] shadow-[0_4px_16px_0_rgba(168,85,247,0.3)]"
                    aria-label="Copy server IP"
                  >
                    {copied ? (
                      <>
                        <Check className="w-5 h-5 sm:w-6 sm:h-6 text-purple drop-shadow-[0_0_6px_rgba(168,85,247,0.8)]" />
                        <span className="text-sm sm:text-base font-semibold text-purple hidden sm:inline drop-shadow-[0_0_6px_rgba(168,85,247,0.6)]">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-5 h-5 sm:w-6 sm:h-6 text-purple drop-shadow-[0_0_6px_rgba(168,85,247,0.8)]" />
                        <span className="text-sm sm:text-base font-semibold text-purple hidden sm:inline drop-shadow-[0_0_6px_rgba(168,85,247,0.6)]">Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 animate-hero-text-reveal" style={{ animationDelay: '0.3s' }}>
            <div className="backdrop-blur-lg bg-gradient-to-br from-card/80 via-purple-dark/20 to-card/80 rounded-2xl border border-purple/30 p-6 sm:p-8 text-center space-y-3 sm:space-y-4 transition-all duration-300 hover:scale-105 hover:shadow-glow-purple">
              <div className="text-3xl sm:text-4xl">⚔️</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-primary">
                Lifesteal SMP
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Steal hearts from your enemies
              </p>
            </div>

            <div className="backdrop-blur-lg bg-gradient-to-br from-card/80 via-purple-dark/20 to-card/80 rounded-2xl border border-purple/30 p-6 sm:p-8 text-center space-y-3 sm:space-y-4 transition-all duration-300 hover:scale-105 hover:shadow-glow-purple">
              <div className="text-3xl sm:text-4xl">🏆</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-primary">
                Competitive
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Prove you're the strongest
              </p>
            </div>

            <div className="backdrop-blur-lg bg-gradient-to-br from-card/80 via-purple-dark/20 to-card/80 rounded-2xl border border-purple/30 p-6 sm:p-8 text-center space-y-3 sm:space-y-4 transition-all duration-300 hover:scale-105 hover:shadow-glow-purple">
              <div className="text-3xl sm:text-4xl">👥</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-primary">
                Active Community
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Join 50+ active players
              </p>
            </div>
          </div>

          {/* Discord CTA with Magnetic Effect */}
          <div className="flex justify-center pt-4 sm:pt-6 animate-hero-text-reveal" style={{ animationDelay: '0.4s' }}>
            <a
              ref={buttonRef}
              href="https://discord.gg/PqWapJ3AqU"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="relative inline-flex items-center justify-center gap-3 sm:gap-4 px-10 sm:px-12 md:px-14 py-5 sm:py-6 bg-gradient-to-r from-purple via-purple-light to-purple bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-2xl text-lg sm:text-xl md:text-2xl font-bold text-white shadow-glow-purple hover:shadow-glow-purple-intense transition-all duration-500 overflow-hidden min-w-[44px] min-h-[44px]"
              style={{
                transform: `translate(${magneticOffset.x}px, ${magneticOffset.y}px)`,
                transition: isHovering ? 'transform 0.2s ease-out' : 'transform 0.5s ease-out',
              }}
            >
              {ripples.map(ripple => (
                <span
                  key={ripple.id}
                  className="absolute w-5 h-5 bg-white/30 rounded-full animate-ripple pointer-events-none"
                  style={{
                    left: ripple.x,
                    top: ripple.y,
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              ))}
              <SiDiscord className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10" />
              Join Our Discord
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
