import { Box, Button, Flex, FormControl, FormLabel, Heading, IconButton, Input, InputGroup, InputLeftElement, Text, Stack, Textarea, Tooltip, useClipboard, useColorModeValue, VStack, } from '@chakra-ui/react'
import { BsInstagram, BsLinkedin, BsPerson, BsFacebook } from 'react-icons/bs'
import { MdEmail, MdOutlineEmail } from 'react-icons/md'


export default function ContactFormWithSocialButtons() {
  const { hasCopied, onCopy } = useClipboard('hannahsmithballroom@gmail.com')

  return (
    <Flex
      borderRadius="lg"
      bg= "brand.50"
      align="center"
      justify="center"
      p={0} // Set padding to 0
      m={0} // Set margin to 0
      mx="auto" 
      width="100%"
      maxWidth="600px"
      id="contact">
      <Box borderRadius="lg" m={{ base: 2, md: 5, lg: 5 }} p={{ base: 2, lg: 5 }}>
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 8 }}>
            <Heading
              fontSize={{
                base: '4xl',
                md: '5xl',
              }}>
              Contact
            </Heading>

            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: 'column', md: 'row' }}>
              <Stack
                align="center"
                justify="space-around"
                direction={{ base: 'row', md: 'column' }}>
                <Tooltip
                  label={hasCopied ? 'Email Copied!' : 'Copy Email'}
                  closeOnClick={false}
                  hasArrow>
                  <IconButton
                    aria-label="email"
                    variant="ghost"
                    color="brand.300"
                    size="lg"
                    fontSize="3xl"
                    icon={<MdEmail />}
                    _hover={{
                      bg: 'brand.200',
                      color: 'brand.900',
                    }}
                    onClick={onCopy}
                    isRound
                  />
                </Tooltip>

                <Box as="a" href="#">
                  <IconButton
                    aria-label="instagram"
                    color="brand.300"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<BsInstagram />}
                    _hover={{
                      bg: 'brand.200',
                      color: 'brand.900',
                    }}
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
                    _hover={{
                      bg: 'brand.200',
                      color: 'brand.900',
                    }}
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
                    _hover={{
                      bg: 'brand.200',
                      color: 'brand.900',
                    }}
                    isRound
                  />
                </Box>
              </Stack>

              <Box
                bg= "brand.200"
                borderRadius="lg"
                p={{ base: 3, lg: 8 }}
                color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                shadow="base">
                <VStack spacing={5}>
                  <FormControl isRequired>
                    <FormLabel>Name</FormLabel>

                    <InputGroup bg="white" borderRadius="lg">
                      <InputLeftElement>
                        <BsPerson />
                      </InputLeftElement>
                      <Input type="text" name="name" placeholder="Your Name" />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>

                    <InputGroup bg="white" borderRadius="lg">
                      <InputLeftElement>
                        <MdOutlineEmail />
                      </InputLeftElement>
                      <Input type="email" name="email" placeholder="Your Email" />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Message</FormLabel>

                    <Textarea bg="white" borderRadius="lg"
                      name="message"
                      placeholder="Your Message"
                      rows={6}
                      resize="none"
                    />
                  </FormControl>

                  <Button
                    bg="brand.400"
                    color="white"
                    _hover={{
                      bg: 'brand.50',
                      color: 'brand.900'
                    }}
                    width="full">
                    Send Message
                  </Button>
                </VStack>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  )
}