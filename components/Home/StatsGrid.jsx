"use client"

import { motion } from "motion/react";
import { StatsCard } from "./StatsCard";



const StatsGrid = () => {
  const stats = [
    { start: 0, end: 170, label: "Happy Clients", isPlus: true },
    { start: 0, end: 200, label: "Projects Done", isPlus: true },
    { start: 0, end: 20, label: "Creative People", isPlus: false },
    { start: 0, end: 15, label: "Years Experience", isPlus: false },
  ];

  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4  ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats?.map((stat, index) => (
            <div key={index} className="relative 5">
              <StatsCard
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