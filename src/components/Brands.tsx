import React, { useState, useEffect } from 'react';
import { Award, Shield, Star, ArrowRight, Sparkles } from 'lucide-react';

const brands = [
  {
    name: 'Louis Vuitton',
    initials: 'LV',
    fullName: 'LOUIS VUITTON PARIS',
    year: '1854',
    description: 'French luxury fashion house',
    accent: '#B17C3F',
    pattern: 'checkerboard'
  },
  {
    name: 'Chanel',
    initials: 'N°5',
    fullName: 'CHANEL PARIS',
    year: '1909',
    description: 'Haute couture and luxury goods',
    accent: '#1B1B1B',
    pattern: 'quilted'
  },
  {
    name: 'Gucci',
    initials: 'GG',
    fullName: 'GUCCI FIRENZE',
    year: '1921',
    description: 'Italian luxury fashion brand',
    accent: '#1F4739',
    pattern: 'stripes'
  },
  {
    name: 'Hermès',
    initials: 'H',
    fullName: 'HERMÈS PARIS',
    year: '1837',
    description: 'High-fashion luxury goods',
    accent: '#FF4400',
    pattern: 'chain'
  },
  {
    name: 'Prada',
    initials: 'PR',
    fullName: 'PRADA MILANO',
    year: '1913',
    description: 'Italian luxury fashion house',
    accent: '#000000',
    pattern: 'geometric'
  },
  {
    name: 'Dior',
    initials: 'CD',
    fullName: 'CHRISTIAN DIOR',
    year: '1946',
    description: 'French luxury goods company',
    accent: '#242424',
    pattern: 'floral'
  }
];

