import { Link } from 'wouter';
import { Instagram, ExternalLink, Users, Camera, Heart, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

import logoPorciComodi from "@assets/Logo_I_Porci_Comodi_1765228675415.png";

interface Client {
  id: string;
  name: string;
  instagramHandle: string;
  instagramUrl: string;
  logo: string;
  description: string;
  category: string;
}

const clients: Client[] = [
  {
    id: '1',
    name: 'I Porci Comodi',
    instagramHandle: 'iporcicomodipisa',
    instagramUrl: 'https://www.instagram.com/iporcicomodipisa/',
    logo: logoPorciComodi,
    description: 'Ristorante di cucina toscana a Pisa, specializzato in piatti a base di carne di maiale di alta qualità.',
    category: 'Ristorazione',
  },
];

function InstagramPreview({ client }: { client: Client }) {
  return (
    <a 
      href={client.instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
      data-testid={`instagram-preview-${client.id}`}
    >
      <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-1 rounded-2xl">
        <div className="bg-white rounded-xl p-6 transition-all group-hover:bg-gray-50">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-0.5">
              <img 
                src={client.logo} 
                alt={client.name}
                className="w-full h-full object-contain rounded-full bg-white p-1"
              />
            </div>
            <div className="flex-1">
              <p className="font-bold text-social-dark">@{client.instagramHandle}</p>
              <p className="text-sm text-gray-500">{client.name}</p>
            </div>
            <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white px-4 py-2 rounded-lg font-semibold text-sm flex items-center gap-2">
              <Instagram size={16} />
              Segui
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-2 mb-4">
            {[1, 2, 3].map((i) => (
              <div 
                key={i} 
                className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors"
              >
                <Camera size={24} className="text-gray-400" />
              </div>
            ))}
          </div>
          
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Heart size={16} /> Post
              </span>
              <span className="flex items-center gap-1">
                <MessageCircle size={16} /> Storie
              </span>
            </div>
            <span className="flex items-center gap-1 text-social-blue font-medium">
              Visita profilo <ExternalLink size={14} />
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

function ClientCard({ client }: { client: Client }) {
  return (
    <Card className="overflow-hidden" data-testid={`client-card-${client.id}`}>
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-start gap-4">
          <img 
            src={client.logo} 
            alt={client.name}
            className="w-20 h-20 object-contain rounded-xl bg-white"
          />
          <div className="flex-1">
            <h3 className="text-xl font-bold text-social-dark">{client.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{client.category}</p>
            <p className="text-sm text-gray-600 leading-relaxed">{client.description}</p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <a 
            href={client.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={`button-instagram-${client.id}`}
          >
            <Button variant="outline" className="flex items-center gap-2">
              <Instagram size={18} />
              @{client.instagramHandle}
              <ExternalLink size={14} />
            </Button>
          </a>
        </div>
      </div>
      
      <div className="p-6 bg-gray-50">
        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
          Anteprima Instagram
        </h4>
        <InstagramPreview client={client} />
      </div>
    </Card>
  );
}

export default function Clients() {
  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col">
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-social-blue rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              <Users size={18} />
              I Nostri Clienti
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-social-dark mb-6" data-testid="clients-page-title">
              Storie di successo
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Scopri come aiutiamo i nostri clienti a crescere sui social media. 
              Ogni brand ha la sua storia, noi la raccontiamo al mondo.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white" data-testid="clients-grid-section">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 max-w-4xl mx-auto">
            {clients.map((client) => (
              <ClientCard key={client.id} client={client} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-social-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Vuoi essere il prossimo?
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">
            Unisciti ai nostri clienti soddisfatti e porta il tuo brand sulla cresta dell'onda.
          </p>
          <Link href="/contact" onClick={handleScrollTop}>
            <Button 
              className="bg-white text-social-blue px-8 py-6 rounded-full font-bold text-lg shadow-xl"
              data-testid="clients-cta-button"
            >
              Contattaci ora
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
