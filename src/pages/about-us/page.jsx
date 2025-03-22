import React from 'react';
import AboutIntro from '../../components/about-us/AboutIntro';
import AboutTeams from '../../components/about-us/AboutTeams';
import AwardTimeline from '../../components/about-us/AwardTimeline';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <>
      <Helmet>
        {/* Dynamic SEO Metadata */}
        <title>NexGenix</title>
        <meta
          name="description"
          content="Learn more about NexGenix, a leading marketing agency dedicated to digital marketing, branding, SEO, and social media strategies."
        />
        <meta
          name="keywords"
          content="NexGenix, marketing agency, digital marketing, branding, social media, SEO, marketing experts, digital growth, content marketing"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="NexGenix" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thenexgenix.com/about-us" />

        {/* Open Graph Metadata */}
        {/* <meta property="og:title" content="NexGenix - About Us" />
        <meta
        property="og:description"
        content="Discover how NexGenix is helping brands scale with innovative digital marketing strategies and expert team collaboration."
        />
        <meta property="og:image" content="https://thenexgenix.com/og-image.jpg" />
        <meta property="og:type" content="website" /> 
        <meta property="og:url" content="https://thenexgenix.com/about-us" />
        */}

        {/* Twitter Card Metadata */}
        {/* <meta name="twitter:title" content="NexGenix - About Us" />
        <meta
          name="twitter:description"
          content="Join NexGenix and scale your brand with expert digital marketing solutions that drive growth and results."
        />
        <meta name="twitter:image" content="https://thenexgenix.com/twitter-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" /> */}
      </Helmet>

      <section className="mt-24 md:mt-20 overflow-x-hidden flex flex-col justify-center items-center w-full">
        <AboutIntro />
        <AboutTeams />
        <AwardTimeline />
      </section>
    </>
  );
};

export default About;
