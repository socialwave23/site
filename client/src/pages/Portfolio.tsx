import { useState, useRef } from 'react';
import { Share2, Camera, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SiInstagram, SiTiktok } from 'react-icons/si';
import { Link } from 'wouter';

import heroPhoto from "@assets/IMG_0471_1765229138639.jpeg";

const serviceCategories = [
  { id: 'social', label: 'Social Media', icon: Share2 },
  { id: 'photo', label: 'Foto e Video', icon: Camera },
  { id: 'design', label: 'Grafica e Stampa', icon: Palette },
];

const services = {
  social: {
    title: 'Dai una marcia in più ai tuoi',
    highlight: 'SOCIAL!',
    highlightFirst: false,
    description: `Ci occupiamo di tutto: dalla <strong>creazione di contenuti originali</strong> (foto, video, grafiche) alla <strong>gestione completa</strong> dei tuoi profili social. Pianifichiamo, pubblichiamo e interagiamo con la tua <strong>community</strong> per far crescere la tua <strong>presenza online</strong>. Meno stress per te, più <strong>engagement</strong> per il tuo brand!`,
    linkText: 'Scopri SOCIAL MEDIA',
    linkPath: '/works',
  },
  photo: {
    title: 'che conquistano!',
    highlight: 'FOTO e VIDEO',
    highlightFirst: true,
    description: `Produciamo <strong>foto professionali</strong> e <strong>video creativi</strong> che catturano l'attenzione e raccontano la tua storia. <strong>Shooting in studio</strong> o all'aperto, riprese di eventi, <strong>video promozionali</strong> e contenuti virali: ci occupiamo di tutto, dalla produzione al montaggio, per far emergere la tua <strong>identità visiva</strong>!`,
    linkText: 'Scopri FOTO e VIDEO',
    linkPath: '/works',
  },
  design: {
    title: 'che lasciano il segno, anche su carta!',
    highlight: 'GRAFICHE',
    highlightFirst: true,
    description: `Dai <strong>loghi</strong> ai volantini, dalle <strong>brochure</strong> ai banner pubblicitari, creiamo design che catturano l'occhio e comunicano il tuo messaggio in modo chiaro e accattivante. E se hai bisogno di <strong>stamparli</strong>, ci occupiamo anche di quello, garantendoti risultati di <strong>alta qualità</strong> su ogni supporto!`,
    linkText: 'Scopri GRAFICA e STAMPA',
    linkPath: '/contact',
  },
};

function PhoneMockups() {
  return (
    <div className="relative flex justify-center items-center h-[450px]">
      <div className="absolute -left-4 top-8 w-44 h-72 bg-slate-900 rounded-3xl shadow-2xl transform -rotate-12 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-purple-600 via-pink-500 to-rose-400 flex items-center justify-center">
          <SiInstagram size={36} className="text-white" />
        </div>
      </div>
      <div className="relative w-52 h-[380px] bg-slate-900 rounded-3xl shadow-2xl overflow-hidden z-10 border-4 border-slate-800">
        <img 
          src={heroPhoto} 
          alt="Social media content" 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 right-4">
          <div className="bg-black/50 backdrop-blur-sm rounded-xl px-3 py-2 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <SiInstagram size={14} className="text-white" />
            </div>
            <span className="text-white text-xs font-medium">@iporcicomodipisa</span>
          </div>
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-white text-xs">
          <div className="flex -space-x-1">
            <div className="w-5 h-5 rounded-full bg-red-500"></div>
            <div className="w-5 h-5 rounded-full bg-blue-500"></div>
            <div className="w-5 h-5 rounded-full bg-green-500"></div>
          </div>
          <span>2,847 likes</span>
        </div>
      </div>
      <div className="absolute -right-4 bottom-8 w-40 h-64 bg-slate-900 rounded-3xl shadow-2xl transform rotate-12 overflow-hidden">
        <div className="w-full h-full bg-black flex items-center justify-center">
          <SiTiktok size={36} className="text-white" />
        </div>
      </div>
    </div>
  );
}

