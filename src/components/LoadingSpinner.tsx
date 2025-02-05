import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="relative">
        {/* Main spinner */}
        <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
        
        {/* Inner decorative elements */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-primary/10 border-t-primary/40 rounded-full animate-spin-reverse"></div>
        </div>
        
        {/* Loading text */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <span className="text-sm text-gray-600 font-medium">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;