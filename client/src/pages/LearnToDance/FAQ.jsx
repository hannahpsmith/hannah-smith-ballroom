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
          Why private lessons?
        </Heading>
        <Text fontSize="lg" mb={4}>
          Private lessons allow for personalized attention and tailored instruction to your specific goals and skill level. Whether you're preparing for a wedding, competition, or just learning for fun, private lessons give you the focused time needed to progress at your own pace. I can customize each lesson to fit your needs and help you feel confident on the dance floor.
        </Text>
        <Heading as="h2" size="md" fontSize="23px" pb={4}>
          What should I wear to my lesson?
        </Heading>
        <Text fontSize="lg" mb={4}>
          Wear anything comfortable that allows you to move freely! The most important thing is that you feel relaxed and can focus on dancing, so choose clothes that let you move easily and don’t restrict your motion. However, if your lesson is for a date night activity or a special occasion, feel free to dress up! Just make sure your outfit still allows you to move comfortably, and we’ll make the experience fun, whether you're dressed casually or looking sharp for a night out.        
          </Text>
        <Heading as="h2" size="md" fontSize="23px" pb={4}>
          Do I need to purchase shoes specifically for dance?
        </Heading>
        <Text fontSize="lg" mb={4}>
          That depends on your dance goals! For beginners, regular shoes are perfectly fine as long as they’re clean—taking care of our dance studio floors is important. If you’re planning to take more advanced or frequent lessons, investing in proper dance shoes can help with your technique and make dancing more comfortable. I’m happy to guide you on the right footwear for your needs.        
          </Text>
        <Heading as="h2" size="md" fontSize="23px" pb={4}>
          Where are you located?
        </Heading>
        <Text fontSize="lg" mb={4}>
          I teach in two locations: Ballroom Utah in Salt Lake City and Strictly Ballroom in Orem. If another space is preferred, please contact me directly, and we can discuss options that best fit your needs.
        </Text>
        <Heading as="h2" size="md" fontSize="23px" pb={4}>
          What payment methods do you accept?
        </Heading>
        <Text fontSize="lg" mb={4}>
          I accept Venmo and any cards accepted by Square, so you can choose whichever payment method is most convenient for you.
        </Text>
        <Heading as="h2" size="md" fontSize="23px" pb={4}>
          Do I have to purchase a package prior to my lesson?
        </Heading>
        <Text fontSize="lg" mb={4}>
          Nope! You can decide whether you’d like to pay per lesson or purchase a package after your first lesson. There’s no need to make a decision beforehand—let’s just focus on having a great first lesson together!
        </Text>
        <Heading as="h2" size="md" fontSize="23px" pb={4}>
          What styles of dance do you teach?
        </Heading>
        <Text fontSize="lg" mb={4}>
          I specialize in international Ballroom, Latin, and social dances, including but not limited to waltz, tango, salsa, foxtrot, swing, cha-cha, and much more! If you’re looking to learn a specific style, feel free to ask, and we can incorporate it into your lessons. I am also cross-trained in many dance genres outside of ballroom.
        </Text>
        <Heading as="h2" size="md" fontSize="23px" pb={4}>
          What happens if I need to cancel or reschedule my lesson?
        </Heading>
        <Text fontSize="lg" mb={4}>
          If you need to cancel or reschedule, you can do so through your Calendly booking or by contacting me directly. Please note that lessons canceled less than 24 hours in advance may be subject to a cancellation fee, so be sure to let me know as soon as possible if something comes up!
        </Text>
      </Box>
  </Flex>
  </Box>
  )
};