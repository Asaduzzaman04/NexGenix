import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectData from '../../data/ProjectDetails.json';
import { motion } from 'framer-motion';
import { RippleButton } from '../Button';

const ProjectsGrid = () => {
  const { projects, portfolioIntro } = ProjectData;
  const [visibleProjects, setVisibleProjects] = useState(3);

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, projects.length));
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-12 md:mt-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-lg md:text-3xl  text-start mb-20   text-gray-900">
            {portfolioIntro.description}
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-16"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {projects.slice(0, visibleProjects).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {visibleProjects < projects.length && (
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.button
              onClick={loadMoreProjects}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <RippleButton>Load More Projects</RippleButton>
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProjectsGrid;
