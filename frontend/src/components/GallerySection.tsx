import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ImageSlideshow from './ImageSlideshow';

export default function GallerySection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="gallery" ref={ref} className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 z-10">
      <div className="relative container mx-auto max-w-6xl">
        <div className={`space-y-12 sm:space-y-16 fade-in-up ${isVisible ? 'visible' : ''}`}>
          {/* Section Title */}
          <div className="text-center space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-primary">
              Server <span className="drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]">Gallery</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our amazing builds and creations
            </p>
          </div>

          {/* Image Slideshow */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <ImageSlideshow />
          </div>
        </div>
      </div>
    </section>
  );
}
