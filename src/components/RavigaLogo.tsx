import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'auto';
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
  pill?: boolean;
}

export const RavigaLogo: React.FC<LogoProps> = ({
  className = '',
  variant = 'auto',
  showTagline = false,
  size = 'md',
  pill = true
}) => {
  const isDark = variant === 'dark';

  // Responsive height classes: compact on mobile, scaled on larger screens
  const heightClass = size === 'sm' 
    ? 'h-5 sm:h-6 md:h-7' 
    : size === 'lg' 
      ? 'h-7 sm:h-8.5 md:h-10' 
      : 'h-5.5 sm:h-7 md:h-8';

  // Determine stroke and text fill color
  // When inside the official white pill container, the logo elements are always crisp solid black
  const strokeColor = pill ? '#0a0f1d' : isDark ? '#ffffff' : '#0a0f1d';

  return (
    <div 
      className={`inline-flex items-center gap-2 sm:gap-3 select-none group max-w-full ${className}`} 
      id="raviga-brand-logo"
    >
      {/* Official Raviga Engineering Brand Mark Container without borders */}
      <div 
        className={`relative flex items-center justify-center transition-all duration-200 group-hover:scale-[1.02] border-0 outline-none ring-0 ${
          pill
            ? isDark
              ? 'bg-white px-2.5 sm:px-3.5 py-0.5 sm:py-1 rounded-full border-0 ring-0 shadow-none'
              : 'bg-transparent px-0.5 sm:px-1 py-0.5 sm:py-1 border-0 ring-0 shadow-none'
            : 'bg-transparent py-0.5 border-0 ring-0 shadow-none'
        }`}
      >
        <svg 
          viewBox="0 0 440 54" 
          className={`${heightClass} w-auto max-w-[200px] xs:max-w-[240px] sm:max-w-none object-contain`}
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Raviga Engineering Official Brand Logo"
        >
          {/* Authentic Single Continuous Stroke: ECG Pulse Waveform into Underline */}
          <path 
            d="M 6 36 L 24 36 C 28 36 29 31 32 31 C 35 31 36 36 40 36 L 46 36 L 50 40 L 58 8 L 66 46 L 71 36 C 75 36 77 29 81 29 C 85 29 87 36 91 36 L 416 36" 
            stroke={strokeColor} 
            strokeWidth="3.2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          
          {/* Terminal Solid Circle / Dot terminating the underline */}
          <circle 
            cx="423" 
            cy="36" 
            r="4.8" 
            fill={strokeColor} 
          />
          
          {/* Official Typography: Heavy Bold Uppercase RAVIGA + Medium Bold Tracked ENGINEERING */}
          <text 
            x="102" 
            y="31" 
            fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          >
            <tspan 
              fontWeight="900" 
              fontSize="21" 
              letterSpacing="0.05em" 
              fill={strokeColor}
            >
              RAVIGA
            </tspan>
            <tspan 
              dx="11" 
              fontWeight="700" 
              fontSize="15.5" 
              letterSpacing="0.16em" 
              fill={strokeColor}
            >
              ENGINEERING
            </tspan>
          </text>
        </svg>
      </div>

      {showTagline && (
        <div className={`hidden sm:flex flex-col justify-center border-l pl-3 py-0.5 ${
          isDark ? 'border-slate-800' : 'border-slate-200'
        }`}>
          <span className={`text-[10px] font-bold tracking-wider uppercase leading-tight ${
            isDark ? 'text-blue-400' : 'text-blue-700'
          }`}>
            Engineering & Technology
          </span>
          <span className={`text-[9px] font-medium leading-tight ${
            isDark ? 'text-slate-400' : 'text-slate-500'
          }`}>
            Official Enterprise Portal
          </span>
        </div>
      )}
    </div>
  );
};
