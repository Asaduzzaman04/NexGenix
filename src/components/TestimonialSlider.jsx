import React from 'react';
import { motion } from 'motion/react';
import Marquee from 'react-fast-marquee';
import testimonialsData from '../data/testimonials.json';
import TestimonialCard from './TestimonialCard';

const TestimonialSlider = () => {
  return (
    <div className="w-full overflow-hidden">
      <Marquee
        autoFill={true}
        pauseOnHover={true}
        gradient={true}
        direction="right"
        gradientWidth={80}
        speed={50}
      >
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            className="relative mx-8 w-[400px] h-[200px] sm:w-[350px] md:w-[400px] lg:w-[450px]"
          >
            <TestimonialCard testimonial={testimonial} />
          </motion.div>
        ))}
      </Marquee>
    </div>
  );
};

export default TestimonialSlider;
