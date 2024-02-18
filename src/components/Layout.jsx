import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaArrowUp } from 'react-icons/fa';

const Layout = ({ children }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 400) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <>
      <Navbar />
      {children}
      <Footer />
      {showBackToTop && (
        <button
          className="fixed bottom-10 right-10 bg-gray-800 text-white p-3 rounded-full shadow-lg"
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default Layout;