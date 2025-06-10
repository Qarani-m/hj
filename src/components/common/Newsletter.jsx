// src/components/common/Newsletter.jsx
import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section className="relative py-16 bg-cover bg-center bg-no-repeat" 
             style={{
               backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 400"><rect width="1200" height="400" fill="%23006400"/><circle cx="200" cy="100" r="60" fill="%2332CD32"/><circle cx="600" cy="150" r="80" fill="%2332CD32"/><circle cx="1000" cy="80" r="70" fill="%2332CD32"/></svg>')`
             }}>
      <div className="relative max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          SUBSCRIBE OUR NEWSLETTER
        </h2>
        <p className="text-lg text-white mb-8 opacity-90">
          Stay updated with our environmental work and know more of our work!
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            className="flex-1 px-4 py-3 rounded-lg border-none outline-none text-gray-900"
            required
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

// src/components/common/Footer.jsx
const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Services', href: '#services' },
    { name: 'Blog', href: '#blog' },
    { name: 'Donate Now', href: '#donate' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Map Section */}
      <div className="relative h-64 bg-gray-200">
        <iframe
          title="Green Generation Initiative Location"
          src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 300'><rect width='800' height='300' fill='%23E5E5E5'/><rect x='100' y='50' width='600' height='200' fill='%23FFF'/><circle cx='400' cy='150' r='20' fill='%23FF0000'/><text x='400' y='200' text-anchor='middle' fill='%23333' font-size='14'>Green Generation Initiative</text><text x='400' y='220' text-anchor='middle' fill='%23666' font-size='12'>Nairobi, Kenya</text></svg>"
          className="w-full h-full border-0"
          loading="lazy"
        ></iframe>
      </div>

      {/* Footer Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-green-600 text-white px-3 py-2 rounded text-xl font-bold mr-3">
                  GGI
                </div>
                <div className="text-green-400 font-semibold">NGOsource</div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Green Generation Initiative Inc. is a Grassroots Organization working in Kenya and across Africa.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">QUICK LINKS</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-green-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6">CONTACT US</h3>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 mt-1 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <div>
                    <p>134426-00800</p>
                    <p>Barkers Court Estate, Opposite University</p>
                    <p>Law Court Road, Nairobi Road, Nairobi</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <p>info@greengenerationinitiative.org</p>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <p>+254 797 729733</p>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <p>Monday - Friday: 8:00 - 17:00</p>
                </div>
              </div>
            </div>

            {/* NGO Source Logo */}
            <div className="text-center">
              <div className="inline-block p-6 bg-gray-800 rounded-lg">
                <img 
                  src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 100'><rect width='200' height='100' fill='%23FFF'/><text x='100' y='40' text-anchor='middle' fill='%23006BA6' font-size='20' font-weight='bold'>NGOsource</text><text x='100' y='65' text-anchor='middle' fill='%23666' font-size='12'>Foundation Center</text></svg>"
                  alt="NGOsource Foundation Center"
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>Copyright © GGI 2024. All rights reserved</p>
            <p>Created by <span className="text-green-400">Logo Consulting</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Newsletter, Footer };