import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Box, Container,  } from '@chakra-ui/react';
import CalendlyBadgeOrem from './CalendlyOrem';
import CalendlyBadgeSLC from './CalendlySLC';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <Box>
      <Navbar />
      <Container as="main" maxW="container.xl" py={4}>
        {children}
      </Container>

      <CalendlyBadgeSLC zIndex={2} />
      <CalendlyBadgeOrem zIndex={3} />
      
      <Footer />
    </Box>
  );
}
