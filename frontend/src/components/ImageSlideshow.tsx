import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/assets/generated/gallery-1.dim_1200x675.png',
  '/assets/generated/gallery-2.dim_1200x675.png',
  '/assets/generated/gallery-3.dim_1200x675.png',
  '/assets/generated/gallery-4.dim_1200x675.png',
];

export default function ImageSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-advance slideshow every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handlePrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="relative group backdrop-blur-xl bg-gradient-to-br from-card/80 via-purple-dark/20 to-card/80 rounded-3xl border border-purple/30 shadow-glass p-4 sm:p-6 md:p-8 overflow-hidden">
        {/* Image Container */}
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-background/50">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Minecraft server build ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ imageRendering: 'auto' }}
            />
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            disabled={isTransitioning}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-xl bg-background/80 hover:bg-background/90 border border-purple/40 text-purple transition-all duration-300 hover:scale-110 hover:shadow-glow-purple opacity-0 group-hover:opacity-100 disabled:opacity-50 disabled:cursor-not-allowed min-w-[44px] min-h-[44px] z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={handleNext}
            disabled={isTransitioning}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-xl bg-background/80 hover:bg-background/90 border border-purple/40 text-purple transition-all duration-300 hover:scale-110 hover:shadow-glow-purple opacity-0 group-hover:opacity-100 disabled:opacity-50 disabled:cursor-not-allowed min-w-[44px] min-h-[44px] z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex items-center justify-center gap-2 mt-4 sm:mt-6">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 min-w-[44px] min-h-[44px] p-0 flex items-center justify-center disabled:cursor-not-allowed ${
                index === currentIndex
                  ? 'bg-purple shadow-glow-purple scale-125'
                  : 'bg-purple/30 hover:bg-purple/50 hover:scale-110'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              <span className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                index === currentIndex ? 'bg-purple' : 'bg-purple/30'
              }`} />
            </button>
          ))}
        </div>

        {/* Image Counter */}
        <div className="text-center mt-3 sm:mt-4">
          <p className="text-xs sm:text-sm text-muted-foreground font-medium">
            {currentIndex + 1} / {images.length}
          </p>
        </div>
      </div>
    </div>
  );
}
