<<<<<<< HEAD
import { Box } from "@chakra-ui/react";
import React from "react";

function PageLayout({ children }) {
  return (
    <Box width="100%" bgColor="rgba(246,241,241,0.6)" height={"100%"}>
      <Box w="100%" h="100%" margin="0 auto" position="relative" maxW="1600px">
        {children}
      </Box>
    </Box>
  );
}

export default PageLayout;
=======
import { Box } from '@chakra-ui/react'
import React from 'react'

function PageLayout({children}) {
  return (
    <Box
        width='100%'
        bgColor='rgba(246,241,241,0.6)'
        height={'100%'}
    >
        <Box
            w='100%'
            h='100%'
            margin='0 auto'
            position='relative'
            maxW='1600px'
        >
          { children }
        </Box>
    </Box>
  )
}

export default PageLayout
>>>>>>> 0faf25b5bb8c313b32bfdf49ea0cc24cfef72c1d
