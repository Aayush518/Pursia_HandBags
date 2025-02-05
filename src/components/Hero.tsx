import React, { useState, useEffect, useRef } from 'react';
import { Play, ArrowRight, ChevronRight, ShoppingBag, Star } from 'lucide-react';

export const sections = [
  { id: 1, title: "Featured", ref: "featured" },
  { id: 2, title: "Popular", ref: "popular" },
  { id: 3, title: "Models", ref: "models" },
  { id: 4, title: "Design", ref: "design" },
  { id: 5, title: "New", ref: "new" }
];

const Hero = () => {
  const [activeSection, setActiveSection] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (parallaxRef.current) {
        const rect = parallaxRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        
        setMousePosition({
          x: x * 30,
          y: y * 30
        });
      }
    };

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen px-4 sm:px-8 lg:px-16 pt-24 pb-16 overflow-hidden luxury-parallax" ref={parallaxRef}>
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-primary-50/30 via-transparent to-transparent opacity-70"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSJyZ2JhKDAsIDAsIDAsIDAuMSkiLz48L3N2Zz4=')] opacity-10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Enhanced Watermark */}
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{
          opacity: Math.max(0.03, 0.08 - scrollPosition / 2000),
          transform: `rotate(-45deg) scale(${1 + scrollPosition / 1000})`,
          transition: 'opacity 0.3s ease-out'
        }}
      >
        <div className="text-[20vw] font-bold text-black/10 whitespace-nowrap luxury-text-gradient">
          Aayush518
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16 relative">
        <div className={`w-full lg:max-w-[560px] text-center lg:text-left transform transition-all duration-1000 ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
        }`}>
          <div className="relative mb-8">
            <div className="inline-block px-6 py-2 bg-primary/10 text-primary rounded-full text-sm mb-6 hover:bg-primary/20 transition-colors cursor-pointer group luxury-button">
              <span className="relative inline-flex items-center">
                <ShoppingBag className="w-4 h-4 mr-2" />
                Spring Collection 2024
                <ChevronRight className="inline-block ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-[1.1] font-light tracking-tight luxury-text-reveal" style={{ fontFamily: 'Helvetica Neue' }}>
              Your Ultimate
              <br />
              <span className="relative inline-block">
                Destination
                <div className="absolute -right-16 top-1/2 w-24 h-12 opacity-60">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <path
                      d="M20 50C40 20 60 80 80 50"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="animate-draw"
                    />
                  </svg>
                </div>
              </span>
              <br />
              <span className="relative inline-block luxury-text-gradient">
                for Luxe Handbags
                <span className="absolute -right-4 -top-2 w-8 h-8 bg-primary/20 rounded-full -z-10 animate-pulse"></span>
              </span>
            </h1>
          </div>
          
          <p className="text-gray-600 mb-12 text-xl max-w-[500px] mx-auto lg:mx-0 leading-relaxed luxury-text-reveal" style={{ animationDelay: '0.2s' }}>
            Discover our curated collection of premium handbags, where style meets sophistication in every stitch and detail.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
            <button className="group bg-black text-white px-8 py-4 rounded-full hover:bg-primary transition-all duration-500 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20 luxury-button">
              <span className="relative inline-flex items-center">
                Shop Collection
                <ArrowRight className="inline-block ml-2 w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
                <span className="absolute inset-0 rounded-full bg-white/20 animate-ping"></span>
              </span>
            </button>
            <button className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full border-2 border-black/10 bg-white/80 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 transform hover:-translate-y-1 hover:shadow-xl luxury-button">
              <div className="relative">
                <Play className="w-5 h-5 fill-current relative z-10" />
                <div className="absolute inset-0 bg-primary-100 rounded-full transform scale-0 group-hover:scale-150 transition-transform duration-500 opacity-50"></div>
              </div>
              Watch Story
            </button>
          </div>

          {/* Enhanced Features List */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-6">
            {[
              { label: 'Premium Quality', value: '100%' },
              { label: 'Unique Designs', value: '500+' },
              { label: 'Happy Clients', value: '10K+' }
            ].map((feature, index) => (
              <div 
                key={index}
                className="text-center p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 luxury-card-3d"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-2xl font-bold text-primary mb-1 luxury-text-gradient">{feature.value}</div>
                <div className="text-sm text-gray-600">{feature.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={`relative w-full lg:w-auto transform transition-all duration-1000 ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
        }`}>
          <div className="relative luxury-parallax-layer" style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) rotate(${mousePosition.x * 0.05}deg)`
          }}>
            <div className="relative aspect-square max-w-[700px] luxury-image">
              <img 
                src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80"
                alt="Luxury Handbag"
                className="w-full h-full object-cover rounded-[40px] shadow-2xl transform hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-white/20 mix-blend-overlay rounded-[40px]"></div>
            </div>

            {/* Enhanced Floating Elements */}
            <div className="absolute top-8 right-8 transform hover:scale-110 transition-transform luxury-card-3d">
              <div className="relative">
                <div className="absolute inset-0 bg-primary blur-xl opacity-20"></div>
                <div className="relative bg-black text-white px-6 py-3 rounded-2xl shadow-2xl luxury-backdrop">
                  <div className="text-2xl font-bold luxury-text-gradient">50%</div>
                  <div className="text-sm opacity-80">Season Sale</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 left-8 right-8">
              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-2xl luxury-card-3d">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12">
                      <img 
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
                        alt="Designer"
                        className="w-full h-full rounded-full object-cover border-2 border-white luxury-border"
                      />
                      <div className="absolute -right-1 -bottom-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                    <div>
                      <h4 className="font-medium">Sarah Johnson</h4>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                        <span>4.9 Designer Rating</span>
                      </div>
                    </div>
                  </div>
                  <button className="bg-black text-white p-3 rounded-xl hover:bg-primary transition-colors luxury-button">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;