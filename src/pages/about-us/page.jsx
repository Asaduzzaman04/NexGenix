import React from 'react';
import AboutIntro from '../../components/about-us/AboutIntro';
import AboutTeams from './../../components/about-us/AboutTeams';
import AwardTimeline from './../../components/about-us/AwardTimeline';

const About = () => {
  return (
    <section className="mt-20 overflow-x-hidden flex flex-col justify-center items-center w-full">
      <AboutIntro />
      <AboutTeams/>
      <AwardTimeline/>
    </section>
  );
};
export default About;
