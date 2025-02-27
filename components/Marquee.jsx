"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Marquee = ({ images }) => {
  const controls = useAnimation();

  // Start the animation when the component mounts
  useEffect(() => {
    controls.start("animate");
  }, [controls]);

  const marqueeVariants = {
    initial: { x: "0%" },
    animate: {
      x: "-100%",
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
    hover: { x: null },
  };

  return (
    <div className="relative overflow-hidden w-full">
      {/* Left shadow */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-800/50 to-transparent pointer-events-none z-10" />
      {/* Right shadow */}
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-800/50 to-transparent pointer-events-none z-10" />

      {/* Single-line Marquee */}
      <motion.div
        className="flex whitespace-nowrap gap-x-5 bg-transparent rounded-lg"
        variants={marqueeVariants}
        initial="initial"
        animate={controls}
        whileHover="hover"
        onHoverStart={() => controls.stop()}
        onHoverEnd={() => controls.start("animate")}
        style={{ width: "max-content" }}
      >
        {[...images, ...images].map((src, index) => (
          <div key={index} className="inline-flex items-center gap-8">
            <img
              src={src}
              alt={`Client logo ${index + 1}`}
              className="h-32 w-auto object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
