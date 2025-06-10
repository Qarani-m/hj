
// src/components/common/Navbar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import { navigationItems } from '../../utils/constants';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { scrollY } = useScrollDirection();
  const location = useLocation();

  // Hide top section when scrolled down more than 100px
  const hideTopSection = scrollY > 100;

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      {/* Top Section - Logo, Phone, Donate Button */}
      <div 
        className={`bg-white border-b border-gray-200 transition-all duration-300 ${
          hideTopSection ? 'opacity-0 -translate-y-full h-0 overflow-hidden' : 'opacity-100 translate-y-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">GGI</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-green-600 font-bold text-lg">Green Generation</span>
                  <span className="text-sm text-gray-600">Initiative</span>
                </div>
              </Link>
            </div>

            {/* Phone and Donate */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Phone */}
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">CALL US</p>
                  <p className="font-semibold text-gray-900">+254 797 729733</p>
                </div>
              </div>

              {/* Donate Button */}
              <Link
                to="/donate"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                DONATE NOW
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <nav className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Mobile Logo (shown when top section is hidden) */}
            <div className={`md:hidden transition-opacity duration-300 ${hideTopSection ? 'opacity-100' : 'opacity-0'}`}>
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">GGI</span>
                </div>
                <span className="text-white font-semibold">GGI</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item, index) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <div>
                      <button
                        className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                          location.pathname.startsWith(item.path)
                            ? 'text-green-400'
                            : 'text-white hover:text-green-400'
                        }`}
                        onMouseEnter={() => handleDropdownToggle(index)}
                      >
                        <span>{item.name}</span>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>

                      {/* Dropdown */}
                      <div
                        className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="py-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.path}
                              className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                        location.pathname === item.path
                          ? 'text-green-400'
                          : 'text-white hover:text-green-400'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-green-400 focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className="w-full text-left flex items-center justify-between px-3 py-2 text-base font-medium text-white hover:text-green-400 hover:bg-gray-700 rounded-md"
                      >
                        <span>{item.name}</span>
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                      
                      {activeDropdown === item.name && (
                        <div className="pl-6 space-y-1">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.path}
                              className="block px-3 py-2 text-sm text-gray-300 hover:text-green-400 hover:bg-gray-700 rounded-md"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block px-3 py-2 text-base font-medium rounded-md ${
                        location.pathname === item.path
                          ? 'text-green-400 bg-gray-700'
                          : 'text-white hover:text-green-400 hover:bg-gray-700'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile Donate Button */}
              <div className="pt-4 border-t border-gray-700">
                <Link
                  to="/donate"
                  className="block w-full text-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-semibold transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  DONATE NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;