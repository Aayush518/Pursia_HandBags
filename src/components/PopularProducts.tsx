import React, { useState } from 'react';
import { ShoppingCart, Heart, Star, Truck, Eye, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Trendy Monogram Mini Purse',
    price: 225.00,
    oldPrice: 275.00,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80',
    tag: 'Best Seller',
    rating: 4.8,
    reviews: 128,
    freeShipping: true,
    stock: 15
  },
  {
    id: 2,
    name: 'Vintage Leather Handbag',
    price: 345.00,
    oldPrice: 399.00,
    image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80',
    tag: 'New',
    rating: 4.9,
    reviews: 89,
    freeShipping: true,
    stock: 8
  },
  {
    id: 3,
    name: 'Trendy Blue Turquoise',
    price: 185.00,
    oldPrice: 225.00,
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80',
    tag: 'Limited',
    rating: 4.7,
    reviews: 156,
    freeShipping: false,
    stock: 3
  },
  {
    id: 4,
    name: 'Classic Red Big Bag',
    price: 399.00,
    oldPrice: 459.00,
    image: 'https://images.unsplash.com/photo-1614179689702-355944cd0918?auto=format&fit=crop&q=80',
    tag: 'Trending',
    rating: 4.9,
    reviews: 201,
    freeShipping: true,
    stock: 12
  }
];

const PopularProducts = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [activeProduct, setActiveProduct] = useState<number | null>(null);

  return (
    <div className="px-4 sm:px-8 lg:px-16 py-24 overflow-hidden bg-gradient-to-b from-white to-[#F9F9F9]">
      <div className="max-w-[1440px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-primary/10 text-primary rounded-full text-sm mb-4 transform hover:scale-105 transition-transform cursor-pointer">
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Popular Choice
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-light mb-6 relative inline-block font-serif">
            Our Popular Products
            <div className="absolute -right-8 top-0 w-6 h-6 bg-primary/20 rounded-full -z-10 animate-pulse"></div>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Discover the favorites that our customers can't get enough of, each piece crafted to perfection.
          </p>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group relative bg-white rounded-[32px] transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl luxury-card-2"
              onMouseEnter={() => {
                setHoveredProduct(product.id);
                setActiveProduct(product.id);
              }}
              onMouseLeave={() => {
                setHoveredProduct(null);
                setActiveProduct(null);
              }}
            >
              {/* Image Container */}
              <div className="relative mb-6 rounded-t-[32px] overflow-hidden">
                <div className="aspect-[4/3] relative overflow-hidden bg-[#F9F9F9]">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      hoveredProduct === product.id ? 'scale-110 rotate-2' : 'scale-100'
                    }`}
                  />
                  
                  {/* Overlay on Hover */}
                  <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
                    hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute inset-0 flex items-center justify-center gap-4 z-50">
                      <button className="bg-white text-black p-4 rounded-full transform -translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hover:bg-primary hover:text-white shadow-lg hover:scale-110">
                        <ShoppingCart className="w-5 h-5" />
                      </button>
                      <button className="bg-white text-black p-4 rounded-full transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hover:bg-primary hover:text-white shadow-lg hover:scale-110">
                        <Eye className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="bg-black/80 text-white text-xs px-4 py-2 rounded-full backdrop-blur-sm transform hover:scale-105 transition-transform">
                    {product.tag}
                  </span>
                  {product.oldPrice > product.price && (
                    <span className="bg-red-500/90 text-white text-xs px-4 py-2 rounded-full backdrop-blur-sm transform hover:scale-105 transition-transform">
                      Save {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                    </span>
                  )}
                </div>

                {/* Wishlist Button */}
                <button className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  hoveredProduct === product.id 
                    ? 'bg-white text-primary shadow-lg' 
                    : 'bg-white/80 text-gray-600'
                }`}>
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="space-y-4">
                  {/* Title */}
                  <h3 className="font-medium text-lg group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>

                  {/* Rating & Stock */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="ml-1 text-sm font-medium text-black">{product.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">({product.reviews})</span>
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full ${
                      product.stock <= 5 
                        ? 'bg-red-100 text-red-600' 
                        : product.stock <= 10 
                          ? 'bg-yellow-100 text-yellow-600' 
                          : 'bg-green-100 text-green-600'
                    }`}>
                      {product.stock} left
                    </span>
                  </div>

                  {/* Price & Cart */}
                  <div className="flex items-end justify-between pt-2">
                    <div className="space-y-1">
                      <div className="text-2xl font-semibold">${product.price.toFixed(2)}</div>
                      {product.oldPrice > product.price && (
                        <div className="text-sm text-gray-500 line-through">${product.oldPrice.toFixed(2)}</div>
                      )}
                    </div>
                    <button className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      hoveredProduct === product.id 
                        ? 'bg-primary text-white shadow-lg scale-110' 
                        : 'bg-black/5 text-gray-600'
                    }`}>
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Free Shipping Badge */}
                  {product.freeShipping && (
                    <div className="flex items-center gap-2 text-green-600 text-sm pt-2">
                      <Truck className="w-4 h-4" />
                      <span>Free Shipping</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute -inset-px rounded-[32px] border-2 border-transparent opacity-0 group-hover:opacity-100 group-hover:border-primary/20 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-20 text-center">
          <Link 
            to="/all-products"
            className="bg-black text-white px-10 py-5 rounded-full inline-flex items-center gap-3 group transition-all duration-500 hover:bg-primary hover:tracking-wider hover:shadow-2xl hover:shadow-primary/20 transform hover:-translate-y-1"
          >
            View All Products
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;