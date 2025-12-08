import { Link } from 'wouter';
import { ArrowRight, BarChart3, PenTool, Share2, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Service } from '@shared/schema';

import logoAmaro from "@assets/Logo_Amaro_1765147444899.png";
import logoAureliaCar from "@assets/Logo_Aurelia_Car_1765147454196.png";
import logoChezNous from "@assets/Logo_Chez_Nous_1765147628056.png";
import logoEleven from "@assets/Logo_Eleven_nuovo_1765147637806.png";
import logoPanacea from "@assets/Logo_La_Panacea_1765147679036.png";
import logoPorciComodi from "@assets/Logo_I_Porci_Comodi_1765228675415.png";
import logoCantina from "@assets/Logo_La_Cantina_1765228681883.png";
import logoOffish from "@assets/Logo_Offish_1765228699600.png";
import logoOstellino from "@assets/Logo_Ostellino_1765228708352.png";
import logoWeLovePasta from "@assets/Logo_WeLovePasta_1765228725933.png";
import heroPhoto from "@assets/IMG_0471_1765229138639.jpeg";

const services: Service[] = [
  {
    id: '1',
    title: 'Gestione social completa',
    description: 'Instagram, Facebook, TikTok, Google: feed, storie, reel, sponsorizzate. Tutto.',
    icon: 'Share2',
  },
  {
    id: '2',
    title: 'Produzione contenuti',
    description: 'Shooting foto/video, reels verticali, montaggi, post-produzione professionale.',
    icon: 'Video',
  },
  {
    id: '3',
    title: 'Grafica digitale & Branding',
    description: 'Identità visiva, loghi, grafiche per social, materiali stampati.',
    icon: 'PenTool',
  },
  {
    id: '4',
    title: 'Strategia & Analisi',
    description: 'Piani editoriali mensili, reportistica, sponsorizzate, campagne ADV.',
    icon: 'BarChart3',
  },
];

const clientLogos = [
  { id: 1, name: 'Amaro', logo: logoAmaro },
  { id: 2, name: 'Aurelia Car', logo: logoAureliaCar },
  { id: 3, name: 'Chez Nous', logo: logoChezNous },
  { id: 4, name: 'Eleven Cafe', logo: logoEleven },
  { id: 5, name: 'La Panacea', logo: logoPanacea },
  { id: 6, name: 'I Porci Comodi', logo: logoPorciComodi },
  { id: 7, name: 'La Cantina', logo: logoCantina },
  { id: 8, name: 'Offish', logo: logoOffish },
  { id: 9, name: "L'Ostellino", logo: logoOstellino },
  { id: 10, name: 'We Love Pasta', logo: logoWeLovePasta },
];

const iconMap: Record<string, typeof Share2> = {
  Share2,
  Video,
  PenTool,
  BarChart3,
};

function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] || Share2;
  
  return (
    <div 
      className="bg-gray-50 p-8 rounded-3xl transition-colors duration-300 group cursor-default hover:bg-blue-50"
      data-testid={`service-card-${service.id}`}
    >
      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-social-blue shadow-md mb-6 transition-all group-hover:bg-social-blue group-hover:text-white">
        <Icon size={28} strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-bold text-social-dark mb-3">{service.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
    </div>
  );
}

