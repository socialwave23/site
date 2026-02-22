import { Link } from 'wouter';
import { Instagram, ExternalLink, Users, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

import logoPorciComodi from "/images/Logo_I_Porci_Comodi_1765228675415.png";
import logoPanacea from "/images/Logo_La_Panacea_1765147679036.png";

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
  },
];

function StatCard({ label, value, icon: Icon }: { label: string; value: string; icon: typeof TrendingUp }) {
  return (
    <div className="flex flex-col items-center p-4 rounded-2xl bg-gray-50">
      <Icon className="w-5 h-5 mb-2 text-[#233DFF]" />
      <span className="text-2xl font-black text-gray-900">{value}</span>
      <span className="text-xs text-gray-500 uppercase tracking-wider">{label}</span>
    </div>
  );
}

function ClientCard({ client }: { client: Client }) {
  return (
    <div
      className="bg-white rounded-3xl shadow-lg overflow-hidden"
      data-testid={`client-card-${client.id}`}
    >
      <div className="p-8">
        <div className="flex items-start gap-6 mb-6">
          <div className="w-20 h-20 rounded-2xl bg-gray-100 p-2 flex-shrink-0">
            <img 
              src={client.logo} 
              alt={client.name}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <span className="inline-block px-3 py-1 bg-[#CAE8FF] text-[#233DFF] text-xs font-semibold rounded-full mb-2">
              {client.category}
            </span>
            <h3 className="text-2xl font-bold text-gray-900">{client.name}</h3>
          </div>
        </div>
        
        <p className="text-gray-600 leading-relaxed mb-6">
          {client.description}
        </p>
        
        <div className="grid grid-cols-3 gap-3 mb-6">
          <StatCard label="Followers" value={client.stats.followers} icon={Users} />
          <StatCard label="Crescita" value={client.stats.growth} icon={TrendingUp} />
          <StatCard label="Engagement" value={client.stats.engagement} icon={Sparkles} />
        </div>

        <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-gray-100 mb-6">
          <iframe
            src={`https://www.instagram.com/${client.instagramHandle}/embed`}
            className="w-full h-full"
            style={{ border: 'none' }}
            scrolling="no"
          />
        </div>
        
        <a 
          href={client.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-testid={`button-instagram-${client.id}`}
        >
          <Button 
            className="w-full bg-[#233DFF] text-white py-6 rounded-xl font-bold text-base shadow-lg hover:bg-[#1a2fc7] flex items-center justify-center gap-2"
          >
            <Instagram className="w-5 h-5" />
            @{client.instagramHandle}
            <ExternalLink className="w-4 h-4 ml-1" />
          </Button>
        </a>
      </div>
    </div>
  );
}

export default function Clients() {
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
              <Users className="w-4 h-4" />
              I Nostri Clienti
            </div>
            
            <h1 
              className="text-5xl md:text-6xl font-black text-white mb-6"
              data-testid="clients-page-title"
            >
              <span className="italic">Storie di</span><br />
              <span className="text-[#CAE8FF]">successo</span>
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed max-w-xl mx-auto">
              Trasformiamo brand locali in fenomeni social. 
              Ogni cliente ha una storia unica, noi la raccontiamo al mondo.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16" data-testid="clients-grid-section">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {clients.map((client) => (
              <ClientCard key={client.id} client={client} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Vuoi essere il <span className="text-[#CAE8FF]">prossimo</span>?
            </h2>
            
            <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto">
              Porta il tuo brand sulla cresta dell'onda. Insieme creeremo contenuti che fanno la differenza.
            </p>
            
            <Link href="/contact" onClick={handleScrollTop}>
              <Button 
                className="bg-[#233DFF] text-white px-10 py-6 rounded-full font-bold text-lg shadow-xl hover:bg-[#1a2fc7] flex items-center gap-2 mx-auto"
                data-testid="clients-cta-button"
              >
                Inizia ora
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
