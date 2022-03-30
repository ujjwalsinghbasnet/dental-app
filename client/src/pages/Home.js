import React from 'react';

import Dentists from '../components/Dentists';
import HeroSection from '../components/HeroSection';
import PageLayout from '../components/PageLayout';
import Services from '../components/Services';
import WhyUs from '../components/Whyus';

function Home() {

  return (
   <PageLayout>
    <HeroSection />
    <WhyUs />
    <Services />
    <Dentists />
   </PageLayout>
  )
}

export default Home;
