import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedImageCard from '../AnimatedImageCard';

import heroImage from '../../assets/images/our_service_nexgenix.jpg';

const ServiceIntro = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div
      className="w-full  py-16 px-4 md:px-8 lg:px-16 flex items-center"
      style={{
        background: 'linear-gradient(155deg, #360955 18.41%, #5F1D91 139.88%)'
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Section - Text Content */}
          <motion.div
            className="lg:w-1/2 text-white"
            variants={containerVariants}
            initial={hasAnimated ? 'visible' : 'hidden'}
            animate="visible"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              variants={itemVariants}
            >
              Full-Service Product <br />
              Marketing Consultancy
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              A Reliable Technical Partner That Provides Bespoke IT Solutions.
              To Fulfill Our Client's Goal, We Employ Technologies Up To
              Date With The Latest Industry Standards. Team Ascii Understand
              Your Goals & Empower Your Business To Move Forward.
            </motion.p>

            {/* <motion.button
              className="px-8 py-3 bg-white text-purple-900 font-semibold rounded-full hover:bg-opacity-90 transition-all"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Read More
            </motion.button> */}
          </motion.div>

          {/* Right Section - Image Card */}
          <motion.div
            className=" w-full lg:w-1/2"
            initial={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <AnimatedImageCard
              imageSrc={
                heroImage ||
                'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
              }
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServiceIntro;
