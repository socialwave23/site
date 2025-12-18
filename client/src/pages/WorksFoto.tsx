import { Link } from 'wouter';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

import foto1 from "@assets/Foto_esempio_ristorazione_SW1_1766092218579.jpg";
import foto2 from "@assets/Foto_esempio_ristorazione_SW2_1766092218578.jpg";
import foto6 from "@assets/Foto_esempio_ristorazione_SW6_1766092218577.jpg";
import foto10 from "@assets/Foto_esempio_ristorazione_SW10_1766092218577.jpg";
import foto14 from "@assets/Foto_esempio_ristorazione_SW14_1766092218580.jpg";
import foto15 from "@assets/Foto_esempio_ristorazione_SW15_1766092218577.jpg";
import foto21 from "@assets/Foto_esempio_ristorazione_SW21_1766092218578.jpg";
import foto22 from "@assets/Foto_esempio_ristorazione_SW22_1766092218580.jpg";
import foto23 from "@assets/Foto_esempio_ristorazione_SW23_1766092218580.jpg";
import foto24 from "@assets/Foto_esempio_ristorazione_SW24_1766092218579.jpg";
import foto25 from "@assets/Foto_esempio_ristorazione_SW25_1766092218577.jpg";
import foto26 from "@assets/Foto_esempio_ristorazione_SW26_1766092218578.jpg";
import foto28 from "@assets/Foto_esempio_ristorazione_SW28.jpg_1766092218579.jpg";
import scw01423 from "@assets/SCW01423_1766092218578.jpg";
import scw01425 from "@assets/SCW01425_1766092218578.jpg";
import scw01836 from "@assets/SCW01836_1766092218579.jpg";
import scw03269 from "@assets/SCW03269_1766092218577.jpg";
import scw03300 from "@assets/SCW03300_1766092218577.jpg";
import scw08138 from "@assets/SCW08138_1766092218579.jpg";
import scw08342 from "@assets/SCW08342_1766092218579.jpg";

import dsc01104 from "@assets/DSC01104_1766092496653.jpg";
import dsc01147 from "@assets/DSC01147_1766092496651.jpg";
import dsc01216 from "@assets/DSC01216_1766092496651.jpg";
import dsc01224 from "@assets/DSC01224_1766092496651.jpg";
import dsc01808 from "@assets/DSC01808_1766092496651.jpg";
import dsc08959 from "@assets/DSC08959_1766092496653.jpg";
import dsc09073 from "@assets/DSC09073_1766092496651.jpg";
import foto13 from "@assets/Foto_esempio_ristorazione_SW13_1766092496652.jpg";
import foto18 from "@assets/Foto_esempio_ristorazione_SW18_1766092496652.jpg";
import foto27 from "@assets/Foto_esempio_ristorazione_SW27_1766092496652.jpg";
import foto32 from "@assets/Foto_esempio_ristorazione_SW32_1766092496652.jpg";
import foto4 from "@assets/Foto_esempio_ristorazione_SW4_1766092496652.jpg";
import foto5 from "@assets/Foto_esempio_ristorazione_SW5_1766092496653.jpg";
import foto8 from "@assets/Foto_esempio_ristorazione_SW8_1766092496653.jpg";
import scw01765 from "@assets/SCW01765_1766092496652.jpg";
import scw03205 from "@assets/SCW03205_1766092496652.jpg";
import scw03291 from "@assets/SCW03291_1766092496651.jpg";
import scw03542 from "@assets/SCW03542_1766092496653.jpg";
import scw03896 from "@assets/SCW03896_1766092496651.jpg";
import scw08707 from "@assets/SCW08707_1766092496652.jpg";

import scw09734 from "@assets/SCW09734_1766093232591.jpg";
import scw09846 from "@assets/SCW09846_1766093232592.jpg";
import scw01649 from "@assets/SCW01649_copia_1766093240163.jpg";
import massage1 from "@assets/4148C272-5E51-4F45-92D9-499A341AB12A_1766093280520.jpg";
import scw09299 from "@assets/SCW09299_1766093280521.jpg";
import tiziana from "@assets/Tiziana_3_1766093280521.jpg";

