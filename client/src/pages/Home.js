import React from 'react';

import Dentists from '../components/Dentists';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import WhyUs from '../components/Whyus';

function Home() {

  return (
    <>
    <HeroSection />
    <WhyUs />
    <Services />
    <Dentists />
    </>
  )
}

export default Home;
