// src/components/sections/Collaborations.jsx
import React from 'react';

const StatCard = ({ icon, number, label, description }) => (
  <div className="text-center text-white">
    <div className="flex justify-center mb-4">
      {icon}
    </div>
    <div className="text-4xl md:text-5xl font-bold mb-2">{number}</div>
    <div className="text-lg font-semibold mb-2">{label}</div>
    <div className="text-sm opacity-90">{description}</div>
  </div>
);

const Collaborations = () => {
  const stats = [
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
          <circle cx="12" cy="19" r="3" />
        </svg>
      ),
      number: "6,590,000",
      label: "TREES GROWN",
      description: ""
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2M4 1v2h14V1H4m0 4v2h14V5H4m0 4v2h14V9H4m0 4v2h14v-2H4m0 4v2h14v-2H4z" />
          <path d="M12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5z" />
        </svg>
      ),
      number: "205,700",
      label: "LIVES",
      description: "IMPACTED"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
        </svg>
      ),
      number: "308",
      label: "PROJECTS",
      description: "EXECUTED"
    }
  ];

  return (
    <section className="relative py-20 bg-green-800 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-green-800/90"></div>
      
      {/* Background pattern or image would go here */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-700 to-green-900"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'><rect width='600' height='400' fill='%23228B22'/><circle cx='150' cy='150' r='60' fill='%2332CD32'/><circle cx='300' cy='200' r='40' fill='%2390EE90'/><circle cx='450' cy='120' r='50' fill='%2332CD32'/><rect x='100' y='250' width='400' height='100' fill='%23006400'/><circle cx='200' cy='300' r='20' fill='%23FFD700'/><circle cx='400' cy='280' r='25' fill='%23FFD700'/></svg>"
                alt="Community collaboration" 
                className="w-full h-80 object-cover"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              WITH COLLABORATIONS, 
              <span className="text-green-300">IMPACT HAPPENS</span>
            </h2>
            
            <p className="text-xl mb-8 leading-relaxed opacity-90">
              Our projects are designed to achieve a Triple-Bottom-line impact of 
              People, Planet, and Prosperity, the essence of sustainable development.
            </p>
            
            <p className="text-lg mb-12 leading-relaxed opacity-80">
              "We believe that, only by creating a generation of environmentally conscious individuals, will we 
              cultivate the ambassadors needed to champion sustainability across society."
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <StatCard
                  key={index}
                  icon={stat.icon}
                  number={stat.number}
                  label={stat.label}
                  description={stat.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaborations;