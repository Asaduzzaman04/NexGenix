"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import projectsData from "@/data/projectsData.json";
import { RippleButton } from "@/components/Button.jsx";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  hover: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: "easeOut" },
  }),
};

const IntroProject = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-16  flex flex-col items-center text-center">
      <motion.h2
        ref={ref}
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={0}
        className="text-3xl md:text-4xl font-bold text-purple-800 mb-12"
      >
        Our Projects
      </motion.h2>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={0.2}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-8xl px-4 mx-auto"
      >
        {projectsData.map(({ id, title }, index) => (
          <motion.div
            key={id}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"} 
            custom={index}
            className="relative h-[300px] bg-white rounded-2xl shadow-lg overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            {/* Uncomment if using images */}
            {/* <Image
              src={image || "/placeholder.jpg"}
              alt={title}
              fill
              className="object-cover rounded-2xl"
            /> */}
            <motion.div
              variants={textVariants}
              initial="hidden"
              whileHover="hover"
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-purple-800/90 to-transparent p-4 text-white flex items-end"
            >
              <h3 className="text-lg font-semibold">{title}</h3>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={0.4}
        className="mt-12"
      >
        <Link href="/our-works">
          <RippleButton>
            See More <FaArrowRight size={20} />
          </RippleButton>
        </Link>
      </motion.div>
    </section>
  );
};

export default IntroProject;
