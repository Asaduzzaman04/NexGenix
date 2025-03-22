import React from 'react';
import { Helmet } from 'react-helmet-async';
import ServiceIntro from '../../components/our-service/ServiceIntro';
import ServicesGrid from '../../components/our-service/ServiceGrid';
import StartupGrid from '../../components/our-service/StartupGrid';

const Service = () => {
  return (
    <>
      {/* SEO Optimization */}
      <Helmet>
        <title>NexGenix</title>
        <meta
          name="description"
          content="Discover our top-notch digital marketing services, including SEO, branding, and startup solutions to boost your business growth."
        />
        <meta
          name="keywords"
          content="digital marketing services, SEO, branding, startup solutions, business growth, marketing agency"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://thenexgenix.com/our-services" />

        {/* Open Graph Meta Tags for Social Media */}
        {/* <meta property="og:title" content="NexGenix - Our Services" />
        <meta 
          property="og:description" 
          content="Explore NexGenix's expert digital marketing services, from SEO to branding and startup strategies." 
        />
        <meta property="og:image" content="https://thenexgenix.com/assets/images/og-services.jpg" />
        <meta property="og:url" content="https://thenexgenix.com/our-services" />
        <meta property="og:type" content="website" /> */}

        {/* Twitter Meta Tags */}
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NexGenix - Our Services" />
        <meta 
          name="twitter:description" 
          content="Discover our expert digital marketing services to help your business grow." 
        />
        <meta name="twitter:image" content="https://thenexgenix.com/assets/images/og-services.jpg" /> */}
      </Helmet>

      <main className="mt-20">
        <ServiceIntro />
        <ServicesGrid />
        <StartupGrid />
      </main>
    </>
  );
};

export default Service;
