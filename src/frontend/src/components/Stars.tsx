import { useMemo } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

export default function Stars() {
  const { theme } = useTheme();

  // Generate random star positions once on mount
  const stars = useMemo(() => {
    const starCount = 70;
    const generatedStars: Star[] = [];
    
    for (let i = 0; i < starCount; i++) {
      generatedStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 2, // 2-4px
        delay: Math.random() * 5,
        duration: Math.random() * 3 + 2, // 2-5 seconds
      });
    }
    
    return generatedStars;
  }, []);

  // Only render in dark mode
  if (theme !== 'dark') return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden transition-opacity duration-500">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-sm"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            boxShadow: '0 0 4px 1px rgba(255, 255, 255, 0.8)',
            animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
            imageRendering: 'pixelated',
          }}
        />
      ))}
      <style>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
