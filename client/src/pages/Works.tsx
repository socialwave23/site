import { Link } from 'wouter';
import { Play, Eye, Heart, Share2, ArrowRight } from 'lucide-react';
import { SiTiktok, SiInstagram } from 'react-icons/si';
import { Button } from '@/components/ui/button';

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
      <section className="relative pt-32 pb-16 bg-[#233DFF] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute right-0 top-0 w-1/2 h-1/2 bg-[#CAE8FF] rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
          <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-blue-800 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
              <Play className="w-4 h-4" />
              I Nostri Lavori
            </div>

            <h1
              className="text-5xl md:text-6xl font-black text-white mb-6"
              data-testid="works-page-title"
            >
              <span className="italic">Contenuti che</span><br />
              <span className="text-[#CAE8FF]">spaccano</span>
            </h1>

            <p className="text-xl text-white/90 leading-relaxed max-w-xl mx-auto">
              Video virali, reel coinvolgenti e contenuti che fanno crescere i brand.
              Guarda i nostri migliori lavori in azione.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16" data-testid="works-grid-section">
        <div className="container mx-auto px-4">
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
