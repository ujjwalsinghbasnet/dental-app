import React from 'react'
import {
    Box,
    Flex
} from '@chakra-ui/react'
import Calendar from '../Calendar'

function AppointmentComponent() {
  return (
    <Flex
        w='100%'
        h='100%'
    >
        <Box>
            <Calendar />
        </Box>
    </Flex>
  )
}

export default AppointmentComponent