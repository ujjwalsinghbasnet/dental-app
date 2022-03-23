import React, { useState } from 'react';
import {
    Box,
    Flex,
    Heading,
    Text,
    Image,
    Button
  } from '@chakra-ui/react'
import NavResponsive from '../NavResponsive';
import BottomCard from '../BottomCard';
import Calendar from '../Calendar';

function HeroSection() {
    const [calendarState, setCalendarState] = useState(false)

  return (
      <Box position={'relative'}>
        <Flex 
            w='100%' 
            h='39.5rem' 
            bg='url("/images/hero-bg.png")'
            bgPos='center'
            bgRepeat='no-repeat'
            bgSize='cover'
            bgColor='#F9F2F2'
            justify='space-between'
            position='relative'
        >
        <NavResponsive />
        <Box
            w={{base: '100%', sm: '100%', md: '100%', lg: '100%'}}
            h='100%'
            mt='8rem'
            py={12}
            px={{base: '2rem', sm: '3.5rem', md: '4rem', lg: '6rem'}}
        >
            <Heading as='h1' color='primary' fontSize={{ base: '2.8rem', sm: '3.8rem', md: '4.5rem', lg: '4rem'}} lineHeight={'90%'}>
            Dental World
            </Heading>
            <Heading as='h1' color='primary' fontSize={{ base: '2.5rem', sm: '3rem', md: '4rem', lg: '3.5rem'}}>
            Smile As You wish
            </Heading>
            <Text color='menu' mt='1rem'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi veniam optio consenter quod beatae, atque quae ipsam, alias est reprehenderit debitis explicabo itaque pariatur nisi!
            </Text>
            <Button 
                variant='primary-btn' 
                mt={'1.5rem'} 
                textTransform='uppercase' 
                fontSize={'1rem'} 
                py='1.5rem'
                onClick={() => setCalendarState(true)}
            >
            Get Appointment
            </Button>
        </Box>
        {
            calendarState ? <Calendar /> : ''
        }
        <Box
            w='35%'
            h='100%'
            display={['none', 'none', 'none', 'block']}
        >
            <Image 
            w='100%'
            h='100%'
            src='/images/hero_image.jpg' 
            alt='banner'/>
        </Box>
        </Flex>
        <BottomCard />
      </Box>
  );
}

export default HeroSection;
