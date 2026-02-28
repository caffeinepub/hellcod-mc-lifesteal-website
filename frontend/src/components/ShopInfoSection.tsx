import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function ShopInfoSection() {
  const { ref, isVisible } = useScrollAnimation();

  const shopItems = [
    {
      icon: '💎',
      title: 'Premium Items',
      description: 'Exclusive cosmetics, custom items, and special perks to enhance your gameplay experience.',
      price: 'Various',
    },
    {
      icon: '🎁',
      title: 'Crate Keys',
      description: 'Unlock mystery crates containing rare items, hearts, and special rewards.',
      price: 'From $0.11',
    },
  ];

  return (
    <section id="shop" ref={ref} className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 z-10">
      <div className="relative container mx-auto max-w-6xl">
        <div className={`space-y-12 sm:space-y-16 fade-in-up ${isVisible ? 'visible' : ''}`}>
          {/* Section Title */}
          <div className="text-center space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-primary">
              Server <span className="drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]">Shop</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Support the server and get exclusive perks
            </p>
          </div>

          {/* Shop Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {shopItems.map((item, index) => (
              <div
                key={index}
                className={`group border-trace-container backdrop-blur-lg bg-gradient-to-br from-card/80 via-purple-dark/20 to-card/80 rounded-2xl border border-purple/30 p-6 sm:p-8 transition-all duration-300 hover:scale-105 hover:shadow-glow-purple fade-in-up ${
                  isVisible ? 'visible' : ''
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-4xl sm:text-5xl">{item.icon}</div>
                    <span className="px-4 py-2 bg-purple/20 border border-purple/40 rounded-full text-sm sm:text-base text-purple font-bold">
                      {item.price}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-primary">
                    {item.title}
                  </h3>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Purchase Notice */}
          <div className="backdrop-blur-lg bg-gradient-to-br from-purple/20 to-purple/10 rounded-3xl border border-purple/30 p-8 sm:p-10 text-center space-y-4">
            <p className="text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed">
              💬 To purchase items, join our{' '}
              <a
                href="https://discord.gg/PqWapJ3AqU"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple font-bold hover:text-purple-light transition-colors"
              >
                Discord server
              </a>{' '}
              and contact an admin
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
