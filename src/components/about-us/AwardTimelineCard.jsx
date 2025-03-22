import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'motion/react';

const AwardTimelineVertical = ({ data }) => {
  const { title: timelineTitle, statements } = data;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 }); 
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  // Variants for Framer Motion animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3 // Stagger each award by 0.3 seconds
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className="w-full py-12  relative mt-10">
      <div className="max-w-7xl mx-auto px-4 ">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold  text-purple-950 mb-12 text-center flex items-center justify-center gap-2">
          {timelineTitle}
        </h2>

        <motion.div
          ref={ref}
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="timeline-container w-full grid grid-cols-1 md:grid-cols-2   md:gap-10">
            {statements.map((award, index) => (
              <motion.div
                key={index}
                className="timeline-item mb-16 relative"
                variants={itemVariants}
              >
                <div className="absolute left-5 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[#7209b7] rounded-full border-4 border-[#1a1a2e]"></div>
                <div className="absolute left-12 w-[2px] h-full bg-[#7209b7] top-0"></div>
                <div
                  className="ml-20 p-6  rounded-lg shadow-md border border-[#16213e]"
                  style={{
                    background:
                      'linear-gradient(155deg, #2E004F 18.41%, #4B0082 139.88%)'
                  }}
                >
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {award.title}
                  </h3>
                  <ul className="list-disc list-inside text-gray-300 mb-4">
                    {award.descriptions.map((desc, descIndex) => (
                      <li key={descIndex} className="text-sm">
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AwardTimelineVertical;