const Brands = () => {
  const [hoveredBrand, setHoveredBrand] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('brands-section');
      if (element) {
        const rect = element.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, 1 - (rect.bottom / (window.innerHeight + rect.height))));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x: x * 30, y: y * 30 });
  };

  return (
    <div id="brands-section" className="relative overflow-hidden bg-white" onMouseMove={handleMouseMove}>
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(177,124,63,0.1),rgba(255,255,255,0)_50%)]"></div>
        <div className="absolute inset-0 pattern-dots opacity-5"></div>
        <div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white"
          style={{
            transform: `translateY(${scrollProgress * 100}px)`,
            opacity: 1 - scrollProgress
          }}
        ></div>
      </div>

      <div className="relative px-4 sm:px-8 lg:px-16 py-24">
        <div className="max-w-[1440px] mx-auto">
          {/* Enhanced Header Section */}
          <div className="text-center mb-20">
            <div className="inline-block relative">
              <div className="absolute inset-0 animate-pulse bg-primary/20 blur-xl rounded-full"></div>
              <div className="relative inline-block px-6 py-2 bg-primary/10 text-primary rounded-full text-sm mb-6 hover:bg-primary/20 transition-all duration-300 cursor-pointer group">
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 animate-luxury-sparkle" />
                  <span className="relative">
                    Exclusive Partnerships
                    <span className="absolute inset-0 bg-white/20 rounded-full animate-ping-slow opacity-75"></span>
                  </span>
                </span>
              </div>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-light mb-6 relative inline-block" style={{ fontFamily: 'Playfair Display' }}>
              Our Luxury Partners
              <div className="absolute -right-8 -top-8 w-16 h-16 bg-primary/10 rounded-full blur-2xl animate-pulse"></div>
            </h2>
            
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed luxury-text-balance">
              Discover our curated selection of the world's most prestigious fashion houses, each bringing their unique heritage of craftsmanship and excellence.
            </p>
          </div>

          {/* Enhanced Brands Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {brands.map((brand, index) => (
              <div
                key={brand.name}
                className="group relative bg-white rounded-[2rem] p-8 transition-all duration-700 hover:-translate-y-2 overflow-hidden luxury-card-3d"
                onMouseEnter={() => setHoveredBrand(index)}
                onMouseLeave={() => setHoveredBrand(null)}
                style={{
                  transform: hoveredBrand === index 
                    ? `perspective(1000px) rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)`
                    : 'perspective(1000px) rotateX(0) rotateY(0)',
                  boxShadow: hoveredBrand === index
                    ? `0 20px 40px ${brand.accent}20, 0 0 0 1px ${brand.accent}10`
                    : '0 10px 30px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.03)'
                }}
              >
                {/* Enhanced Background Pattern */}
                <div 
                  className="absolute inset-0 opacity-5 transition-opacity duration-500 group-hover:opacity-10"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30L30 0z' fill='${encodeURIComponent(brand.accent)}' fill-opacity='0.1'/%3E%3C/svg%3E")`,
                    backgroundSize: '60px 60px',
                    transform: hoveredBrand === index ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)',
                    transition: 'transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)'
                  }}
                ></div>

                {/* Enhanced Content Container */}
                <div className="relative">
                  {/* Brand Initial and Name with 3D Effect */}
                  <div className="mb-8 relative transform-gpu" style={{ transform: 'translateZ(50px)' }}>
                    <div className="flex items-center gap-6">
                      <div 
                        className="w-24 h-24 rounded-2xl flex items-center justify-center transition-all duration-700 group-hover:scale-110 relative overflow-hidden"
                        style={{ 
                          background: `linear-gradient(135deg, ${brand.accent}15, ${brand.accent}25)`,
                          boxShadow: `0 10px 30px ${brand.accent}10`
                        }}
                      >
                        <div 
                          className="text-4xl font-serif transition-all duration-500 relative z-10"
                          style={{ 
                            fontFamily: 'Playfair Display',
                            color: brand.accent,
                            textShadow: hoveredBrand === index ? `0 2px 10px ${brand.accent}40` : 'none'
                          }}
                        >
                          {brand.initials}
                        </div>
                        
                        {/* Animated Background */}
                        <div 
                          className="absolute inset-0 opacity-20 transition-transform duration-700 group-hover:scale-150"
                          style={{
                            background: `linear-gradient(45deg, transparent, ${brand.accent}, transparent)`,
                            transform: hoveredBrand === index ? 'translateX(100%)' : 'translateX(-100%)'
                          }}
                        ></div>
                      </div>

                      <div className="transform-gpu" style={{ transform: 'translateZ(30px)' }}>
                        <h3 
                          className="text-2xl font-light mb-2 transition-all duration-300 group-hover:text-primary relative"
                          style={{ fontFamily: 'Playfair Display' }}
                        >
                          {brand.name}
                          {hoveredBrand === index && (
                            <div className="absolute -inset-x-4 -inset-y-2 bg-primary/5 rounded-lg -z-10 animate-luxury-fade"></div>
                          )}
                        </h3>
                        <div 
                          className="text-sm tracking-[0.2em] font-light relative overflow-hidden"
                          style={{ color: brand.accent }}
                        >
                          <span className="relative inline-block">
                            {brand.fullName}
                            {hoveredBrand === index && (
                              <div 
                                className="absolute bottom-0 left-0 w-full h-[1px] bg-current transform origin-left transition-transform duration-500"
                                style={{ transform: 'scaleX(1)' }}
                              ></div>
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Brand Info */}
                  <div className="space-y-6 transform-gpu" style={{ transform: 'translateZ(20px)' }}>
                    <p className="text-gray-600 leading-relaxed">{brand.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div 
                          className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-500"
                          style={{ 
                            background: hoveredBrand === index ? brand.accent : `${brand.accent}10`,
                            color: hoveredBrand === index ? 'white' : brand.accent
                          }}
                        >
                          Est. {brand.year}
                        </div>
                      </div>
                      <button 
                        className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 relative overflow-hidden"
                        style={{ 
                          background: brand.accent,
                          transform: 'translateZ(20px)'
                        }}
                      >
                        <ArrowRight className="w-5 h-5 text-white relative z-10" />
                        {hoveredBrand === index && (
                          <div className="absolute inset-0 bg-white/20 animate-ping"></div>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Enhanced Decorative Elements */}
                  <div 
                    className="absolute top-0 right-0 w-32 h-32 opacity-10 transition-all duration-700"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${brand.accent}, transparent)`,
                      filter: 'blur(40px)',
                      transform: hoveredBrand === index ? 'scale(1.5) rotate(45deg)' : 'scale(1) rotate(0deg)'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Stats Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-[2rem]"></div>
            <div className="relative bg-white/80 backdrop-blur-xl shadow-xl rounded-[2rem] p-12 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 pattern-lines opacity-5"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                {[
                  { value: '170+', label: 'Years of Combined Heritage', icon: Shield },
                  { value: '12K+', label: 'Exclusive Products', icon: Star },
                  { value: '150+', label: 'Countries Worldwide', icon: Award }
                ].map((stat, index) => (
                  <div 
                    key={index}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-primary/5 rounded-2xl transition-all duration-500 group-hover:scale-105"></div>
                    <div className="relative p-8 rounded-2xl bg-white shadow-lg transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl">
                      <stat.icon className="w-8 h-8 text-primary mb-4 transition-transform duration-500 group-hover:scale-110" />
                      <div className="text-4xl font-bold text-primary mb-2 luxury-gradient-text">{stat.value}</div>
                      <div className="text-gray-600">{stat.label}</div>
                      
                      {/* Decorative Elements */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-xl transition-all duration-500 group-hover:scale-150"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;