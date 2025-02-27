"use client"

import {motion, useInView , useAnimation } from 'motion/react';
import { useEffect, useRef, useState } from 'react';


export const StatsCard = ({ start, end, label, duration = 2, isPlus }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const controls = useAnimation();
  
    // Smooth number animation with framer-motion's animate prop
    const [currentNumber, setCurrentNumber] = useState(start);
  
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
        className="flex flex-col items-center justify-center p-4 gap-5 bg-custom-gradient rounded-2xl shadow-lg text-white relative  py-5 lg:py-10 w-full h-full"
      >
        <motion.span className="text-3xl md:text-4xl font-bold">
          {currentNumber.toLocaleString()}
          {isPlus && "+"} {/* Add "+" for specific cards */}
        </motion.span>
        <span className="text-sm md:text-base">{label}</span>
      </motion.div>
    );
  };

 