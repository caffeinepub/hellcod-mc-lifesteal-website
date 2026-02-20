import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function RewardsSection() {
  const { ref, isVisible } = useScrollAnimation();

  const rewards = [
    {
      title: 'Top Player Rewards',
      description: 'Compete for the top spot and earn exclusive rewards, custom items, and special perks.',
      icon: '👑',
      available: true,
    },
    {
      title: 'Seasonal Events',
      description: 'Participate in limited-time events with unique challenges and amazing prizes.',
      icon: '🎁',
      available: false,
    },
  ];

  const stats = [
    { label: 'Active Players', value: '50+', icon: '👥' },
    { label: 'Total Hearts', value: '1000+', icon: '❤️' },
    { label: 'Daily Battles', value: '200+', icon: '⚔️' },
  ];

  return (
    <section id="rewards" ref={ref} className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4">
      <div className="relative container mx-auto max-w-6xl">
        <div className={`space-y-12 sm:space-y-16 fade-in-up ${isVisible ? 'visible' : ''}`}>
          {/* Section Title */}
          <div className="text-center space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
              Rewards & <span className="text-purple drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]">Achievements</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Earn exclusive rewards and climb the ranks
            </p>
          </div>

          {/* Rewards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {rewards.map((reward, index) => (
              <div
                key={index}
                className={`group border-trace-container backdrop-blur-lg bg-gradient-to-br from-card/80 via-purple-dark/20 to-card/80 rounded-2xl border border-purple/30 p-6 sm:p-8 transition-all duration-300 hover:scale-105 hover:shadow-glow-purple fade-in-up ${
                  isVisible ? 'visible' : ''
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-4xl sm:text-5xl">{reward.icon}</div>
                    {!reward.available && (
                      <span className="px-3 py-1 bg-purple/20 border border-purple/40 rounded-full text-xs sm:text-sm text-purple font-semibold">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-foreground">
                    {reward.title}
                  </h3>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    {reward.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`border-trace-container backdrop-blur-lg bg-gradient-to-br from-purple/20 to-purple/10 rounded-2xl border border-purple/30 p-6 sm:p-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-glow-purple fade-in-up ${
                  isVisible ? 'visible' : ''
                }`}
                style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="text-3xl sm:text-4xl mb-3">{stat.icon}</div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
