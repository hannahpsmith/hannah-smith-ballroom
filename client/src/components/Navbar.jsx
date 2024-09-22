import { Link as RouterLink } from 'react-router-dom';
import { Box, Flex, Link, Menu, MenuButton, MenuList, MenuItem, Button, textDecoration, Image } from '@chakra-ui/react';
import logo from '../assets/logo-gold.png';


export default function Navbar() {
  const linkStyles = {
    bg: "brand.400",
    color: "brand.50",
    _hover: { 
      bg: "brand.200",
    },
    _active: {
      bg: "brand.300",
    },
  }
  const loginStyles = {
    bg: "brand.300",
    color: "brand.50",
    _hover: {
      bg: "brand.50",
      color: "brand.300"
    }
  }
  const menuStyles = {
    bg: "brand.50",
    _hover: {
      bg: "brand.200",
      color: "brand.50"
    }  
  }

  return (
    // <Flex as="nav" className="navbar" justify="space-between" align="center" p={{ base: 7, md: 8 }} bg={"brand.900"} position={'relative'} minHeight={{ base: '300px', md: '80px' }}>
    <Flex as="nav" className="navbar" bg={"brand.900"} justify="space-between" align="center" position='relative' p={{ base: 7, md: 10 }} minHeight={{ base: '360px', md: '80px' }}>
        <Flex justify={['center', 'space-between']} >
          <Image src={logo} height={20} minW={265} obectFit='cover' />
        </Flex>
      <Box className="navbar-right" position="absolute" top={3} right={3}>
        <Button as={RouterLink} to="/login" className="login-btn" {...loginStyles}>
          Login
        </Button>
      </Box>

      <Flex as="nav" className="navbar-links" gap={4} position="absolute" bottom={3} left="50%" transform="translateX(-50%)" direction={{ base: 'column' , md: 'row' }}   
      >
        <Button as={RouterLink} to="/about" {...linkStyles} >
          About HSB
        </Button>
        <Button as={RouterLink} to="/notes" {...linkStyles} >
          Notes
        </Button>
        <Button as={RouterLink} to="/contact" {...linkStyles}>
          Contact
        </Button>

        <Menu>
          <MenuButton as={Button} {...linkStyles}>
            Weddings
          </MenuButton>
          <MenuList>
            <MenuItem as={RouterLink} to="/weddings/about" {...menuStyles}>
              About
            </MenuItem>
            <MenuItem as={RouterLink} to="/weddings/book-lesson" {...menuStyles}>
              Book Lesson
            </MenuItem>
            <MenuItem as={RouterLink} to="/weddings/faq" {...menuStyles}>
              FAQ
            </MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton as={Button} {...linkStyles}>
            Learn to Dance
          </MenuButton>
          <MenuList>
            <MenuItem as={RouterLink} to="/learn-to-dance/about" {...menuStyles}>
              About
            </MenuItem>
            <MenuItem as={RouterLink} to="/learn-to-dance/book-lesson" {...menuStyles}>
              Book Lesson
            </MenuItem>
            <MenuItem as={RouterLink} to="/learn-to-dance/faq" {...menuStyles}>
              FAQ
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
}
