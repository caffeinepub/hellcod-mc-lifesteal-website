import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function GameplaySection() {
  const { ref, isVisible } = useScrollAnimation();

  const features = [
    {
      icon: '⚔️',
      title: 'Combat System',
      description: 'Engage in intense PvP battles where every fight matters. Steal hearts from your enemies and grow stronger with each victory.',
    },
    {
      icon: '❤️',
      title: 'Heart Mechanics',
      description: 'Your health is your currency. Lose hearts when you die, steal them when you win. Manage your hearts wisely to survive.',
    },
    {
      icon: '🏆',
      title: 'Competitive Gameplay',
      description: 'Climb the leaderboards and prove you\'re the strongest player. Form alliances or go solo - the choice is yours.',
    },
    {
      icon: '🛡️',
      title: 'Strategic Depth',
      description: 'Plan your moves carefully. Every decision counts in this high-stakes survival experience.',
    },
  ];

  return (
    <section id="gameplay" ref={ref} className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 z-10">
      <div className="relative container mx-auto max-w-6xl">
        <div className={`space-y-12 sm:space-y-16 fade-in-up ${isVisible ? 'visible' : ''}`}>
          {/* Section Title */}
          <div className="text-center space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-primary">
              Gameplay <span className="drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]">Features</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience the thrill of Lifesteal SMP
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group border-trace-container backdrop-blur-lg bg-gradient-to-br from-card/80 via-purple-dark/20 to-card/80 rounded-2xl border border-purple/30 p-6 sm:p-8 transition-all duration-300 hover:scale-105 hover:shadow-glow-purple fade-in-up ${
                  isVisible ? 'visible' : ''
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="text-4xl sm:text-5xl">{feature.icon}</div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
