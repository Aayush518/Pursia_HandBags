import React, { useState } from 'react';
import { ShoppingCart, Heart, Share2, DollarSign, Truck, Shield, Plus, Minus } from 'lucide-react';

const FeaturedProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('#B17C3F');

  const colors = [
    { id: 1, value: '#B17C3F', name: 'Brown' },
    { id: 2, value: '#2A2A2A', name: 'Black' },
    { id: 3, value: '#D4D4D4', name: 'Gray' }
  ];

  return (
    <div id="featured" className="px-4 sm:px-8 lg:px-16 py-12">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        <div className="w-full lg:w-1/2">
          <div className="relative bg-gradient-to-br from-[#FFF6F0] to-[#FFE8D6] rounded-[40px] p-8 sm:p-16 aspect-square flex items-center justify-center group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-radial from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80"
              alt="Featured Handbag"
              className="w-[80%] h-auto relative z-10 mix-blend-multiply transform hover:scale-105 transition-all duration-700 hover:rotate-2"
            />
            
            <div className="absolute -top-8 sm:-top-12 -right-4 sm:-right-6 z-[200] transform rotate-12 hover:rotate-0 transition-all duration-500 hover:scale-110">
              <div className="bg-black text-white px-6 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <span className="text-lg sm:text-xl font-bold">Hurry</span>
                <span className="text-sm opacity-80">Up!!</span>
              </div>
            </div>

            <div className="absolute bottom-8 left-8 flex gap-3 z-[200]">
              {colors.map((color) => (
                <button
                  key={color.id}
                  onClick={() => setSelectedColor(color.value)}
                  className={`w-8 h-8 rounded-full cursor-pointer shadow-md hover:scale-110 transition-all duration-300 relative ${
                    selectedColor === color.value ? 'ring-2 ring-offset-2 ring-primary' : ''
                  }`}
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                >
                  {selectedColor === color.value && (
                    <span className="absolute inset-0 border-2 border-white rounded-full animate-ping"></span>
                  )}
                </button>
              ))}
            </div>

            <div className="absolute right-8 top-8 flex flex-col gap-4 z-[200]">
              <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-all duration-300 group">
                <Heart className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </button>
              <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-all duration-300 group">
                <Share2 className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </button>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col sm:flex-row gap-8">
          <div className="flex-1 bg-white rounded-[32px] p-8 shadow-xl backdrop-blur-sm bg-white/80 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Featured</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">In Stock</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Free Shipping</span>
            </div>

            <h3 className="text-2xl font-medium mb-3 hover:text-primary transition-colors">Trendy pyramid shaped</h3>
            <p className="text-gray-600 mb-6">Gold handbag adorned with pyramid-shaped rivets, perfect for both casual and formal occasions.</p>

            <div className="flex items-center gap-4 mb-6">
              <div className="text-3xl font-bold">$299.00</div>
              <div className="text-lg text-gray-500 line-through">$399.00</div>
              <div className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm animate-pulse">Save 25%</div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-gray-50 rounded-2xl">
              <div className="flex flex-col items-center text-center gap-2 group">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <DollarSign className="w-5 h-5" />
                </div>
                <span className="text-sm">Money Back</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2 group">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Truck className="w-5 h-5" />
                </div>
                <span className="text-sm">Free Delivery</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2 group">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Shield className="w-5 h-5" />
                </div>
                <span className="text-sm">Warranty</span>
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <button className="flex-1 bg-primary text-white rounded-2xl py-4 flex items-center justify-center gap-2 hover:bg-primary-600 transition-all duration-300 transform hover:translate-y-[-2px] shadow-lg shadow-primary/20 group">
                <ShoppingCart className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" /> 
                Add To Cart
              </button>
              <button className="px-6 bg-black/5 rounded-2xl hover:bg-black/10 transition-colors group">
                <Heart className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:text-primary" />
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-black/5 rounded-2xl hover:bg-black/10 transition-colors cursor-pointer group">
              <div className="flex items-center gap-3">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80" 
                  alt="Reviewer" 
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-white group-hover:ring-primary transition-colors"
                />
                <div>
                  <p className="font-medium group-hover:text-primary transition-colors">Sarah Johnson</p>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="text-sm text-gray-600">(Verified Purchase)</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600">2 days ago</p>
            </div>
          </div>

          <div className="flex flex-row sm:flex-col gap-4 sm:gap-8">
            <div className="relative min-w-[200px] sm:min-w-0 group">
              <div className="bg-[#F1F1F1] rounded-2xl p-4 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80"
                  alt="Small Handy Purse"
                  className="w-full aspect-square object-cover rounded-xl transition-all duration-500 group-hover:scale-105 mix-blend-multiply"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#F1F1F1] opacity-40 group-hover:opacity-0 transition-opacity duration-300"></div>
                <div className="absolute -right-2 -bottom-2 bg-[#1B4B66] text-white text-xs px-3 py-1.5 rounded-full z-[200] transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  Trendy
                </div>
              </div>
              <div className="mt-2">
                <span className="text-sm font-medium group-hover:text-primary transition-colors">Small Handy Purse</span>
                <span className="text-sm text-gray-600 block">$159.00</span>
              </div>
            </div>

            <div className="relative min-w-[200px] sm:min-w-0 group">
              <div className="bg-[#FFE8E8] rounded-2xl p-4 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1606522754091-a3bbf9ad4cb3?auto=format&fit=crop&q=80"
                  alt="Leather Wallet"
                  className="w-full aspect-square object-cover rounded-xl transition-all duration-500 group-hover:scale-105 mix-blend-multiply"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#FFE8E8] opacity-40 group-hover:opacity-0 transition-opacity duration-300"></div>
                <div className="absolute -right-2 -bottom-2 bg-red-500 text-white text-xs px-3 py-1.5 rounded-full z-[200] transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  Hot
                </div>
                <div className="absolute top-4 right-4 bg-black/80 text-white text-xs px-3 py-1.5 rounded-full z-[200] shadow-lg">
                  $89.00
                </div>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm font-medium group-hover:text-primary transition-colors">Leather Wallets</span>
                <span className="text-sm text-red-500 font-medium">Save 30%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;