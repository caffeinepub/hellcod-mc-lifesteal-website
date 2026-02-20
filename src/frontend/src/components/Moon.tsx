import { useTheme } from '../contexts/ThemeContext';

export default function Moon() {
  const { theme } = useTheme();

  // Only render in dark mode
  if (theme !== 'dark') return null;

  return (
    <div 
      className="fixed pointer-events-none z-0 transition-opacity duration-500"
      style={{
        top: '12%',
        right: '25%',
      }}
    >
      <div
        className="relative bg-white rounded-full"
        style={{
          width: '50px',
          height: '50px',
          boxShadow: '0 0 20px 8px rgba(255, 255, 255, 0.6), 0 0 40px 15px rgba(255, 255, 255, 0.3)',
          imageRendering: 'pixelated',
        }}
      />
    </div>
  );
}
