// src/components/sections/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen bg-cover bg-center bg-no-repeat" 
             style={{
               backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><linearGradient id="sky" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:%23B8E6B8;stop-opacity:1" /><stop offset="100%" style="stop-color:%2387CEEB;stop-opacity:1" /></linearGradient></defs><rect width="1200" height="800" fill="url(%23sky)"/><rect x="0" y="400" width="1200" height="400" fill="%23228B22"/><rect x="100" y="200" width="80" height="200" fill="%234169E1"/><rect x="120" y="180" width="40" height="40" rx="20" fill="%23FFF"/><path d="M140 200 L130 180 L150 180 Z" fill="%23FFF"/><rect x="900" y="250" width="80" height="150" fill="%234169E1"/><rect x="920" y="230" width="40" height="40" rx="20" fill="%23FFF"/><path d="M940 250 L930 230 L950 230 Z" fill="%23FFF"/></svg>')`
             }}>
      
      {/* Solar panels and wind turbines would be background image - using placeholder for now */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-800/60"></div>
      
      <div className="relative h-full flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Green Energy
            <br />
            <span className="text-green-400">Transition</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
            Enhancing energy security in low carbon emissions pathways towards net zero industrialization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Learn More
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Our Projects
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements to simulate the solar panels effect */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-green-900/50 to-transparent"></div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;