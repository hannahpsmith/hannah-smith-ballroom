import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Stack,
  useColorModeValue,
  VStack,
  HStack
} from '@chakra-ui/react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';

const LOGIN_MUTATION = `
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

const SIGNUP_MUTATION = `
  mutation signup($email: String!, $password: String!) {
    signup(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: LOGIN_MUTATION,
          variables: { email, password },
        }),
      });

      const { data } = await response.json();
      if (data && data.login && data.login.token) {
        localStorage.setItem('token', data.login.token);
        localStorage.setItem('userId', data.login.user._id);
        console.log('Login successful!');
      } else {
        setError('Invalid login');
      }
    } catch (error) {
      setError('Login failed, please try again.');
      console.error(error);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: SIGNUP_MUTATION,
          variables: { email, password },
        }),
      });

      const { data } = await response.json();
      if (data && data.signup && data.signup.token) {
        localStorage.setItem('token', data.signup.token);
        localStorage.setItem('userId', data.signup.user._id);
        console.log('Sign Up successful!');
      } else {
        setError('Sign up failed');
      }
    } catch (error) {
      setError('Sign up failed, please try again.');
      console.error(error);
    }
  };

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
      id="contact"
    >
      <Box borderRadius="lg" m={{ base: 2, md: 5, lg: 5 }} p={{ base: 2, lg: 5 }}>
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 8 }}>
            <Heading fontSize={{ base: '4xl', md: '5xl' }}>Login or Sign Up</Heading>

            <Stack spacing={{ base: 4, md: 8, lg: 20 }} direction={{ base: 'column', md: 'row' }}>
              <Box
                bg="brand.200"
                borderRadius="lg"
                p={{ base: 3, lg: 8 }}
                color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                shadow="base"
              >
                <FormControl id="email" isRequired>
                  <FormLabel>Email</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none" children={<EmailIcon color="gray.300" />} />
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      bg="white"
                    />
                  </InputGroup>
                </FormControl>

                <FormControl id="password" isRequired mt={4}>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none" children={<LockIcon color="gray.300" />} />
                    <Input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      bg="white"
                    />
                  </InputGroup>
                </FormControl>

                {/* Fixed height error container */}
                <Box height="30px" mt={4}>
                  {error && (
                    <Text color="red.500" textAlign="center">
                      {error}
                    </Text>
                  )}
                </Box>

                <HStack spacing={4} width="full" justify="space-between" mt={4}>
                  <Button
                    bg="brand.400"
                    color="white"
                    _hover={{
                      bg: 'brand.50',
                      color: 'brand.900',
                    }}
                    width="full"
                    onClick={handleLogin}
                  >
                    Login
                  </Button>

                  <Button
                    bg="brand.400"
                    color="white"
                    _hover={{
                      bg: 'brand.50',
                      color: 'brand.900',
                    }}
                    width="full"
                    onClick={handleSignUp}
                  >
                    Sign Up
                  </Button>
                </HStack>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );

};

export default Login;
