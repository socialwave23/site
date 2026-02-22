import { Link } from 'wouter';
import { ArrowRight, Camera, Video, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';






const categories = [
  {
    id: 'foto',
    title: 'Foto',
    emoji: '📸',
    icon: Camera,
    description: 'Scatti professionali che catturano l\'essenza del tuo brand',
    stats: '40+ progetti',
    images: ["/images/foto-esempio-ristorazione-sw1.jpg", "/images/dsc01147.jpg", "/images/scw03896.jpg", "/images/foto-esempio-ristorazione-sw5.jpg"],
    gradient: 'from-[#233DFF] to-[#050A30]',
    path: '/works/foto'
  },
  {
    id: 'video',
    title: 'Video',
    emoji: '🎬',
    icon: Video,
    description: 'Contenuti video virali per TikTok e Instagram',
    stats: '150K+ views',
    images: ["/images/scw03896.jpg", "/images/foto-esempio-ristorazione-sw1.jpg", "/images/dsc01147.jpg", "/images/foto-esempio-ristorazione-sw5.jpg"],
    gradient: 'from-[#050A30] to-[#233DFF]',
    path: '/works/video'
  },
  {
    id: 'social',
    title: 'Profili Social',
    emoji: '📱',
    icon: Smartphone,
    description: 'Gestione completa dei tuoi canali social',
    stats: '25K+ followers gestiti',
    images: ["/images/dsc01147.jpg", "/images/scw03896.jpg", "/images/foto-esempio-ristorazione-sw5.jpg", "/images/foto-esempio-ristorazione-sw1.jpg"],
    gradient: 'from-[#233DFF] via-[#050A30] to-[#233DFF]',
    path: '/works/social'
  }
];

export default function Works() {
  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col bg-gray-50 min-h-screen">
      <section className="relative pt-32 pb-20 bg-[#050A30] overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-[#233DFF] rounded-full blur-[120px] animate-pulse-slow"></div>
          <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-[#CAE8FF] rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#233DFF]/50 rounded-full blur-[100px] animate-float"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.p
              className="text-[#CAE8FF] font-semibold text-sm uppercase tracking-wider mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              I nostri lavori
            </motion.p>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 italic"
              data-testid="works-page-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Cosa<br />
              <span className="text-[#CAE8FF]">creiamo</span>
            </motion.h1>

            <motion.p
              className="text-xl text-white/70 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Foto professionali, video virali e profili social gestiti con passione per le aziende di Pisa e provincia.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
              hidden: {}
            }}
          >
            {categories.map((category, idx) => (
              <motion.div
                key={category.id}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Link
                  href={category.path}
                  onClick={handleScrollTop}
                  className="group block"
                >
                  <div
                    className="relative h-[500px] rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl"
                    data-testid={`category-card-${category.id}`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-b ${category.gradient}`}></div>

                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute right-0 top-0 w-48 h-48 bg-[#CAE8FF] rounded-full blur-3xl animate-pulse-slow"></div>
                      <div className="absolute left-0 bottom-1/3 w-32 h-32 bg-[#233DFF] rounded-full blur-2xl animate-float"></div>
                    </div>

                    <div className="absolute top-6 left-6 right-6 grid grid-cols-2 gap-2 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                      {category.images.map((img, imgIdx) => (
                        <div
                          key={imgIdx}
                          className="aspect-square rounded-xl overflow-hidden transition-transform duration-700"
                          style={{
                            transform: `rotate(${imgIdx % 2 === 0 ? -3 : 3}deg)`,
                            transitionDelay: `${imgIdx * 50}ms`
                          }}
                        >
                          <img
                            src={img}
                            alt=""
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#050A30] via-[#050A30]/90 to-transparent">
                      <span className="text-5xl mb-4 block transform group-hover:scale-110 transition-transform duration-300">{category.emoji}</span>
                      <h2 className="text-3xl font-black text-white mb-2 group-hover:text-[#CAE8FF] transition-colors duration-300">
                        {category.title}
                      </h2>
                      <p className="text-white/70 mb-4 text-sm">
                        {category.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-[#CAE8FF] font-bold text-sm">{category.stats}</span>
                        <div className="w-10 h-10 rounded-full bg-[#233DFF] flex items-center justify-center group-hover:bg-[#CAE8FF] transition-all duration-300 group-hover:scale-110">
                          <ArrowRight className="w-5 h-5 text-white group-hover:text-[#050A30] transition-colors duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
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
