import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaArrowUp } from 'react-icons/fa';
import { Button } from '@chakra-ui/react';
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
        <Button
          position="fixed"
          bottom="20px"
          right="20px"
          onClick={scrollToTop}
          _hover={{ bg: 'black', color: 'white' }}
        >
          <FaArrowUp
          />
        </Button>
      )}
    </>
  );
};

export default Layout;