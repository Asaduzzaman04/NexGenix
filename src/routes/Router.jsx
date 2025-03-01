import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Root from '../Layout/Root';
import Home from '../pages/Home/page';
import About from '../pages/about-us/page';
import Contact from '../pages/contact-us/page';
import OurWorks from '../pages/our-works/page';
import Service from '../pages/our-services/page';
import ServiceDetail from '../components/our-service/ServiceDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          {/* //home-routes */}
          <Route index element={<Home />} />
          {/* //about-routes */}
          <Route path="/about-us" element={<About />} />
          {/* //about-us */}
          <Route path="/our-services" element={<Service />} />
          {/* //details-services-routes */}
          <Route path="/our-services/:title" element={<ServiceDetail />} />
          {/* //our works */}
          <Route path="/our-works" element={<OurWorks />} />
          {/* //contact-us */}
          <Route path="/contact-us" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
