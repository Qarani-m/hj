import React, { useState } from 'react';

const About = () => {
  const [currentMember, setCurrentMember] = useState(0);

  const teamMembers = [
    {
      name: "Elizabeth Wanjiku",
      role: "Founder & Executive Director",
      image: "👩🏾‍💼",
      bio: "Environmental scientist with 15+ years experience in conservation and community development."
    },
    {
      name: "Laura Mwenda",
      role: "Finance & Admin Lead",
      image: "👩🏾‍💻",
      bio: "Certified accountant specializing in non-profit financial management and compliance."
    },
    {
      name: "John Mwangi",
      role: "Field Operations Lead",
      image: "👨🏾‍🌾",
      bio: "Agricultural expert leading our community programs and field implementations."
    },
    {
      name: "Mike Muthama",
      role: "Conservation Lead",
      image: "👨🏾‍🔬",
      bio: "Conservation biologist focused on forest restoration and biodiversity protection."
    }
  ];

  const testimonials = [
    {
      quote: "I joined Elimika Re-Wind in 2021 after I met my wife Elizabeth Runo and learned of the Green Generation Initiative. That year, planning the seeds for climate action in Kenya and beyond. He was moved to collaborate with her on bringing environmental education & awareness to Kenya.",
      author: "Hon. Stephen Kyalo",
      role: "Founder Exx Advisory Ltd",
      avatar: "👨🏾"
    },
    {
      quote: "During Climate Re-Wind in 2022 FAITH, etc and my wife Elizabeth Runo started visiting schools in Meru, Mombasa and other parts of the Green Generation Initiative. That year, planning the seeds for climate action in Kenya and beyond. He was moved to collaborate with her bringing environmental education & awareness to Kenya.",
      author: "David Ndonyan",
      role: "Chief Climate Officer, FAITH Centre",
      avatar: "👨🏾‍💼"
    },
    {
      quote: "I believe in Re-sustainable and growing movement based in Kyegegwa. Green Generation Initiative is among many organizations in East Africa, making life affordable for the society addressing climate change, environment by supplying and disseminating information.",
      author: "Mary Rubusenzi",
      role: "Former President of United Democratic Front",
      avatar: "👩🏾"
    },
    {
      quote: "I personally have known FAITH and her programs have demonstrating knowledge sustainability and making the community to be sustainable in agriculture for productive life, the program has determined girls to empowerment story and a culture for better living and the environment at all levels in Kenya.",
      author: "Julie Nyanjegen",
      role: "CEO Children Investment Fund Foundation",
      avatar: "👩🏾‍💼"
    },
    {
      quote: "Elimika FAITH and the programs have been significant in demonstrating to the young people and women of different class of people in Kyegegwa. Their efforts will not only help mitigate the effects of Kyegegwa and beyond but also empowerment in communities that help them gain more knowledge with the understanding of the climate agenda and the empowerment of our climate world.",
      author: "Mr. Ngozi Nkwanta",
      role: "COO Environmental Solutions"
    },
    {
      quote: "Elizabeth Runo demonstrated exceptional leadership during our initiative in Kenya. Beyond establishing excellent training structures to help children and youth, she further her guidance. She developed this Movement, policies and empowerment story and a culture for better living of communities both rural and urban environments in Kenya.",
      author: "Chief Officer",
      role: "Climate Resilience Kenya"
    }
  ];

  const impactStats = [
    { value: "6,590,000", label: "Trees Planted", icon: "🌱" },
    { value: "205,700", label: "People Reached", icon: "👥" },
    { value: "308", label: "Communities", icon: "🏘️" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-green-800 to-green-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 400\"%3E%3Cdefs%3E%3Cpattern id=\"forest\" patternUnits=\"userSpaceOnUse\" width=\"60\" height=\"60\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"20\" fill=\"%23065f46\" opacity=\"0.3\"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\"1200\" height=\"400\" fill=\"url(%23forest)\"/%3E%3C/svg%3E')"
          }}
        ></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">ABOUT US</h1>
            <p className="text-xl max-w-2xl mx-auto px-4">
              Building sustainable futures through environmental conservation and community empowerment
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Mission Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">OUR MISSION</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Committed to raising a professional, socially and environmentally responsible generation of children, youth 
                and adults, with outstanding leadership and working experience in environmental conservation, green management, 
                environmental sustainability and community resilience.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We strive to create lasting positive change through education, community engagement, and sustainable 
                development practices that benefit both people and the planet.
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-8">
              <div className="w-full h-64 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">🌱</div>
                  <div className="text-lg font-semibold">Environmental Education</div>
                  <div className="text-sm opacity-90">Empowering Communities</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* History and Goals Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">OUR GREEN HISTORY</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Green Generation Initiative was founded on the belief that environmental conservation 
                and community development go hand in hand. Our journey began with a simple mission: 
                to create sustainable solutions that benefit both people and the planet.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Over the years, we have grown from a small community-based organization to a 
                recognized leader in environmental education and conservation across Kenya and beyond.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Through partnerships with local communities, government agencies, and international 
                organizations, we have expanded our reach and deepened our impact in environmental 
                policy, community education, climate action, youth empowerment building and 
                advocacy, among many other areas of expertise.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">OUR GOAL</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our goal is to be a leading organization and brand in Africa whose 
                mandate is environmental conservation and development as well as capacity 
                building towards environmental sustainability across all areas of expertise and 
                beyond activities, making environmental conversations as natural cultural 
                practice within our communities.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We envision a future where environmental consciousness is embedded in 
                every aspect of community life, and where sustainable practices are the norm rather than the exception.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Through education, advocacy, and community engagement, we work towards a 
                sustainable future where environmental stewardship, community development, 
                and economic prosperity go hand in hand, creating resilient communities that can 
                thrive in harmony with nature while prospering economically and socially.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Statistics Section */}
        <section className="mb-20">
          <div className="bg-green-600 rounded-lg text-white p-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">WITH COLLABORATIONS, IMPACT HAPPENS</h3>
              <p className="text-lg opacity-90 max-w-3xl mx-auto">
                Our projects are designed to achieve a Triple Bottom Line impact of 
                People, Planet, and Prosperity, the essence of sustainable development.
              </p>
              <p className="text-sm opacity-80 mt-4 italic">
                "We believe that, only by creating a generation of environmentally conscious individuals, will we 
                cultivate the consciousness necessary to heal our environmentally broken society."
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {impactStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-lg opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">OUR TEAM MEMBERS</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our success depends on the dedication and expertise of our talented team experts, 
              oil engineers experts, Members, campaigns professionals, communicators and project managers. 
              We are all passionate about using processes, sharing impact on building environmental 
              education, networking community together, youth empowerment and community science.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="w-48 h-48 mx-auto mb-4 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                  {member.image}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors duration-200">
              ←
            </button>
            <button className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors duration-200">
              →
            </button>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">TESTIMONIALS</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.slice(0, 4).map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">{testimonial.avatar}</div>
                  <div className="flex-1">
                    <blockquote className="text-gray-600 italic leading-relaxed mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-gradient-to-r from-green-700 to-green-800 rounded-lg text-white p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">
            JOIN US & MAKE A GREEN IMPACT BY <span className="text-yellow-300">DONATION</span>
          </h3>
          <p className="text-lg opacity-90 mb-8 max-w-4xl mx-auto">
            Every donation we receive is creating a change and driving more hope, these impact is bringing law, donations, love, partnership, love 
            and peace for our forest. Every contribution, no matter the size, enables us to make a generation of environmentally conscious individuals, 
            youths and communities, committed to securing world education that can prosper our environment is a gift for our children.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-md font-semibold transition-colors duration-200">
              DONATE NOW
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-3 rounded-md font-semibold transition-colors duration-200">
              JOIN NOW
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;