import { Box } from '@chakra-ui/react';
import React from 'react';

import Dentists from '../components/Dentists';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import WhyUs from '../components/Whyus';

function Home() {

  return (
   <Box
    width='100%'
    bgColor='rgba(246,241,241,0.6)'
   >
      <Box
        margin='0 auto'
        position='relative'
        overflow='hidden'
        maxW='1600px'
      >
        <HeroSection />
        <WhyUs />
        <Services />
        <Dentists />
      </Box>
   </Box>
  )
}

export default Home;
