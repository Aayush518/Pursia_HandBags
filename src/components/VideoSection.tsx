import React from 'react';
import { Play } from 'lucide-react';

const VideoSection = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-16 py-16 bg-[#F9F9F9]">
      <div className="max-w-[1440px] mx-auto">
        <div className="relative rounded-[32px] overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80"
            alt="Video Thumbnail"
            className="w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent">
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center group/play transform hover:scale-110 transition-all duration-300 hover:bg-primary">
                <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-current ml-1 text-black group-hover/play:text-white transition-colors" />
              </button>
            </div>
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h3 className="text-2xl sm:text-3xl font-light mb-2" style={{ fontFamily: 'Helvetica Neue' }}>
                For your everyday Belongings
              </h3>
              <p className="text-white/80 max-w-md">
                Experience the Art of Handbag Perfection through our craftsmanship story
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;