import { Link as RouterLink } from 'react-router-dom';
import {
  Box, Flex, Button, Image, Menu, MenuButton, MenuList, MenuItem, IconButton, Drawer,
  DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, useDisclosure, VStack
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import logo from '../assets/logo-gold.png';

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
      color: "brand.300",
    },
  }

  return (
    <Flex as="nav" className="navbar" bg="brand.900" justify="space-between" align="center" p={{ base: 4, md: 10 }} minHeight={{ base: '80px', md: '80px' }}>
      
      {/* Logo Section with Dynamic Hover Effect */}
      <Flex justify="flex-start" align="center">
        <Image src={logo} height={20} minW={180} objectFit='cover' className="logo" />
      </Flex>

      {/* Hamburger Icon for Tablet and Mobile (activates below 1024px) */}
      <IconButton
        aria-label="Open Menu"
        icon={<HamburgerIcon />}
        display={{ base: "block", lg: "none" }}  /* Show hamburger below 1024px for tablet and mobile */
        onClick={onOpen}
        position="absolute"
        top={3}
        right={3}
      />

      {/* Drawer for Tablet and Mobile Navigation */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            {/* Using VStack to space out buttons */}
            <VStack spacing={6} align="stretch" mt={8}>
              <Button as={RouterLink} to="/about" {...linkStyles} w="100%" onClick={onClose}>
                About Hannah
              </Button>
              <Button as={RouterLink} to="/notes" {...linkStyles} w="100%" onClick={onClose}>
                Notes
              </Button>
              <Button as={RouterLink} to="/contact" {...linkStyles} w="100%" onClick={onClose}>
                Contact
              </Button>

              {/* Weddings Dropdown */}
              <Menu>
                <MenuButton as={Button} {...linkStyles} w="100%">
                  Weddings
                </MenuButton>
                <MenuList>
                  <MenuItem as={RouterLink} to="/weddings/about" onClick={onClose}>
                    About
                  </MenuItem>
                  <MenuItem as={RouterLink} to="/weddings/book-lesson" onClick={onClose}>
                    Book Lesson
                  </MenuItem>
                  <MenuItem as={RouterLink} to="/weddings/faq" onClick={onClose}>
                    FAQ
                  </MenuItem>
                </MenuList>
              </Menu>

              {/* Learn to Dance Dropdown */}
              <Menu>
                <MenuButton as={Button} {...linkStyles} w="100%">
                  Learn to Dance
                </MenuButton>
                <MenuList>
                  <MenuItem as={RouterLink} to="/learn-to-dance/about" onClick={onClose}>
                    About
                  </MenuItem>
                  <MenuItem as={RouterLink} to="/learn-to-dance/book-lesson" onClick={onClose}>
                    Book Lesson
                  </MenuItem>
                  <MenuItem as={RouterLink} to="/learn-to-dance/faq" onClick={onClose}>
                    FAQ
                  </MenuItem>
                </MenuList>
              </Menu>

              {/* Add Login Button in Drawer for Tablet/Mobile */}
              <Button as={RouterLink} to="/login" {...loginStyles} w="100%" onClick={onClose}>
                Login
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Full-width Navbar for screens larger than 1024px (centered) */}
      <Flex as="nav" className="navbar-links" gap={2} display={{ base: "none", lg: "flex" }} justify="center" align="center" flexGrow={1}>
        <Button as={RouterLink} to="/about" {...linkStyles}>
          About Hannah
        </Button>
        <Button as={RouterLink} to="/notes" {...linkStyles}>
          Notes
        </Button>
        <Button as={RouterLink} to="/contact" {...linkStyles}>
          Contact
        </Button>

        {/* Weddings Dropdown */}
        <Menu>
          <MenuButton as={Button} {...linkStyles}>
            Weddings
          </MenuButton>
          <MenuList>
            <MenuItem as={RouterLink} to="/weddings/about">
              About
            </MenuItem>
            <MenuItem as={RouterLink} to="/weddings/book-lesson">
              Book Lesson
            </MenuItem>
            <MenuItem as={RouterLink} to="/weddings/faq">
              FAQ
            </MenuItem>
          </MenuList>
        </Menu>

        {/* Learn to Dance Dropdown */}
        <Menu>
          <MenuButton as={Button} {...linkStyles}>
            Learn to Dance
          </MenuButton>
          <MenuList>
            <MenuItem as={RouterLink} to="/learn-to-dance/about">
              About
            </MenuItem>
            <MenuItem as={RouterLink} to="/learn-to-dance/book-lesson">
              Book Lesson
            </MenuItem>
            <MenuItem as={RouterLink} to="/learn-to-dance/faq">
              FAQ
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>

      {/* Login Button for Larger Screens (always visible for large screens) */}
      <Box display={{ base: "none", lg: "block" }} position="absolute" top={3} right={3}>
        <Button as={RouterLink} to="/login" className="login-btn" {...loginStyles}>
          Login
        </Button>
      </Box>
    </Flex>
  );
}
