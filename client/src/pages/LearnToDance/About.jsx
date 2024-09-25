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
      <Box p={{ base: 3, md: 6 }} bg="brand.50" borderRadius="md" boxShadow="lg" mt={6} maxW='920px' mx='auto'  align='center'>
      <Heading as="h1" size="xl" mb={4} textAlign="center" mx="auto" pb={4}>
        Learn to Dance 
      </Heading>
      <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between">

      <Box textAlign="center" mb={6} pr={3} pl={3}>
        <Heading as="h2" size="md" fontSize="23px" pb={4}>
          Social Dance
        </Heading>
        <Text fontSize="lg" mb={4}>
          Social dancing is all about connection, confidence, and having fun on the dance floor! Whether you&apos;re preparing for a special event, want to feel comfortable dancing in social settings, or are just looking to try something new, I&apos;m here to guide you. From salsa to swing, foxtrot to cha-cha, I&apos;ll help you build the skills you need to dance with ease and enjoyment in any social setting. My goal is to help you feel relaxed and confident, so you can focus on enjoying the moment, no matter the occasion.
        </Text>
        <Text fontSize="lg" mb={4}>
          In social dance, the emphasis is on enjoying the music and your partner&apos;s company, not perfecting every move. I&apos;ll teach you how to lead or follow comfortably, how to move naturally with the music, and how to adapt to different partners and styles. Whether you&apos;re new to dance or looking to brush up on your skills, I&apos;ll help you develop a strong foundation, so you can confidently step out onto any dance floor!
        </Text>
      </Box>

        <Image 
            src={orangedress} 
            alt="couple dancing with orange dress" 
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
            src={blackdress} 
            alt="dancer in black dress" 
            width={{ base: "200px", md: "350px" }}
            height={{ base: "300px", md: "350px" }}
            borderRadius="3%" 
            boxShadow="lg"
            objectFit="cover"
            m={4}
            mb={6}
          />
      <Box textAlign="center" mb={6} pb={3}>
      <Heading as="h2" size="md" fontSize="23px" pb={4}>
          Competition Dance
        </Heading>
        <Text fontSize="lg" mb={4}>
          For those looking to take their dancing to the next level, competition dance provides an exciting challenge! Whether you&apos;re competing locally or preparing for national events, I offer personalized coaching that focuses on technique, performance quality, and the mindset needed to succeed on the competitive stage. With my experience in ballroom competitions, I&apos;ll help you refine your style and push your skills to new heights.
        </Text>
        <Text fontSize="lg" mb={4}>
          I also offer Pro-Am lessons, meaning I&apos;ll be your partner on the competition floor. This allows you to focus fully on your dancing, knowing you&apos;re working with a professional who can help guide and support you during performances. Competition dancing is about precision, discipline, and artistry, and I&apos;m here to support you through every part of the process—from perfecting your technique to understanding what judges look for. Together, we&apos;ll build routines that showcase your strengths, polish your presentation, and cultivate the confidence needed to shine under pressure. Let&apos;s work together to help you stand out and achieve your competitive goals!
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
