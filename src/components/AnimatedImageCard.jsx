import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { PropTypes } from 'prop-types';

const AnimatedImageCard = ({ imageSrc, altText = 'Image' }) => {
  const rightRef = useRef(null);
  const rightInView = useInView(rightRef, { once: true }); // Assuming you're using react-intersection-observer

  return (
    <motion.div
      ref={rightRef}
      initial={{ opacity: 0, x: 50 }}
      animate={rightInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
      transition={{ duration: 0.8 }}
      className="relative w-full p-10 md:p-0 md:w-[500px] h-[240px] md:h-[350px] mt-16 md:mb-0 order-1 md:order-2"
    >
      {/* Animated Borders */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 0, x: 0 }}
        animate={
          rightInView
            ? { opacity: 1, scale: 1, y: 15, x: -15 }
            : { opacity: 0, scale: 0.8, y: 0, x: 0 }
        }
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute inset-0 border-4 border-[#330B51] rounded-lg"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: 0, y: 0 }}
        animate={
          rightInView
            ? { opacity: 1, scale: 1, x: 15, y: -15 }
            : { opacity: 0, scale: 0.9, x: 0, y: 0 }
        }
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute inset-0 border-4 border-[#330B51] rounded-lg"
      />
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={rightInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute inset-0 flex items-center justify-center bg-primary rounded-xl overflow-hidden"
      >
        <img
          src={imageSrc}
          alt={altText}
          className="rounded-lg object-cover w-full h-full lg:w-[500px] lg:h-[450px]"
        />
      </motion.div>
    </motion.div>
  );
};

export default AnimatedImageCard;
AnimatedImageCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string
};
