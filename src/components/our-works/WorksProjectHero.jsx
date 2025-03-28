import React from 'react';
import { motion } from 'motion/react';
import { heroData } from '../../data/projectdetails';
// import workHeroImage from '../../assets/images/our_works_nexgenix.jpg';

const WorksProjectHero = () => {
  return (
    <div className=" py-12 md:py-16  ">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col  md:flex-row items-center justify-between gap-8">
          <motion.div
            className="w-full md:w-1/2 flex flex-col gap-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-sm uppercase font-semibold text-purple-950 mb-2">
              SUCCESS STORIES
            </div>
            <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl  font-bold text-purple-950 mb-4">
              {heroData.title}
            </h1>
            <p className="text-lg text-gray-900 mb-6">{heroData.description}</p>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={'https://i.postimg.cc/j2HGpCW7/our-works-nexgenix.jpg'}
              alt="Digital Marketing Success"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WorksProjectHero;
