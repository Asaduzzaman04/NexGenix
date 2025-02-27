"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import TestimonialCard from "@/components/TestimonialCard";
import testimonialsData from "@/data/testimonials.json";

const TestimonialSlider = () => {
  const controls = useAnimation();
  const sliderRef = useRef(null);

  // Initialize animation to the first position
  useEffect(() => {
    controls.start("initial");
  }, [controls]);

  const variants = {
    initial: (custom) => ({
      x: custom * -100, // Base movement (adjustable for responsiveness)
    }),
    next: (custom) => ({
      x: custom * -100 - 100,
      transition: { duration: 0.5, ease: "easeInOut" },
    }),
    prev: (custom) => ({
      x: custom * -100 + 100,
      transition: { duration: 0.5, ease: "easeInOut" },
    }),
  };

  // Handle gesture drag
  const handleDragEnd = (event, info) => {
    const threshold = 50; // Reduced threshold for smoother gesture response
    if (info.offset.x > threshold) {
      controls.start("prev");
    } else if (info.offset.x < -threshold) {
      controls.start("next");
    }
  };

  // Loop logic: Reset to first card after last
  const getCustomValue = (index) => {
    const totalCards = testimonialsData.length;
    return (index % totalCards + totalCards) % totalCards; // Ensure looping within bounds
  };

  return (
    <div className="overflow-hidden w-full">
      <motion.div
        ref={sliderRef}
        className="flex"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
        onDragEnd={handleDragEnd}
        custom={getCustomValue(0)}
        variants={variants}
        animate={controls}
        initial="initial"
        style={{ height: "400px" }} // Fixed height for consistency
      >
        {[...testimonialsData, ...testimonialsData].map((testimonial, index) => (
          <TestimonialCard
            key={index}
            testimonial={testimonial}
            style={{
              minWidth: "300px", // Base width for larger screens
              "@media (max-width: 1024px)": {
                minWidth: "250px", // Medium screens
              },
              "@media (max-width: 768px)": {
                minWidth: "200px", // Tablets
              },
              "@media (max-width: 480px)": {
                minWidth: "150px", // Mobile
              },
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default TestimonialSlider;