
// src/pages/Services.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Tree Planting & Supply',
      description: 'Professional tree planting services and seedling supply',
      path: '/services/tree-planting',
      icon: '🌱'
    },
    {
      title: 'Corporate ESG and CSR Support',
      description: 'Helping businesses implement environmental sustainability programs',
      path: '/services/corporate-esg',
      icon: '🏢'
    },
    {
      title: 'Documenting Impact Stories',
      description: 'Professional documentation of environmental impact and success stories',
      path: '/services/impact-stories',
      icon: '📚'
    },
    {
      title: 'Sustainable Brand Endorsement',
      description: 'Endorsement services for environmentally responsible brands',
      path: '/services/brand-endorsement',
      icon: '✅'
    },
    {
      title: 'Africa Green Investments Portfolio Management',
      description: 'Managing green investment portfolios across Africa',
      path: '/services/investment-portfolio',
      icon: '💼'
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.path}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
