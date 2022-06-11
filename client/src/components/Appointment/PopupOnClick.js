<<<<<<< HEAD
import React, { useState } from "react";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { markvisited } from "../../features/appointmentSlice";
import fetchServices from "../../features/services";

function PopupOnClick({ handleCancel, id }) {
  const dispatch = useDispatch();
  const appointment = useSelector(
    (state) => state.appointment.appointments
  ) || { results: [] };
  const selectedApp = appointment.results.filter((app) => app._id === id)[0];
  const [status, setStatus] = useState(selectedApp?.visited);
  const user = JSON.parse(localStorage.getItem("dental_user"));

  const updateHandler = () => {
    setStatus(true);
    dispatch(markvisited(id));
    fetchServices.markVisited({ id, token: user.token });
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
          <Flex mb="2.5rem" justify="space-between" align="center">
            <Heading
              as="h1"
              fontSize={{
                base: "1rem",
                sm: "1rem",
                md: "1.3rem",
                lg: "1.5rem",
              }}
            >
              Appointment Details
            </Heading>
            <Button variant="secondary-btn" onClick={handleCancel}>
              close
            </Button>
          </Flex>
          <Flex mb="1rem" justify="space-between" align="center">
            <Heading
              as="h2"
              fontSize={{
                base: "0.9rem",
                sm: "0.9rem",
                md: "1.1rem",
                lg: "1.3rem",
              }}
              fontWeight="medium"
            >
              Patient: {selectedApp.user.name}
            </Heading>
            <Heading
              as="h2"
              fontSize={{
                base: "0.9rem",
                sm: "0.9rem",
                md: "1.1rem",
                lg: "1.3rem",
              }}
              fontWeight="medium"
            >
              Phone: {selectedApp.user.phone}
            </Heading>
          </Flex>
          <Heading
            as="h2"
            fontWeight="light"
            fontSize={{
              base: "0.9rem",
              sm: "0.9rem",
              md: "1.1rem",
              lg: "1.3rem",
            }}
          >
            Assigned Doctor: {selectedApp.doctor}
          </Heading>
          <Heading
            as="h2"
            fontWeight="light"
            fontSize={{
              base: "0.9rem",
              sm: "0.9rem",
              md: "1.1rem",
              lg: "1.3rem",
            }}
          >
            TimeSlot: {selectedApp.timeslot}
          </Heading>
          <Heading
            as="h2"
            fontWeight="light"
            fontSize={{
              base: "0.9rem",
              sm: "0.9rem",
              md: "1.1rem",
              lg: "1.3rem",
            }}
          >
            Payment: {selectedApp.payment}
          </Heading>
          <Heading
            as="h2"
            fontWeight="light"
            fontSize={{
              base: "0.9rem",
              sm: "0.9rem",
              md: "1.1rem",
              lg: "1.3rem",
            }}
          >
            Status: {status ? "visited" : "due"}
          </Heading>
          <Button
            variant="primary-btn"
            mt="2rem"
            mx="25%"
            w="50%"
            onClick={updateHandler}
            mr="1.5rem"
            disabled={status}
          >
            Mark Visited
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default PopupOnClick;
=======
import React, { useState } from 'react'
import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { markvisited } from '../../features/appointmentSlice'
import fetchServices from '../../features/services'

function PopupOnClick({ handleCancel, id}) {
    const dispatch = useDispatch()
    const appointment = useSelector(state => state.appointment.appointments) || { results: [] }
    const selectedApp = appointment.results.filter( app => app._id === id )[0]
    const [status,setStatus] = useState(selectedApp?.visited)
    const user = JSON.parse(localStorage.getItem('dental_user'))

    const updateHandler = () => {
        setStatus(true)
        dispatch(markvisited(id))
        fetchServices.markVisited({id, token: user.token})
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
                    mb='2.5rem'
                    justify='space-between'
                    align='center'
                >
                    <Heading 
                        as='h1' 
                        fontSize={{ base: '1rem', sm: '1rem', md: '1.3rem', lg: '1.5rem' }}
                    >
                        Appointment Details
                    </Heading>
                    <Button variant='secondary-btn' onClick={handleCancel}>close</Button>
                </Flex>
                <Flex
                    mb='1rem'
                    justify='space-between'
                    align='center'
                >
                    <Heading as='h2' fontSize={{base: '0.9rem', sm: '0.9rem', md: '1.1rem', lg: '1.3rem'}} fontWeight='medium'>
                    Patient: { selectedApp.user.name }
                    </Heading>
                    <Heading as='h2' fontSize={{base: '0.9rem', sm: '0.9rem', md: '1.1rem', lg: '1.3rem'}}fontWeight='medium'>
                    Phone: { selectedApp.user.phone }
                    </Heading>
                </Flex>
                <Heading as='h2' fontWeight='light' fontSize={{base: '0.9rem', sm: '0.9rem', md: '1.1rem', lg: '1.3rem'}}>
                    Assigned Doctor: { selectedApp.doctor }
                </Heading>
                <Heading as='h2' fontWeight='light' fontSize={{base: '0.9rem', sm: '0.9rem', md: '1.1rem', lg: '1.3rem'}}>
                    TimeSlot: { selectedApp.timeslot }
                </Heading>
                <Heading as='h2' fontWeight='light' fontSize={{base: '0.9rem', sm: '0.9rem', md: '1.1rem', lg: '1.3rem'}}>
                    Payment: { selectedApp.payment }
                </Heading>
                <Heading as='h2' fontWeight='light' fontSize={{base: '0.9rem', sm: '0.9rem', md: '1.1rem', lg: '1.3rem'}}>
                    Status: { status ? 'visited' : 'due' }
                </Heading>
                <Button variant='primary-btn' mt='2rem' mx='25%' w='50%' onClick={updateHandler} mr='1.5rem' disabled={status}>Mark Visited</Button>
            </Flex>
        </Flex>
    </Box>
  )
}

export default PopupOnClick
>>>>>>> 0faf25b5bb8c313b32bfdf49ea0cc24cfef72c1d
