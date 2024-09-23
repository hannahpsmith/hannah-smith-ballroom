import Navbar from './Navbar';
import { Box, Container,  } from '@chakra-ui/react';
import CalendlyBadgeOrem from './CalendlyOrem';
import CalendlyBadgeSLC from './CalendlySLC';

export default function Layout({ children }) {
  return (
    <Box>
      <Navbar />
      <Container as="main" maxW="container.xl" py={4}>
        {children}
      </Container>
      <Box right="20px">
      <CalendlyBadgeSLC zIndex={2} />
      </ Box>
      <CalendlyBadgeOrem zIndex={3} />
    </Box>
  );
}
