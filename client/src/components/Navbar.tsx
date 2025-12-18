import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Phone, ArrowUpRight, Folder, Sparkles, Video, Image, Users, HelpCircle, Star } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from '@/components/ui/button';

import logoPorciComodi from "@assets/Logo_I_Porci_Comodi_1765228675415.png";
import logoPanacea from "@assets/Logo_La_Panacea_1765147679036.png";
import logoEleven from "@assets/Logo_Eleven_nuovo_1765147637806.png";

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Servizi', path: '/portfolio' },
  { name: 'Lavori', path: '/works', hasDropdown: true, dropdownType: 'lavori' },
  { name: 'Risorse', path: '#', hasDropdown: true, dropdownType: 'risorse' },
  { name: 'Contatti', path: '/contact' },
];

const projectPreviews = [
  { name: 'I Porci Comodi', image: logoPorciComodi, path: '/clients' },
  { name: 'La Panacea', image: logoPanacea, path: '/clients' },
  { name: 'Eleven Cafe', image: logoEleven, path: '/clients' },
];

const lavoriCategories = [
  { name: 'Raccolta video', path: '/works' },
  { name: 'Reel Instagram', path: '/works' },
  { name: 'Profili Social Media gestiti', path: '/clients' },
];

const risorseItems = [
  { 
    name: 'Chi siamo', 
    description: 'Scopri chi siamo, la nostra storia e come aiutiamo le aziende a crescere online',
    linkText: 'Leggi di più',
    icon: Users,
    path: '/contact',
    color: 'bg-[#CAE8FF] text-[#233DFF]'
  },
  { 
    name: 'Perché noi', 
    description: 'I motivi per cui le aziende ci scelgono ogni mese per comunicazione, marketing e pubblicità',
    linkText: 'Scopri di più',
    icon: HelpCircle,
    path: '/',
    color: 'bg-[#CAE8FF] text-[#233DFF]'
  },
  { 
    name: 'I nostri clienti', 
    description: 'Guarda i risultati ottenuti dai nostri clienti e le loro storie di successo',
    linkText: 'Guarda i clienti',
    icon: Star,
    path: '/clients',
    color: 'bg-[#CAE8FF] text-[#233DFF]'
  },
];

function LavoriDropdown({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute top-full left-0 w-screen bg-white shadow-xl border-t border-gray-100 z-50">
      <div className="max-w-6xl mx-auto px-8 py-10">
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-3">
            <div className="flex items-center gap-2 text-[#233DFF] font-bold text-lg mb-6">
              <Folder size={20} />
              Raccolte
            </div>
            <ul className="space-y-4">
              {lavoriCategories.map((cat) => (
                <li key={cat.name}>
                  <Link href={cat.path} onClick={onClose}>
                    <span className="text-gray-700 hover:text-[#233DFF] cursor-pointer transition-colors text-base">
                      {cat.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-span-9 border-l border-gray-100 pl-12">
            <div className="flex items-center gap-2 text-[#233DFF] font-bold text-lg mb-6">
              <Sparkles size={20} />
              Progetti completi
            </div>
            <div className="grid grid-cols-4 gap-6">
              {projectPreviews.map((project, idx) => (
                <Link key={idx} href={project.path} onClick={onClose}>
                  <div className="group cursor-pointer">
                    <div className="aspect-[3/4] bg-gray-50 rounded-xl overflow-hidden mb-4 flex items-center justify-center p-6 border border-gray-100 group-hover:border-[#233DFF] transition-colors">
                      <img 
                        src={project.image} 
                        alt={project.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-semibold text-gray-900 group-hover:text-[#233DFF] transition-colors">{project.name}</span>
                      <ArrowUpRight size={16} className="text-gray-400 group-hover:text-[#233DFF] transition-colors flex-shrink-0" />
                    </div>
                  </div>
                </Link>
              ))}
              <Link href="/works" onClick={onClose}>
                <div className="aspect-[3/4] bg-slate-800 rounded-xl flex items-center justify-center cursor-pointer hover:bg-[#233DFF] transition-colors group">
                  <div className="text-center text-white px-4">
                    <span className="font-semibold text-sm block mb-2">Altri progetti</span>
                    <ArrowUpRight size={20} className="mx-auto" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RisorseDropdown({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute top-full left-0 w-screen bg-white shadow-xl border-t border-gray-100 z-50">
      <div className="max-w-5xl mx-auto px-8 py-10">
        <div className="grid grid-cols-3 gap-0 divide-x divide-gray-100">
          {risorseItems.map((item, idx) => (
            <Link key={idx} href={item.path} onClick={onClose}>
              <div className="group px-8 py-4 cursor-pointer hover:bg-gray-50 transition-colors h-full">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-xl text-gray-900">
                    {item.name}
                  </h3>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color} flex-shrink-0`}>
                    <item.icon size={24} />
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-gray-900 group-hover:text-[#233DFF] transition-colors">
                  {item.linkText}
                  <span className="text-[#233DFF]">&#8226;</span>
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
                    className={`text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1 px-4 py-2 rounded-full ${
                      activeDropdown === link.dropdownType
                        ? 'bg-[#233DFF] text-white'
                        : `${textColor} hover:opacity-80`
                    }`}
                    data-testid={`nav-link-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                    <svg 
                      className={`w-3 h-3 transition-transform ${activeDropdown === link.dropdownType ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
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
