import React from 'react';
import { ArrowRight } from 'lucide-react';

const NewArrivals = () => {
  return (
    <div className="bg-gradient-to-br from-[#1B1B1B] to-[#2A2A2A] text-white px-4 sm:px-8 lg:px-16 py-16 sm:py-20 rounded-[40px] mx-4 sm:mx-8 mb-16">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        <div className="max-w-md text-center lg:text-left">
          <div className="inline-block mb-6 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full">
            <span className="text-sm font-medium text-white/90">Spring Collection 2024</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-light mb-6" style={{ fontFamily: 'Helvetica Neue' }}>
            New Arrivals 2024
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Elevate Your Everyday | Step Out in Style with Our Exclusive Collection.
          </p>
          <button className="group bg-white text-black px-8 py-4 rounded-full hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2 mx-auto lg:mx-0">
            Shop Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="relative w-full lg:w-auto">
          <img 
            src="https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&q=80"
            alt="New Arrival Bag"
            className="w-full lg:w-[700px] h-[400px] sm:h-[500px] object-cover rounded-[40px] shadow-2xl"
          />
          <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm text-black px-6 py-3 rounded-full font-medium">
            New Collection
          </div>
          <div className="absolute -bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md rounded-2xl p-6 flex items-center justify-between shadow-xl">
            <div>
              <p className="text-sm text-white/70">Starting from</p>
              <p className="text-2xl font-medium">$299.00</p>
            </div>
            <button className="bg-white text-black px-6 py-3 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 font-medium">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;