const photoGallery = [
  { id: 1, image: foto1 },
  { id: 2, image: dsc01147 },
  { id: 3, image: foto6 },
  { id: 4, image: scw03896 },
  { id: 5, image: scw09734 },
  { id: 6, image: dsc09073 },
  { id: 7, image: foto15 },
  { id: 8, image: scw09846 },
  { id: 9, image: dsc01216 },
  { id: 10, image: dsc01224 },
  { id: 11, image: scw01649 },
  { id: 12, image: foto18 },
  { id: 13, image: scw08707 },
  { id: 14, image: massage1 },
  { id: 15, image: foto25 },
  { id: 16, image: foto5 },
  { id: 17, image: scw09299 },
  { id: 18, image: dsc08959 },
  { id: 19, image: foto27 },
  { id: 20, image: tiziana },
  { id: 21, image: foto32 },
  { id: 22, image: foto13 },
  { id: 23, image: foto4 },
  { id: 24, image: foto8 },
  { id: 25, image: foto2 },
  { id: 26, image: foto10 },
  { id: 27, image: foto14 },
  { id: 28, image: foto21 },
  { id: 29, image: foto22 },
  { id: 30, image: foto23 },
  { id: 31, image: foto24 },
  { id: 32, image: foto26 },
  { id: 33, image: foto28 },
  { id: 34, image: scw01423 },
  { id: 35, image: scw01425 },
  { id: 36, image: scw01836 },
  { id: 37, image: scw03269 },
  { id: 38, image: scw03300 },
  { id: 39, image: scw08138 },
  { id: 40, image: scw08342 },
  { id: 41, image: dsc01104 },
  { id: 42, image: dsc01808 },
  { id: 43, image: scw01765 },
  { id: 44, image: scw03205 },
  { id: 45, image: scw03291 },
  { id: 46, image: scw03542 },
];

export default function WorksFoto() {
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
            <span className="text-6xl mb-6 block">📸</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 italic" data-testid="foto-page-title">
              Foto
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Scatti professionali che catturano l'essenza del tuo brand e raccontano la tua storia.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#050A30] relative overflow-hidden" data-testid="photo-gallery-section">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute right-1/4 bottom-0 w-[300px] h-[300px] bg-[#233DFF] rounded-full blur-[80px]"></div>
          <div className="absolute left-1/4 top-0 w-[300px] h-[300px] bg-[#CAE8FF] rounded-full blur-[80px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {photoGallery.map((photo, idx) => (
              <div 
                key={photo.id} 
                className="group relative overflow-hidden rounded-xl cursor-pointer aspect-square animate-fade-in"
                style={{ 
                  animationDelay: `${idx * 30}ms`,
                  animationFillMode: 'backwards'
                }}
                data-testid={`photo-item-${photo.id}`}
              >
                <img 
                  src={photo.image} 
                  alt={`Portfolio photo ${photo.id}`}
                  className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050A30]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute inset-0 border-2 border-[#233DFF] opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl"></div>
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
              Vuoi foto <span className="text-[#CAE8FF]">così</span>?
            </h2>
            <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
              Scatti che raccontano, emozionano e vendono. Professionali, creativi, unici.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" onClick={handleScrollTop}>
                <Button
                  className="bg-[#233DFF] text-white px-8 py-6 rounded-full font-bold text-lg shadow-xl hover:bg-[#1a2fc7] flex items-center gap-2"
                  data-testid="foto-cta-button"
                >
                  Richiedi un preventivo
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/works" onClick={handleScrollTop}>
                <Button
                  variant="outline"
                  className="bg-transparent border-2 border-white/30 text-white px-8 py-6 rounded-full font-bold text-lg hover:bg-white/10"
                  data-testid="foto-back-button"
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
