import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Events from './pages/Events';
import Contact from './pages/Contact';

// Program pages
import ConservationRestoration from './pages/programs/ConservationRestoration';
import CommunityResilience from './pages/programs/CommunityResilience';
import ClimateYouthAction from './pages/programs/ClimateYouthAction';
import Sustainability from './pages/programs/Sustainability';

// Service pages
import TreePlanting from './pages/services/TreePlanting';
import CorporateESG from './pages/services/CorporateESG';
import ImpactStories from './pages/services/ImpactStories';
import BrandEndorsement from './pages/services/BrandEndorsement';
import InvestmentPortfolio from './pages/services/InvestmentPortfolio';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Program Routes */}
          <Route path="/programs/conservation-restoration" element={<ConservationRestoration />} />
          <Route path="/programs/community-resilience" element={<CommunityResilience />} />
          <Route path="/programs/climate-youth-action" element={<ClimateYouthAction />} />
          <Route path="/programs/sustainability" element={<Sustainability />} />
          
          {/* Service Routes */}
          <Route path="/services/tree-planting" element={<TreePlanting />} />
          <Route path="/services/corporate-esg" element={<CorporateESG />} />
          <Route path="/services/impact-stories" element={<ImpactStories />} />
          <Route path="/services/brand-endorsement" element={<BrandEndorsement />} />
          <Route path="/services/investment-portfolio" element={<InvestmentPortfolio />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;