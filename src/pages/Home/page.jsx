import React from 'react';
import Hero from './../../components/Home/Hero';
import Service from './../../components/Home/Service';
import StatsGrid from './../../components/Home/StatsGrid';
import IntroProject from './../../components/Home/IntroProject';
import Review from './../../components/Home/Review';

const  Home = () => {
  return (
    <>
    <main className="mt-20">
      {/* hero-component  */}
      <Hero />
      {/* server-component */}
      <Service/>
      {/* stats-grid */}
      <StatsGrid/>
      {/* intro-project */}
      <IntroProject/>
      {/* client-review-section */}
      <Review/>
    </main>
    </>
  );
}

export default Home