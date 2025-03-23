import React, { useMemo } from 'react';
import { motion } from 'motion/react';

const PortfolioProjectCard = React.memo(({ project, index, loading }) => {
  const tags = useMemo(() => {
    if (!project || loading) return [];
    return project.tags.map((tag, i) => (
      <span key={i} className="text-xs bg-white/20 px-3 py-1 rounded-full">
        {tag}
      </span>
    ));
  }, [project, loading]);

  if (loading) {
    return (
      <div className="relative overflow-hidden rounded-lg animate-pulse">
        {/* Skeleton for the image */}
        <div className="w-full aspect-square bg-gray-300"></div>
        {/* Skeleton for the overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
          <div className="absolute bottom-0 p-6 text-white">
            {/* Skeleton for the title */}
            <div className="h-6 w-3/4 bg-gray-400 rounded mb-2"></div>
            {/* Skeleton for the description */}
            <div className="h-4 w-full bg-gray-400 rounded mb-3"></div>
            {/* Skeleton for the tags */}
            <div className="flex gap-2 flex-wrap">
              <div className="h-6 w-16 bg-gray-400 rounded-full"></div>
              <div className="h-6 w-16 bg-gray-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {project ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group relative overflow-hidden rounded-lg"
        >
          <img
            src={project?.image}
            alt={project?.title}
            loading="lazy"
            width="400"
            height="400"
            className="w-full object-cover aspect-square transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm mb-3">{project.description}</p>
              <div className="flex gap-2 flex-wrap">{tags}</div>
            </div>
          </div>
        </motion.div>
      ) : (
        <div className="skeleton h-full w-full"></div>
      )}
    </>
  );
});

export default PortfolioProjectCard;