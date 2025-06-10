// src/components/sections/Partners.jsx
import React from 'react';

const PartnerLogo = ({ name, logo }) => (
  <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 grayscale hover:grayscale-0">
    <img 
      src={logo}
      alt={name}
      className="max-h-16 max-w-full object-contain"
    />
  </div>
);

const Partners = () => {
  const partners = [
    {
      name: "UN Women",
      logo: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 60'><rect width='150' height='60' fill='%23006BA6'/><text x='75' y='35' text-anchor='middle' fill='%23FFF' font-size='14' font-weight='bold'>UN Women</text></svg>"
    },
    {
      name: "Coca Cola",
      logo: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 60'><rect width='150' height='60' fill='%23FF0000'/><text x='75' y='35' text-anchor='middle' fill='%23FFF' font-size='12' font-weight='bold'>Coca-Cola</text></svg>"
    },
    {
      name: "Kenya Forest Service",
      logo: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 60'><rect width='150' height='60' fill='%23228B22'/><circle cx='75' cy='30' r='20' fill='%2332CD32'/><text x='75' y='55' text-anchor='middle' fill='%23000' font-size='8'>KFS</text></svg>"
    },
    {
      name: "Hotpoint",
      logo: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 60'><rect width='150' height='60' fill='%23FF6600'/><text x='75' y='35' text-anchor='middle' fill='%23FFF' font-size='12' font-weight='bold'>Hotpoint</text></svg>"
    },
    {
      name: "Ministry of Environment",
      logo: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 60'><rect width='150' height='60' fill='%23008000'/><rect x='70' y='20' width='10' height='20' fill='%23FFF'/><text x='75' y='55' text-anchor='middle' fill='%23FFF' font-size='8'>Ministry</text></svg>"
    },
    {
      name: "WWF",
      logo: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 60'><rect width='150' height='60' fill='%23000'/><circle cx='75' cy='30' r='15' fill='%23FFF'/><text x='75' y='55' text-anchor='middle' fill='%23FFF' font-size='10'>WWF</text></svg>"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            OUR PARTNERS
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <PartnerLogo
              key={index}
              name={partner.name}
              logo={partner.logo}
            />
          ))}
        </div>

        {/* Partnership Message */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are proud to collaborate with leading organizations that share our vision of environmental 
            sustainability and climate action. Together, we're making a lasting impact on communities across Africa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;