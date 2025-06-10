import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';


const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Add top padding to account for fixed navbar */}
      <main className="pt-36">
        {children}
      </main>

      <Footer/>
    </div>
  );
};

export default Layout;