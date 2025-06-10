
// src/pages/Programs.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Programs = () => {
  const programs = [
    {
      title: 'Conservation and Restoration',
      description: 'Protecting and restoring natural ecosystems',
      path: '/programs/conservation-restoration',
      icon: '🌳'
    },
    {
      title: 'Community Resilience',
      description: 'Building stronger, more resilient communities',
      path: '/programs/community-resilience',
      icon: '🏘️'
    },
    {
      title: 'Climate & Youth Action',
      description: 'Empowering youth to take climate action',
      path: '/programs/climate-youth-action',
      icon: '👥'
    },
    {
      title: 'Sustainability',
      description: 'Promoting sustainable practices and lifestyles',
      path: '/programs/sustainability',
      icon: '♻️'
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Our Programs</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {programs.map((program) => (
            <Link
              key={program.title}
              to={program.path}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{program.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">{program.title}</h3>
              <p className="text-gray-600">{program.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;