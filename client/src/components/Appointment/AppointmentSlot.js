import React from 'react'
import {
    Box,
    Flex,
    Heading
} from '@chakra-ui/react'


function AppointmentSlot({ appointment,handleClick,active }) {

  const { id } = appointment
  return (
    <Box 
      w='100%'
      p='1rem'
      borderRadius={'0.5rem'}
      mb='1rem'
      bgImage={'linear-gradient(to left,#18D2AE, #0FCFEA)'}
      cursor='pointer'
      onClick={() => handleClick(id)}
      border = {active===id ? '2px solid  #0d7ea6' : ''}
    >
        <Heading as='h3' fontSize={{base: '0.8rem', sm: '0.8rem', md: '1rem', lg: '1rem'}} mb='0.7rem' color='#ebe5e5'>9AM-10AM</Heading>
        <Flex
         w='100%'
         justify={'space-between'}
         align='center'
         color='#ebe5e5'
        >
          <Heading as='h4' fontSize={{base: '0.7rem', sm: '0.7rem', md: '0.9rem', lg: '0.9rem'}}>Dr. John Doe</Heading>
          <Heading as='h5' fontSize={{base: '0.6rem', sm: '0.6rem', md: '0.8rem', lg: '0.8rem'}}>Space Available - 2</Heading>
        </Flex>
    </Box>
  )
}

export default AppointmentSlot