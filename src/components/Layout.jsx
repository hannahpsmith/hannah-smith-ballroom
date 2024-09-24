import React from 'react';
import Navbar from './Navbar';
import { Box, Container,  } from '@chakra-ui/react';
import CalendlyBadgeOrem from './CalendlyOrem';
import CalendlyBadgeSLC from './CalendlySLC';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Navbar />
      <Container as="main" maxW="container.xl" py={4}>
        {children}
      </Container>

      <CalendlyBadgeSLC />
      <CalendlyBadgeOrem />
      
      <Footer />
    </Box>
  );
}
