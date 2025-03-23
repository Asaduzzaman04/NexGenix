import React from 'react';
import { usePortfolio } from '../../hooks/usePortfolio';
import PortfolioProjectCard from './PortfolioProjectCard';
import { TbMoodSad, TbSearch } from 'react-icons/tb';
import { motion } from 'motion/react';

const categories = ['All', 'Design', 'Marketing', 'Development', 'Content'];

const ProjectGrid = () => {
  const {
    filterProject,
    category,
    setcategory,
    searchQuery,
    setsearchQuery,
    loading
  } = usePortfolio();

  return (
    <>
      {/* Categories and Search */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 border-b-[2px] pb-6 border-purple-800">
        <div className="flex gap-4 flex-wrap">
          {categories.map((items, idx) => (
            <button
              key={idx}
              onClick={() => setcategory(items)}
              className={`px-4 py-2 rounded-full transition-colors normal-case ${
                category === items
                  ? 'bg-purple-900 text-white border-b-2 border-black'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {items}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => setsearchQuery(e.target.value)}
          className="px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
      </div>

      {/* Render the filtered projects */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {loading ? (
          // Show skeleton cards while loading
          Array.from({ length: 20 }).map((_, idx) => (
            <PortfolioProjectCard
              key={`skeleton-${idx}`}
              project={null}
              index={idx}
              loading={true}
            />
          ))
        ) : filterProject.length > 0 ? (
          filterProject.map((project, idx) => (
            <PortfolioProjectCard
              key={project.id}
              project={project}
              index={idx}
              loading={false}
            />
          ))
        ) : (
          <div className="h-[40vh] w-full mx-auto flex flex-col justify-center items-center lg:col-start-2 text-gray-700">
            {/* Animated Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <TbSearch className="text-6xl text-purple-600" />
            </motion.div>

            {/* Message */}
            <motion.p
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-2xl font-semibold mt-4"
            >
              No projects found.
            </motion.p>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 0.9 }}
              className="mt-4 px-6 py-2 bg-purple-800 text-white rounded-full shadow-md hover:bg-purple-700 transition"
              onClick={() => setsearchQuery('')}
            >
              Clear Search
            </motion.button>
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectGrid;
