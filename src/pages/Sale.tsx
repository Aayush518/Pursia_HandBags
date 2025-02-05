import React from 'react';
import { Tag, ArrowRight, Filter } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Premium Leather Bag',
    price: 399.00,
    salePrice: 299.00,
    discount: 25,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    name: 'Designer Tote',
    price: 299.00,
    salePrice: 239.00,
    discount: 20,
    image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80'
  },
  // Add more products as needed
];

const Sale = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-light mb-2">Sale</h1>
          <p className="text-gray-600">Special offers and great deals</p>
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
              <div className="absolute top-2 left-2 px-3 py-1 bg-red-500 text-white text-sm rounded-full flex items-center gap-1">
                <Tag className="w-4 h-4" />
                {product.discount}% OFF
              </div>
            </div>
            <h3 className="font-medium mb-2">{product.name}</h3>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg font-semibold">${product.salePrice.toFixed(2)}</span>
              <span className="text-sm text-gray-500 line-through">${product.price.toFixed(2)}</span>
            </div>
            <button className="w-full py-2 bg-primary text-white rounded-xl hover:bg-primary-600 transition-colors flex items-center justify-center gap-2">
              Shop Now
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sale;