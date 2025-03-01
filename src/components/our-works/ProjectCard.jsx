import React from 'react';
import { motion } from 'motion/react';
import { useImageLoader } from './../../hooks/useImageLoader';
import { FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ project, index, hasAnimated }) => {
  const { isLoaded, error } = useImageLoader(project.imageUrl);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.div
      className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
      variants={cardVariants}
      initial={hasAnimated ? "visible" : "hidden"}
      animate="visible"
      custom={index}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative h-48 overflow-hidden">
        {error ? (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">Image not available</span>
          </div>
        ) : (
          <img
            src={project.imageUrl}
            alt={project.title}
            className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
        )}
        {!isLoaded && !error && <div className="absolute inset-0 bg-gray-200 animate-pulse" />}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-purple-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{project.description}</p>
        <div className="flex justify-between items-center">
          <div className="flex flex-wrap gap-1">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <motion.button
            className="text-purple-700 hover:text-purple-900"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiExternalLink size={20} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
