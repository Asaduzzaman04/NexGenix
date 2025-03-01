import React from 'react'
import ServiceIntro from '../../components/our-service/ServiceIntro';
import ServicesGrid from '../../components/our-service/ServiceGrid';
import StartupGrid from '../../components/our-service/StartupGrid';

 const Service = () => {
  document.title = "NexGenix - services"
  return (
    <section className='mt-20'>
      <ServiceIntro/>
      <ServicesGrid/>
      <StartupGrid/>
    </section>
  )
};
export default Service;
  