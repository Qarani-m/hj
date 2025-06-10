// src/components/sections/CallToAction.jsx
import React from 'react';

const CallToAction = () => {
  return (
    <section className="relative py-20 bg-cover bg-center bg-no-repeat" 
             style={{
               backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><rect width="1200" height="600" fill="%23654321"/><rect x="0" y="400" width="1200" height="200" fill="%23228B22"/><circle cx="200" cy="200" r="80" fill="%2332CD32"/><circle cx="400" cy="150" r="60" fill="%2332CD32"/><circle cx="600" cy="180" r="70" fill="%2332CD32"/><circle cx="800" cy="120" r="55" fill="%2332CD32"/><circle cx="1000" cy="160" r="65" fill="%2332CD32"/><rect x="190" y="280" width="20" height="120" fill="%238B4513"/><rect x="390" y="210" width="20" height="190" fill="%238B4513"/><rect x="590" y="250" width="20" height="150" fill="%238B4513"/><rect x="790" y="175" width="20" height="225" fill="%238B4513"/><rect x="990" y="225" width="20" height="175" fill="%238B4513"/></svg>')`
             }}>
      
      <div className="relative max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          JOIN US & MAKE A GREEN IMPACT BY{' '}
          <span className="text-green-400">DONATION</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-white mb-12 leading-relaxed opacity-90 max-w-3xl mx-auto">
          With your Support, together, we can combat climate change, grow more trees, restore more forests, bio-diversities, water catchments and green our world. 
          Every contribution, no matter the size, enables us to create a generation of environmentally conscious individuals, youths and communities. You can join us 
          or support us in any of our events, campaigns or projects.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-lg text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
            DONATE NOW
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-green-900 px-10 py-4 rounded-lg text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-xl">
            JOIN NOW
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-green-400 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-green-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-green-400 rounded-full opacity-25 animate-pulse delay-500"></div>
      </div>
    </section>
  );
};

export default CallToAction;