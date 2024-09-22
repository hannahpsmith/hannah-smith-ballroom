import { Link as RouterLink } from 'react-router-dom';
import { Box, Flex, Link, Menu, MenuButton, MenuList, MenuItem, Button, textDecoration } from '@chakra-ui/react';
// import logo from "../../src/assets/logo-gold.png";

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
  return (
    <Flex as="nav" className="navbar" justify="space-between" align="top" p={14} bg={"brand.900"} >
      <Box className="navbar-right" position="absolute" top={2} right={2}>
        <Button as={RouterLink} to="/login" className="login-btn" bg="brand.300" color="brand.50"  _hover={{ bg: "brand.50", color: "brand.300" }}>
          Login
        </Button>
      </Box>

      <Flex className="navbar-links" gap={4} position="absolute" bottom={10} left="50%" transform="translateX(-50%)">
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
            <MenuItem as={RouterLink} to="/weddings/packages">
              Packages
            </MenuItem>
            <MenuItem as={RouterLink} to="/weddings/gallery">
              Gallery
            </MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton as={Button} {...linkStyles}>
            Learn to Dance
          </MenuButton>
          <MenuList>
            <MenuItem as={RouterLink} to="/learn-to-dance/classes">
              Classes
            </MenuItem>
            <MenuItem as={RouterLink} to="/learn-to-dance/schedule">
              Schedule
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
}
