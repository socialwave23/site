import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Phone } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Servizi', path: '/portfolio' },
  { name: 'Lavori', path: '/works', hasDropdown: true, dropdownType: 'lavori' },
  { name: 'Risorse', path: '#', hasDropdown: true, dropdownType: 'risorse' },
  { name: 'Contatti', path: '/contact' },
];

const lavoriCategories = [
  { name: 'Foto', emoji: '📸', path: '/works' },
  { name: 'Video', emoji: '🎬', path: '/works' },
  { name: 'Profili Social gestiti', emoji: '📱', path: '/clients' },
];

const risorseItems = [
  { 
    name: 'Chi siamo', 
    description: 'Scopri chi siamo, la nostra storia e come aiutiamo le aziende a crescere online',
    linkText: 'Leggi di più',
    emoji: '👋',
    path: '/contact',
  },
  { 
    name: 'Brochure', 
    description: 'Scarica la nostra brochure con tutti i servizi, esempi di lavori e informazioni',
    linkText: 'Scarica la brochure',
    emoji: '📋',
    path: '/portfolio',
  },
  { 
    name: 'Perché noi', 
    description: 'I motivi per cui le aziende ci scelgono ogni mese per comunicazione, marketing e pubblicità',
    linkText: 'Scopri di più',
    emoji: '👁️',
    path: '/',
  },
  { 
    name: 'Blog', 
    description: 'Guide pratiche, consigli di marketing e casi studio reali delle aziende con cui lavoriamo',
    linkText: 'Guarda gli ultimi articoli',
    emoji: '📰',
    path: '/portfolio',
  },
];

function LavoriDropdown({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute top-full left-0 w-screen bg-white shadow-xl border-t border-gray-100 z-50">
      <div className="max-w-4xl mx-auto px-8 py-8">
        <div className="grid grid-cols-3 gap-6">
          {lavoriCategories.map((cat) => (
            <Link key={cat.name} href={cat.path} onClick={onClose}>
              <div className="group p-6 rounded-xl border border-gray-100 hover:border-[#233DFF] hover:bg-[#CAE8FF]/10 transition-all cursor-pointer">
                <div className="text-4xl mb-4">{cat.emoji}</div>
                <h3 className="font-bold text-xl text-gray-900 group-hover:text-[#233DFF] transition-colors mb-2">
                  {cat.name}
                </h3>
                <span className="text-sm text-gray-500 group-hover:text-[#233DFF] transition-colors">
                  Scopri di più
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function RisorseDropdown({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute top-full left-0 w-screen bg-white shadow-xl border-t border-gray-100 z-50">
      <div className="max-w-6xl mx-auto px-8 py-8">
        <div className="grid grid-cols-4 gap-0 divide-x divide-gray-200">
          {risorseItems.map((item, idx) => (
            <Link key={idx} href={item.path} onClick={onClose}>
              <div className="group px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors h-full">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-lg text-gray-900">
                    {item.name}
                  </h3>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-orange-100 text-2xl flex-shrink-0">
                    {item.emoji}
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-gray-900 group-hover:text-[#233DFF] transition-colors">
                  {item.linkText}
                  <span className="text-[#233DFF]">●</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [location] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isHeroPage = location === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNav = () => {
    setIsOpen(false);
    setActiveDropdown(null);
    window.scrollTo(0, 0);
  };

  const handleDropdownToggle = (dropdownType: string) => {
    setActiveDropdown(activeDropdown === dropdownType ? null : dropdownType);
  };

  const navBg = scrolled || !isHeroPage || activeDropdown
    ? 'bg-white shadow-sm' 
    : 'bg-transparent';
  
  const textColor = scrolled || !isHeroPage || activeDropdown
    ? 'text-gray-700' 
    : 'text-white';
  
  const activeColor = scrolled || !isHeroPage || activeDropdown
    ? 'text-[#233DFF]' 
    : 'text-white font-bold';

  return (
    <nav 
      ref={dropdownRef}
      className={`fixed w-full z-50 transition-all duration-300 py-4 ${navBg}`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-4">
          <Link href="/" onClick={handleNav}>
            <Logo className="h-10 cursor-pointer" />
          </Link>

          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {navLinks.map((link) => (
              <div key={link.path} className="relative">
                {link.hasDropdown ? (
                  <button
                    onClick={() => handleDropdownToggle(link.dropdownType!)}
                    className={`text-sm font-semibold transition-all duration-200 cursor-pointer px-4 py-2 rounded-full ${
                      activeDropdown === link.dropdownType
                        ? 'bg-[#233DFF] text-white'
                        : `${textColor} hover:opacity-80`
                    }`}
                    data-testid={`nav-link-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    href={link.path}
                    onClick={handleNav}
                    data-testid={`nav-link-${link.name.toLowerCase()}`}
                  >
                    <span className={`text-sm font-semibold transition-colors duration-200 cursor-pointer px-4 py-2 block ${
                      location === link.path 
                        ? activeColor
                        : `${textColor} hover:opacity-80`
                    }`}>
                      {link.name}
                    </span>
                  </Link>
                )}
              </div>
            ))}
            <Link href="/contact" onClick={handleNav}>
              <Button 
                className="bg-[#233DFF] text-white rounded-full font-semibold shadow-lg flex items-center gap-2 hover:bg-[#1a2fc7] ml-2"
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

      {activeDropdown === 'lavori' && <LavoriDropdown onClose={handleNav} />}
      {activeDropdown === 'risorse' && <RisorseDropdown onClose={handleNav} />}

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100">
          <div className="px-4 pt-4 pb-8 space-y-4 flex flex-col">
            {navLinks.filter(l => l.path !== '#').map((link) => (
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
            <Link href="/clients" onClick={handleNav}>
              <span className="block text-left text-lg font-medium px-4 py-2 rounded-md cursor-pointer text-gray-600">
                Clienti
              </span>
            </Link>
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
