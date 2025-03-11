import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Root from '../Layout/Root';
import Home from '../pages/Home/page';
import About from '../pages/about-us/page';
import Contact from '../pages/contact-us/page';
import OurWorks from '../pages/our-works/page';
import Service from '../pages/our-services/page';
import ServiceDetail from '../components/our-service/ServiceDetail';
import PrivacyPolicy from '../pages/TearmsCondition/PrivacyPolicy';
import NotFound from '../pages/ErrorPage/NotFound';
import OurEvents from '../pages/Events/Page';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          {/* Home route */}
          <Route index element={<Home />} />
          {/* About route */}
          <Route path="about-us" element={<About />} />
          {/* Services route */}
          <Route path="our-services" element={<Service />} />
          {/* Service detail route */}
          <Route path="our-services/:title" element={<ServiceDetail />} />
          {/* Our works route */}
          <Route path="our-works" element={<OurWorks />} />
          {/* Contact us route */}
          <Route path="contact-us" element={<Contact />} />
          {/* our events */}
          <Route path="our-events" element={<OurEvents />} />
          {/* Privacy policy route */}
          <Route path="tearmsandcondition" element={<PrivacyPolicy />} />
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
