// src/components/sections/Welcome.jsx
import React from 'react';

const ServiceCard = ({ image, title, description, className = "" }) => (
  <div className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${className}`}>
    <div className="h-48 bg-gray-200 overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const Welcome = () => {
  const services = [
    {
      image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><rect width='400' height='300' fill='%23228B22'/><circle cx='200' cy='150' r='60' fill='%2390EE90'/><rect x='190' y='90' width='20' height='60' fill='%238B4513'/><circle cx='200' cy='90' r='40' fill='%2332CD32'/></svg>",
      title: "TREE PLANTING & SUPPLY",
      description: "Propagating, supplying & planting trees with and for communities."
    },
    {
      image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><rect width='400' height='300' fill='%23006400'/><rect x='50' y='50' width='300' height='200' fill='%2387CEEB'/><rect x='80' y='80' width='60' height='40' fill='%23FFD700'/><rect x='160' y='100' width='80' height='60' fill='%23FF6347'/><rect x='260' y='90' width='70' height='50' fill='%2332CD32'/></svg>",
      title: "CORPORATE ESG AND CSR SUPPORT",
      description: "Supporting businesses implement their ESG & CSR commitments and environmental compliance."
    },
    {
      image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><rect width='400' height='300' fill='%23F5DEB3'/><rect x='50' y='50' width='300' height='200' fill='%23FFF'/><rect x='70' y='70' width='80' height='60' fill='%23E0E0E0'/><rect x='170' y='80' width='100' height='40' fill='%23E0E0E0'/><rect x='70' y='150' width='260' height='20' fill='%23E0E0E0'/><rect x='70' y='190' width='200' height='20' fill='%23E0E0E0'/></svg>",
      title: "DOCUMENTING IMPACT STORIES",
      description: "Spotlighting and telling Africa's transformative environmental & climate impact stories."
    }
  ];

  const features = [
    {
      image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><rect width='400' height='300' fill='%2332CD32'/><circle cx='100' cy='100' r='30' fill='%23FFF'/><circle cx='200' cy='120' r='25' fill='%23FFF'/><circle cx='300' cy='90' r='35' fill='%23FFF'/><text x='200' y='200' text-anchor='middle' fill='%23FFF' font-size='24' font-weight='bold'>eco-friendly</text><text x='200' y='240' text-anchor='middle' fill='%23FFF' font-size='16'>Go green</text></svg>",
      title: "SUSTAINABLE BRAND ENDORSEMENT",
      description: "Raising brands visibility by showcasing their sustainability, climate action, and conservation initiatives."
    },
    {
      image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><rect width='400' height='300' fill='%23006400'/><polygon points='50,250 150,50 250,100 350,80 350,250' fill='%23228B22'/><polygon points='60,240 140,60 230,110 340,90 340,240' fill='%2332CD32'/><circle cx='200' cy='150' r='40' fill='%23FFD700'/></svg>",
      title: "AFRICA GREEN INVESTMENTS PORTFOLIO MANAGEMENT",
      description: "Facilitating green investment opportunities to drive Africa's green industrialization."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            WELCOME TO GREEN GENERATION INITIATIVE
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our Work
          </p>
          <p className="text-gray-600 max-w-4xl mx-auto mt-4 leading-relaxed">
            We work on projects that implement nature-based solutions to bring about impactful improvements to address climate change, promote 
            environmental restoration, promote sustainable policy advocacy, de-carbonization, scale youth movement building, increase communities 
            climate resilience and drive green investments in the African market.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <ServiceCard
              key={index}
              image={feature.image}
              title={feature.title}
              description={feature.description}
              className="md:max-w-md"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Welcome;