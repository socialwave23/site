import { useState } from 'react';
import { ArrowUpRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useQuery } from '@tanstack/react-query';
import { Skeleton } from '@/components/ui/skeleton';
import type { PortfolioItem } from '@shared/schema';

const categories = ['Tutti', 'Food & Beverage', 'Fashion', 'Tech & B2B', 'Cosmetics', 'Sport'];

function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <div 
      className="group relative overflow-hidden rounded-3xl bg-white shadow-lg cursor-pointer"
      data-testid={`portfolio-card-${item.id}`}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={item.image} 
          alt={item.client} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-social-dark/90 via-social-dark/20 to-transparent opacity-0 transition-opacity duration-300 flex flex-col justify-end p-8 group-hover:opacity-100">
        <span className="text-social-sky text-sm font-bold uppercase tracking-wider mb-2 translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
          {item.category}
        </span>
        <div className="flex justify-between items-end gap-4 translate-y-4 transition-transform duration-300 group-hover:translate-y-0" style={{ transitionDelay: '75ms' }}>
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">{item.client}</h3>
            <p className="text-gray-300 text-sm">{item.result}</p>
          </div>
          <div className="bg-white text-social-dark p-2 rounded-full flex-shrink-0">
            <ArrowUpRight size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

function PortfolioSkeleton() {
  return (
    <div className="rounded-3xl overflow-hidden bg-white shadow-lg">
      <Skeleton className="aspect-[4/3] w-full" />
    </div>
  );
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('Tutti');

  const { data: portfolioItems = [], isLoading, isError } = useQuery<PortfolioItem[]>({
    queryKey: ['/api/portfolio', activeFilter],
    queryFn: async () => {
      const url = activeFilter === 'Tutti' 
        ? '/api/portfolio' 
        : `/api/portfolio?category=${encodeURIComponent(activeFilter)}`;
      const response = await fetch(url, { credentials: 'include' });
      if (!response.ok) {
        throw new Error('Failed to fetch portfolio items');
      }
      return response.json();
    },
  });

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50" data-testid="portfolio-page">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-social-dark mb-4" data-testid="portfolio-title">
            I Nostri Lavori
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ogni progetto è una nuova onda da cavalcare. Ecco alcuni dei brand che abbiamo aiutato a crescere.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <Button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              variant={activeFilter === cat ? 'default' : 'outline'}
              className={`rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-social-blue text-white shadow-lg'
                  : 'bg-white text-gray-500 border border-gray-200'
              }`}
              data-testid={`filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {cat}
            </Button>
          ))}
        </div>

        {isLoading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <PortfolioSkeleton key={i} />
            ))}
          </div>
        )}

        {isError && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">Errore nel caricamento dei progetti. Riprova più tardi.</p>
          </div>
        )}

        {!isLoading && !isError && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>
        )}

        {!isLoading && !isError && portfolioItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">Nessun progetto trovato in questa categoria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
