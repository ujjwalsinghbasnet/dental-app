import React, {useState} from 'react'
import { Box, Button, Flex, Heading,useToast } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import NavResponsive from '../components/NavResponsive'
import Calendar from '../components/Calendar'
import AppointmentSlot from '../components/Appointment/AppointmentSlot'
import { scheduleUserAppointment } from '../features/appointmentSlice'

const appointments = [
  {
    id: 1,
    timeslot: '9AM-10AM',
    doctor: 'Dr. John Doe',
    space: 2
  },
  {
    id: 2,
    timeslot: '9AM-10AM',
    doctor: 'Dr. John Doe',
    space: 2
  }
] 

function Appointment() {

  // const appointments = useSelector(state => state.appointment)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [activeAppointment,setActiveAppointment] = useState(null)
  const [date, setDate] = useState(new Date())
  const toast = useToast()
  const user = JSON.parse(localStorage.getItem('dental_user'))

  const focusAppointment = (id) => {
    setActiveAppointment(id)
  }
  const handleDateChange = (date) => {
    setDate(date)
  }
  
  const bookAppointment = () => {
    if(!activeAppointment){
      toast({
        title: 'No Appointment Selected!',
        description: 'please select a slot.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    } else {
      const selectedAppointment = appointments.filter(appointment => appointment.id === activeAppointment)[0]
      const toBook = {
        date,
        timeslot: selectedAppointment.timeslot,
        doctor: selectedAppointment.doctor,
      }
      dispatch(scheduleUserAppointment({toBook,token: user.token})).then(() => {
        toast({
          title: 'Done',
          description: 'appointment booked successfully',
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
        setTimeout(() => {
          navigate('/user/appointments', { replace: true })
        }, 3000)
      })
    }
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
          direction={{base: 'column', sm:'column', md:'row', lg:'row'}}
        >
          <Calendar date={date} handleChange={handleDateChange}/>
          <Box ml='5%' w='100%'>
            <Flex
              mb='1.5rem'
              w='100%'
              justify='space-between'
              align='center'
            >
              <Heading as='h1' fontSize={{ base: '1rem', sm: '1rem', md: '1.3rem', lg: '1.5rem' }}>Available</Heading>
              <Button variant='secondary-btn' onClick={bookAppointment}>Book Appointment</Button>
            </Flex>
            {
              appointments.map(appointment => <AppointmentSlot appointment={appointment} key={appointment.id} handleClick={focusAppointment} active={activeAppointment}/>)
            }
          </Box>
        </Flex>
        </Box>
      </Box>
    </Box>
  )
}

export default Appointment