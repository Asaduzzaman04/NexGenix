import React from 'react';
import { Outlet, useLocation } from 'react-router';
import { Navbar } from './../components/navbar/Navbar';
import Footer from './../components/footer/Footer';
import SmoothScroll from './../lib/SmoothScroll';
import MarketingSection from '../components/footer/MarketingSection';
import { ScrollToTop } from '../lib/ScrollToTop';

const Root = () => {
  return (
    <main className="overflow-hidden font-Poppins">
      <ScrollToTop />
      <SmoothScroll>
        <Navbar />
        <Outlet />
        <MarketingSection />
        <Footer />
      </SmoothScroll>
    </main>
  );  
};

export default Root;
