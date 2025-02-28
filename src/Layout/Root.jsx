import React from 'react';
import { Outlet } from 'react-router';
import { Navbar } from './../components/navbar/Navbar';
import Footer from './../components/footer/Footer';
// import  SmoothScroll  from '../lib/SmoothScroll';

const Root = () => {
  return (
    <main>
   
        {/* //navbar */}
        <Navbar />
        <Outlet />
        {/* //footer */}
        <Footer />
      
    </main>
  );
};

export default Root;
