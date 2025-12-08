import { Link } from 'wouter';
import { Instagram, ExternalLink, Users, Sparkles, TrendingUp, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

import logoPorciComodi from "@assets/Logo_I_Porci_Comodi_1765228675415.png";
import logoPanacea from "@assets/Logo_La_Panacea_1765147679036.png";

interface Client {
  id: string;
  name: string;
  instagramHandle: string;
  instagramUrl: string;
  logo: string;
  description: string;
  category: string;
  stats: {
    followers: string;
    growth: string;
    engagement: string;
  };
  color: string;
  gradient: string;
}

const clients: Client[] = [
  {
    id: '1',
    name: 'I Porci Comodi',
    instagramHandle: 'iporcicomodipisa',
    instagramUrl: 'https://www.instagram.com/iporcicomodipisa/',
    logo: logoPorciComodi,
    description: 'Ristorante di cucina toscana a Pisa, specializzato in piatti a base di carne di maiale di alta qualità. Una tradizione culinaria che conquista i social.',
    category: 'Ristorazione',
    stats: {
      followers: '5.2K',
      growth: '+127%',
      engagement: '8.4%',
    },
    color: 'from-amber-500 to-orange-600',
    gradient: 'from-amber-400 via-orange-500 to-red-500',
  },
  {
    id: '2',
    name: 'La Panacea',
    instagramHandle: 'lapanaceapisa',
    instagramUrl: 'https://www.instagram.com/lapanaceapisa/',
    logo: logoPanacea,
    description: 'Il punto di riferimento per aperitivi e cocktail a Pisa. Un\'atmosfera unica dove ogni drink racconta una storia.',
    category: 'Bar & Cocktails',
    stats: {
      followers: '3.8K',
      growth: '+89%',
      engagement: '7.2%',
    },
    color: 'from-emerald-500 to-teal-600',
    gradient: 'from-emerald-400 via-teal-500 to-cyan-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function StatCard({ label, value, icon: Icon }: { label: string; value: string; icon: typeof TrendingUp }) {
  return (
    <div className="flex flex-col items-center p-4 rounded-2xl bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-white/20">
      <Icon className="w-5 h-5 mb-2 text-social-blue" />
      <span className="text-2xl font-black text-social-dark dark:text-white">{value}</span>
      <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">{label}</span>
    </div>
  );
}

function ClientShowcase({ client, index }: { client: Client; index: number }) {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      variants={itemVariants}
      className="relative"
      data-testid={`client-card-${client.id}`}
    >
      <div className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${client.gradient} p-1`}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
        
        <div className="relative bg-white dark:bg-gray-900 rounded-[22px] overflow-hidden">
          <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
            <div className="relative lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <div className="absolute top-0 left-0 w-full h-full opacity-5">
                <div className={`absolute inset-0 bg-gradient-to-br ${client.gradient}`} />
              </div>
              
              <div className="relative z-10">
                <motion.div 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-700 text-sm font-semibold text-gray-600 dark:text-gray-300 mb-4"
                  whileHover={{ scale: 1.02 }}
                >
                  <Star className="w-4 h-4 text-yellow-500" />
                  {client.category}
                </motion.div>
                
                <h3 className="text-3xl lg:text-4xl font-black text-social-dark dark:text-white mb-4">
                  {client.name}
                </h3>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {client.description}
                </p>
                
                <div className="grid grid-cols-3 gap-3 mb-8">
                  <StatCard label="Followers" value={client.stats.followers} icon={Users} />
                  <StatCard label="Crescita" value={client.stats.growth} icon={TrendingUp} />
                  <StatCard label="Engagement" value={client.stats.engagement} icon={Sparkles} />
                </div>
                
                <a 
                  href={client.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`button-instagram-${client.id}`}
                >
                  <Button 
                    className={`group bg-gradient-to-r ${client.gradient} border-0 text-white px-6 py-6 rounded-xl font-bold text-base shadow-lg`}
                  >
                    <Instagram className="w-5 h-5 mr-2" />
                    @{client.instagramHandle}
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
              </div>
            </div>
            
            <div className="relative lg:w-1/2 min-h-[400px] lg:min-h-[500px]">
              <div className={`absolute inset-0 bg-gradient-to-br ${client.gradient} opacity-10`} />
              
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`absolute -inset-4 bg-gradient-to-br ${client.gradient} rounded-3xl opacity-20 blur-xl`} />
                  
                  <a 
                    href={client.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative"
                    data-testid={`instagram-preview-${client.id}`}
                  >
                    <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden w-72 sm:w-80">
                      <div className={`h-2 bg-gradient-to-r ${client.gradient}`} />
                      
                      <div className="p-6">
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`relative p-1 rounded-full bg-gradient-to-br ${client.gradient}`}>
                            <div className="w-16 h-16 rounded-full bg-white p-1 overflow-hidden">
                              <img 
                                src={client.logo} 
                                alt={client.name}
                                className="w-full h-full object-contain"
                              />
                            </div>
                          </div>
                          <div className="flex-1">
                            <p className="font-bold text-social-dark dark:text-white">@{client.instagramHandle}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{client.name}</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-2 mb-4">
                          {[1, 2, 3, 4, 5, 6].map((i) => (
                            <motion.div 
                              key={i}
                              className={`aspect-square rounded-xl bg-gradient-to-br ${client.gradient} opacity-20`}
                              whileHover={{ opacity: 0.4 }}
                            />
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600">
                          <Instagram className="w-5 h-5 text-pink-500" />
                          <span className="font-semibold text-gray-700 dark:text-gray-200">Visita il profilo</span>
                          <ExternalLink className="w-4 h-4 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              </div>
              
              <motion.div 
                className={`absolute top-10 right-10 w-20 h-20 rounded-full bg-gradient-to-br ${client.gradient} opacity-30 blur-2xl`}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div 
                className={`absolute bottom-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br ${client.gradient} opacity-20 blur-3xl`}
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Clients() {
  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div 
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 backdrop-blur-sm border border-purple-200/50 dark:border-purple-500/20 rounded-full text-sm font-bold uppercase tracking-wider mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex -space-x-1">
                <div className="w-3 h-3 rounded-full bg-purple-500" />
                <div className="w-3 h-3 rounded-full bg-pink-500" />
                <div className="w-3 h-3 rounded-full bg-orange-500" />
              </div>
              <span className="text-gray-700 dark:text-gray-300">I Nostri Clienti</span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-black mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              data-testid="clients-page-title"
            >
              <span className="text-social-dark dark:text-white">Storie di </span>
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                successo
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Trasformiamo brand locali in fenomeni social. 
              Ogni cliente ha una storia unica, noi la raccontiamo al mondo.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-20" data-testid="clients-grid-section">
        <div className="container mx-auto px-4">
          <motion.div 
            className="space-y-12 md:space-y-20 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {clients.map((client, index) => (
              <ClientShowcase key={client.id} client={client} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-social-dark via-blue-900 to-social-dark" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold text-white/80 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
              Unisciti a noi
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Vuoi essere il{' '}
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
                prossimo?
              </span>
            </h2>
            
            <p className="text-xl text-blue-200/80 mb-10 max-w-xl mx-auto">
              Porta il tuo brand sulla cresta dell'onda. Insieme creeremo contenuti che fanno la differenza.
            </p>
            
            <Link href="/contact" onClick={handleScrollTop}>
              <Button 
                className="group bg-white text-social-dark px-10 py-7 rounded-2xl font-bold text-lg shadow-2xl shadow-white/20"
                data-testid="clients-cta-button"
              >
                Inizia ora
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
