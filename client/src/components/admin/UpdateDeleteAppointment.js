<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  useToast,
} from "@chakra-ui/react";
import fetchServices from "../../features/services";
import { useDispatch } from "react-redux";
import {
  editAvailableAppointment,
  getAvailableAppointment,
} from "../../features/appointmentSlice";

const UpdateDeleteAppointment = ({ id, closeUpAndDel }) => {
  const [appointment, setAppointment] = useState({});
  const dispatch = useDispatch();
  const date = new Date();
  const toast = useToast();

  useEffect(() => {
    async function fetchFunc() {
      const appointment = await fetchServices.getSingleAvailableAppointment(id);
      setAppointment(appointment.result);
    }
    fetchFunc();
  }, [id]);

  const handleChange = (e) => {
    setAppointment({ ...appointment, [e.target.id]: e.target.value });
  };

  const deleteHandler = async () => {
    await fetchServices.deleteAvailableAppointment(id);
    toast({
      title: "Deleted",
      description: "deleted succesfully",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    dispatch(getAvailableAppointment(date));
    setTimeout(() => handleCancel(), 2000);
  };

  const updateHandler = () => {
    dispatch(editAvailableAppointment({ id, body: appointment })).then(
      (res) => {
        if (res.hasOwnProperty("error")) {
          toast({
            title: res.payload.message,
            description: "something went wrong",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        } else {
          toast({
            title: "Success",
            description: "successfully updated appointment!",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          dispatch(getAvailableAppointment(date));
          setTimeout(() => handleCancel(), 2000);
        }
      }
    );
  };

  const handleCancel = () => {
    closeUpAndDel();
  };

  return (
    <Box
      w="100%"
      h="100%"
      background="rgb(225,209,209,0.6)"
      backdropFilter="blur(5px)"
      display="grid"
      placeItems="center"
      zIndex="10"
      position="absolute"
      top="0"
      left="0"
    >
      <Flex
        w={{ base: "90%", sm: "90%", md: "80%", lg: "60%" }}
        direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
        background="white"
        p="2rem"
      >
        <Flex
          direction="column"
          w="100%"
          ml={{ base: "0", sm: "0", md: "2rem", lg: "2rem" }}
        >
          <Flex mb="1.5rem" justify="space-between" align="center">
            <Heading
              as="h1"
              fontSize={{
                base: "1rem",
                sm: "1rem",
                md: "1.3rem",
                lg: "1.5rem",
              }}
            >
              Update/delete Appointment
            </Heading>
            <Button variant="secondary-btn" onClick={handleCancel}>
              Cancel
            </Button>
          </Flex>
          <FormControl>
            <FormLabel htmlFor="date">Date</FormLabel>
            <Input
              id="date"
              type="text"
              value={new Date(appointment.date).toLocaleDateString()}
              disabled={true}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="timeslot">Time Slot</FormLabel>
            <Input
              id="timeslot"
              type="text"
              defaultValue={appointment.timeslot}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mt="1rem">
            <FormLabel htmlFor="space">Available Space</FormLabel>
            <Input
              id="space"
              type="text"
              defaultValue={appointment.space}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mt="1rem">
            <FormLabel htmlFor="price">Price</FormLabel>
            <Input
              id="price"
              type="number"
              defaultValue={appointment.price}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mt="1rem">
            <FormLabel htmlFor="doctor">Assigned Doctor</FormLabel>
            <Select
              placeholder="Select option"
              onChange={handleChange}
              id="doctor"
              defaultValue={appointment.doctor}
            >
              <option value="Dr. Ujjwal Singh Basnet">
                Dr. Ujjwal Singh Basnet
              </option>
              <option value="Dr. Nigita Kumal">Dr. Nigita Kumal</option>
              <option value="Dr. John Doe">Dr. John Doe</option>
              <option value="Dr. Mary Jane">Dr. Mary Jane</option>
            </Select>
          </FormControl>
          <Flex>
            <Button
              variant="primary-btn"
              mt="1rem"
              w="100%"
              onClick={updateHandler}
              mr="1.5rem"
            >
              Update Appointment
            </Button>
            <Button
              variant="primary-solid"
              background="red"
              color="white"
              borderRadius="0px"
              mt="1rem"
              w="100%"
              onClick={deleteHandler}
            >
              Delete
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default UpdateDeleteAppointment;
=======
import React, { useEffect, useState } from 'react'
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Select, useToast } from '@chakra-ui/react'
import fetchServices from '../../features/services'
import { useDispatch } from 'react-redux'
import { editAvailableAppointment, getAvailableAppointment } from '../../features/appointmentSlice'

const UpdateDeleteAppointment = ({id,closeUpAndDel}) => {
  const [appointment,setAppointment] = useState({})
  const dispatch = useDispatch()
  const date = new Date()
  const toast = useToast()

  useEffect(() => {
      async function fetchFunc(){
          const appointment = await fetchServices.getSingleAvailableAppointment(id)
          setAppointment(appointment.result)
      }
      fetchFunc();
  },[id])

  const handleChange = (e) => {
    setAppointment({...appointment, [e.target.id]: e.target.value})
  }

  const deleteHandler = async () => {
      await fetchServices.deleteAvailableAppointment(id)
      toast({
        title: 'Deleted',
        description: 'deleted succesfully',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      dispatch(getAvailableAppointment(date))
      setTimeout(() => handleCancel(), 2000)
  }

  const updateHandler = () => {
      dispatch(editAvailableAppointment({id, body: appointment})).then( res => {
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
                description: 'successfully updated appointment!',
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
            dispatch(getAvailableAppointment(date))
            setTimeout(() => handleCancel(), 2000)
        }
    })
  }

  const handleCancel = () => {
    closeUpAndDel()
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
                        Update/delete Appointment
                    </Heading>
                    <Button variant='secondary-btn' onClick={handleCancel}>Cancel</Button>
                </Flex>
                <FormControl>
                    <FormLabel htmlFor='date'>Date</FormLabel>
                    <Input id='date' type='text' value={new Date(appointment.date).toLocaleDateString()} disabled={true} />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='timeslot'>Time Slot</FormLabel>
                    <Input id='timeslot' type='text' defaultValue={appointment.timeslot} onChange={handleChange}/>
                </FormControl>
                <FormControl mt='1rem'>
                    <FormLabel htmlFor='space'>Available Space</FormLabel>
                    <Input id='space' type='text' defaultValue={appointment.space} onChange={handleChange}/>
                </FormControl>
                <FormControl mt='1rem'>
                    <FormLabel htmlFor='price'>Price</FormLabel>
                    <Input id='price' type='number' defaultValue={appointment.price} onChange={handleChange}/>
                </FormControl>
                <FormControl mt='1rem'>
                    <FormLabel htmlFor='doctor'>Assigned Doctor</FormLabel>
                    <Select placeholder='Select option' onChange={handleChange} id='doctor' defaultValue={appointment.doctor}>
                        <option value='Dr. Ujjwal Singh Basnet'>Dr. Ujjwal Singh Basnet</option>
                        <option value='Dr. Nigita Kumal'>Dr. Nigita Kumal</option>
                        <option value='Dr. John Doe'>Dr. John Doe</option>
                        <option value='Dr. Mary Jane'>Dr. Mary Jane</option>
                    </Select>
                </FormControl>
                <Flex>
                    <Button variant='primary-btn' mt='1rem' w='100%' onClick={updateHandler} mr='1.5rem'>Update Appointment</Button>
                    <Button variant='primary-solid' background='red' color='white' borderRadius='0px' mt='1rem' w='100%' onClick={deleteHandler}>Delete</Button>
                </Flex>
            </Flex>
        </Flex>
    </Box>
  )
}

export default UpdateDeleteAppointment
>>>>>>> 0faf25b5bb8c313b32bfdf49ea0cc24cfef72c1d
