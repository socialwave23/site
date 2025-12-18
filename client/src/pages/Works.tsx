import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { SiTiktok, SiInstagram } from 'react-icons/si';
import { Button } from '@/components/ui/button';

import heroPhoto from "@assets/IMG_0471_1765229138639.jpeg";
import logoPorciComodi from "@assets/Logo_I_Porci_Comodi_1765228675415.png";
import logoPanacea from "@assets/Logo_La_Panacea_1765147679036.png";
import logoEleven from "@assets/Logo_Eleven_nuovo_1765147637806.png";

interface PortfolioProject {
  id: string;
  name: string;
  category: string;
  image: string;
  logo?: string;
  size: 'small' | 'medium' | 'large';
}

const portfolioProjects: PortfolioProject[] = [
  { id: '1', name: 'I Porci Comodi', category: 'FOOD & BEVERAGE', image: heroPhoto, logo: logoPorciComodi, size: 'large' },
  { id: '2', name: 'La Panacea', category: 'BAR & COCKTAILS', image: heroPhoto, logo: logoPanacea, size: 'medium' },
  { id: '3', name: 'Eleven Cafe', category: 'RISTORAZIONE', image: heroPhoto, logo: logoEleven, size: 'medium' },
  { id: '4', name: 'Ristorante Locale', category: 'FOOD & BEVERAGE', image: heroPhoto, size: 'small' },
  { id: '5', name: 'Pub Irlandese', category: 'EVENTI', image: heroPhoto, size: 'small' },
];

const photoGallery = [
  { id: 1, image: heroPhoto, title: 'Food Photography' },
  { id: 2, image: heroPhoto, title: 'Interior Design' },
  { id: 3, image: heroPhoto, title: 'Product Shots' },
  { id: 4, image: heroPhoto, title: 'Event Coverage' },
  { id: 5, image: heroPhoto, title: 'Brand Identity' },
  { id: 6, image: heroPhoto, title: 'Lifestyle' },
];

const videoProjects = [
  { id: 1, title: 'Viral Food Content', client: 'I Porci Comodi', platform: 'TikTok', views: '150K+' },
  { id: 2, title: 'Cocktail Experience', client: 'La Panacea', platform: 'Instagram', views: '45K+' },
  { id: 3, title: 'Event Highlight', client: 'Eleven Cafe', platform: 'TikTok', views: '80K+' },
];

const managedProfiles = [
  { id: 1, name: 'I Porci Comodi', handle: '@iporcicomodipisa', logo: logoPorciComodi, followers: '12.5K', platform: 'instagram' },
  { id: 2, name: 'La Panacea', handle: '@lapanaceapisa', logo: logoPanacea, followers: '8.2K', platform: 'instagram' },
  { id: 3, name: 'Eleven Cafe', handle: '@elevencafepisa', logo: logoEleven, followers: '5.8K', platform: 'tiktok' },
];

