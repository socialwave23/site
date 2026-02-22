import React, { useState } from 'react';
import { PortfolioItem } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface PortfolioProps {
    //
}

const portfolioData: PortfolioItem[] = [
    {
        id: '1',
        client: 'Gusto Italiano',
        category: 'Food & Beverage',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800',
        result: '+200% Prenotazioni'
    },
    {
        id: '2',
        client: 'Urban Style',
        category: 'Fashion',
        image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800',
        result: 'Rebranding Completo'
    },
    {
        id: '3',
        client: 'TechStart',
        category: 'Tech & B2B',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800',
        result: 'Lead Generation'
    },
    {
        id: '4',
        client: 'EcoBeauty',
        category: 'Cosmetics',
        image: 'https://images.unsplash.com/photo-1596462502278-27bfdd403348?q=80&w=800',
        result: 'Viral TikTok Campaign'
    },
    {
        id: '5',
        client: 'Fitness Pro',
        category: 'Sport',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800',
        result: 'Community Building'
    },
    {
        id: '6',
        client: 'Design Studio',
        category: 'Interior',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800',
        result: 'Instagram Growth'
    }
];

const categories = ['Tutti', 'Food & Beverage', 'Fashion', 'Tech & B2B', 'Cosmetics', 'Sport'];

export const Portfolio: React.FC<PortfolioProps> = () => {
    const [activeFilter, setActiveFilter] = useState('Tutti');

    const filteredItems = activeFilter === 'Tutti' 
        ? portfolioData 
        : portfolioData.filter(item => item.category === activeFilter);

    return (
        <div className="pt-24 pb-20 min-h-screen bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-black text-social-dark mb-4">I Nostri Lavori</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Ogni progetto è una nuova onda da cavalcare. Ecco alcuni dei brand che abbiamo aiutato a crescere.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                                activeFilter === cat
                                    ? 'bg-social-blue text-white shadow-lg'
                                    : 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-200'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredItems.map((item) => (
                        <div key={item.id} className="group relative overflow-hidden rounded-3xl bg-white shadow-lg cursor-pointer">
                            <div className="aspect-[4/3] overflow-hidden">
                                <img 
                                    src={item.image} 
                                    alt={item.client} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-social-dark/90 via-social-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <span className="text-social-sky text-sm font-bold uppercase tracking-wider mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {item.category}
                                </span>
                                <div className="flex justify-between items-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-1">{item.client}</h3>
                                        <p className="text-gray-300 text-sm">{item.result}</p>
                                    </div>
                                    <div className="bg-white text-social-dark p-2 rounded-full">
                                        <ArrowUpRight size={20} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};