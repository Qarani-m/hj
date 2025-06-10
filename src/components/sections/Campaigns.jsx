// src/components/sections/Campaigns.jsx
import React from 'react';

const CampaignCard = ({ image, title, description, progress = 0 }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
    <div className="h-64 bg-gray-200 overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      
      {/* Progress bar */}
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-green-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      
      <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300">
        DONATE NOW
      </button>
    </div>
  </div>
);

const Campaigns = () => {
  const campaigns = [
    {
      image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><rect width='400' height='300' fill='%2332CD32'/><rect x='50' y='200' width='300' height='100' fill='%23228B22'/><circle cx='100' cy='100' r='40' fill='%23006400'/><circle cx='200' cy='80' r='35' fill='%23006400'/><circle cx='300' cy='120' r='45' fill='%23006400'/><rect x='90' y='140' width='20' height='60' fill='%238B4513'/><rect x='190' y='115' width='20' height='85' fill='%238B4513'/><rect x='290' y='165' width='20' height='35' fill='%238B4513'/></svg>",
      title: "COMMUNITY RESILIENCE",
      description: "We empower grassroots communities to strengthen their climate resilience by integrating sustainable practices into their livelihoods and livelihoods systems while promoting environmentally-friendly, sustainable agro-forestry, seedling production, and fruit orchards and to enhance food security, create income, and promise environmental stewardship, and drive local economic development.",
      progress: 75
    },
    {
      image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><rect width='400' height='300' fill='%2387CEEB'/><rect x='0' y='200' width='400' height='100' fill='%23006400'/><polygon points='50,200 150,150 200,170 250,140 300,160 350,130 400,150 400,200 0,200' fill='%23228B22'/><circle cx='100' cy='80' r='30' fill='%23FFD700'/><rect x='50' y='50' width='300' height='20' fill='%23FFF'/><rect x='150' y='100' width='100' height='50' fill='%2332CD32'/></svg>",
      title: "CONSERVATION AND RESTORATION",
      description: "Our project initiatives focus on preserving and restoring natural ecosystems to maintain biodiversity and support ecosystem services through large-scale forest adoption for restoration, forest geo-mapping, source water protection and water catchment restoration, A climate accelerator program and movement-building network for emerging young climate leaders. Additionally, we engage in Decarbonization projects in clean energy, ESG and green investment portfolio management for ventures looking to access the African market.",
      progress: 60
    },
    {
      image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><rect width='400' height='300' fill='%23F0E68C'/><rect x='50' y='50' width='300' height='200' fill='%23FFF'/><circle cx='100' cy='100' r='25' fill='%23FF6347'/><circle cx='200' cy='120' r='30' fill='%2332CD32'/><circle cx='300' cy='100' r='25' fill='%234169E1'/><rect x='70' y='180' width='260' height='40' fill='%23E0E0E0'/><rect x='70' y='200' width='200' height='20' fill='%23228B22'/></svg>",
      title: "CLIMATE & YOUTH ACTION",
      description: "Our Climate Action and Youth Movement building program empowers young people and organizations to engage in climate advocacy, policy-making and movement building. Through our accelerator program we aim to build the next generation of climate leaders and innovators across green and contribute to global sustainability efforts and multilateral policy systems.",
      progress: 85
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            OUR CAMPAIGNS
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            GGI's key projects include the Fruit Trees for Schools Initiative, which greens schools with fruit and indigenous trees while 
            promoting students fruit-nutrition, psycho-social wellbeing, environmental tranquility and education through eco-clubs. Our 
            biodiversity and climate initiative addresses habitat and ecosystem restoration through community-based reforestation and 
            source water protection in catchments through collaborations. A climate accelerator program and movement-building 
            network for emerging young climate leaders. Additionally, we engage in Decarbonization projects in clean energy, ESG and 
            green investment portfolio management for ventures looking to access the African market.
          </p>
        </div>

        {/* Campaigns Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {campaigns.map((campaign, index) => (
            <CampaignCard
              key={index}
              image={campaign.image}
              title={campaign.title}
              description={campaign.description}
              progress={campaign.progress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Campaigns;