import React, { useState } from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { sections } from './Hero';

const FixedNav = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeSection, setActiveSection] = React.useState(1);

  const scrollToSection = (ref: string) => {
    const element = document.getElementById(ref);
    if (element) {
      const offset = 80; // Height of the fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      sections.forEach(({ id, ref }) => {
        const element = document.getElementById(ref);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed right-8 top-1/2 -translate-y-1/2 z-[100] hidden lg:block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transform: 'translate3d(0, -50%, 0)' }}
    >
      <div className="relative">
        {/* Background panel */}
        <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-[160px] h-auto py-4 bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-gray-100/20 transition-all duration-500 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 pointer-events-none'
        }`}>
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.ref)}
              className={`group relative flex items-center justify-end w-full px-4 py-2 transition-all duration-300 ${
                activeSection === section.id 
                  ? 'text-primary' 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <div className="relative flex items-center gap-2 group">
                <span className={`text-xs font-medium transition-all duration-300 ${
                  isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                }`}>
                  {section.title}
                </span>
                
                <div className={`flex items-center justify-center w-6 h-6 rounded-lg transition-all duration-300 ${
                  activeSection === section.id 
                    ? 'bg-primary/10 text-primary' 
                    : 'bg-transparent text-gray-400 group-hover:bg-gray-100'
                }`}>
                  <span className="text-[10px] font-medium">
                    {String(section.id).padStart(2, '0')}
                  </span>
                </div>

                {activeSection === section.id && (
                  <ArrowRight className={`w-3 h-3 absolute -right-3 transition-all duration-300 ${
                    isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`} />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Collapsed state - dots */}
        <div className="space-y-2">
          {sections.map((section) => (
            <div
              key={section.id}
              className={`relative transition-all duration-300 ${
                isHovered ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'
              }`}
            >
              <div 
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeSection === section.id 
                    ? 'bg-primary scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => scrollToSection(section.ref)}
              />
              {activeSection === section.id && (
                <div className="absolute inset-0 animate-ping">
                  <div className={`w-2 h-2 rounded-full bg-primary/30`} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Hover indicator */}
        <div className={`absolute right-0 top-1/2 -translate-y-1/2 transition-all duration-300 ${
          isHovered ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'
        }`}>
          <div className="w-5 h-5 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm border border-gray-100/20 hover:bg-white/90 transition-colors">
            <ChevronRight className="w-3 h-3 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedNav;