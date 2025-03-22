import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProjectsGrid from '../../components/our-works/ProjectsGrid';
import WorksProjectHero from '../../components/our-works/WorksProjectHero';

const OurWorks = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>NexGenix </title>
        <meta
          name="description"
          content="Explore our latest projects and success stories. NexGenix specializes in delivering cutting-edge solutions for businesses worldwide."
        />
        <meta
          name="keywords"
          content="NexGenix,case studies, projects, web development, Social Media Marketing, Google Ads"
        />
        <meta property="og:title" content="NexGenix - Our Works" />
        <meta
          property="og:description"
          content="See how NexGenix has helped businesses with innovative solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thenexgenix.com/our-works" />
        <meta
          property="og:image"
          content="https://i.postimg.cc/j2HGpCW7/our-works-nexgenix.jpg"
        />
      </Helmet>

      <section className="mt-20">
        {/* Page Hero Section */}
        <WorksProjectHero />

        {/* Projects Section */}
        <section className="py-12">
          <h1 className="text-4xl font-bold text-purple-900 text-center mb-8">
            Our Recent Projects
          </h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Discover the work we&apos;ve done for various industries and how we
            help businesses thrive with our innovative solutions.
          </p>
          <ProjectsGrid />
        </section>

        {/* SVG Dashed Line - Updated to span the whole section */}
        <svg
          className=" hidden md:flex absolute top-[450.12px] left-[-0.81px] w-full h-[283.4px] pointer-events-none -z-10 rotate-[8.97deg]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1987 283"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0 150C50 220 200 280 500 260C850 240 950 80 1300 40C1600 10 1900 60 1937 100"
            stroke="#2D336B"
            strokeLinejoin="round"
            strokeDasharray="7 6"
            strokeWidth="1"
          />
        </svg>
      </section>
    </>
  );
};

export default OurWorks;
