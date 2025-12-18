import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SiInstagram, SiTiktok } from 'react-icons/si';

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

const stats = [
  { value: '150+', label: 'Contenuti pubblicati ogni mese', emoji: '📸' },
  { value: '50%', label: 'Incremento vendite tramite social', emoji: '📈' },
  { value: '5X', label: 'Aumento engagement medio', emoji: '❤️' },
  { value: '98%', label: 'Clienti soddisfatti', emoji: '👥' },
];

const serviceCategories = [
  { id: 'social', label: 'Social Media', emoji: '📱', active: true },
  { id: 'photo', label: 'Foto e Video', emoji: '🎬', active: false },
  { id: 'design', label: 'Grafica', emoji: '✏️', active: false },
];

const features = [
  {
    emoji: '⚡',
    title: 'Contenuti che convertono',
    description: 'Ogni post è pensato per portare clienti al tuo locale.',
  },
  {
    emoji: '📊',
    title: 'Dati e analisi',
    description: 'Report mensili con metriche chiare e obiettivi raggiunti.',
  },
  {
    emoji: '🏠',
    title: 'Approccio locale',
    description: 'Conosciamo Pisa e sappiamo come parlare ai tuoi clienti.',
  },
];

export default function Home() {
  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col">
      <section className="relative min-h-screen bg-[#050A30] pt-24 pb-16 overflow-hidden" data-testid="hero-section">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#233DFF] rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute left-0 bottom-0 w-96 h-96 bg-[#CAE8FF] rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
          <div className="absolute right-1/4 bottom-1/4 w-64 h-64 bg-[#233DFF]/50 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight animate-slide-up" data-testid="hero-title">
                <span className="italic">Facciamo crescere</span><br />
                <span className="text-[#CAE8FF]">la tua attività</span><br />
                <span className="italic">sui social.</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }} data-testid="hero-description">
                Gestiamo TikTok e Instagram per ristoranti, bar e attività di Pisa. Contenuti che portano clienti veri.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/contact" onClick={handleScrollTop}>
                  <Button 
                    className="bg-[#CAE8FF] text-[#233DFF] px-8 py-6 rounded-full font-bold text-lg shadow-xl transition-all hover:bg-white flex items-center gap-2"
                    data-testid="hero-cta-primary"
                  >
                    Parliamone <ArrowRight size={20} />
                  </Button>
                </Link>
                <Link href="/works" onClick={handleScrollTop}>
                  <Button 
                    variant="outline"
                    className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-6 rounded-full font-bold text-lg transition-all hover:bg-white/20"
                    data-testid="hero-cta-secondary"
                  >
                    Vedi i nostri lavori
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative hidden lg:flex justify-center items-center">
              <div className="relative">
                <div className="absolute -left-8 top-8 w-52 h-96 bg-slate-900 rounded-3xl shadow-2xl transform -rotate-6 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-[#233DFF] to-blue-800 flex items-center justify-center">
                    <SiTiktok size={48} className="text-white" />
                  </div>
                </div>
                <div className="relative w-60 h-[420px] bg-slate-900 rounded-3xl shadow-2xl transform rotate-3 overflow-hidden z-10">
                  <img 
                    src={heroPhoto} 
                    alt="Social media content creation" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="flex items-center gap-2 text-white">
                      <SiInstagram size={20} />
                      <span className="text-sm font-medium">@iporcicomodipisa</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-6 bottom-12 w-48 h-80 bg-slate-900 rounded-3xl shadow-2xl transform rotate-12 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-[#CAE8FF] to-[#233DFF] flex items-center justify-center">
                    <SiInstagram size={48} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 overflow-hidden" data-testid="clients-section">
        <div className="container mx-auto px-4 mb-8">
          <h2 className="text-center text-2xl font-bold text-gray-800">Credono in noi</h2>
        </div>
        <div className="relative flex overflow-x-hidden">
          <div className="animate-scroll whitespace-nowrap flex gap-8 px-8 items-center">
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div 
                key={`logo-${logo.id}-${index}`} 
                className="flex-shrink-0 bg-white rounded-2xl p-4 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <img 
                  src={logo.logo} 
                  alt={logo.name} 
                  className="h-20 w-20 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" data-testid="what-we-do-section">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <p className="text-[#233DFF] font-semibold text-sm uppercase tracking-wider mb-4">Servizi</p>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 italic">
              Cosa facciamo
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Aiutiamo aziende di <strong>Pisa e provincia</strong> a ottenere risultati concreti sui <strong>Social Media</strong>. 
              Dalla gestione professionale dei contenuti alla creazione di <strong>foto e video ottimizzati</strong>, 
              studiamo strategie personalizzate per migliorare la tua visibilità e attrarre clienti.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {serviceCategories.map((service) => (
              <Link key={service.id} href="/portfolio" onClick={handleScrollTop}>
                <Button
                  variant={service.active ? 'default' : 'outline'}
                  className={`rounded-full px-6 py-3 font-semibold flex items-center gap-2 ${
                    service.active
                      ? 'bg-slate-900 text-white hover:bg-slate-800'
                      : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300'
                  }`}
                  data-testid={`service-category-${service.id}`}
                >
                  {service.label}
                  <span className="text-lg">{service.emoji}</span>
                </Button>
              </Link>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Dai una marcia in più ai tuoi<br />
                <span className="text-[#233DFF]">SOCIAL!</span>
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Ci occupiamo di tutto: dalla <strong>creazione di contenuti originali</strong> (foto, video, grafiche) alla <strong>gestione completa</strong> dei tuoi profili social. Pianifichiamo, pubblichiamo e interagiamo con la tua <strong>community</strong> per far crescere la tua <strong>presenza online</strong>. Meno stress per te, più <strong>engagement</strong> per il tuo brand!
              </p>
              <Link href="/works" onClick={handleScrollTop}>
                <span className="inline-flex items-center gap-2 text-gray-900 font-bold text-lg cursor-pointer hover:text-[#233DFF] transition-colors">
                  Scopri SOCIAL MEDIA
                  <span className="text-[#233DFF]">&#8226;</span>
                </span>
              </Link>
            </div>

            <div className="relative flex justify-center">
              <div className="relative">
                <div className="absolute -left-12 top-12 w-48 h-80 bg-slate-900 rounded-3xl shadow-2xl transform -rotate-12 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-purple-600 via-pink-500 to-rose-400 flex items-center justify-center">
                    <SiInstagram size={40} className="text-white" />
                  </div>
                </div>
                <div className="relative w-56 h-[400px] bg-slate-900 rounded-3xl shadow-2xl overflow-hidden z-10 border-4 border-slate-800">
                  <img 
                    src={heroPhoto} 
                    alt="Social media content" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 right-4">
                    <div className="bg-black/50 backdrop-blur-sm rounded-xl px-3 py-2 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-white/20"></div>
                      <span className="text-white text-xs font-medium">@iporcicomodipisa</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-8 bottom-8 w-44 h-72 bg-slate-900 rounded-3xl shadow-2xl transform rotate-12 overflow-hidden">
                  <div className="w-full h-full bg-black flex items-center justify-center">
                    <SiTiktok size={40} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50" data-testid="stats-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center"
                data-testid={`stat-${index}`}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#CAE8FF] text-2xl mb-4">
                  {stat.emoji}
                </div>
                <div className="text-4xl md:text-5xl font-black text-gray-900 mb-2">{stat.value}</div>
                <p className="text-gray-600 text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" data-testid="features-section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Perché scegliere<br />
                <span className="text-[#233DFF]">SocialWave?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-10">
                Non siamo una grande agenzia. Siamo un team locale che conosce Pisa, i suoi locali e i suoi clienti. Lavoriamo solo con chi vuole davvero crescere.
              </p>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#CAE8FF] rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                      {feature.emoji}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[#CAE8FF] to-[#233DFF]/20 rounded-3xl transform rotate-6"></div>
                <div className="absolute inset-0 bg-white rounded-3xl shadow-xl overflow-hidden">
                  <img 
                    src={heroPhoto} 
                    alt="Team at work" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#050A30] relative overflow-hidden" data-testid="cta-section">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#233DFF] rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute left-0 bottom-0 w-96 h-96 bg-[#CAE8FF] rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-[#CAE8FF] font-semibold text-sm uppercase tracking-wider mb-4">Solo per aziende locali</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              Sei un locale di<br />
              <span className="text-[#CAE8FF]">Pisa e provincia?</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl mb-10">
              Lavoriamo esclusivamente con ristoranti, bar, pub e attività della zona. 
              Perché conosciamo il territorio e sappiamo come portarti clienti veri.
            </p>
            <Link href="/contact" onClick={handleScrollTop}>
              <Button 
                className="bg-[#233DFF] text-white px-10 py-6 rounded-full font-bold text-lg shadow-xl transition-all hover:bg-[#1a2fc7] hover:shadow-2xl flex items-center gap-2 mx-auto"
                data-testid="cta-button"
              >
                Richiedi un preventivo gratuito <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
