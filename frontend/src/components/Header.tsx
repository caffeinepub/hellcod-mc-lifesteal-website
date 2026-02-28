import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { SiDiscord } from 'react-icons/si';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gradient-to-b from-background/80 via-background/40 to-transparent border-b border-purple/20">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-foreground">
              <span className="text-purple">HellCod</span> MC
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <button
              onClick={() => scrollToSection('hero')}
              className="px-3 lg:px-4 py-2 text-sm lg:text-base font-medium text-foreground/90 hover:text-purple transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)] rounded-lg"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('gameplay')}
              className="px-3 lg:px-4 py-2 text-sm lg:text-base font-medium text-foreground/90 hover:text-purple transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)] rounded-lg"
            >
              Gameplay
            </button>
            <button
              onClick={() => scrollToSection('rewards')}
              className="px-3 lg:px-4 py-2 text-sm lg:text-base font-medium text-foreground/90 hover:text-purple transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)] rounded-lg"
            >
              Rewards
            </button>
            <button
              onClick={() => scrollToSection('shop')}
              className="px-3 lg:px-4 py-2 text-sm lg:text-base font-medium text-foreground/90 hover:text-purple transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)] rounded-lg"
            >
              Shop
            </button>
            <ThemeToggle />
            <a
              href="https://discord.gg/PqWapJ3AqU"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 lg:ml-4 inline-flex items-center gap-2 px-4 lg:px-5 py-2 bg-purple/20 hover:bg-purple/30 text-purple border border-purple/30 rounded-lg font-medium text-sm lg:text-base transition-all duration-300 hover:shadow-glow-purple hover:scale-105"
            >
              <SiDiscord className="w-4 h-4 lg:w-5 lg:h-5" />
              <span className="hidden lg:inline">Discord</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-foreground/90 hover:text-purple transition-colors rounded-lg hover:bg-foreground/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 backdrop-blur-lg bg-card/90 rounded-lg mb-4 border border-purple/20">
            <button
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left px-4 py-3 text-base font-medium text-foreground/90 hover:text-purple hover:bg-foreground/5 transition-all duration-300 rounded-lg"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('gameplay')}
              className="block w-full text-left px-4 py-3 text-base font-medium text-foreground/90 hover:text-purple hover:bg-foreground/5 transition-all duration-300 rounded-lg"
            >
              Gameplay
            </button>
            <button
              onClick={() => scrollToSection('rewards')}
              className="block w-full text-left px-4 py-3 text-base font-medium text-foreground/90 hover:text-purple hover:bg-foreground/5 transition-all duration-300 rounded-lg"
            >
              Rewards
            </button>
            <button
              onClick={() => scrollToSection('shop')}
              className="block w-full text-left px-4 py-3 text-base font-medium text-foreground/90 hover:text-purple hover:bg-foreground/5 transition-all duration-300 rounded-lg"
            >
              Shop
            </button>
            <a
              href="https://discord.gg/PqWapJ3AqU"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mx-4 mt-2 px-4 py-3 bg-purple/20 hover:bg-purple/30 text-purple border border-purple/30 rounded-lg font-medium text-base transition-all duration-300 justify-center"
            >
              <SiDiscord className="w-5 h-5" />
              Join Discord
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
