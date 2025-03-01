import React from 'react';
import ProjectsGrid from '../../components/our-works/ProjectsGrid';
import MarketingSection from '../../components/our-works/MarketingSection';

const OurWorks = () => {
  document.title = 'NexGenix - works';
  return (
    <section className="mt-20">
      <ProjectsGrid />
      <MarketingSection />
    </section>
  );
};
export default OurWorks;
