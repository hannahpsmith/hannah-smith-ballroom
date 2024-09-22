import { Link as RouterLink } from 'react-router-dom';
import { Box, Flex, Link, Menu, MenuButton, MenuList, MenuItem, Button, textDecoration } from '@chakra-ui/react';

export default function Navbar() {
  const linkStyles = {
    bg: "brand.400",
    color: "brand.50",
  }
  return (
    <Flex as="nav" className="navbar" justify="space-between" align="top" p={14} bg={"brand.900"} >
      <Box className="navbar-right" position="absolute" top={2} right={2}>
        <Link as={Button} to="/login" className="login-btn" bg="brand.300" color="brand.50">
          Login
        </Link>
      </Box>

      <Flex className="navbar-links" gap={4} position="absolute" bottom={10} left="50%" transform="translateX(-50%)">
        <Link as={Button} to="/about" {...linkStyles} >
          About HSB
        </Link>
        <Link as={Button} to="/notes" {...linkStyles} >
          Notes
        </Link>
        <Link as={Button} to="/contact" {...linkStyles}>
          Contact
        </Link>

        <Menu>
          <MenuButton as={Button} {...linkStyles} >
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
