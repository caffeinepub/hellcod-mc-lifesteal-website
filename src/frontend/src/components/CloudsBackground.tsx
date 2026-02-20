export default function CloudsBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Cloud Layer 1 - Fast */}
      <div className="absolute inset-0 animate-clouds-scroll">
        <img
          src="/assets/generated/minecraft-clouds-pixel.dim_1920x400.png"
          alt=""
          className="absolute top-[10%] left-0 w-[1920px] h-[400px] opacity-30"
          style={{ imageRendering: 'pixelated' }}
        />
        <img
          src="/assets/generated/minecraft-clouds-pixel.dim_1920x400.png"
          alt=""
          className="absolute top-[10%] left-[-1920px] w-[1920px] h-[400px] opacity-30"
          style={{ imageRendering: 'pixelated' }}
        />
      </div>

      {/* Cloud Layer 2 - Medium */}
      <div className="absolute inset-0 animate-clouds-scroll-delayed">
        <img
          src="/assets/generated/minecraft-clouds-pixel.dim_1920x400.png"
          alt=""
          className="absolute top-[30%] left-0 w-[1920px] h-[400px] opacity-25"
          style={{ imageRendering: 'pixelated' }}
        />
        <img
          src="/assets/generated/minecraft-clouds-pixel.dim_1920x400.png"
          alt=""
          className="absolute top-[30%] left-[-1920px] w-[1920px] h-[400px] opacity-25"
          style={{ imageRendering: 'pixelated' }}
        />
      </div>

      {/* Cloud Layer 3 - Slow */}
      <div className="absolute inset-0 animate-clouds-scroll-slow">
        <img
          src="/assets/generated/minecraft-clouds-pixel.dim_1920x400.png"
          alt=""
          className="absolute top-[50%] left-0 w-[1920px] h-[400px] opacity-20"
          style={{ imageRendering: 'pixelated' }}
        />
        <img
          src="/assets/generated/minecraft-clouds-pixel.dim_1920x400.png"
          alt=""
          className="absolute top-[50%] left-[-1920px] w-[1920px] h-[400px] opacity-20"
          style={{ imageRendering: 'pixelated' }}
        />
      </div>
    </div>
  );
}
