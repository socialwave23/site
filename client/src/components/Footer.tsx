import { Link } from 'wouter';
import { Instagram, Facebook, Linkedin, Mail } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-social-dark text-white pt-16 pb-8" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1">
            <Link href="/" onClick={handleClick} className="block mb-6 cursor-pointer">
              <Logo variant="light" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Non ci limitiamo a "fare post": raccontiamo storie, analizziamo dati, coltiviamo relazioni.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-social-sky">Esplora</h3>
            <ul className="space-y-4 text-gray-300">
              <li>
                <Link href="/" onClick={handleClick} data-testid="footer-link-home">
                  <span className="cursor-pointer transition-colors hover:text-white">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/portfolio" onClick={handleClick} data-testid="footer-link-portfolio">
                  <span className="cursor-pointer transition-colors hover:text-white">Portfolio</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={handleClick} data-testid="footer-link-contact">
                  <span className="cursor-pointer transition-colors hover:text-white">Contatti</span>
                </Link>
              </li>
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
            <div className="flex gap-4 mb-6 flex-wrap">
              <a 
                href="#" 
                className="bg-white/10 p-2 rounded-full transition-colors hover:bg-social-blue"
                data-testid="social-instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="bg-white/10 p-2 rounded-full transition-colors hover:bg-social-blue"
                data-testid="social-facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="bg-white/10 p-2 rounded-full transition-colors hover:bg-social-blue"
                data-testid="social-linkedin"
              >
                <Linkedin size={20} />
              </a>
            </div>
            <a 
              href="mailto:info@socialwave.it" 
              className="flex items-center gap-2 text-gray-300 transition-colors hover:text-white"
              data-testid="footer-email"
            >
              <Mail size={16} /> info@socialwave.it
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} SocialWave Agency. Tutti i diritti riservati.</p>
          <div className="flex gap-6 flex-wrap">
            <a href="#" className="transition-colors hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-gray-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
