export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'hellcod-mc';

  return (
    <footer className="relative py-10 sm:py-12 md:py-16 border-t border-white/10 backdrop-blur-md bg-blue-900/20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-8 sm:space-y-10">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center sm:text-left">
            {/* Brand */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                HellCod MC Lifesteal
              </h3>
              <p className="text-sm sm:text-base text-icy-blue">
                Only the Strong Survive!
              </p>
            </div>

            {/* Server Info */}
            <div className="space-y-3">
              <p className="text-sm sm:text-base font-semibold text-white">Server IP</p>
              <code className="text-sm sm:text-base text-cyan font-mono break-all">
                hellcod.ddns.net:19100
              </code>
            </div>

            {/* Community */}
            <div className="space-y-3">
              <p className="text-sm sm:text-base font-semibold text-white">Community</p>
              <a
                href="https://discord.gg/PqWapJ3AqU"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm sm:text-base text-cyan hover:text-purple transition-colors py-2"
              >
                Join Discord
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10" />

          {/* Bottom Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-icy-blue">
            <p className="text-center sm:text-left">
              Powered by <span className="text-cyan font-bold">HellCod Team</span>
            </p>
            <p className="text-center">
              © {currentYear} HellCod MC. All rights reserved.
            </p>
            <p className="text-center sm:text-right">
              Built with ❤️ using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan hover:text-purple transition-colors font-semibold"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
