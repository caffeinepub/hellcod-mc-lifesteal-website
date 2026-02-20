import { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function MouseLightEffect() {
  const { theme } = useTheme();
  const lightRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | undefined>(undefined);
  const posRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(updatePosition);
      }
    };

    const updatePosition = () => {
      if (lightRef.current) {
        lightRef.current.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0)`;
      }
      rafRef.current = undefined;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  // Disable effect in light mode
  if (theme === 'light') {
    return null;
  }

  return (
    <div
      ref={lightRef}
      className="fixed top-0 left-0 pointer-events-none z-0"
      style={{
        width: '600px',
        height: '600px',
        marginLeft: '-300px',
        marginTop: '-300px',
        background: 'radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, transparent 70%)',
        willChange: 'transform',
      }}
    />
  );
}