function PhotoVideoMockup() {
  return (
    <div className="relative flex justify-center items-center h-[400px]">
      <div className="absolute left-0 top-0 w-64 h-48 bg-white rounded-2xl shadow-xl overflow-hidden transform -rotate-6">
        <img 
          src={heroPhoto} 
          alt="Food photography" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute right-0 bottom-0 w-72 h-52 bg-white rounded-2xl shadow-xl overflow-hidden transform rotate-6">
        <img 
          src={heroPhoto} 
          alt="Video production" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute right-12 top-8 w-56 h-40 bg-white rounded-2xl shadow-xl overflow-hidden transform rotate-3 z-10">
        <img 
          src={heroPhoto} 
          alt="Event coverage" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

function GraphicsMockup() {
  return (
    <div className="relative flex justify-center items-center h-[400px]">
      <div className="absolute left-0 top-4 w-32 h-44 bg-white rounded-lg shadow-xl overflow-hidden transform -rotate-12 border border-gray-200">
        <div className="w-full h-full bg-gradient-to-br from-[#233DFF] to-[#CAE8FF] flex items-center justify-center p-4">
          <div className="text-center text-white">
            <div className="text-2xl font-black">MENU</div>
            <div className="text-xs mt-2">Ristorante</div>
          </div>
        </div>
      </div>
      <div className="relative w-48 h-64 bg-white rounded-lg shadow-xl overflow-hidden z-10 border border-gray-200">
        <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center p-4">
          <div className="text-center text-white">
            <div className="text-3xl font-black">BRAND</div>
            <div className="text-sm mt-2">Identity</div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 bottom-4 w-40 h-56 bg-white rounded-lg shadow-xl overflow-hidden transform rotate-12 border border-gray-200">
        <div className="w-full h-full bg-gradient-to-br from-[#CAE8FF] to-white flex items-center justify-center p-4">
          <div className="text-center text-[#233DFF]">
            <div className="text-xl font-black">FLYER</div>
            <div className="text-xs mt-2">Evento</div>
          </div>
        </div>
      </div>
      <div className="absolute right-8 top-0 w-24 h-32 bg-white rounded-lg shadow-xl overflow-hidden transform rotate-6 border border-gray-200">
        <div className="w-full h-full bg-gradient-to-br from-rose-500 to-orange-400 flex items-center justify-center p-2">
          <div className="text-center text-white">
            <div className="text-lg font-black">50%</div>
            <div className="text-[8px]">SCONTO</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [activeService, setActiveService] = useState<'social' | 'photo' | 'design'>('social');
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleServiceChange = (serviceId: 'social' | 'photo' | 'design') => {
    setActiveService(serviceId);
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const currentService = services[activeService];

  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col bg-white" data-testid="portfolio-page">
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <p className="text-[#233DFF] font-semibold text-sm uppercase tracking-wider mb-4">Servizi</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 italic" data-testid="portfolio-title">
              Cosa facciamo
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Aiutiamo aziende di <strong>Pisa e provincia</strong> a ottenere risultati concreti sui <strong>Social Media</strong>. 
              Dalla gestione professionale dei contenuti, alla creazione di <strong>foto e video ottimizzati</strong>, 
              studiamo strategie personalizzate per migliorare la tua visibilità e attrarre clienti.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {serviceCategories.map((service) => (
              <Button
                key={service.id}
                onClick={() => handleServiceChange(service.id as 'social' | 'photo' | 'design')}
                variant={activeService === service.id ? 'default' : 'outline'}
                className={`rounded-full px-6 py-3 font-semibold flex items-center gap-2 transition-all ${
                  activeService === service.id
                    ? 'bg-slate-900 text-white hover:bg-slate-800'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300'
                }`}
                data-testid={`service-tab-${service.id}`}
              >
                {service.label}
                <service.icon size={18} />
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section ref={sectionRef} className="py-16 bg-white" data-testid="service-detail-section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                {currentService.highlightFirst ? (
                  <>
                    <span className="text-[#233DFF]">{currentService.highlight}</span> {currentService.title}
                  </>
                ) : (
                  <>
                    {currentService.title}<br />
                    <span className="text-[#233DFF]">{currentService.highlight}</span>
                  </>
                )}
              </h2>
              <p 
                className="text-lg text-gray-600 leading-relaxed mb-8"
                dangerouslySetInnerHTML={{ __html: currentService.description }}
              />
              <Link href={currentService.linkPath} onClick={handleScrollTop}>
                <span className="inline-flex items-center gap-2 text-gray-900 font-bold text-lg cursor-pointer hover:text-[#233DFF] transition-colors">
                  {currentService.linkText}
                  <span className="text-[#233DFF]">&#8226;</span>
                </span>
              </Link>
            </div>

            <div className="order-1 lg:order-2">
              {activeService === 'social' && <PhoneMockups />}
              {activeService === 'photo' && <PhotoVideoMockup />}
              {activeService === 'design' && <GraphicsMockup />}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Pronto a <span className="text-[#CAE8FF]">iniziare</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-10">
              Contattaci per una consulenza gratuita e scopri come possiamo aiutarti a crescere.
            </p>
            <Link href="/contact" onClick={handleScrollTop}>
              <Button
                className="bg-[#233DFF] text-white px-10 py-6 rounded-full font-bold text-lg shadow-xl hover:bg-[#1a2fc7]"
                data-testid="services-cta-button"
              >
                Richiedi un preventivo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
