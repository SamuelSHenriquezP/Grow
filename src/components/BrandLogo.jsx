import React from 'react';

export const BrandLogo = ({ variant = 'dark', size = 'medium', className = '' }) => {
  const isLight = variant === 'light';
  const textColor = isLight ? '#F9F7F2' : '#5D3A24';
  const sparkleColor = isLight ? '#D9AE94' : '#5D3A24';

  const titleSize = size === 'large' 
    ? 'text-4xl md:text-5xl' 
    : size === 'small' 
    ? 'text-xl md:text-2xl' 
    : 'text-2xl md:text-3xl';

  const subtitleSize = size === 'large' 
    ? 'text-[11px] md:text-[13px] tracking-[0.55em]' 
    : size === 'small' 
    ? 'text-[8px] tracking-[0.35em]' 
    : 'text-[9px] md:text-[11px] tracking-[0.45em]';

  return (
    <div className={`inline-flex flex-col items-center justify-center text-center select-none ${className}`}>
      {/* Main GROW Typography with Sparkle in 'O' */}
      <div className={`flex items-center text-center justify-center tracking-[0.25em] ${titleSize}`} style={{ color: textColor }}>
        <span className="font-serif font-light">G</span>
        <span className="font-serif font-light">R</span>
        
        {/* Letter 'O' with central 4-point sparkle star */}
        <div className="relative inline-flex items-center justify-center mx-1">
          <span className="font-serif font-light">O</span>
          <svg 
            className="absolute w-3 h-3 md:w-3.5 md:h-3.5 animate-pulse"
            viewBox="0 0 24 24" 
            fill={sparkleColor} 
            xmlns="http://www.w3.org/2000/svg"
            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          >
            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
          </svg>
        </div>
        
        <span className="font-serif font-light">W</span>
      </div>

      {/* Subtitle BY JOHANÍA BALLESTAS */}
      <span 
        className={`font-sans uppercase mt-1 font-light text-center whitespace-nowrap ${subtitleSize}`}
        style={{ color: isLight ? 'rgba(249, 247, 242, 0.85)' : '#5D3A24' }}
      >
        BY JOHANÍA BALLESTAS
      </span>
    </div>
  );
};

