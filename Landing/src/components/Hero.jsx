import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gray-900 min-h-[80vh] flex items-center justify-center px-4 py-8 md:py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
          Revolutionize Your Hiring Process
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto px-2">
          Our AI-powered platform matches the perfect candidates with your job openings, saving you time and resources.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4 sm:px-0">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md text-base sm:text-lg font-medium transition-colors w-full sm:w-auto">
            Pre-register Now
          </button>
          <button className="bg-transparent border border-white text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md text-base sm:text-lg font-medium hover:bg-white hover:text-gray-900 transition-colors w-full sm:w-auto">
            Learn More
          </button>
        </div>
        
        {/* Image placeholder */}
        <div className="mt-8 md:mt-12 bg-gray-800 h-48 sm:h-56 md:h-64 max-w-full sm:max-w-2xl mx-auto rounded-lg flex items-center justify-center px-4 sm:px-0">
          <span className="text-gray-400 text-sm sm:text-base">Product Screenshot</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;