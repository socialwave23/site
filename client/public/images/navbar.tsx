import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Contatti', id: 'contact' },
  ];

  const handleNav = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="cursor-pointer" onClick={() => handleNav('home')}>
            <Logo className="h-10" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`text-sm font-semibold transition-colors duration-200 ${
                  activePage === link.id 
                    ? 'text-social-blue' 
                    : 'text-gray-600 hover:text-social-dark'
                }`}
              >
                {link.name.toUpperCase()}
              </button>
            ))}
            <button 
              onClick={() => handleNav('contact')}
              className="bg-social-blue text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30"
            >
              Iniziamo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-social-blue focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100">
          <div className="px-4 pt-4 pb-8 space-y-4 flex flex-col">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`text-left text-lg font-medium px-4 py-2 rounded-lg ${
                  activePage === link.id 
                    ? 'bg-blue-50 text-social-blue' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => handleNav('contact')}
              className="mt-4 mx-4 bg-social-blue text-white py-3 rounded-lg font-bold shadow-md"
            >
              Iniziamo un progetto
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};