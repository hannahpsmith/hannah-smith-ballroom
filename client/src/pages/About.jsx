import { Box, Heading, Text } from '@chakra-ui/react';

export default function About() {
  return (
    <Box p={6} bg="brand.100" borderRadius="md" boxShadow="lg" mt={6}>
      <Heading as="h1" size="xl" mb={4} color="brand.800">
        About HSB
      </Heading>
      <Text fontSize="lg" color="brand.600">
        Information about HSB...
      </Text>
    </Box>
  );
}
