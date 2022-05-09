import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Select, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addAppointment, getAvailableAppointment } from '../../features/appointmentSlice'
import Calendar from '../Calendar'

const AddAppointment = ({ handleCancel }) => {

    const [date,setDate] = useState(new Date())
    const dispatch = useDispatch()
    const toast = useToast()
    const [appointment,setAppointment] = useState({
        timeslot: '',
        doctor: '',
        space: '',
        price: ''
    })
  const user = JSON.parse(localStorage.getItem('dental_user'))


    const handleDateChange = (date) => {
        setDate(date)
    }
    const handleChange = (e) => {
        setAppointment({...appointment, [e.target.id]: e.target.value})
    }
    const submitHandler = () => {
        const { timeslot, doctor, space, price } = appointment

        if(!timeslot || !doctor || !space || !price){   
            toast({
                title: 'Error',
                description: 'All fields required',
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
        } else {
            dispatch(addAppointment({appointment: {timeslot,doctor,space,price,date}, token: user.token})).then( res => {
                if(res.hasOwnProperty('error')){
                    toast({
                      title: res.payload.message,
                      description: 'something went wrong',
                      status: 'error',
                      duration: 3000,
                      isClosable: true,
                    })
                } else {
                    toast({
                        title: 'Success',
                        description: 'successfully added appointment!',
                        status: 'success',
                        duration: 3000,
                        isClosable: true,
                    })
                    dispatch(getAvailableAppointment(date))
                    setTimeout(() => handleCancel(), 2000)
                }
            })
        }
    }

  return (
    <Box
        w='100%'
        h='100%'
        background='rgb(225,209,209,0.6)'
        backdropFilter='blur(5px)'
        display='grid'
        placeItems='center'
        zIndex='10'
        position='absolute'
        top='0'
        left='0'
    >
        <Flex
            w={{base:'90%', sm:'90%', md:'80%', lg:'60%'}}
            direction={{base: 'column', sm:'column', md:'row', lg:'row'}}
            background='white'
            p='2rem'
        >
            <Flex align={'center'} justify='center'>
                <Calendar date={date} handleChange={handleDateChange}/>
            </Flex>
            <Flex direction='column' w='100%' ml={{base:'0',sm:'0', md:'2rem', lg:'2rem'}}>
                <Flex
                    mb='1.5rem'
                    justify='space-between'
                    align='center'
                >
                    <Heading 
                        as='h1' 
                        fontSize={{ base: '1rem', sm: '1rem', md: '1.3rem', lg: '1.5rem' }}
                    >
                        Add Appointment
                    </Heading>
                    <Button variant='secondary-btn' onClick={handleCancel}>Cancel</Button>
                </Flex>
                <FormControl>
                    <FormLabel htmlFor='date'>Date</FormLabel>
                    <Input id='date' type='text' value={date.toLocaleDateString()} disabled={true} />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='timeslot'>Time Slot</FormLabel>
                    <Input id='timeslot' type='text' defaultValue={appointment.timeslot} onChange={handleChange}/>
                </FormControl>
                <FormControl mt='1rem'>
                    <FormLabel htmlFor='space'>Available Space</FormLabel>
                    <Input id='space' type='text' defaultValue={appointment.availableSpace} onChange={handleChange}/>
                </FormControl>
                <FormControl mt='1rem'>
                    <FormLabel htmlFor='price'>Price</FormLabel>
                    <Input id='price' type='number' defaultValue={appointment.price} onChange={handleChange}/>
                </FormControl>
                <FormControl mt='1rem'>
                    <FormLabel htmlFor='doctor'>Assigned Doctor</FormLabel>
                    <Select placeholder='Select option' onChange={handleChange} id='doctor'>
                        <option value='Dr. Ujjwal Singh Basnet'>Dr. Ujjwal Singh Basnet</option>
                        <option value='Dr. Nigita Kumal'>Dr. Nigita Kumal</option>
                        <option value='Dr. John Doe'>Dr. John Doe</option>
                        <option value='Dr. Mary Jane'>Dr. Mary Jane</option>
                    </Select>
                </FormControl>
                <Button variant='primary-btn' mt='1rem' w='100%' onClick={submitHandler}>Add Appointment</Button>
            </Flex>
        </Flex>
    </Box>
  )
}

export default AddAppointment