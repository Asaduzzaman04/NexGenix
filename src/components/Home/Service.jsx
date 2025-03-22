import React from 'react';
import { Link } from 'react-router';

import { FaArrowRight } from 'react-icons/fa';
import { RippleButton } from './../Button';
import ServiceCard from './ServiceCard';

const servicesDesc = [
  {
    id: 1,
    title: 'Google Ads',
    description:
      'Skyrocket Your Online Visibility And Conversions With Our Google Ads Services. We Create And Manage High-Performing Campaigns Tailored To Your Business Goals.',
    icon: 'flask',
    color: 'bg-purple-100',
    isAvailable: true
  },
  {
    id: 2,
    title: 'Social Media Marketing',
    description:
      'Elevate Your Brand With Our SMM Services! We Help You Create, Schedule, And Manage Content And Boost Engagement Through Expert Content And Targeted Campaigns.',
    icon: 'book-open',
    color: 'bg-purple-100',
    isAvailable: true
  },
  {
    id: 3,
    title: 'Search Engine Optimization',
    description:
      'From SEO And Social Media To Email Marketing And PPC, We Leverage The Latest Digital Tools And Platforms To Enhance Visibility And Drive Measurable Growth.',
    icon: 'send',
    color: 'bg-purple-100',
    isAvailable: true
  },
  {
    id: 4,
    title: 'Design & Production',
    description:
      'From concept to final execution, our production workflows are optimized for efficiency, ensuring timely delivery without compromising on quality.',
    icon: 'pen-tool',
    color: 'bg-purple-100',
    isAvailable: false
  }
];

const Service = () => {
  return (
    <section className="py-12 bg-white text-center flex flex-col justify-center items-center gap-3 md:gap-5 lg:gap-8">
      <h2 className="text-3xl md:text-4xl   font-bold text-purple-950 mb-8">
        Our Services
      </h2>

      {/* Service Cards with Responsive Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 justify-center">
        {servicesDesc?.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>

      {/* See More Button with Center Alignment */}
      <div className="flex justify-center mt-5">
        <Link to="/our-services" className="group w-full max-w-[250px]">
          <RippleButton>
            See More
            <FaArrowRight className="ml-2 inline-block transform group-hover:translate-x-2 transition-all duration-300" />
          </RippleButton>
        </Link>
      </div>
    </section>
  );
};

export default Service;
