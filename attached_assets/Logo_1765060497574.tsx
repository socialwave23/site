import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ className = "w-12 h-12", variant = 'dark' }) => {
  // Colors based on the uploaded logo
  const lightColor = variant === 'dark' ? '#bae6fd' : '#ffffff'; // Sky blue or white
  const darkColor = variant === 'dark' ? '#2563eb' : '#60a5fa'; // Royal blue or lighter blue

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto">
        {/* Top Wave - Light Blue Filled Shape */}
        {/* Matches the solid cresting wave shape from the image */}
        <path 
          d="M22 55 C 15 35, 35 15, 65 20 C 85 24, 98 40, 102 48 C 85 38, 55 35, 38 48 C 30 54, 25 58, 22 55 Z" 
          fill={lightColor}
        />
        
        {/* Middle Swoosh - Dark Blue */}
        {/* Matches the longer upper ripple */}
        <path 
          d="M32 68 C 45 56, 75 52, 95 60" 
          stroke={darkColor} 
          strokeWidth="8" 
          strokeLinecap="round"
        />

        {/* Bottom Swoosh - Dark Blue */}
        {/* Matches the shorter lower ripple */}
        <path 
          d="M50 82 C 60 76, 78 74, 88 78" 
          stroke={darkColor} 
          strokeWidth="7" 
          strokeLinecap="round"
        />
      </svg>
      <span className={`font-bold text-xl tracking-tight ${variant === 'dark' ? 'text-social-dark' : 'text-white'}`}>
        Social<span className="text-social-blue">Wave</span>
      </span>
    </div>
  );
};