function PhoneMockup({ project, className = '' }: { project: PortfolioProject; className?: string }) {
  const sizeClasses = {
    small: 'w-40 h-64',
    medium: 'w-48 h-80',
    large: 'w-56 h-96',
  };

  return (
    <div className={`relative ${sizeClasses[project.size]} ${className}`}>
      <div className="absolute inset-0 bg-slate-900 rounded-[2rem] shadow-2xl overflow-hidden border-4 border-slate-800">
        <img 
          src={project.image} 
          alt={project.name}
          className="w-full h-full object-cover"
        />
        {project.logo && (
          <div className="absolute top-4 left-4 right-4">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-2 flex items-center justify-center">
              <img src={project.logo} alt={project.name} className="h-8 object-contain" />
            </div>
          </div>
        )}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-[#233DFF] text-white text-xs font-bold px-3 py-2 rounded-full text-center uppercase tracking-wider">
            {project.category}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Works() {
  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col bg-gray-50">
      <section className="relative pt-32 pb-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <p className="text-[#233DFF] font-semibold text-sm uppercase tracking-wider mb-4 animate-fade-in">Progetti</p>
            
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 italic animate-slide-up"
              data-testid="works-page-title"
            >
              I nostri<br />
              <span className="text-[#233DFF]">lavori</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in">
              Foto professionali, video virali e profili social gestiti con passione per le aziende di Pisa e provincia.
            </p>
          </div>

          <div className="relative h-[500px] flex items-center justify-center mb-8">
            <div className="flex items-end justify-center gap-4">
              <PhoneMockup 
                project={portfolioProjects[3]} 
                className="transform -rotate-12 translate-y-8 opacity-80 hidden md:block animate-float-slow" 
              />
              <PhoneMockup 
                project={portfolioProjects[1]} 
                className="transform -rotate-6 translate-y-4 z-10 animate-float" 
              />
              <PhoneMockup 
                project={portfolioProjects[0]} 
                className="z-20 animate-float-slow" 
              />
              <PhoneMockup 
                project={portfolioProjects[2]} 
                className="transform rotate-6 translate-y-4 z-10 animate-float" 
              />
              <PhoneMockup 
                project={portfolioProjects[4]} 
                className="transform rotate-12 translate-y-8 opacity-80 hidden md:block animate-float-slow" 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" data-testid="photo-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-5xl mb-4 block">📸</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Foto
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Scatti professionali che catturano l'essenza del tuo brand
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {photoGallery.map((photo, idx) => (
              <div 
                key={photo.id} 
                className={`group relative overflow-hidden rounded-2xl ${idx === 0 ? 'col-span-2 row-span-2' : ''}`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <img 
                  src={photo.image} 
                  alt={photo.title}
                  className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4">
                    <span className="text-white font-bold">{photo.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50" data-testid="video-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-5xl mb-4 block">🎬</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Video
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Contenuti video che generano engagement e viralità
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {videoProjects.map((video) => (
              <div 
                key={video.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    video.platform === 'TikTok' ? 'bg-black text-white' : 'bg-gradient-to-r from-purple-600 to-pink-500 text-white'
                  }`}>
                    {video.platform === 'TikTok' ? <SiTiktok className="inline mr-1" size={14} /> : <SiInstagram className="inline mr-1" size={14} />}
                    {video.platform}
                  </span>
                  <span className="text-[#233DFF] font-bold">{video.views}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{video.title}</h3>
                <p className="text-gray-500">{video.client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" data-testid="profiles-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-5xl mb-4 block">📱</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Profili Social gestiti
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Account che gestiamo quotidianamente con strategia e creatività
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {managedProfiles.map((profile) => (
              <div 
                key={profile.id}
                className="bg-gray-50 rounded-2xl p-6 hover:bg-[#CAE8FF]/20 transition-all duration-300 border border-gray-100 hover:border-[#233DFF]/30"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white p-2 shadow-sm">
                    <img src={profile.logo} alt={profile.name} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{profile.name}</h3>
                    <p className="text-sm text-gray-500">{profile.handle}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-[#233DFF]">{profile.followers}</span>
                  <span className="text-sm text-gray-500">followers</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#233DFF] rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute left-0 bottom-0 w-96 h-96 bg-[#CAE8FF] rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Vuoi risultati <span className="text-[#CAE8FF]">così</span>?
            </h2>

            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Trasformiamo la tua presenza social in una macchina di engagement.
              Contenuti che il tuo pubblico ama condividere.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" onClick={handleScrollTop}>
                <Button
                  className="bg-[#233DFF] text-white px-8 py-6 rounded-full font-bold text-lg shadow-xl hover:bg-[#1a2fc7] flex items-center gap-2"
                  data-testid="works-cta-button"
                >
                  Parliamo del tuo progetto
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/clients" onClick={handleScrollTop}>
                <Button
                  variant="outline"
                  className="bg-transparent border-2 border-white/30 text-white px-8 py-6 rounded-full font-bold text-lg hover:bg-white/10"
                  data-testid="works-clients-button"
                >
                  Vedi i nostri clienti
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
