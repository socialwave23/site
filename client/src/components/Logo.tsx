import logoImage from "@assets/Logo_SocialWave_senza_sfondo_1766091719663.png";

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export function Logo({ className = "h-10", variant = 'dark' }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`} data-testid="logo">
      <img 
        src={logoImage} 
        alt="SocialWave Logo" 
        className="h-full w-auto object-contain"
      />
      <span className={`font-bold text-xl tracking-tight ${variant === 'dark' ? 'text-[#050A30]' : 'text-white'}`}>
        Social<span className="text-[#233eff]">Wave</span>
      </span>
    </div>
  );
}
