import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router';
import { RippleButton } from '../Button.jsx';
import projectsData from '../../data/projectsData';
import ProjectCarousel from './ProjectCarousel';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: 'easeOut' }
  })
};

const IntroProject = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-16 px-10 md:px-12 lg:px-20 h-full  mx-auto  flex flex-col items-center text-center">
      <motion.h2
        ref={ref}
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        custom={0.2}
        className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl  font-bold text-purple-950 mb-12 mt-5"
      >
        Our Works
      </motion.h2>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        custom={0.2}
        className="w-full max-w-7xl  mx-auto"
      >
        <ProjectCarousel 
          projects={projectsData} 
          itemsPerView={2} 
          autoSlideInterval={5000} 
        />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        custom={0.4}
        className="mt-12"
      >
        <Link to="/our-works">
          <RippleButton>
            See More <FaArrowRight size={20} />
          </RippleButton>
        </Link>
      </motion.div>
    </section>
  );
};

export default IntroProject;
