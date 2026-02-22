

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export function Logo({ className = "h-10", variant = 'dark' }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`} data-testid="logo">
      <img 
        src={"/images/logo-socialwave-senza-sfondo-1766091719663.png"} 
        alt="SocialWave Logo" 
        className="h-full w-auto object-contain"
      />
      <span className="font-bold text-xl tracking-tight text-[#cae8ff]">
        Social<span className="text-[#233DFF]">Wave</span>
      </span>
    </div>
  );
}
