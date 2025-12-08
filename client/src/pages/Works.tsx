import { Link } from 'wouter';
import { Play, TrendingUp, Eye, Heart, Share2, ArrowRight, Sparkles } from 'lucide-react';
import { SiTiktok, SiInstagram } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface VideoWork {
  id: string;
  title: string;
  client: string;
  platform: 'tiktok' | 'instagram';
  embedUrl: string;
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
    embedUrl: 'https://www.tiktok.com/embed/v2/7510405219461879073',
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
    embedUrl: 'https://www.instagram.com/reel/DE4zY-Ei2MW/embed',
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
    embedUrl: 'https://www.instagram.com/reel/DN7cquDDKm_/embed',
    originalUrl: 'https://www.instagram.com/reel/DN7cquDDKm_/',
    stats: {
      views: '28K+',
      likes: '2.1K',
      shares: '315',
    },
    description: 'Un viaggio sensoriale nel mondo dei cocktail artigianali.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function VideoCard({ work }: { work: VideoWork }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  const platformConfig = {
    tiktok: {
      icon: SiTiktok,
      gradient: 'from-black via-gray-900 to-black',
      accentGradient: 'from-cyan-400 via-pink-500 to-red-500',
      label: 'TikTok',
    },
    instagram: {
      icon: SiInstagram,
      gradient: 'from-purple-600 via-pink-500 to-orange-400',
      accentGradient: 'from-purple-500 via-pink-500 to-orange-500',
      label: 'Instagram',
    },
  };
  
  const config = platformConfig[work.platform];
  const PlatformIcon = config.icon;

  useEffect(() => {
    if (work.platform === 'instagram') {
      const script = document.createElement('script');
      script.src = '//www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
      
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [work.platform]);

  return (
    <motion.div
      variants={itemVariants}
      className="group"
      data-testid={`video-card-${work.id}`}
    >
      <div className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${config.accentGradient} p-[2px]`}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent pointer-events-none" />
        
        <div className="relative bg-white dark:bg-gray-900 rounded-[22px] overflow-hidden">
          <div className="relative aspect-[9/16] max-h-[600px] bg-black">
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
              {work.platform === 'tiktok' ? (
                <iframe
                  ref={iframeRef}
                  src={work.embedUrl}
                  className="w-full h-full"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  data-testid={`video-iframe-${work.id}`}
                />
              ) : (
                <iframe
                  ref={iframeRef}
                  src={work.embedUrl}
                  className="w-full h-full"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  data-testid={`video-iframe-${work.id}`}
                />
              )}
            </div>
            
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
              <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${config.gradient} text-white text-sm font-semibold shadow-lg`}>
                <PlatformIcon className="w-4 h-4" />
                {config.label}
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold text-social-dark dark:text-white mb-1">
                  {work.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {work.client}
                </p>
              </div>
              <motion.a
                href={work.originalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r ${config.accentGradient} text-white shadow-lg`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                data-testid={`video-link-${work.id}`}
              >
                <Play className="w-4 h-4 ml-0.5" />
              </motion.a>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
              {work.description}
            </p>
            
            <div className="grid grid-cols-3 gap-3">
              <div className="flex flex-col items-center p-3 rounded-xl bg-gray-50 dark:bg-gray-800">
                <Eye className="w-4 h-4 mb-1 text-blue-500" />
                <span className="text-lg font-bold text-social-dark dark:text-white">{work.stats.views}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">Views</span>
              </div>
              <div className="flex flex-col items-center p-3 rounded-xl bg-gray-50 dark:bg-gray-800">
                <Heart className="w-4 h-4 mb-1 text-red-500" />
                <span className="text-lg font-bold text-social-dark dark:text-white">{work.stats.likes}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">Likes</span>
              </div>
              <div className="flex flex-col items-center p-3 rounded-xl bg-gray-50 dark:bg-gray-800">
                <Share2 className="w-4 h-4 mb-1 text-green-500" />
                <span className="text-lg font-bold text-social-dark dark:text-white">{work.stats.shares}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">Shares</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Works() {
  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-pink-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-orange-400/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div 
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500/10 via-pink-500/10 to-orange-500/10 backdrop-blur-sm border border-pink-200/50 dark:border-pink-500/20 rounded-full text-sm font-bold uppercase tracking-wider mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Play className="w-4 h-4 text-pink-500" />
              <span className="text-gray-700 dark:text-gray-300">I Nostri Lavori</span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-black mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              data-testid="works-page-title"
            >
              <span className="text-social-dark dark:text-white">Contenuti che </span>
              <span className="bg-gradient-to-r from-cyan-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                spaccano
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Video virali, reel coinvolgenti e contenuti che fanno crescere i brand. 
              Guarda i nostri migliori lavori in azione.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-20" data-testid="works-grid-section">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {works.map((work) => (
              <VideoCard key={work.id} work={work} />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="relative rounded-3xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-pink-500 to-orange-500" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.08%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
            
            <div className="relative px-8 py-16 md:py-20 text-center">
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <TrendingUp className="w-4 h-4" />
                Risultati garantiti
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Vuoi risultati{' '}
                <span className="underline decoration-wavy decoration-white/50">così</span>?
              </h2>
              
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Trasformiamo la tua presenza social in una macchina di engagement. 
                Contenuti che il tuo pubblico ama condividere.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" onClick={handleScrollTop}>
                  <Button 
                    className="group bg-white text-pink-600 px-8 py-6 rounded-2xl font-bold text-lg shadow-2xl shadow-black/20"
                    data-testid="works-cta-button"
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
                    Parliamo del tuo progetto
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/clients" onClick={handleScrollTop}>
                  <Button 
                    variant="outline"
                    className="bg-white/10 border-white/30 text-white px-8 py-6 rounded-2xl font-bold text-lg backdrop-blur-sm"
                    data-testid="works-clients-button"
                  >
                    Vedi i nostri clienti
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
