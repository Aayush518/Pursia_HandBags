import React from 'react';
import { Instagram, Facebook, Twitter, Youtube, Mail, ArrowRight } from 'lucide-react';

const socialImages = [
  'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1606522754091-a3bbf9ad4cb3?auto=format&fit=crop&q=80'
];

const Social = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-16 py-16 bg-gradient-to-b from-[#F9F9F9] to-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-light mb-3" style={{ fontFamily: 'Helvetica Neue' }}>#PURSIABAGS</h2>
          <p className="text-gray-600 text-lg">Unleash Your Inner Fabulousness</p>
          <div className="flex items-center justify-center gap-6 mt-6">
            {[Instagram, Facebook, Twitter, Youtube].map((Icon, index) => (
              <a key={index} href="#" className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group">
                <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-24">
          {socialImages.map((image, index) => (
            <div key={index} className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-square">
              <img 
                src={image}
                alt={`Social ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-medium px-6 py-2 border-2 border-white/30 rounded-full backdrop-blur-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    View Post
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <footer className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/80 pointer-events-none"></div>
          
          <div className="relative border-t border-gray-200 pt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 lg:gap-12">
              <div className="lg:col-span-2">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                    <div className="w-6 h-[2px] bg-white"></div>
                  </div>
                  <span className="text-2xl tracking-wide font-light" style={{ fontFamily: 'Helvetica Neue' }}>Pursia</span>
                </div>
                <p className="text-gray-600 leading-relaxed text-center md:text-left">
                  Discover luxury handbags crafted with precision and style. Each piece tells a story of elegance and sophistication.
                </p>
              </div>
              
              <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-lg font-medium mb-4 text-center md:text-left">Quick Links</h4>
                  <ul className="space-y-3 text-gray-600">
                    {['New Arrivals', 'Popular Products', 'Special Offers', 'Contact Us'].map((item) => (
                      <li key={item} className="hover:text-primary cursor-pointer transition-colors text-center md:text-left">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-4 text-center md:text-left">Customer Care</h4>
                  <ul className="space-y-3 text-gray-600">
                    {['Track Order', 'Shipping Policy', 'Returns', 'FAQs'].map((item) => (
                      <li key={item} className="hover:text-primary cursor-pointer transition-colors text-center md:text-left">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="sm:col-span-1">
                  <h4 className="text-lg font-medium mb-4 text-center md:text-left">Legal</h4>
                  <ul className="space-y-3 text-gray-600">
                    {['Privacy Policy', 'Terms of Use', 'Cookie Policy'].map((item) => (
                      <li key={item} className="hover:text-primary cursor-pointer transition-colors text-center md:text-left">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="bg-black/5 backdrop-blur-sm rounded-2xl p-6">
                  <h4 className="text-lg font-medium mb-2 text-center md:text-left">Newsletter</h4>
                  <p className="text-gray-600 mb-4 text-center md:text-left">Get 10% off your first order</p>
                  <div className="flex flex-col gap-3">
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input 
                        type="email" 
                        placeholder="Enter your email"
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      />
                    </div>
                    <button className="w-full bg-black text-white py-3 rounded-xl hover:bg-primary transition-colors duration-300 flex items-center justify-center gap-2 group">
                      Subscribe <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-gray-600 text-center md:text-left">© 2024 Pursia. All rights reserved.</p>
                <div className="flex items-center gap-6 text-sm">
                  <span className="text-gray-600 hover:text-primary cursor-pointer transition-colors">Privacy Policy</span>
                  <span className="hidden sm:inline-block text-gray-300">|</span>
                  <span className="text-gray-600 hover:text-primary cursor-pointer transition-colors">Terms of Service</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Social;