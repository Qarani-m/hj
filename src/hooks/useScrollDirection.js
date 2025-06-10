// src/hooks/useScrollDirection.js
import { useState, useEffect } from 'react';

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      
      if (direction !== scrollDirection && Math.abs(scrollY - lastScrollY) > 10) {
        setScrollDirection(direction);
      }
      
      setScrollY(scrollY);
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    const handleScroll = () => requestAnimationFrame(updateScrollDirection);
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollDirection]);

  return { scrollDirection, scrollY };
};

// src/utils/constants.js
export const navigationItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  {
    name: 'Programs',
    path: '/programs',
    dropdown: [
      { name: 'Conservation and Restoration', path: '/programs/conservation-restoration' },
      { name: 'Community Resilience', path: '/programs/community-resilience' },
      { name: 'Climate & Youth Action', path: '/programs/climate-youth-action' },
      { name: 'Sustainability', path: '/programs/sustainability' }
    ]
  },
  {
    name: 'Services',
    path: '/services',
    dropdown: [
      { name: 'Tree Planting & Supply', path: '/services/tree-planting' },
      { name: 'Corporate ESG and CSR Support', path: '/services/corporate-esg' },
      { name: 'Documenting Impact Stories', path: '/services/impact-stories' },
      { name: 'Sustainable Brand Endorsement', path: '/services/brand-endorsement' },
      { name: 'Africa Green Investments Portfolio Management', path: '/services/investment-portfolio' }
    ]
  },
  { name: 'Blog', path: '/blog' },
  { name: 'Events', path: '/events' },
  { name: 'Contact', path: '/contact' }
];
