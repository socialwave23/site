import React from 'react';
import { Logo } from './Logo';
import { Instagram, Facebook, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-social-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6 cursor-pointer" onClick={() => onNavigate('home')}>
              <Logo variant="light" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Non ci limitiamo a "fare post": raccontiamo storie, analizziamo dati, coltiviamo relazioni.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-social-sky">Esplora</h3>
            <ul className="space-y-4 text-gray-300">
              <li><button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate('portfolio')} className="hover:text-white transition-colors">Portfolio</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">Contatti</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-social-sky">Servizi</h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li>Gestione Social Media</li>
              <li>Content Creation</li>
              <li>Branding & Grafica</li>
              <li>Advertising Strategy</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-social-sky">Segui l'onda</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-social-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-social-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-social-blue transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
            <a href="mailto:info@socialwave.it" className="flex items-center gap-2 text-gray-300 hover:text-white">
              <Mail size={16} /> info@socialwave.it
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} SocialWave Agency. Tutti i diritti riservati.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};