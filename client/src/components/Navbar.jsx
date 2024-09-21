import { Link as RouterLink } from 'react-router-dom';
import { Box, Flex, Link, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';

export default function Navbar() {
  return (
    <Flex as="nav" className="navbar" justify="space-between" align="center" p={4} bg="gray.100">
      <Box className="navbar-left">
        <Link as={RouterLink} to="/login" className="login-btn" color="teal.500">
          Login
        </Link>
      </Box>

      <Flex className="navbar-links" gap={4}>
        <Link as={RouterLink} to="/about" color="teal.500">
          About HSB
        </Link>
        <Link as={RouterLink} to="/notes" color="teal.500">
          Notes
        </Link>
        <Link as={RouterLink} to="/contact" color="teal.500">
          Contact
        </Link>

        <Menu>
          <MenuButton as={Button} colorScheme="teal">
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
          <MenuButton as={Button} colorScheme="teal">
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
