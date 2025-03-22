import React from 'react';
import { motion } from 'motion/react';

const Banner = () => {
  return (
    <>
      <div
        className="w-full h-[22vh] md:h-[24vh] lg:h-[28vh] flex flex-col justify-center items-center "
        style={{
          backgroundImage:
            "url('https://i.postimg.cc/B6Hx03C7/elegant-purple-curved-line-on-purple-background-with-lighting-effect-and-with-copy-space-for-text-lu.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl lg:text-6xl text-white  text-center mb-12"
        >
          Our Portfolio
        </motion.h2>
      </div>
    </>
  );
};

export default Banner;
