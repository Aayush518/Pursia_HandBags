import React from 'react';
import { Flame, ArrowRight, Filter } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Modern Minimalist Tote',
    price: 279.00,
    trending: true,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    name: 'Urban Chic Handbag',
    price: 329.00,
    trending: true,
    image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80'
  },
  // Add more products as needed
];

const Trending = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-light mb-2">Trending Now</h1>
          <p className="text-gray-600">What's hot right now</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full hover:bg-primary transition-colors">
          <Filter className="w-4 h-4" />
          Filter
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group bg-white rounded-2xl p-4 shadow-soft hover:shadow-medium transition-all">
            <div className="relative mb-4">
              <div className="aspect-square rounded-xl overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              {product.trending && (
                <div className="absolute top-2 left-2 px-3 py-1 bg-red-500 text-white text-sm rounded-full flex items-center gap-1">
                  <Flame className="w-4 h-4" />
                  Trending
                </div>
              )}
            </div>
            <h3 className="font-medium mb-2">{product.name}</h3>
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">${product.price.toFixed(2)}</span>
              <button className="p-2 rounded-full hover:bg-primary/10 transition-colors group">
                <ArrowRight className="w-5 h-5 group-hover:text-primary transition-colors" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;