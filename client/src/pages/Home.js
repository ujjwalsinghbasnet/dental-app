<<<<<<< HEAD
import React, { Suspense } from "react";
import Loader from "../components/Loader";

const Dentists = React.lazy(() => import("../components/Dentists"));
const Footer = React.lazy(() => import("../components/Footer"));
const HeroSection = React.lazy(() => import("../components/HeroSection"));
const PageLayout = React.lazy(() => import("../components/PageLayout"));
const Services = React.lazy(() => import("../components/Services"));
const WhyUs = React.lazy(() => import("../components/Whyus"));
=======
import React, { Suspense } from 'react';

const Dentists = React.lazy(() => import('../components/Dentists'))
const Footer = React.lazy(() => import('../components/Footer'))
const HeroSection = React.lazy(() => import('../components/HeroSection'))
const PageLayout = React.lazy(() => import('../components/PageLayout'))
const Services = React.lazy(() => import('../components/Services'))
const WhyUs = React.lazy(() => import('../components/Whyus'))
>>>>>>> 0faf25b5bb8c313b32bfdf49ea0cc24cfef72c1d

// import PageLayout from '../components/PageLayout'
// import HeroSection from '../components/HeroSection'
// import WhyUs from '../components/Whyus'
// import Services from '../components/Services'
// import Dentists from '../components/Dentists'
// import Footer from '../components/Footer'

<<<<<<< HEAD
function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <PageLayout>
        <HeroSection />
        <WhyUs />
        <Services />
        <Dentists />
        <Footer />
      </PageLayout>
    </Suspense>
  );
=======

function Home() {

  return (
    <Suspense fallback={<div> Loading... </div>}>
      <PageLayout>
          <HeroSection />
          <WhyUs />
          <Services />
          <Dentists />
          <Footer />
      </PageLayout>
    </Suspense>
  )
>>>>>>> 0faf25b5bb8c313b32bfdf49ea0cc24cfef72c1d
}

export default Home;
