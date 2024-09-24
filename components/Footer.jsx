import React from "react";
import { Box, HStack, Link, Icon } from "@chakra-ui/react";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      width="100%"
      bottom="0"
      bg="gray.800"
      color="white"
      py={5}
      mt="auto"
      
    >
      <HStack justify="center" spacing={8}>
        <Link href="https://www.linkedin.com/in/hannahsmithballroom/" isExternal  _hover={{color: "brand.300" }}>
          <Icon as={FaLinkedin} boxSize={6} />
        </Link>
        <Link href="https://www.facebook.com/hannahsmithballroom/" isExternal _hover={{color: "brand.300" }}>
          <Icon as={FaFacebook} boxSize={6} />
        </Link>
        <Link href="https://www.instagram.com/hannahsmithballroom/" isExternal _hover={{color: "brand.300" }}>
          <Icon as={FaInstagram} boxSize={6} />
        </Link>
      </HStack>
    </Box>
  );
};

export default Footer;
