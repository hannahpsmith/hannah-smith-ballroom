import { Box, Button, Flex, FormControl, FormLabel, Heading, IconButton, Input, InputGroup, InputLeftElement, Text, Stack, Textarea, Tooltip, useClipboard, useColorModeValue, VStack } from '@chakra-ui/react';
import { BsInstagram, BsLinkedin, BsPerson, BsFacebook } from 'react-icons/bs';
import { MdEmail, MdOutlineEmail } from 'react-icons/md';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const [successMessage, setSuccessMessage] = useState('');
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zr9yp83', 'template_0437did', form.current, {
        publicKey: '5POw6jrUjAraRqTlN',
      })
      .then(
        () => {
          setSuccessMessage('Message Sent!');
          setFormData({ user_name: '', user_email: '', message: '' });
          form.current.reset(); 
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  }; 

  const { hasCopied, onCopy } = useClipboard('hannahsmithballroom@gmail.com');

  return (
    <Flex
      borderRadius="lg"
      bg="brand.50"
      align="center"
      justify="center"
      p={0}
      m={0}
      mx="auto" 
      width="100%"
      maxWidth="600px"
      id="contact">
      <Box borderRadius="lg" m={{ base: 2, md: 5, lg: 5 }} p={{ base: 2, lg: 5 }}>
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 8 }}>
            <Heading fontSize={{ base: '4xl', md: '5xl' }}>Contact</Heading>

            {successMessage && <Text color="green.600" fontSize="xl" fontWeight="bold">{successMessage}</Text>} {/* Display success message */}

            <Stack spacing={{ base: 4, md: 8, lg: 20 }} direction={{ base: 'column', md: 'row' }}>
              <Stack align="center" justify="space-around" direction={{ base: 'row', md: 'column' }}>
                <Tooltip label={hasCopied ? 'Email Copied!' : 'Copy Email'} closeOnClick={false} hasArrow>
                  <IconButton
                    aria-label="email"
                    variant="ghost"
                    color="brand.300"
                    size="lg"
                    fontSize="3xl"
                    icon={<MdEmail />}
                    _hover={{ bg: 'brand.200', color: 'brand.900' }}
                    onClick={onCopy}
                    isRound
                  />
                </Tooltip>

                <Box as="a" href="https://www.instagram.com/hannahsmithballroom/">
                  <IconButton
                    aria-label="instagram"
                    color="brand.300"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<BsInstagram />}
                    _hover={{ bg: 'brand.200', color: 'brand.900' }}
                    isRound
                  />
                </Box>

                <Box as="a" href="https://facebook.com/hannahsmithballroom/">
                  <IconButton
                    aria-label="facebook"
                    variant="ghost"
                    color="brand.300"
                    size="lg"
                    icon={<BsFacebook size="28px" />}
                    _hover={{ bg: 'brand.200', color: 'brand.900' }}
                    isRound
                  />
                </Box>

                <Box as="a" href="https://www.linkedin.com/in/hannahsmithballroom/">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    color="brand.300"
                    size="lg"
                    icon={<BsLinkedin size="28px" />}
                    _hover={{ bg: 'brand.200', color: 'brand.900' }}
                    isRound
                  />
                </Box>
              </Stack>

              <Box
                bg="brand.200"
                borderRadius="lg"
                p={{ base: 3, lg: 8 }}
                color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                shadow="base"
              >
                <VStack spacing={5}>
                  <form ref={form} onSubmit={sendEmail}>
                    <FormControl isRequired>
                      <FormLabel>Name</FormLabel>
                      <InputGroup bg="white" borderRadius="lg">
                        <InputLeftElement>
                          <BsPerson />
                        </InputLeftElement>
                        <Input type="text" name="user_name" placeholder="Your Name" value={formData.user_name} onChange={handleChange} />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>
                      <InputGroup bg="white" borderRadius="lg">
                        <InputLeftElement>
                          <MdOutlineEmail />
                        </InputLeftElement>
                        <Input type="email" name="user_email" placeholder="Your Email" value={formData.user_email} onChange={handleChange} />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Message</FormLabel>
                      <Textarea
                        bg="white"
                        borderRadius="lg"
                        name="message"
                        placeholder="Your Message"
                        rows={6}
                        resize="none"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </FormControl>

                    <Button
                      type="submit"
                      bg="brand.400"
                      color="white"
                      _hover={{
                        bg: 'brand.50',
                        color: 'brand.900'
                      }}
                      width="full"
                    >
                      Send Message
                    </Button>
                  </form>
                </VStack>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}

export default Contact;
