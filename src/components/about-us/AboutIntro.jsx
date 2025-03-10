import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import aboutUsVideo from '../../assets/images/About.mp4';
import VideoPlayer from './VedioPlayer';

const AboutIntro = () => {
  const leftRef = useRef(null);
  const leftInView = useInView(leftRef, { once: true });

  return (
    <>
      <section className="relative  flex flex-col-reverse md:flex-row items-center justify-around  px-6 md:px-30  lg:px-44 md:py-24 overflow-hidden w-full  mx-auto gap-16 md:gap-0 ">
        {/* Left Content (Text) */}
        <motion.div
          ref={leftRef}
          initial={{ opacity: 0, y: 50 }}
          animate={leftInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl space-y-6 text-left flex flex-col justify-between gap-5"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={leftInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl  md:text-4xl lg:text-6xl font-bold text-purple-950 w-full"
          >
            To drive community engagement
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
            {/* <motion.svg
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
            </motion.svg> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="90"
              height="90"
              viewBox="0 0 65 65"
              fill="none"
              className="absolute -z-50 -top-17 -left-10 md:-top-28 md:-left-2"
            >
              <circle
                opacity="0.8"
                cx="32.5"
                cy="32.5"
                r="32.5"
                fill="#FCCEE8"
              />
            </svg>
          </div>
        </motion.div>

        {/* Right Content (Image) */}
        <div
          // ref={rightRef}
          // initial={{ opacity: 0, x: 50 }}
          // animate={rightInView ? { opacity: 1, x: 0 } : {}}
          // transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center md:justify-end"
        >
          <VideoPlayer videoSrc={aboutUsVideo} altText="About Our Community" />
        </div>

        {/* SVG Dashed Line */}
        <svg
          className=" hidden md:flex absolute top-[370.12px] left-[-0.81px] w-full h-[283.4px] pointer-events-none -z-10 rotate-[8.97deg]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1987 283"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0 150C50 220 200 280 500 260C850 240 950 80 1300 40C1600 10 1900 60 1937 100"
            stroke="#2D336B"
            strokeLinejoin="round"
            strokeDasharray="4 6"
            strokeWidth="1"
          />
        </svg>
      </section>
    </>
  );
};

export default AboutIntro;
