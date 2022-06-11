<<<<<<< HEAD
import React from "react";
import { Box } from "@chakra-ui/react";

function Section({ children }) {
  return (
    <Box
      px={{ base: "2rem", sm: "3.5rem", md: "4rem", lg: "6rem" }}
      width="100%"
      maxW="1600px"
      py={"2.5rem"}
      margin="0 auto"
      mt="5rem"
    >
      {children}
    </Box>
=======
import React from 'react';
import { Box } from '@chakra-ui/react'

function Section({ children }) {
  return (
      <Box
        px={{base: '2rem', sm: '3.5rem', md: '4rem', lg: '6rem'}}
        width='100%'
        maxW='1600px'
        py={'2.5rem'}
        margin='0 auto'
        mt='5rem'
      >
          {children}
      </Box>
>>>>>>> 0faf25b5bb8c313b32bfdf49ea0cc24cfef72c1d
  );
}

export default Section;
