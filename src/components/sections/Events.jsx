// src/components/sections/Events.jsx
import React from 'react';

const Events = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            UPCOMING EVENTS
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-gray-600">
            Sorry, there is no event under your selected page.
          </p>
        </div>

        {/* Empty State */}
        <div className="text-center py-16">
          <svg className="w-24 h-24 mx-auto text-gray-300 mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
          </svg>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No Upcoming Events</h3>
          <p className="text-gray-500">Check back later for exciting events and activities!</p>
        </div>
      </div>
    </section>
  );
};

export default Events;