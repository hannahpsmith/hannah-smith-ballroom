import { Box, Heading, Text, Flex, Image } from '@chakra-ui/react';
import headshot from '../assets/headshot.jpg';

export default function About () {
  return (
    <Box p={6} bg="brand.50" borderRadius="md" boxShadow="lg" mt={6} maxW='920px' mx='auto'>
        <Heading as="h1" size="xl" mb={4} textAlign="center" mx="auto" pb={4} align="center">
          Dancer • Instructor • Choreographer 
        </Heading>
        <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between">

        <Image 
              src={headshot} 
              alt="image of Hannah Smith" 
              width={{ base: "200px", md: "350px" }}
              height={{ base: "200px", md: "350px" }}
              borderRadius="50%" 
              boxShadow="lg"
              objectFit="cover"
              mr={4}
              mb={6}
            />
          <Box textAlign="center" mb={4}>
              <Text fontSize="lg" mb={4}>
              Hannah was raised in Kent, Washington where her passion for the arts began at just 8 years old when she learned to play the piano.
              </Text>
              <Text fontSize="lg" mb={4}>
              She began her training in ballroom dance at the age of 14 and won her first national title at 16. At 18, Hannah was awarded a Ballroom Dance Performance scholarship to Utah Valley University where she danced on the UVU Ballroom Dance Tour Team and joined Mos.A.IC., the university’s hip hop company. In May 2018, Hannah graduated with a BS in Movement Studies with an emphasis in Ballroom Dance.
              </Text>
              <Text fontSize="lg" mb={4}>
              Hannah has been a finalist in many competitions throughout the country in the International Ballroom and Latin styles, including California Open Dancesport, BYU Dancesport Championships, and U.S. National Amateur Dancesport Championships. After over a decade of competition and performance experience, Hannah expanded her artistic abilities to Hale Centre Theatre, where she performed in the U.S. premiere of Baz Luhrmann’s Strictly Ballroom the Musical.
              </Text>
              <Text fontSize="lg">
              Hannah enjoys sharing her passion for dance with others. While teaching, she strives to create an environment that promotes confidence, strength, and self-love through the power of movement and expression. Hannah continues to teach, choreograph, and pursue independent performance opportunities globally.
              </Text>
          </Box>
        </Flex>
    </Box>
  );
}
