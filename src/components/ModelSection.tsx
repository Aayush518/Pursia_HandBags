import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const ModelSection = () => {
  const [currentModel, setCurrentModel] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const models = [
    {
      image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&q=80',
      name: 'Classic Elegance',
      description: 'Our signature collection featuring timeless designs.',
      price: '$299.00'
    },
    {
      image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&q=80',
      name: 'Modern Minimalist',
      description: 'Clean lines meet contemporary style.',
      price: '$259.00'
    },
    {
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80',
      name: 'Urban Chic',
      description: 'Perfect for the fashion-forward urbanite.',
      price: '$329.00'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('models');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const nextModel = () => {
    setCurrentModel((prev) => (prev + 1) % models.length);
  };

  const prevModel = () => {
    setCurrentModel((prev) => (prev - 1 + models.length) % models.length);
  };

  return (
    <div className="px-4 sm:px-8 lg:px-16 py-24 bg-gradient-to-b from-white to-[#F9F9F9]">
      <div className={`max-w-[1440px] mx-auto transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}>
        <div className="relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 lg:pr-8">
              <div className="lg:sticky lg:top-24">
                <h2 className="text-4xl sm:text-5xl font-light mb-6" style={{ fontFamily: 'Helvetica Neue' }}>
                  Experience Our
                  <br />
                  Latest Models
                </h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Each piece is meticulously crafted to bring you the perfect blend of style and functionality.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <img 
                        src={models[currentModel].image} 
                        alt="Thumbnail"
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium">{models[currentModel].name}</h3>
                      <p className="text-gray-600">{models[currentModel].description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-semibold">{models[currentModel].price}</span>
                    <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-primary transition-colors duration-300 flex items-center gap-2 group">
                      View Details
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                  <div className="flex items-center gap-4 pt-6">
                    <button 
                      onClick={prevModel}
                      className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                    <div className="flex-1 h-[2px] bg-gray-100 relative">
                      <div 
                        className="absolute top-0 left-0 h-full bg-primary transition-all duration-500"
                        style={{ width: `${((currentModel + 1) / models.length) * 100}%` }}
                      ></div>
                    </div>
                    <button 
                      onClick={nextModel}
                      className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[3/4] rounded-[40px] overflow-hidden bg-gradient-to-br from-[#F9F9F9] to-[#F1F1F1] group">
                <img 
                  src={models[currentModel].image}
                  alt={models[currentModel].name}
                  className="w-full h-full object-cover mix-blend-multiply transform scale-90 group-hover:scale-95 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelSection;