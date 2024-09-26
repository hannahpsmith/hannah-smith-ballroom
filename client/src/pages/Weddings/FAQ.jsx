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
          Private lessons are ideal for wedding couples because they provide personalized attention and a customized experience tailored to your unique needs. With one-on-one instruction, I can help you both feel comfortable and confident as you prepare for your first dance. We can work at your pace, focus on the specific style of dance you envision, and refine your routine to make it truly special.
        </Text>
        <Text fontSize="lg" mb={4}>
          Additionally, private lessons allow us to address any concerns or preferences you may have, ensuring that the choreography feels authentic to you as a couple. Whether you're looking for a simple sway or an elaborate performance, private lessons are the best way to make sure your first dance is everything you’ve dreamed of for your big day.        
          </Text>
        <Heading as="h2" size="md" fontSize="23px" pb={4}>
          What should we wear to our lesson?
        </Heading>
        <Text fontSize="lg" mb={4}>
          Wear anything comfortable that allows you to move freely! The most important thing is that you feel relaxed and can focus on dancing, so choose clothes that let you move easily and don’t restrict your motion. Keep in mind that you’ll want to practice in footwear similar to what you'll be wearing on your big day, so you can get used to how it feels on the dance floor. Whether it's dress shoes, heels, or flats, wearing comparable shoes during your lessons will help you feel more confident and prepared.
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
          How far in advance should we start our first dance lessons?
        </Heading>
        <Text fontSize="lg" mb={4}>
          Ideally, you should start your first dance lessons about 3 to 4 months before your wedding. This gives you enough time to learn at a comfortable pace, practice, and feel confident with your routine. For more elaborate or choreographed routines, some couples choose to begin 6 months to a year in advance to allow for extra rehearsal time and refinement. If you're on a tighter schedule, don’t worry—I’m happy to work with your timeline and create a plan that fits your needs.
        </Text>
        <Heading as="h2" size="md" fontSize="23px" pb={4}>
          How many lessons will we need?
        </Heading>
        <Text fontSize="lg" mb={4}>
          Most wedding couples come to at least 5 lessons to feel fully prepared and confident for their first dance, but it’s not required. The number of lessons depends on your goals, timeline, and how comfortable you feel on the dance floor. You don’t need to make any decisions before your first lesson—we’ll assess your progress and decide what works best for you as we go!
        </Text>
        <Heading as="h2" size="md" fontSize="23px" pb={4}>
          We’re not dancers at all—can we still learn a first dance?
        </Heading>
        <Text fontSize="lg" mb={4}>
          Absolutely! Many couples I work with have little to no dance experience, and that’s totally okay. My lessons are designed to make you feel comfortable and confident, even if you’re completely new to dancing. We’ll start with the basics and work up to a routine that feels natural and fun for you both.
        </Text>
        <Heading as="h2" size="md" fontSize="23px" pb={4}>
          Do you offer lessons to LGBTQ+ couples?
        </Heading>
        <Text fontSize="lg" mb={4}>
          Yes! All couples are welcome and encouraged. Everyone deserves to have a memorable first dance, and I’m excited to work with couples of all backgrounds and orientations to create a special and unique experience.
        </Text>
        <Heading as="h2" size="md" fontSize="23px" pb={4}>
          What song should we choose for our first dance?
        </Heading>
        <Text fontSize="lg" mb={4}>
          Choosing the perfect song is all about what feels right for you as a couple. I can definitely help guide you based on the style of dance you're interested in or the vibe you want to create—whether it’s romantic, fun, or something more playful. If you have a song that holds special meaning, we can build a routine around that. And if you’re having trouble deciding, I can suggest songs that fit your personalities and style. If you’re torn between a few favorites, we can even create a mashup to include more than one song! This is a great way to surprise your guests with a unique and personalized dance that combines different moods or genres.
        </Text>
        <Heading as="h2" size="md" fontSize="23px" pb={4}>
          Can we include our wedding party in a dance?
        </Heading>
        <Text fontSize="lg" mb={4}>
          Yes! I can work with your wedding party—groomsmen, bridesmaids, or even parents—to choreograph a fun group dance for the reception. Whether it’s a simple routine or something more involved, we can create something that everyone will enjoy.
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