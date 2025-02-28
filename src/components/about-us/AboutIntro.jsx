import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import AnimatedImageCard from '../AnimatedImageCard';
import aboutImage from '../../assets/images/hero-home.jpeg';

const AboutIntro = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const leftInView = useInView(leftRef, { once: true });
  const rightInView = useInView(rightRef, { once: true });

  return (
    <>
      <section className="relative flex flex-col-reverse md:flex-row items-center justify-around  px-6 md:px-30  lg:px-44 md:py-24 overflow-hidden w-full  mx-auto gap-16 md:gap-0 ">
        {/* Left Content (Text) */}
        <motion.div
          ref={leftRef}
          initial={{ opacity: 0, x: -50 }}
          animate={leftInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-lg space-y-6 text-left w-full md:w-1/2 flex flex-col justify-between gap-5"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={leftInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-4xl font-bold text-text-color"
          >
            About Our Community
          </motion.h1>
          <div className="relative">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={leftInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className=" text-base md:text-lg "
            >
              We are dedicated to fostering a vibrant community where every
              member feels valued and engaged. Our mission is to create
              meaningful connections, drive impactful initiatives, and provide
              resources that empower our members. Learn more about our journey,
              values, and the people behind our success.
            </motion.p>
            <motion.svg
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                leftInView
                  ? { opacity: 0.7, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.8, delay: 0.4 }}
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -top-40  -left-10 md:-left-28 w-64 h-64 -z-10 md:w-72 md:h-72"
            >
              <path
                fill="#EABDEA"
                d="M44.7,24.5C31.9,47.9,-22.3,46,-36.7,21.7C-51,-2.6,-25.5,-49.3,1.6,-48.4C28.7,-47.5,57.4,1.1,44.7,24.5Z"
                transform="translate(100 100)"
              />
            </motion.svg>
          </div>
        </motion.div>

        {/* Right Content (Image) */}
        <motion.div
          ref={rightRef}
          initial={{ opacity: 0, x: 50 }}
          animate={rightInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center md:justify-end"
        >
          <AnimatedImageCard
            imageSrc={aboutImage}
            altText="About Our Community"
          />
        </motion.div>

        {/* SVG Dashed Line */}
        <svg
          className="absolute top-36 md:top-3/4 left-0 w-full h-24 -translate-y-1/2 pointer-events-none -z-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,60 C100,120 200,0 300,60 C400,120 500,0 600,60 C700,120 800,0 900,60 C1000,120 1100,0 1200,60 C1300,120 1400,0 1500,60 C1600,120 1700,0 1800,60 H1920"
            stroke="#000"
            strokeWidth="2"
            strokeDasharray="8 6"
            fill="none"
          />
        </svg>
      </section>
    </>
  );
};

export default AboutIntro;
