import React from 'react';
import ProjectsGrid from '../../components/our-works/ProjectsGrid';
import WorksProjectHero from '../../components/our-works/WorksProjectHero';

const OurWorks = () => {
  document.title = 'NexGenix - works';
  return (
    <section className="mt-20">
      <WorksProjectHero />
      <ProjectsGrid />

    </section>
  );
};
export default OurWorks;
