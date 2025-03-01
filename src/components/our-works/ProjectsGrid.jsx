import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import ProjectCard from './ProjectCard';
import { useProjects } from '../../hooks/useProjects';

const ProjectsGrid = () => {
  const {
    projects,
    activeCategory,
    handleCategoryChange,
    hasAnimated,
    setHasAnimated
  } = useProjects();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, projects.length * 100 + 500);

    return () => clearTimeout(timer);
  }, [projects.length, setHasAnimated]);

  return (
    <section className="py-16 px-4 bg-gray-50 ">
      <div className="max-w-8xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">
            Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Innovative digital solutions crafted for brands that want to make an
            impact. Explore our work across various industries.
          </p>
        </motion.div>

        <div className="flex justify-center mb-10 space-x-2">
          {['all', 'education', 'corporate'].map((category) => (
            <motion.button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-purple-900 text-white'
                  : 'bg-white text-purple-900 hover:bg-purple-100'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              hasAnimated={hasAnimated}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