export default function Home() {
  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-blue-50 pt-20 pb-24">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-social-blue">
            <path transform="translate(100 100)" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.6C87.4,-34.2,90.2,-19.4,89.1,-4.9C88,9.6,83.1,23.8,74.9,36.5C66.7,49.2,55.2,60.4,42.4,68.6C29.6,76.8,15.5,82.1,0.8,80.7C-13.9,79.4,-29.1,71.4,-43.3,61.9C-57.5,52.4,-70.7,41.4,-79.8,27.6C-88.9,13.8,-93.9,-2.8,-88.9,-17.1C-83.9,-31.4,-68.9,-43.4,-54.2,-50.3C-39.5,-57.2,-25.1,-59,-11.7,-57.8C1.7,-56.6,15.1,-52.4,30.5,-83.6" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-6">
            <div className="inline-block px-4 py-2 bg-blue-100 text-social-blue rounded-full text-sm font-bold uppercase tracking-wider mb-2">
              We Are SocialWave
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-social-dark leading-tight" data-testid="hero-title">
              Segui l'onda <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-social-blue to-social-sky">
                dei social.
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg leading-relaxed" data-testid="hero-description">
              Sappiamo che la comunicazione non è solo contenuti, ma strategia. 
              Non ci limitiamo a "fare post": raccontiamo storie, analizziamo dati, coltiviamo relazioni.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/contact" onClick={handleScrollTop}>
                <Button 
                  className="bg-social-blue text-white px-8 py-6 rounded-full font-bold text-lg shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1 flex items-center gap-2"
                  data-testid="hero-cta-primary"
                >
                  Parliamone <ArrowRight size={20} />
                </Button>
              </Link>
              <Link href="/portfolio" onClick={handleScrollTop}>
                <Button 
                  variant="outline"
                  className="bg-white text-social-dark border-2 border-gray-200 px-8 py-6 rounded-full font-bold text-lg transition-all hover:border-social-blue hover:text-social-blue"
                  data-testid="hero-cta-secondary"
                >
                  Vedi lavori
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="relative rounded-3xl shadow-2xl overflow-hidden transform rotate-2 transition-transform duration-500 hover:rotate-0">
                <img 
                  src={heroPhoto} 
                  alt="SocialWave team at work - food photography session" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-social-dark/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-social-blue flex items-center justify-center text-white">
                  <Video size={24} />
                </div>
                <div>
                  <p className="font-bold text-social-dark text-sm">Content Creation</p>
                  <p className="text-xs text-gray-500">Foto & Video professionali</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-social-dark py-12 overflow-hidden border-t border-gray-800" data-testid="clients-section">
        <div className="container mx-auto px-4 mb-6">
          <p className="text-center text-gray-400 text-sm uppercase tracking-widest">Hanno scelto la nostra onda</p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="relative flex overflow-x-hidden group">
            <div className="animate-scroll whitespace-nowrap flex gap-8 px-8 items-center">
              {[...clientLogos.slice(0, 5), ...clientLogos.slice(0, 5)].map((logo, index) => (
                <div 
                  key={`row1-${logo.id}-${index}`} 
                  className="flex-shrink-0 grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                >
                  <img 
                    src={logo.logo} 
                    alt={logo.name} 
                    className="h-32 w-32 object-contain rounded-xl"
                    style={{ background: 'transparent' }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex overflow-x-hidden group">
            <div className="animate-scroll-reverse whitespace-nowrap flex gap-8 px-8 items-center">
              {[...clientLogos.slice(5, 10), ...clientLogos.slice(5, 10)].map((logo, index) => (
                <div 
                  key={`row2-${logo.id}-${index}`} 
                  className="flex-shrink-0 grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                >
                  <img 
                    src={logo.logo} 
                    alt={logo.name} 
                    className="h-32 w-32 object-contain rounded-xl"
                    style={{ background: 'transparent' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative" data-testid="services-section">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-black text-social-dark mb-4">Il nostro metodo</h2>
            <div className="w-24 h-1 bg-social-blue mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600">
              Un approccio a 360 gradi per portare il tuo brand sulla cresta dell'onda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-social-blue relative overflow-hidden" data-testid="cta-section">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-indigo-900 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Pronto a cavalcare l'onda?</h2>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-10">
            Ogni grande storia inizia con una conversazione. Raccontaci i tuoi obiettivi e costruiamo insieme la tua presenza digitale.
          </p>
          <Link href="/contact" onClick={handleScrollTop}>
            <Button 
              className="bg-white text-social-blue px-10 py-6 rounded-full font-bold text-lg shadow-xl transition-all hover:shadow-2xl hover:scale-105"
              data-testid="cta-button"
            >
              Inizia il tuo progetto
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
