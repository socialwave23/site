import { Link } from 'wouter';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { SiTiktok, SiWhatsapp } from 'react-icons/si';
import { Logo } from './Logo';

export function Footer() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-[#050A30] text-white pt-16 pb-8" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" onClick={handleClick} className="block mb-6 cursor-pointer">
              <Logo variant="light" />
            </Link>
            <p className="text-gray-400 text-base leading-relaxed mb-6 max-w-md">
              Agenzia di social media marketing specializzata in TikTok e Instagram per ristoranti, bar e attività di Pisa e provincia.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a 
                href="https://www.instagram.com/socialwave_agency?igsh=MTFpNmVraDV0aTl2Yw==" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full transition-colors hover:bg-[#233DFF]"
                data-testid="social-instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://wa.me/message/KMMS36SNMMFXK1" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full transition-colors hover:bg-green-600"
                data-testid="social-whatsapp"
              >
                <SiWhatsapp size={20} />
              </a>
              <a 
                href="https://www.tiktok.com/@socialwave.pisa" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full transition-colors hover:bg-[#233DFF]"
                data-testid="social-tiktok"
              >
                <SiTiktok size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-[#CAE8FF]">Esplora</h3>
            <ul className="space-y-4 text-gray-300">
              <li>
                <Link href="/" onClick={handleClick} data-testid="footer-link-home">
                  <span className="cursor-pointer transition-colors hover:text-white">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/works" onClick={handleClick} data-testid="footer-link-works">
                  <span className="cursor-pointer transition-colors hover:text-white">Lavori</span>
                </Link>
              </li>
              <li>
                <Link href="/clients" onClick={handleClick} data-testid="footer-link-clients">
                  <span className="cursor-pointer transition-colors hover:text-white">Clienti</span>
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
            <h3 className="text-lg font-bold mb-6 text-[#CAE8FF]">Contatti</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-[#CAE8FF]" />
                <span>Pisa e provincia</span>
              </li>
              <li>
                <a 
                  href="mailto:social.wave23@gmail.com" 
                  className="flex items-center gap-3 transition-colors hover:text-white"
                  data-testid="footer-email"
                >
                  <Mail size={18} className="text-[#CAE8FF]" />
                  social.wave23@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+393497868504" 
                  className="flex items-center gap-3 transition-colors hover:text-white"
                  data-testid="footer-phone"
                >
                  <Phone size={18} className="text-[#CAE8FF]" />
                  349 786 8504
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
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
