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
