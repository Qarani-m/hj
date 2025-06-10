// src/components/sections/Mission.jsx
import React from 'react';

const Testimonial = ({ quote, author, title, image }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <div className="flex items-start mb-4">
      <div className="text-green-600 text-4xl mr-4">"</div>
      <p className="text-gray-700 italic leading-relaxed">{quote}</p>
    </div>
    <div className="flex items-center">
      <img 
        src={image} 
        alt={author}
        className="w-12 h-12 rounded-full mr-4 object-cover"
      />
      <div>
        <h4 className="font-semibold text-gray-900">{author}</h4>
        <p className="text-sm text-gray-600">{title}</p>
      </div>
    </div>
  </div>
);

const Mission = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Left side - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              OUR MISSION
            </h2>
            <div className="w-24 h-1 bg-green-600 mb-6"></div>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              To nurture an environmentally conscious generation.
            </p>
            
            <p className="text-gray-600 leading-relaxed mb-8">
              Green Generation Initiative (GGI) is a grassroots organization working to educate a new 
              generation of children, youth, women and communities empowering them with 
              nature-based solutions, green innovations, investments and policies that drive a 
              sustainable future.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <img 
                  src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'><rect width='300' height='200' fill='%2332CD32'/><circle cx='100' cy='100' r='40' fill='%23FFD700'/><circle cx='200' cy='100' r='40' fill='%23FFD700'/><rect x='50' y='150' width='200' height='30' fill='%23228B22'/></svg>"
                  alt="Community recycling" 
                  className="w-full h-32 object-cover rounded mb-2"
                />
                <p className="text-sm text-gray-600">
                  To nurture an environmentally conscious generation.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <img 
                  src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'><rect width='300' height='200' fill='%23006400'/><rect x='50' y='50' width='200' height='100' fill='%2332CD32'/><circle cx='150' cy='100' r='30' fill='%23FFD700'/></svg>"
                  alt="Team collaboration" 
                  className="w-full h-32 object-cover rounded mb-2"
                />
                <p className="text-sm text-gray-600">
                  Building sustainable communities through collaborative action.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Testimonials */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">TESTIMONIALS</h3>
            
            <Testimonial
              quote="Elizabeth Wathuti through her organization, the Green Generation Initiative are doing outstanding work in climate action and youth engagement, both nationally and within local communities. The Ministry of Environment is proud of her work and is collaborate with her to strengthen restoration efforts in Nairobi River, Climate action, and youth empowerment."
              author="Hon. Soipan Tuya"
              title="Former CS, Ministry of Environment & Forestry"
              image="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='50' fill='%23228B22'/><circle cx='50' cy='40' r='15' fill='%23FFF'/><path d='M35 70 Q50 85 65 70' stroke='%23FFF' stroke-width='3' fill='none'/></svg>"
            />

            <div className="text-center">
              <img 
                src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 150'><rect width='200' height='150' fill='%23F5DEB3'/><polygon points='100,30 120,70 80,70' fill='%238B4513'/><circle cx='100' cy='100' r='20' fill='%238B4513'/></svg>"
                alt="Wildlife conservation" 
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;