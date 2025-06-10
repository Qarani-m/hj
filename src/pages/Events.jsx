import React, { useState } from 'react';

const Events = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const eventCategories = [
    { id: 'all', label: 'All Events' },
    { id: 'workshops', label: 'Workshops' },
    { id: 'conferences', label: 'Conferences' },
    { id: 'community', label: 'Community Events' },
    { id: 'training', label: 'Training Programs' }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Youth Climate Leadership Summit 2025",
      date: "March 15, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "KICC, Nairobi",
      category: "conferences",
      type: "upcoming",
      description: "Annual summit bringing together young climate activists from across East Africa to share experiences, learn new skills, and network.",
      capacity: "500 participants",
      fee: "Free (Registration required)",
      speakers: ["Dr. Wangari Maathai Foundation", "UN Environment", "Kenya Youth Climate Network"],
      status: "registration-open"
    },
    {
      id: 2,
      title: "Sustainable Agriculture Training Workshop",
      date: "February 28, 2025",
      time: "8:00 AM - 4:00 PM",
      location: "Meru Agricultural Training Center",
      category: "workshops",
      type: "upcoming",
      description: "Hands-on training for smallholder farmers on climate-smart agricultural practices, organic farming techniques, and water conservation.",
      capacity: "80 farmers",
      fee: "Free for registered farmers",
      materials: ["Training manual", "Seeds & tools", "Certificate"],
      status: "few-spots-left"
    },
    {
      id: 3,
      title: "Community Tree Planting Drive",
      date: "January 25, 2025",
      time: "7:00 AM - 12:00 PM",
      location: "Karura Forest, Nairobi",
      category: "community",
      type: "upcoming",
      description: "Join us for our monthly community tree planting initiative. Families and individuals welcome. All materials provided.",
      capacity: "200 volunteers",
      fee: "Free",
      includes: ["Breakfast", "Tree seedlings", "Tools", "Transportation"],
      status: "registration-open"
    },
    {
      id: 4,
      title: "Environmental Impact Assessment Training",
      date: "April 10-12, 2025",
      time: "9:00 AM - 5:00 PM daily",
      location: "University of Nairobi",
      category: "training",
      type: "upcoming",
      description: "Comprehensive 3-day certification program for environmental professionals on conducting effective impact assessments.",
      capacity: "40 participants",
      fee: "KES 15,000 (Early bird: KES 12,000)",
      certification: "Certified by NEMA",
      status: "early-bird"
    }
  ];

  const pastEvents = [
    {
      id: 5,
      title: "Climate Adaptation Conference 2024",
      date: "November 20, 2024",
      location: "Safari Park Hotel, Nairobi",
      category: "conferences",
      type: "past",
      attendance: "450 participants",
      highlights: ["Policy recommendations developed", "5 MoUs signed", "Media coverage in 12 outlets"],
      gallery: true
    },
    {
      id: 6,
      title: "Coastal Community Resilience Workshop",
      date: "October 15, 2024",
      location: "Kilifi County",
      category: "workshops",
      type: "past",
      attendance: "120 community members",
      impact: "15 villages now have emergency preparedness plans",
      gallery: true
    },
    {
      id: 7,
      title: "School Environmental Clubs Training",
      date: "September 8, 2024",
      location: "Multiple locations across Kenya",
      category: "training",
      type: "past",
      attendance: "300 students from 50 schools",
      impact: "50 new environmental clubs established",
      gallery: true
    }
  ];

  const allEvents = [...upcomingEvents, ...pastEvents];

  const filteredEvents = activeFilter === 'all' 
    ? allEvents 
    : allEvents.filter(event => event.category === activeFilter);

  const getStatusBadge = (status) => {
    const badges = {
      'registration-open': { text: 'Registration Open', color: 'bg-green-100 text-green-800' },
      'few-spots-left': { text: 'Few Spots Left', color: 'bg-yellow-100 text-yellow-800' },
      'early-bird': { text: 'Early Bird Available', color: 'bg-blue-100 text-blue-800' },
      'sold-out': { text: 'Sold Out', color: 'bg-red-100 text-red-800' }
    };
    return badges[status] || { text: 'Available', color: 'bg-gray-100 text-gray-800' };
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Events & Programs
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join us in building sustainable communities through education, training, and collaborative action. 
            Discover upcoming events and see the impact of our past initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-700 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200">
              View Upcoming Events
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-700 px-8 py-3 rounded-md font-semibold transition-colors duration-200">
              Register for Updates
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Filter Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              {eventCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                    activeFilter === category.id
                      ? 'border-green-600 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">24</div>
            <div className="text-sm text-gray-600">Events This Year</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">2,840</div>
            <div className="text-sm text-gray-600">Total Participants</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">12</div>
            <div className="text-sm text-gray-600">Partner Organizations</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">8</div>
            <div className="text-sm text-gray-600">Counties Reached</div>
          </div>
        </div>

        {/* Upcoming Events Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.filter(event => 
              activeFilter === 'all' || event.category === activeFilter
            ).map((event) => (
              <div key={event.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        {event.date} • {event.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-600 mb-4">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {event.location}
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-md text-xs font-semibold ${getStatusBadge(event.status).color}`}>
                      {getStatusBadge(event.status).text}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Capacity:</span>
                      <span className="font-medium">{event.capacity}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Fee:</span>
                      <span className="font-medium">{event.fee}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button 
                      onClick={() => setSelectedEvent(event)}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md font-semibold transition-colors duration-200"
                    >
                      View Details
                    </button>
                    <button className="flex-1 border border-green-600 text-green-600 hover:bg-green-50 py-2 px-4 rounded-md font-semibold transition-colors duration-200">
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Past Events Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Past Events</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pastEvents.filter(event => 
              activeFilter === 'all' || event.category === activeFilter
            ).map((event) => (
              <div key={event.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl mb-2">📸</div>
                    <div className="text-sm font-medium">Event Gallery</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>
                  <div className="text-sm text-gray-600 mb-3">
                    {event.date} • {event.location}
                  </div>
                  <div className="text-sm text-gray-700 mb-4">
                    <strong>Attendance:</strong> {event.attendance}
                  </div>
                  {event.impact && (
                    <div className="text-sm text-green-700 mb-4">
                      <strong>Impact:</strong> {event.impact}
                    </div>
                  )}
                  <button className="w-full text-green-600 hover:text-green-700 font-semibold text-sm transition-colors duration-200">
                    View Event Report →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-white rounded-lg border border-gray-200 p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated on Our Events</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive early notifications about upcoming events, 
            workshops, and training programs. Be the first to secure your spot!
          </p>
          <div className="max-w-md mx-auto flex space-x-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-semibold transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </section>
      </div>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{selectedEvent.title}</h3>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Date:</strong> {selectedEvent.date}
                  </div>
                  <div>
                    <strong>Time:</strong> {selectedEvent.time}
                  </div>
                  <div>
                    <strong>Location:</strong> {selectedEvent.location}
                  </div>
                  <div>
                    <strong>Capacity:</strong> {selectedEvent.capacity}
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed">{selectedEvent.description}</p>
                
                {selectedEvent.speakers && (
                  <div>
                    <strong className="block mb-2">Featured Speakers:</strong>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      {selectedEvent.speakers.map((speaker, index) => (
                        <li key={index}>{speaker}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="flex space-x-3 pt-4">
                  <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-md font-semibold transition-colors duration-200">
                    Register Now
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 px-4 rounded-md font-semibold transition-colors duration-200">
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;