import { Box, Heading, Text, Flex, Image, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import weddingcouple1 from '../../assets/weddingcouple1.jpg';
import weddingcouple2 from '../../assets/weddingcouple2.jpg';

export default function WeddingAbout() {
    const buttonStyles = {
      bg: "brand.300",
      color: "brand.50",
      _hover: { 
        bg: "brand.400",
      },
    }
    return (
      <Box p={{ base: 3, md: 6 }} bg="brand.50" borderRadius="md" boxShadow="lg" mt={6} maxW='920px' mx='auto'  align='center'>
      <Heading as="h1" size="xl" mb={4} textAlign="center" mx="auto" pb={{ base: 2, md: 4 }}>
        Make Your First Dance Unforgettable
      </Heading>
      <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between">

      <Box textAlign="center" mb={6} pr={3} pl={3}>
        <Text fontSize="lg" mb={4}>
          Your first dance as a married couple is a moment to cherish forever, and I&apos;m here to help make it as special as possible. Whether you&apos;re dreaming of an elegant, traditional waltz or a fun, choreographed routine that shows off your personalities, I can help you bring your vision to life. I specialize in creating personalized dance experiences that fit your style, whether you're starting from scratch or refining moves you already know.
        </Text>
        <Text fontSize="lg" mb={4}>
          For some couples, the first dance is all about a beautiful performance; for others, it&apos;s simply about feeling comfortable moving together on the dance floor. I understand that not everyone wants an elaborate routine, and that&apos;s perfectly okay! I&apos;m here to help you feel confident and relaxed, teaching you how to move naturally with your partner so your first dance feels authentic to who you are. Together, we&apos;ll work at your own pace, ensuring that you feel prepared and excited to share this moment with your friends and family.
        </Text>
      </Box>

        <Image 
            src={weddingcouple1} 
            alt="a man and a women dancing" 
            width={{ base: "200px", md: "350px" }}
            height={{ base: "300px", md: "350px" }}
            borderRadius="3%" 
            boxShadow="lg"
            objectFit="cover"
            m={4}
            mb={6}
          />
      </Flex>
      <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between">
      <Image 
            src={weddingcouple2} 
            alt="two women dancing" 
            width={{ base: "200px", md: "350px" }}
            height={{ base: "300px", md: "350px" }}
            borderRadius="3%" 
            boxShadow="lg"
            objectFit="cover"
            m={4}
            mb={6}
          />
      <Box textAlign="center" mb={4} pb={3}>
        <Text fontSize="lg" mb={4}>
          In addition to first dances, I also offer lessons for parent dances and groomsmen dances. Whether you&apos;re preparing for a special dance with a loved one or getting the wedding party in sync for a fun, coordinated performance, I&apos;ll make sure everyone feels comfortable and ready to shine. These dances add a personal touch to your big day, and I&apos;m here to help create memorable moments for everyone involved.
        </Text>
        <Text fontSize="lg" mb={4}>
          With my background in ballroom dance and performance, you&apos;ll have the support and guidance you need every step of the way. Let&apos;s make your wedding day unforgettable with dances that reflect your unique love story and the special relationships in your life.
        </Text>
      </Box>
      </Flex>
      <Text fontSize="lg" fontWeight="bold" align="center">
      Book your lesson or your <Box as="span" color="red" fontSize="2xl" fontWeight="bold">FREE</Box> phone consultation below!
      </Text>
      <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="center" p="5" m="5">
      <Button as={RouterLink} to="/wedding/book-lesson" {...buttonStyles} m={3}>
        Book Your Lesson
      </Button>
      <Button as={RouterLink} to="/book-consultation" {...buttonStyles} m={3}>
        FREE Phone Consultation!
      </Button>
      </Flex>
  </Box>
);
}
