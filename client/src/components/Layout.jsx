import React, { useEffect } from 'react';
import Navbar from './Navbar';
import { Box, Container } from '@chakra-ui/react';
import { Show, Hide } from '@chakra-ui/react'
import CalendlyBadgeOrem from './CalendlyOrem';
import CalendlyBadgeSLC from './CalendlySLC';
import Footer from './Footer';

export default function Layout({ children }) {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Navbar />

      
      <Container as="main" maxW="container.xl" py={4}>
        {children}
      </Container>

     
   
      <Box>
      <Hide breakpoint='(max-width: 768px)'>
      <CalendlyBadgeSLC />
      <CalendlyBadgeOrem />
      </Hide>
      </Box>
    

      <Footer />
    </Box>
    
  );
}
