import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Clienti', path: '/clients' },
  { name: 'Contatti', path: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

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

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
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
                    ? 'text-social-blue' 
                    : 'text-gray-600 hover:text-social-dark'
                }`}>
                  {link.name.toUpperCase()}
                </span>
              </Link>
            ))}
            <Link href="/contact" onClick={handleNav}>
              <Button 
                className="bg-social-blue text-white rounded-full font-semibold shadow-lg shadow-blue-500/30"
                data-testid="nav-cta-button"
              >
                Iniziamo
              </Button>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <Button 
              size="icon"
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
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
                    ? 'bg-blue-50 text-social-blue' 
                    : 'text-gray-600'
                }`}>
                  {link.name}
                </span>
              </Link>
            ))}
            <Link href="/contact" onClick={handleNav}>
              <Button 
                className="mt-4 mx-4 w-[calc(100%-2rem)] bg-social-blue text-white py-3 rounded-md font-bold shadow-md"
                data-testid="mobile-nav-cta"
              >
                Iniziamo un progetto
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
