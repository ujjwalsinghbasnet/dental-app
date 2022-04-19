import { Box, Flex, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../../components/admin/Layout'
import AppointmentSlot from '../../components/Appointment/AppointmentSlot'
import Calendar from '../../components/Calendar'
import { getBookedAppointments } from '../../features/appointmentSlice'


const Appointments = () => {

    const dispatch = useDispatch()
    const appointments = useSelector(state => state.appointment.appointment) || { results: [] }
    const [date,setDate] = useState(new Date())
    const [activeAppointment,setActiveAppointment] = useState(null)

    const focusAppointment = (id) => {
        setActiveAppointment(id)
      }
    const handleDateChange = (date) => {
        setDate(date)
        dispatch(getBookedAppointments(date))
    }

  return (
    <Layout title='Appointments'>
        <Flex 
            mt='8rem'
        >
            <Box
                w='fit-content'
                mr='2.5rem'
            >
                <Calendar date={date} handleChange={handleDateChange} />
            </Box>
            <Flex
                direction='column'
                w='70%'
            >
                <Heading as='h1' fontSize={{ base: '1rem', sm: '1rem', md: '1.3rem', lg: '1.5rem' }}>Scheduled Appointment</Heading>
                <Flex mt='2rem' direction={'column'}>
                    {
                        appointments.results.map((appointment) => <AppointmentSlot appointment={appointment} handleClick={focusAppointment} active={activeAppointment}/>)
                    }
                </Flex>
            </Flex>
        </Flex>
    </Layout>
  )
}

export default Appointments