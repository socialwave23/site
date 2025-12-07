import logoImage from "@assets/Logo_SocialWave_(sfondo_bianco)_1765061020809.png";

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export function Logo({ className = "h-14", variant = 'dark' }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`} data-testid="logo">
      <img 
        src={logoImage} 
        alt="SocialWave Logo" 
        className="h-full w-auto object-contain"
      />
      <span className={`font-bold text-xl tracking-tight ${variant === 'dark' ? 'text-social-dark' : 'text-white'}`}>
        Social<span className="text-social-blue">Wave</span>
      </span>
    </div>
  );
}
