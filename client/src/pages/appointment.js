import React, {useState} from 'react'
import { Box, Flex, Heading } from '@chakra-ui/react'
import NavResponsive from '../components/NavResponsive'
import Calendar from '../components/Calendar'
import AppointmentSlot from '../components/Appointment/AppointmentSlot'

const appointments = [
  {
    id: 1,
    time: '9AM-10AM',
    doctor: 'Dr. John Doe',
    space: 2
  },
  {
    id: 2,
    time: '9AM-10AM',
    doctor: 'Dr. John Doe',
    space: 2
  }
] 

function Appointment() {

  const [activeAppointment,setActiveAppointment] = useState(null)

  const focusAppointment = (id) => {
    setActiveAppointment(id)
  }

  return (
    <Box
        width='100%'
        minH='100vh'
        bgColor='rgba(246,241,241,0.6)'
        position={'relative'}
    >
      <Box
          w='100%'
          h='100%'
          margin='0 auto'
          maxW='1600px'
          position={'relative'}
      >
        <NavResponsive />
       <Box 
        pt='10rem'
        px={{base: '2rem', sm: '3.5rem', md: '4rem', lg: '6rem'}}
        flex='1'
       >
        <Heading as='h1' color='primary' fontSize={{ base: '2.8rem', sm: '3rem', md: '3.5rem', lg: '3.5rem'}} >Schedule your appointment...</Heading>
        <Flex
          w='100%'
          mt='3rem'
          position='relative'
        >
          <Calendar />
          <Box ml='5%' w='100%'>
            <Heading as='h1' fontSize={{ base: '1rem', sm: '1rem', md: '1.3rem', lg: '1.5rem' }} mb='1.5rem'>Appointments Available</Heading>
            {
              appointments.map(appointment => <AppointmentSlot appointment={appointment} key={appointment.id} handleClick={focusAppointment} activeAppointment={activeAppointment}/>)
            }
          </Box>
        </Flex>
        </Box>
      </Box>
    </Box>
  )
}

export default Appointment