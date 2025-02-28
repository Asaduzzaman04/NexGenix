import React from 'react';
import { Outlet } from 'react-router';
import { Navbar } from './../components/navbar/Navbar';
import Footer from './../components/footer/Footer';
// import  SmoothScroll  from '../lib/SmoothScroll';
import SmoothScroll from './../lib/SmoothScroll';

const Root = () => {
  return (
    <main className='overflow-hidden'>
      <SmoothScroll>
        {/* //navbar */}
        <Navbar />
        <Outlet />
        {/* //footer */}
        <Footer />
      </SmoothScroll>
    </main>
  );
};

export default Root;
