"use client";

//code start form here
import  { useRef } from "react";
import { motion, useInView } from "motion/react"; 
import Image from "next/image";
import { RippleButton } from "@/components/Button.jsx"; 
import { projectsData } from "@/data/projectsData"; 

const IntroProject = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation only once

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl md:text-3xl font-bold text-purple-800 text-center mb-8"
        >
          Our Projects
        </motion.h2>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8"
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.9 }
              }
              transition={{
                duration: 0.6,
                delay: 0.1 * project.id,
                ease: "easeOut",
              }}
              className="relative w-full max-w-[250px] h-[300px] bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              {/* <Image
                src={project.image || "/placeholder.jpg"} // Fallback to a placeholder image
                alt={project.title}
                width={250}
                height={300}
                className="object-cover w-full h-full"
                onError={(e) => {
                  e.target.src = "/placeholder.jpg"; // Fallback if image fails to load
                }}
              /> */}
              <div>image</div>
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-purple-800 to-transparent text-white rounded-b-2xl">
                <h3 className="text-lg font-semibold">{project.title}</h3>
              </div>
              <div className="absolute inset-0 bg-[rgba(255,255,255,0.1)] rounded-2xl flex justify-center items-center">
                {/* White dots pattern (simulated with CSS) */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 20 20%22%3E%3Ccircle cx=%2210%22 cy=%2210%22 r=%222%22 fill=%22%23FFFFFF%22/%3E%3C/svg%3E')] opacity-50"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex justify-center w-fit"
        >
          <RippleButton >
            See More →
          </RippleButton>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroProject;