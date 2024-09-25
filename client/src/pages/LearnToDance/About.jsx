import { Box, Heading, Text, Flex, Image, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import orangedress from '../../assets/orange-dress1.jpg';
import blackdress from '../../assets/black-dress1.jpg';

export default function LearnAbout() {
    const buttonStyles = {
      bg: "brand.300",
      color: "brand.50",
      _hover: { 
        bg: "brand.400",
      },
    }
    return (
      <Box p={6} bg="brand.50" borderRadius="md" boxShadow="lg" mt={6} maxW='920px' mx='auto'  align='center'>
      <Heading as="h1" size="xl" mb={4} textAlign="center" mx="auto" pb={4}>
        Learn to Dance 
      </Heading>
      <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between">

      <Box textAlign="center" mb={6} pr={3} pl={3}>
        <Heading as="h2" size="md" fontSize="23px" pb={4}>
          Social Dance
        </Heading>
        <Text fontSize="lg" mb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.
        </Text>
        <Text fontSize="lg" mb={4}>
          In condimentum facilisis porta. Sed nec diam eu diam mattis viverra nulla fringilla. Aenean sit amet erat nunc, a fermentum magna. Etiam tempor orci eu lobortis elementum nibh tellus molestie nunc non blandit massa enim nec dui.
        </Text>
        <Text fontSize="lg" mb={4}>
          Cras ornare arcu dui vivamus arcu felis bibendum ut. Varius duis at consectetur lorem donec massa sapien. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Porttitor lacus luctus accumsan tortor posuere ac ut consequat.
        </Text>
        <Text fontSize="lg" mb={4}>
          Etiam tempor orci eu lobortis elementum nibh tellus molestie nunc. Suspendisse potenti nullam ac tortor vitae purus. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Vitae sapien pellentesque habitant morbi tristique senectus et.
        </Text>
      </Box>

        <Image 
            src={orangedress} 
            alt="couple dancing with orange dress" 
            width={{ base: "200px", md: "350px" }}
            height={{ base: "310px", md: "350px" }}
            borderRadius="3%" 
            boxShadow="lg"
            objectFit="cover"
            mr={4}
            mb={6}
          />
      </Flex>
      <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between">
      <Image 
            src={blackdress} 
            alt="dancer in black dress" 
            width={{ base: "200px", md: "350px" }}
            height={{ base: "310px", md: "350px" }}
            borderRadius="3%" 
            boxShadow="lg"
            objectFit="cover"
            mr={4}
            mb={6}
          />
      <Box textAlign="center" mb={6} pb={3}>
      <Heading as="h2" size="md" fontSize="23px" pb={4}>
          Competition Dance
        </Heading>
        <Text fontSize="lg" mb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.
        </Text>
        <Text fontSize="lg" mb={4}>
          In condimentum facilisis porta. Sed nec diam eu diam mattis viverra nulla fringilla. Aenean sit amet erat nunc, a fermentum magna. Etiam tempor orci eu lobortis elementum nibh tellus molestie nunc non blandit massa enim nec dui.
        </Text>
        <Text fontSize="lg" mb={4}>
          Cras ornare arcu dui vivamus arcu felis bibendum ut. Varius duis at consectetur lorem donec massa sapien. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Porttitor lacus luctus accumsan tortor posuere ac ut consequat.
        </Text>
        <Text fontSize="lg" mb={4}>
          Etiam tempor orci eu lobortis elementum nibh tellus molestie nunc. Suspendisse potenti nullam ac tortor vitae purus. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Vitae sapien pellentesque habitant morbi tristique senectus et.
        </Text>
      </Box>
      </Flex>      
      <Text fontSize="lg" fontWeight="bold" align="center">
      Book your lesson or your <Box as="span" color="red" fontSize="2xl" fontWeight="bold">FREE</Box> phone consultation below!
      </Text>
      <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="center" p="5" m="5">
      <Button as={RouterLink} to="/learn-to-dance/book-lesson" {...buttonStyles} m={3}>
        Book Your Lesson
      </Button>
      <Button as={RouterLink} to="/book-consultation" {...buttonStyles} m={3}>
        FREE Phone Consultation!
      </Button>
      </Flex>
  </Box>
);
}
