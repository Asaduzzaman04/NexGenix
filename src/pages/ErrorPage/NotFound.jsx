import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { FiArrowLeft, FiHome } from 'react-icons/fi';

const NotFound = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-[#360955] to-[#391157]">
      <motion.div
        className="text-center text-white max-w-2xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-9xl font-bold mb-6" variants={itemVariants}>
          404
        </motion.div>
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6"
          variants={itemVariants}
        >
          Page Not Found
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl opacity-90 mb-10"
          variants={itemVariants}
        >
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
          <motion.button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-white text-purple-900 font-semibold rounded-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <FiArrowLeft className="text-lg" />
            <span>Go Back</span>
          </motion.button>
          <motion.button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-transparent border-2 border-white text-white hover:text-black font-semibold rounded-lg hover:bg-white hover:bg-opacity-10 transition-all flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <FiHome className="text-lg" />
            <span>Home</span>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
