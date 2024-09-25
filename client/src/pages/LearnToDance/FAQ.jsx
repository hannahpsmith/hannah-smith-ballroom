import { Box, Heading, Text, Flex, Image, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export default function LearnFAQ() {
  const buttonStyles = {
    bg: "brand.300",
    color: "brand.50",
    _hover: { 
      bg: "brand.400",
    },
  }
  return (
    <Box p={6} bg="brand.50" borderRadius="md" boxShadow="lg" mt={6} maxW='920px' mx='auto'>
    <Heading as="h1" size="xl" mb={4} textAlign="center" mx="auto" pb={4}>
      FAQ 
    </Heading>
    <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between">

    <Box textAlign="center" mb={6} pr={3} pl={3}>
        <Heading as="h2" size="md" fontSize="23px" pb={4}>
         Lorem ipsum dolor sit amet?
        </Heading>
        <Text fontSize="lg" mb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.
        </Text>
        <Heading as="h2" size="md" fontSize="23px" pb={4}>
         Consectetur adipiscing elit?
        </Heading>
        <Text fontSize="lg" mb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.
        </Text>
        <Heading as="h2" size="md" fontSize="23px" pb={4}>
          Sed do eiusmod tempor?
        </Heading>
        <Text fontSize="lg" mb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.
        </Text>
        <Heading as="h2" size="md" fontSize="23px" pb={4}>
          Incididunt ut labore et dolore?
        </Heading>
        <Text fontSize="lg" mb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.
        </Text>
        <Heading as="h2" size="md" fontSize="23px" pb={4}>
          Magna aliqua. Ut enim ad?
        </Heading>
        <Text fontSize="lg" mb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.
        </Text>
        <Heading as="h2" size="md" fontSize="23px" pb={4}>
          Minim veniam, quis nostrud exercitation?
        </Heading>
        <Text fontSize="lg" mb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.
        </Text>
        <Heading as="h2" size="md" fontSize="23px" pb={4}>
          Ullamco laboris nisi ut aliquip?
        </Heading>
        <Text fontSize="lg" mb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.
        </Text>
      </Box>
  </Flex>
  </Box>
  )
};