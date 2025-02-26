"use client";

import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion"; // Use framer-motion
import { useAnimation } from "framer-motion";

const StatCard = ({ start, end, label, duration = 2, isPlus }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  // Smooth number animation with framer-motion's animate prop
  const [currentNumber, setCurrentNumber] = React.useState(start);

  useEffect(() => {
    if (isInView) {
      let count = start;
      const increment = () => {
        count += Math.ceil((end - start) / (duration * 50));
        if (count <= end) {
          setCurrentNumber(count);
          requestAnimationFrame(increment);
        } else {
          setCurrentNumber(end);
        }
      };
      increment();
    }
  }, [isInView, end, start, duration]);

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className="flex flex-col items-center justify-center p-4 gap-5 bg-custom-gradient rounded-2xl shadow-lg text-white relative"
    >
      <motion.span className="text-3xl md:text-4xl font-bold">
        {currentNumber.toLocaleString()}
        {isPlus && "+"} {/* Add "+" for specific cards */}
      </motion.span>
      <span className="text-sm md:text-base">{label}</span>
    </motion.div>
  );
};

const StatsGrid = () => {
  const stats = [
    { start: 0, end: 170, label: "Happy Clients", isPlus: true },
    { start: 0, end: 200, label: "Projects Done", isPlus: true },
    { start: 0, end: 20, label: "Creative People", isPlus: false },
    { start: 0, end: 15, label: "Years Experience", isPlus: false },
  ];

  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat, index) => (
            <div key={index} className="relative">
              <StatCard
                start={stat.start}
                end={stat.end}
                label={stat.label}
                duration={2} // Adjust duration for smoother counting
                isPlus={stat.isPlus}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsGrid;
