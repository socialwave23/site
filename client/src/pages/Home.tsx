import { Link } from 'wouter';
import { ArrowRight, BarChart3, PenTool, Share2, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Service } from '@shared/schema';

import logoAmaro from "@assets/Logo_Amaro_1765147444899.png";
import logoAureliaCar from "@assets/Logo_Aurelia_Car_1765147454196.png";
import logoBombolove from "@assets/Logo_bombolove_24_1765147466150.jpg";

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
  { id: 3, name: 'Bombolove', logo: logoBombolove },
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-blue-50 pt-20">
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
            <div className="relative w-full aspect-square max-w-lg mx-auto animate-float">
              <div className="relative w-full h-full bg-white rounded-[3rem] shadow-2xl border-8 border-gray-900 overflow-hidden transform rotate-3 transition-transform duration-500 flex flex-col hover:rotate-0">
                <div className="bg-gray-50 p-6 border-b border-gray-100 flex justify-between items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Social Trends</div>
                </div>
                
                <div className="flex-1 bg-gradient-to-br from-slate-50 to-blue-50 relative p-8 flex flex-col justify-center items-center gap-8">
                  <div className="absolute top-10 right-10 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
                  <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" style={{ animationDelay: '2s' }}></div>
                  
                  <div className="grid grid-cols-2 gap-6 w-full z-10">
                    <div className="bg-white rounded-2xl p-6 shadow-xl flex flex-col items-center gap-4 transition-transform duration-300 hover:-translate-y-2">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-gray-800">Instagram</p>
                        <p className="text-xs text-gray-500">+128% Followers</p>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-xl flex flex-col items-center gap-4 transition-transform duration-300 hover:-translate-y-2" style={{ transitionDelay: '100ms' }}>
                      <div className="w-16 h-16 rounded-xl bg-black flex items-center justify-center text-white shadow-lg relative overflow-hidden">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 relative z-10">
                          <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
                        </svg>
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#25F4EE]/20 to-[#FE2C55]/20 mix-blend-screen"></div>
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-gray-800">TikTok</p>
                        <p className="text-xs text-gray-500">Viral Strategy</p>
                      </div>
                    </div>
                  </div>

                  <div className="w-full bg-white/60 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-social-blue/10 flex items-center justify-center text-social-blue">
                      <BarChart3 size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-social-dark">Engagement Rate</p>
                      <div className="w-32 h-2 bg-gray-200 rounded-full mt-1 overflow-hidden">
                        <div className="bg-social-blue h-full w-[85%] rounded-full"></div>
                      </div>
                    </div>
                    <div className="ml-auto font-bold text-social-blue">8.5%</div>
                  </div>
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
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-scroll whitespace-nowrap flex gap-16 px-8 items-center">
            {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((logo, index) => (
              <div 
                key={`${logo.id}-${index}`} 
                className="flex-shrink-0 grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
              >
                <img 
                  src={logo.logo} 
                  alt={logo.name} 
                  className="h-16 w-auto object-contain"
                />
              </div>
            ))}
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
