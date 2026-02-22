import { Link } from 'wouter';
import { ArrowLeft, ArrowRight, TrendingUp, Users, Heart } from 'lucide-react';
import { SiTiktok, SiInstagram } from 'react-icons/si';
import { Button } from '@/components/ui/button';

import logoPorciComodi from "/images/Logo_I_Porci_Comodi_1765228675415.png";
import logoPanacea from "/images/Logo_La_Panacea_1765147679036.png";
import logoEleven from "/images/Logo_Eleven_nuovo_1765147637806.png";

const managedProfiles = [
  { 
    id: 1, 
    name: 'I Porci Comodi', 
    handle: '@iporcicomodipisa', 
    logo: logoPorciComodi, 
    followers: '12.5K', 
    platform: 'instagram',
    growth: '+340%',
    engagement: '8.2%',
    description: 'Gestione completa del profilo Instagram con strategia content, stories quotidiane e community management'
  },
  { 
    id: 2, 
    name: 'La Panacea', 
    handle: '@lapanaceapisa', 
    logo: logoPanacea, 
    followers: '8.2K', 
    platform: 'instagram',
    growth: '+180%',
    engagement: '6.5%',
    description: 'Strategia social focalizzata su cocktail e atmosfera serale, con contenuti premium'
  },
  { 
    id: 3, 
    name: 'Eleven Cafe', 
    handle: '@elevencafepisa', 
    logo: logoEleven, 
    followers: '5.8K', 
    platform: 'tiktok',
    growth: '+520%',
    engagement: '12.1%',
    description: 'Profilo TikTok con focus su contenuti virali e trend del momento'
  },
  { 
    id: 4, 
    name: 'I Porci Comodi', 
    handle: '@iporcicomodipisa', 
    logo: logoPorciComodi, 
    followers: '4.2K', 
    platform: 'tiktok',
    growth: '+890%',
    engagement: '15.3%',
    description: 'Esplosione su TikTok con video food che hanno raggiunto milioni di visualizzazioni'
  },
];

export default function WorksSocial() {
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
            <span className="text-6xl mb-6 block">📱</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 italic" data-testid="social-page-title">
              Profili Social
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Account che gestiamo quotidianamente con strategia, creatività e risultati concreti.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50" data-testid="social-profiles-section">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {managedProfiles.map((profile, idx) => (
              <div 
                key={`${profile.id}-${profile.platform}`}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in"
                style={{ 
                  animationDelay: `${idx * 100}ms`,
                  animationFillMode: 'backwards'
                }}
                data-testid={`social-item-${profile.id}-${profile.platform}`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden bg-gray-50 p-3 shadow-sm flex-shrink-0">
                    <img src={profile.logo} alt={profile.name} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-xl text-gray-900">{profile.name}</h3>
                      <span className={`p-1 rounded ${
                        profile.platform === 'tiktok' ? 'bg-black' : 'bg-gradient-to-r from-purple-600 to-pink-500'
                      }`}>
                        {profile.platform === 'tiktok' ? 
                          <SiTiktok className="text-white" size={14} /> : 
                          <SiInstagram className="text-white" size={14} />
                        }
                      </span>
                    </div>
                    <p className="text-gray-500">{profile.handle}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{profile.description}</p>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-[#CAE8FF]/20 rounded-xl">
                    <Users className="w-5 h-5 text-[#233DFF] mx-auto mb-1" />
                    <span className="text-2xl font-black text-[#233DFF] block">{profile.followers}</span>
                    <span className="text-xs text-gray-500">followers</span>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-xl">
                    <TrendingUp className="w-5 h-5 text-green-600 mx-auto mb-1" />
                    <span className="text-2xl font-black text-green-600 block">{profile.growth}</span>
                    <span className="text-xs text-gray-500">crescita</span>
                  </div>
                  <div className="text-center p-3 bg-pink-50 rounded-xl">
                    <Heart className="w-5 h-5 text-pink-600 mx-auto mb-1" />
                    <span className="text-2xl font-black text-pink-600 block">{profile.engagement}</span>
                    <span className="text-xs text-gray-500">engagement</span>
                  </div>
                </div>
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
              Vuoi risultati <span className="text-[#CAE8FF]">così</span>?
            </h2>
            <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
              Gestiamo i tuoi profili social come fossero nostri. Strategia, contenuti, community.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" onClick={handleScrollTop}>
                <Button
                  className="bg-[#233DFF] text-white px-8 py-6 rounded-full font-bold text-lg shadow-xl hover:bg-[#1a2fc7] flex items-center gap-2"
                  data-testid="social-cta-button"
                >
                  Parliamo del tuo progetto
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/works" onClick={handleScrollTop}>
                <Button
                  variant="outline"
                  className="bg-transparent border-2 border-white/30 text-white px-8 py-6 rounded-full font-bold text-lg hover:bg-white/10"
                  data-testid="social-back-button"
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
