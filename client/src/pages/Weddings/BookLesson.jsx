import { Link as RouterLink } from 'react-router-dom';
import { Box, Flex, Button, Heading, Text } from '@chakra-ui/react';

export default function WeddingBook() {
  const buttonStyles = {
    bg: "brand.400",
    color: "white",
    fontSize: "lg",
    fontWeight: "bold",
    p: 6,
    borderRadius: "md",
    _hover: {
      bg: "brand.300",
      transform: "scale(1.05)",
      transition: "all 0.3s ease-in-out",
    },
    _active: {
      bg: "brand.500",
    },
  };

  return (
    <Box p={6} bg="brand.50" borderRadius="md" boxShadow="lg" mt={6} maxW='920px' mx='auto' pb={10}>
      {/* Page Heading */}
      <Heading as="h1" size="2xl" mb={6} textAlign="center" color="brand.700">
        Book Your Wedding Dance Lesson
      </Heading>
      
      {/* Page Description */}
      <Text fontSize="lg" mb={8} textAlign="center" color="brand.600">
        Choose your location below to create your memorable first dance!
      </Text>

      {/* Button Section */}
      <Flex justify="center" gap={8} wrap="wrap">
        <Button as={RouterLink} to="/book-lesson/orem" {...buttonStyles}>
          Orem, UT
        </Button>

        <Button as={RouterLink} to="/book-lesson/slc" {...buttonStyles}>
          SLC, UT
        </Button>
      </Flex>
    </Box>
  );
}
