import { Link as RouterLink } from 'react-router-dom';
import { Box, Flex, Button } from '@chakra-ui/react';


export default function LearnBook() {
  
  return (
    <Flex>
        <Button as={RouterLink} to="/book-lesson/orem" >
          Orem, UT
        </Button>

        <Button as={RouterLink} to="/book-lesson/slc">
          SLC, UT
        </Button>
      </Flex>
  );
}
