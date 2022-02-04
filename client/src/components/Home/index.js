import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Button
} from '@chakra-ui/react'
import Navigation from '../Navigation';
import BottomCard from '../BottomCard';
import Services from '../Services';
import Dentists from '../Dentists';
import WhyUs from '../Whyus';

function Home() {

  return (
    <>
    <Flex 
      w='100%' 
      h='39.5rem' 
      maxW='1600px'
      bg='url("/images/hero-bg.png")'
      bgPos='center'
      bgRepeat='no-repeat'
      bgSize='cover'
      bgColor='#F9F2F2'
      justify='space-between'
      pos='relative'
    >
      <Navigation />
      <Box
        w='50%'
        h='100%'
        mt='8rem'
        py={12}
        px='6rem'
      >
        <Heading as='h1' color='primary' fontSize='5xl' lineHeight={'90%'}>
          Dental World
        </Heading>
        <Heading as='h1' color='primary' fontSize='5xl'>
          Smile As You wish
        </Heading>
        <Text color='menu' mt='1rem'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi veniam optio consenter quod beatae, atque quae ipsam, alias est reprehenderit debitis explicabo itaque pariatur nisi!
        </Text>
        <Button variant='primary-btn' mt={'1.5rem'} textTransform='uppercase' fontSize={'1rem'} py='1.5rem'>
          Get Appointment
        </Button>
      </Box>
      <Box
        w='35%'
        h='100%'
      >
        <Image 
          w='100%'
          h='100%'
          src='/images/hero_image.jpg' 
          alt='banner'/>
      </Box>
      <BottomCard />
    </Flex>
    <WhyUs />
    <Services />
    <Dentists />
    </>
  )
}

export default Home;
