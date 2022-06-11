import React, { Suspense } from "react";
import Loader from "../components/Loader";

const Dentists = React.lazy(() => import("../components/Dentists"));
const Footer = React.lazy(() => import("../components/Footer"));
const HeroSection = React.lazy(() => import("../components/HeroSection"));
const PageLayout = React.lazy(() => import("../components/PageLayout"));
const Services = React.lazy(() => import("../components/Services"));
const WhyUs = React.lazy(() => import("../components/Whyus"));

// import PageLayout from '../components/PageLayout'
// import HeroSection from '../components/HeroSection'
// import WhyUs from '../components/Whyus'
// import Services from '../components/Services'
// import Dentists from '../components/Dentists'
// import Footer from '../components/Footer'

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
}

export default Home;
