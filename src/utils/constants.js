// src/utils/constants.js - Navigation structure
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