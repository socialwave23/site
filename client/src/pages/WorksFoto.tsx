import { Link } from 'wouter';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';























































const photoGallery = [
  { id: 1, image: "/images/Foto_esempio_ristorazione_SW1_1766092218579.jpg" },
  { id: 2, image: "/images/dsc01147.jpg" },
  { id: 3, image: "/images/Foto_esempio_ristorazione_SW6_1766092218577.jpg" },
  { id: 4, image: "/images/scw03896.jpg" },
  { id: 5, image: "/images/scw09734.jpg" },
  { id: 6, image: "/images/dsc09073.jpg" },
  { id: 7, image: "/images/foto-esempio-ristorazione-sw15.jpg" },
  { id: 8, image: "/images/scw09846.jpg" },
  { id: 9, image: "/images/dsc01216.jpg" },
  { id: 10, image: "/images/dsc01224.jpg" },
  { id: 11, image: "/images/scw01649-copia.jpg" },
  { id: 12, image: "/images/Foto_esempio_ristorazione_SW18_1766092496652.jpg" },
  { id: 13, image: "/images/scw08707.jpg" },
  { id: 14, image: "/images/4148C272-5E51-4F45-92D9-499A341AB12A_1766093280520.jpg" },
  { id: 15, image: "/images/Foto_esempio_ristorazione_SW25_1766092218577.jpg" },
  { id: 16, image: "/images/Foto_esempio_ristorazione_SW5_1766092496653.jpg" },
  { id: 17, image: "/images/scw09299.jpg" },
  { id: 18, image: "/images/dsc08959.jpg" },
  { id: 19, image: "/images/Foto_esempio_ristorazione_SW27_1766092496652.jpg" },
  { id: 20, image: "/images/tiziana-3.jpg" },
  { id: 21, image: "/images/foto-esempio-ristorazione-sw32.jpg" },
  { id: 22, image: "/images/foto-esempio-ristorazione-sw13.jpg" },
  { id: 23, image: "/images/Foto_esempio_ristorazione_SW4_1766092496652.jpg" },
  { id: 24, image: "/images/Foto_esempio_ristorazione_SW8_1766092496653.jpg" },
  { id: 25, image: "/images/Foto_esempio_ristorazione_SW2_1766092218578.jpg" },
  { id: 26, image: "/images/Foto_esempio_ristorazione_SW10_1766092218577.jpg" },
  { id: 27, image: "/images/Foto_esempio_ristorazione_SW14_1766092218580.jpg" },
  { id: 28, image: "/images/Foto_esempio_ristorazione_SW21_1766092218578.jpg" },
  { id: 29, image: "/images/Foto_esempio_ristorazione_SW22_1766092218580.jpg" },
  { id: 30, image: "/images/Foto_esempio_ristorazione_SW23_1766092218580.jpg" },
  { id: 31, image: "/images/Foto_esempio_ristorazione_SW24_1766092218579.jpg" },
  { id: 32, image: "/images/Foto_esempio_ristorazione_SW26_1766092218578.jpg" },
  { id: 33, image: "/images/foto-esempio-ristorazione-sw28jpg.jpg" },
  { id: 34, image: "/images/scw01423.jpg" },
  { id: 35, image: "/images/scw01425.jpg" },
  { id: 36, image: "/images/scw01836.jpg" },
  { id: 37, image: "/images/scw03269.jpg" },
  { id: 38, image: "/images/scw03300.jpg" },
  { id: 39, image: "/images/scw08138.jpg" },
  { id: 40, image: "/images/scw08342.jpg" },
  { id: 41, image: "/images/dsc01104.jpg" },
  { id: 42, image: "/images/dsc01808.jpg" },
  { id: 43, image: "/images/scw01765.jpg" },
  { id: 44, image: "/images/scw03205.jpg" },
  { id: 45, image: "/images/scw03291.jpg" },
  { id: 46, image: "/images/scw03542.jpg" },
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
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[180px]">
            {photoGallery.map((photo, idx) => {
              const isLarge = idx === 0 || idx === 5 || idx === 12 || idx === 19 || idx === 26 || idx === 33 || idx === 40;
              const isTall = idx === 2 || idx === 8 || idx === 15 || idx === 22 || idx === 29 || idx === 36 || idx === 43;
              const isWide = idx === 4 || idx === 10 || idx === 17 || idx === 24 || idx === 31 || idx === 38 || idx === 45;
              
              let spanClass = '';
              if (isLarge) spanClass = 'col-span-2 row-span-2';
              else if (isTall) spanClass = 'row-span-2';
              else if (isWide) spanClass = 'col-span-2';
              
              return (
                <div 
                  key={photo.id} 
                  className={`group relative overflow-hidden rounded-xl cursor-pointer animate-fade-in ${spanClass}`}
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
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white" data-testid="foto-backstage-section">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <p className="text-[#233DFF] font-semibold text-sm uppercase tracking-wider mb-4">Dietro le quinte</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 italic">
              Il nostro studio
            </h2>
            <p className="text-lg text-gray-600">
              Luci professionali, set curati e attenzione ai dettagli per ogni scatto perfetto.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {["/images/img-0663.jpeg", "/images/img-3710.jpeg", "/images/img-2032.jpeg", "/images/img-1860.jpeg"].map((img, idx) => (
              <div 
                key={idx}
                className="relative overflow-hidden rounded-2xl aspect-[3/4] group animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
                data-testid={`foto-backstage-${idx}`}
              >
                <img 
                  src={img} 
                  alt={`Photo backstage ${idx + 1}`}
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
