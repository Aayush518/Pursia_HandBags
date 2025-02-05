import React from 'react';
import { ArrowRight } from 'lucide-react';

const DesignedSection = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-16 py-16 lg:py-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full lg:w-1/2 space-y-12">
            <div className="max-w-xl">
              <div className="inline-block px-6 py-2 bg-primary/10 text-primary rounded-full text-sm mb-6 hover:bg-primary/20 transition-colors">
                Exclusive Design
              </div>
              <h2 className="text-4xl sm:text-5xl font-light mb-6" style={{ fontFamily: 'Helvetica Neue' }}>
                Designed for
                <br />
                <span className="relative inline-block">
                  Uniqueness
                  <div className="absolute -right-8 top-0 w-6 h-6 bg-primary/20 rounded-full -z-10 animate-pulse"></div>
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Each piece is meticulously crafted to bring you the perfect blend of style and functionality.
              </p>
            </div>

            {/* First Image Container */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-[40px] aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80"
                  alt="Unique Design"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Floating Info Card */}
              <div className="absolute -bottom-6 left-6 right-6 bg-white shadow-2xl rounded-2xl p-6 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium mb-1">Premium Collection</h3>
                    <p className="text-gray-600">Crafted with precision</p>
                  </div>
                  <button className="bg-black text-white p-3 rounded-xl hover:bg-primary transition-colors group">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            {/* Second Image Container */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-[40px] aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80"
                  alt="Shopping Woman"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Enhanced Sale Badge */}
              <div className="absolute -top-6 -right-6 transform group-hover:rotate-12 transition-transform duration-500">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary blur-lg opacity-50"></div>
                  <div className="relative bg-primary text-white px-8 py-4 rounded-2xl font-medium shadow-lg">
                    <div className="text-2xl font-bold">75%</div>
                    <div className="text-sm opacity-90">LIMITED OFFER</div>
                  </div>
                </div>
              </div>

              {/* Floating Info Card */}
              <div className="absolute -bottom-6 left-6 right-6 bg-white shadow-2xl rounded-2xl p-6 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium mb-1">Luxury Materials</h3>
                    <p className="text-gray-600">Premium quality assured</p>
                  </div>
                  <button className="bg-black text-white p-3 rounded-xl hover:bg-primary transition-colors group">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              {[
                { label: 'Premium Materials', value: '100%' },
                { label: 'Satisfied Clients', value: '10K+' },
                { label: 'Unique Designs', value: '50+' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100 hover:border-primary/20 transition-colors"
                >
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignedSection;