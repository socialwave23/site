import { Link } from 'wouter';
import { ArrowLeft, ArrowRight, Play } from 'lucide-react';
import { SiTiktok, SiInstagram } from 'react-icons/si';
import { Button } from '@/components/ui/button';












const videoProjects = [
  { id: 1, title: 'Viral Food Content', client: 'I Porci Comodi', platform: 'TikTok', views: '150K+', logo: "/images/logo-i-porci-comodi-1765228675415.png", description: 'Video virali che hanno portato il locale ad avere una coda fuori dalla porta' },
  { id: 2, title: 'Cocktail Experience', client: 'La Panacea', platform: 'Instagram', views: '45K+', logo: "/images/logo-la-panacea-1765147679036.png", description: 'Contenuti creativi che mostrano la preparazione dei cocktail signature' },
  { id: 3, title: 'Event Highlight', client: 'Eleven Cafe', platform: 'TikTok', views: '80K+', logo: "/images/logo-eleven-nuovo-1765147637806.png", description: 'Copertura completa degli eventi speciali del locale' },
  { id: 4, title: 'Menu Showcase', client: 'I Porci Comodi', platform: 'Instagram', views: '35K+', logo: "/images/logo-i-porci-comodi-1765228675415.png", description: 'Presentazione dinamica dei piatti del nuovo menu stagionale' },
  { id: 5, title: 'Behind the Scenes', client: 'La Panacea', platform: 'TikTok', views: '60K+', logo: "/images/logo-la-panacea-1765147679036.png", description: 'Il dietro le quinte del locale che ha conquistato i follower' },
  { id: 6, title: 'Staff Stories', client: 'Eleven Cafe', platform: 'Instagram', views: '25K+', logo: "/images/logo-eleven-nuovo-1765147637806.png", description: 'Video che raccontano le persone dietro al brand' },
];

export default function WorksVideo() {
  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative py-32 bg-[#050A30] overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-[#233DFF] rounded-full blur-[120px] animate-pulse-slow"></div>
          <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-[#CAE8FF] rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#233DFF]/50 rounded-full blur-[100px] animate-float"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/works" onClick={handleScrollTop}>
            <Button variant="ghost" className="text-white/70 hover:text-white mb-8" data-testid="back-to-works">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Torna ai lavori
            </Button>
          </Link>
          
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-6xl mb-6 block">🎬</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 italic" data-testid="video-page-title">
              Video
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Contenuti video che generano engagement, viralità e clienti reali.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50" data-testid="video-gallery-section">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {videoProjects.map((video, idx) => (
              <div 
                key={video.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in"
                style={{ 
                  animationDelay: `${idx * 100}ms`,
                  animationFillMode: 'backwards'
                }}
                data-testid={`video-item-${video.id}`}
              >
                <div className="relative h-48 bg-gradient-to-br from-[#050A30] to-[#233DFF] flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute right-0 top-0 w-32 h-32 bg-[#CAE8FF] rounded-full blur-2xl"></div>
                    <div className="absolute left-0 bottom-0 w-32 h-32 bg-[#233DFF] rounded-full blur-2xl"></div>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                  </div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                    <img src={video.logo} alt={video.client} className="h-6 object-contain" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 ${
                      video.platform === 'TikTok' ? 'bg-black text-white' : 'bg-gradient-to-r from-purple-600 to-pink-500 text-white'
                    }`}>
                      {video.platform === 'TikTok' ? <SiTiktok size={14} /> : <SiInstagram size={14} />}
                      {video.platform}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{video.title}</h3>
                    <span className="text-[#233DFF] font-black text-lg">{video.views}</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-3">{video.client}</p>
                  <p className="text-gray-600 text-sm">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white" data-testid="video-backstage-section">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <p className="text-[#233DFF] font-semibold text-sm uppercase tracking-wider mb-4">Dietro le quinte</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 italic">
              Il nostro set
            </h2>
            <p className="text-lg text-gray-600">
              Attrezzatura professionale, location uniche e passione per ogni ripresa.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {["/images/img-8661-1766094261378.jpeg", "/images/scw06654-1766094261378.jpg", "/images/scw08763-1766094261378.jpg", "/images/scw08443-1766094261379.jpg", "/images/scw03959-1766094261379.jpg", "/images/dsc08679-1766094261379.jpg"].map((img, idx) => (
              <div 
                key={idx}
                className="relative overflow-hidden rounded-2xl aspect-[3/4] group animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
                data-testid={`video-backstage-${idx}`}
              >
                <img 
                  src={img} 
                  alt={`Video backstage ${idx + 1}`}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050A30]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#050A30] relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#233DFF] rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute left-0 bottom-0 w-96 h-96 bg-[#CAE8FF] rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Vuoi video <span className="text-[#CAE8FF]">virali</span>?
            </h2>
            <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
              TikTok, Instagram Reels, Stories. Creiamo contenuti che il tuo pubblico ama condividere.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" onClick={handleScrollTop}>
                <Button
                  className="bg-[#233DFF] text-white px-8 py-6 rounded-full font-bold text-lg shadow-xl hover:bg-[#1a2fc7] flex items-center gap-2"
                  data-testid="video-cta-button"
                >
                  Parliamo del tuo progetto
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/works" onClick={handleScrollTop}>
                <Button
                  variant="outline"
                  className="bg-transparent border-2 border-white/30 text-white px-8 py-6 rounded-full font-bold text-lg hover:bg-white/10"
                  data-testid="video-back-button"
                >
                  Vedi altri lavori
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
