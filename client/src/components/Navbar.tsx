import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Phone, ArrowUpRight, Folder, Video, Image, Users, FileText, HelpCircle, BookOpen } from 'lucide-react';
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
  { name: 'Video TikTok', icon: Video, path: '/works' },
  { name: 'Reel Instagram', icon: Image, path: '/works' },
  { name: 'Profili gestiti', icon: Users, path: '/clients' },
];

const risorseItems = [
  { 
    name: 'Chi siamo', 
    description: 'Scopri chi siamo e come aiutiamo le aziende locali a crescere sui social.',
    icon: Users,
    path: '/contact' 
  },
  { 
    name: 'Perché noi', 
    description: 'I motivi per cui le aziende di Pisa ci scelgono per il social media marketing.',
    icon: HelpCircle,
    path: '/' 
  },
  { 
    name: 'I nostri clienti', 
    description: 'Storie di successo dei locali che abbiamo aiutato a crescere.',
    icon: BookOpen,
    path: '/clients' 
  },
];

function LavoriDropdown({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute top-full left-0 w-screen bg-white shadow-xl border-t border-gray-100 py-8 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-3 border-r border-gray-100 pr-8">
            <div className="flex items-center gap-2 text-[#233DFF] font-bold mb-4">
              <Folder size={18} />
              Raccolte
            </div>
            <ul className="space-y-3">
              {lavoriCategories.map((cat) => (
                <li key={cat.name}>
                  <Link href={cat.path} onClick={onClose}>
                    <span className="flex items-center gap-2 text-gray-600 hover:text-[#233DFF] cursor-pointer transition-colors">
                      <cat.icon size={16} />
                      {cat.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-span-9">
            <div className="flex items-center gap-2 text-[#233DFF] font-bold mb-4">
              <FileText size={18} />
              Progetti completi
            </div>
            <div className="grid grid-cols-4 gap-6">
              {projectPreviews.map((project, idx) => (
                <Link key={idx} href={project.path} onClick={onClose}>
                  <div className="group cursor-pointer">
                    <div className="aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden mb-3 flex items-center justify-center p-4">
                      <img 
                        src={project.image} 
                        alt={project.name}
                        className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-900">{project.name}</span>
                      <ArrowUpRight size={16} className="text-gray-400 group-hover:text-[#233DFF] transition-colors" />
                    </div>
                  </div>
                </Link>
              ))}
              <Link href="/works" onClick={onClose}>
                <div className="aspect-[3/4] bg-slate-900 rounded-2xl flex items-center justify-center cursor-pointer hover:bg-[#233DFF] transition-colors">
                  <div className="text-center text-white">
                    <span className="font-semibold text-sm">Altri progetti</span>
                    <ArrowUpRight size={18} className="mx-auto mt-2" />
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
    <div className="absolute top-full left-0 w-screen bg-white shadow-xl border-t border-gray-100 py-8 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-8">
          {risorseItems.map((item, idx) => (
            <Link key={idx} href={item.path} onClick={onClose}>
              <div className="group p-6 rounded-2xl hover:bg-gray-50 cursor-pointer transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#CAE8FF] rounded-xl flex items-center justify-center text-[#233DFF] flex-shrink-0">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#233DFF] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-[#233DFF] mt-3">
                      Scopri di più
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
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

          <div className="hidden md:flex items-center gap-6 flex-wrap">
            {navLinks.map((link) => (
              <div key={link.path} className="relative">
                {link.hasDropdown ? (
                  <button
                    onClick={() => handleDropdownToggle(link.dropdownType!)}
                    className={`text-sm font-semibold transition-colors duration-200 cursor-pointer flex items-center gap-1 px-3 py-2 rounded-full ${
                      activeDropdown === link.dropdownType
                        ? 'bg-[#233DFF] text-white'
                        : `${textColor} hover:opacity-80`
                    }`}
                    data-testid={`nav-link-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                    <svg 
                      className={`w-4 h-4 transition-transform ${activeDropdown === link.dropdownType ? 'rotate-180' : ''}`} 
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
                    <span className={`text-sm font-semibold transition-colors duration-200 cursor-pointer ${
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
