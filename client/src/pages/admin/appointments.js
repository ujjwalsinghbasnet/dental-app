import { Box, Flex, Heading, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../../components/admin/Layout'
import AppointmentSlot from '../../components/Appointment/AppointmentSlot'
import Calendar from '../../components/Calendar'
import { getBookedAppointments } from '../../features/appointmentSlice'


const Appointments = () => {

    const dispatch = useDispatch()
    const toast = useToast()
    const appointments = useSelector(state => state.appointment.appointment) || { results: [] }
    const [date,setDate] = useState(new Date())
    const [activeAppointment,setActiveAppointment] = useState(null)

    useEffect(() => {
        dispatch(getBookedAppointments(date)).then(res => {
            if(res.hasOwnProperty('error')){
                toast({
                  title: res.payload.message,
                  description: 'Error on fetching...',
                  status: 'error',
                  duration: 3000,
                  isClosable: true,
                })
            }
        })
    },[])
    
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
                        appointments.results && ( appointments.results.length === 0 ? 
                        <Heading as='h1' fontSize={{ base: '0.9rem', sm: '0.9rem', md: '1rem', lg: '1rem' }} color='#959191'>
                            No scheduled appointments yet...
                        </Heading> : appointments.results.map((appointment) => <AppointmentSlot appointment={appointment} handleClick={focusAppointment} active={activeAppointment}/>)
                        )
                    }
                </Flex>
            </Flex>
        </Flex>
    </Layout>
  )
}

export default Appointments