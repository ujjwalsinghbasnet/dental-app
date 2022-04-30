import React from 'react'
import {
    Box,
    Flex,
    Heading
} from '@chakra-ui/react'


function AdminAppointmentSlot({ appointment,handleClick,active }) {

  const { _id,timeslot,doctor,user,visited, phone } = appointment
  return (
    <Box 
      w='100%'
      p='1rem'
      borderRadius={'0.5rem'}
      mb='1rem'
      bgImage={visited ? '' :'linear-gradient(to left,#18D2AE, #0FCFEA)'}
      cursor='pointer'
      onClick={() => handleClick(_id)}
      border = {active=== _id || visited ? '2px solid  #0d7ea6' : ''}
    >
      <Flex
         w='100%'
         justify={'space-between'}
         align='center'
         color= {visited ? 'black': '#ebe5e5'}
        >
          <Heading as='h3' fontSize={{base: '0.8rem', sm: '0.8rem', md: '1rem', lg: '1rem'}} mb='0.7rem'>{timeslot}</Heading>
          <Heading as='h5' fontSize={{base: '0.6rem', sm: '0.6rem', md: '0.8rem', lg: '0.8rem'}}>Patient  - {user.name}</Heading>
        </Flex>
        <Flex
         w='100%'
         justify={'space-between'}
         align='center'
         color= {visited ? 'black': '#ebe5e5'}
        >
          <Heading as='h4' fontSize={{base: '0.7rem', sm: '0.7rem', md: '0.9rem', lg: '0.9rem'}}>{doctor}</Heading>
          <Heading as='h5' fontSize={{base: '0.6rem', sm: '0.6rem', md: '0.8rem', lg: '0.8rem'}}>Phone  - {user.phone}</Heading>
        </Flex>
    </Box>
  )
}

export default AdminAppointmentSlot