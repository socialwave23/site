import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Phone } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Servizi', path: '/portfolio' },
  { name: 'Lavori', path: '/works' },
  { name: 'Clienti', path: '/clients' },
  { name: 'Contatti', path: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  const isHeroPage = location === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = () => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  const navBg = scrolled || !isHeroPage 
    ? 'bg-white shadow-sm' 
    : 'bg-transparent';
  
  const textColor = scrolled || !isHeroPage 
    ? 'text-gray-700' 
    : 'text-white';
  
  const activeColor = scrolled || !isHeroPage 
    ? 'text-[#233DFF]' 
    : 'text-white font-bold';

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 py-4 ${navBg}`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-4">
          <Link href="/" onClick={handleNav}>
            <Logo className="h-10 cursor-pointer" />
          </Link>

          <div className="hidden md:flex items-center gap-8 flex-wrap">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={handleNav}
                data-testid={`nav-link-${link.name.toLowerCase()}`}
              >
                <span className={`text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                  location === link.path 
                    ? activeColor
                    : `${textColor} hover:opacity-80`
                }`}>
                  {link.name}
                </span>
              </Link>
            ))}
            <Link href="/contact" onClick={handleNav}>
              <Button 
                className="bg-[#233DFF] text-white rounded-full font-semibold shadow-lg flex items-center gap-2 hover:bg-[#1a2fc7]"
                data-testid="nav-cta-button"
              >
                <Phone size={16} />
                Contattaci
              </Button>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <Button 
              size="icon"
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className={textColor}
              data-testid="mobile-menu-toggle"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100">
          <div className="px-4 pt-4 pb-8 space-y-4 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={handleNav}
                data-testid={`mobile-nav-link-${link.name.toLowerCase()}`}
              >
                <span className={`block text-left text-lg font-medium px-4 py-2 rounded-md cursor-pointer ${
                  location === link.path 
                    ? 'bg-[#CAE8FF] text-[#233DFF]' 
                    : 'text-gray-600'
                }`}>
                  {link.name}
                </span>
              </Link>
            ))}
            <Link href="/contact" onClick={handleNav}>
              <Button 
                className="mt-4 mx-4 w-[calc(100%-2rem)] bg-[#233DFF] text-white py-3 rounded-full font-bold shadow-md flex items-center justify-center gap-2"
                data-testid="mobile-nav-cta"
              >
                <Phone size={16} />
                Contattaci
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
