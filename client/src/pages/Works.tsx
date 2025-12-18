import { Link } from 'wouter';
import { Play, Eye, Heart, Share2, ArrowRight, ArrowUpRight } from 'lucide-react';
import { SiTiktok, SiInstagram } from 'react-icons/si';
import { Button } from '@/components/ui/button';

import heroPhoto from "@assets/IMG_0471_1765229138639.jpeg";
import logoPorciComodi from "@assets/Logo_I_Porci_Comodi_1765228675415.png";
import logoPanacea from "@assets/Logo_La_Panacea_1765147679036.png";
import logoEleven from "@assets/Logo_Eleven_nuovo_1765147637806.png";

interface VideoWork {
  id: string;
  title: string;
  client: string;
  platform: 'tiktok' | 'instagram';
  videoId: string;
  originalUrl: string;
  stats: {
    views: string;
    likes: string;
    shares: string;
  };
  description: string;
}

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

const works: VideoWork[] = [
  {
    id: '1',
    title: 'Viral Food Content',
    client: 'I Porci Comodi',
    platform: 'tiktok',
    videoId: '7510405219461879073',
    originalUrl: 'https://vm.tiktok.com/ZNRLf142W/',
    stats: {
      views: '150K+',
      likes: '12K',
      shares: '890',
    },
    description: 'Contenuto virale che ha portato migliaia di nuovi follower al ristorante.',
  },
  {
    id: '2',
    title: 'Reel Coinvolgente',
    client: 'La Panacea',
    platform: 'instagram',
    videoId: 'DE4zY-Ei2MW',
    originalUrl: 'https://www.instagram.com/reel/DE4zY-Ei2MW/',
    stats: {
      views: '45K+',
      likes: '3.2K',
      shares: '420',
    },
    description: 'Storytelling visivo che cattura l\'essenza del brand.',
  },
  {
    id: '3',
    title: 'Cocktail Experience',
    client: 'La Panacea',
    platform: 'instagram',
    videoId: 'DN7cquDDKm_',
    originalUrl: 'https://www.instagram.com/reel/DN7cquDDKm_/',
    stats: {
      views: '28K+',
      likes: '2.1K',
      shares: '315',
    },
    description: 'Un viaggio sensoriale nel mondo dei cocktail artigianali.',
  },
];

function TikTokEmbed({ videoId, testId }: { videoId: string; testId: string }) {
  return (
    <div className="w-full h-full flex justify-center items-center" data-testid={testId}>
      <iframe
        src={`https://www.tiktok.com/embed/v2/${videoId}`}
        style={{ 
          width: '100%',
          height: '100%',
          minHeight: '500px',
          border: 'none',
        }}
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}

function InstagramEmbed({ videoId, testId }: { videoId: string; testId: string }) {
  return (
    <div className="w-full h-full flex justify-center items-center" data-testid={testId}>
      <iframe
        src={`https://www.instagram.com/reel/${videoId}/embed/`}
        style={{ 
          width: '100%',
          height: '100%',
          minHeight: '500px',
          border: 'none',
        }}
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}

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

function VideoCard({ work }: { work: VideoWork }) {
  const platformConfig = {
    tiktok: {
      icon: SiTiktok,
      bgColor: 'bg-black',
      label: 'TikTok',
    },
    instagram: {
      icon: SiInstagram,
      bgColor: 'bg-gradient-to-r from-purple-600 via-pink-500 to-rose-400',
      label: 'Instagram',
    },
  };

  const config = platformConfig[work.platform];
  const PlatformIcon = config.icon;

  return (
    <div
      className="group bg-white rounded-3xl shadow-lg overflow-hidden"
      data-testid={`video-card-${work.id}`}
    >
      <div className="p-4 pt-6">
        <div className="flex items-center justify-between mb-4">
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${config.bgColor} text-white text-sm font-semibold`}>
            <PlatformIcon className="w-4 h-4" />
            {config.label}
          </div>
          <a
            href={work.originalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#233DFF] text-white shadow-lg transition-transform hover:scale-110"
            data-testid={`video-link-${work.id}`}
          >
            <Play className="w-4 h-4 ml-0.5" />
          </a>
        </div>

        <div className="relative min-h-[500px] flex items-center justify-center bg-gray-50 rounded-2xl overflow-hidden">
          {work.platform === 'tiktok' ? (
            <TikTokEmbed videoId={work.videoId} testId={`video-embed-${work.id}`} />
          ) : (
            <InstagramEmbed videoId={work.videoId} testId={`video-embed-${work.id}`} />
          )}
        </div>
      </div>

      <div className="p-6 pt-4">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            {work.title}
          </h3>
          <p className="text-sm text-gray-500">
            {work.client}
          </p>
        </div>

        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
          {work.description}
        </p>

        <div className="grid grid-cols-3 gap-3">
          <div className="flex flex-col items-center p-3 rounded-xl bg-gray-50">
            <Eye className="w-4 h-4 mb-1 text-[#233DFF]" />
            <span className="text-lg font-bold text-gray-900">{work.stats.views}</span>
            <span className="text-xs text-gray-500">Views</span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-xl bg-gray-50">
            <Heart className="w-4 h-4 mb-1 text-red-500" />
            <span className="text-lg font-bold text-gray-900">{work.stats.likes}</span>
            <span className="text-xs text-gray-500">Likes</span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-xl bg-gray-50">
            <Share2 className="w-4 h-4 mb-1 text-green-500" />
            <span className="text-lg font-bold text-gray-900">{work.stats.shares}</span>
            <span className="text-xs text-gray-500">Shares</span>
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
            <p className="text-[#233DFF] font-semibold text-sm uppercase tracking-wider mb-4">Progetti</p>
            
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 italic"
              data-testid="works-page-title"
            >
              PORTFOLIO:<br />
              <span className="not-italic">Social Media per</span><br />
              <span className="not-italic">aziende locali</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ecco alcuni dei progetti che abbiamo seguito: dalla gestione Social Network passando per la 
              realizzazione di contenuti virali che generano engagement e conversioni.
            </p>
          </div>

          <div className="relative h-[500px] flex items-center justify-center mb-8">
            <div className="flex items-end justify-center gap-4">
              <PhoneMockup 
                project={portfolioProjects[3]} 
                className="transform -rotate-12 translate-y-8 opacity-80 hidden md:block" 
              />
              <PhoneMockup 
                project={portfolioProjects[1]} 
                className="transform -rotate-6 translate-y-4 z-10" 
              />
              <PhoneMockup 
                project={portfolioProjects[0]} 
                className="z-20" 
              />
              <PhoneMockup 
                project={portfolioProjects[2]} 
                className="transform rotate-6 translate-y-4 z-10" 
              />
              <PhoneMockup 
                project={portfolioProjects[4]} 
                className="transform rotate-12 translate-y-8 opacity-80 hidden md:block" 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50" data-testid="works-grid-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Contenuti <span className="text-[#233DFF]">in azione</span>
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Guarda i nostri video più performanti su TikTok e Instagram
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {works.map((work) => (
              <VideoCard key={work.id} work={work} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
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
