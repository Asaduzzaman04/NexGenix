import React from 'react';
import { motion } from 'motion/react';
import { FaSearch, FaFacebook, FaInstagram } from 'react-icons/fa';
import { MdEmail, MdDesignServices } from 'react-icons/md';
import { BsGraphUp } from 'react-icons/bs';


const ProjectCard = ({ project }) => {
  const getTagIcon = (tag) => {
    switch (tag) {
      case 'Paid Search':
        return <FaSearch className="mr-1" />;
      case 'Paid Social':
      case 'Social Media Advertising':
        return <FaFacebook className="mr-1" />;
      case 'Digital Marketing':
        return <BsGraphUp className="mr-1" />;
      case 'Organic Social Media':
        return <FaInstagram className="mr-1" />;
      case 'Email Campaigns':
        return <MdEmail className="mr-1" />;
      case 'Web Design':
      case 'UX Optimization':
        return <MdDesignServices className="mr-1" />;
      default:
        return null;
    }
  };
  console.log(project)

  return (
    <motion.div
      className="bg-black rounded-lg overflow-hidden shadow-lg relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
    >
      <div className="relative h-[400px] overflow-hidden">
        <img
          src={`${project?.imageUrl}`}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-between p-8">
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="text-4xl font-bold text-white">
                {project.percentage}
              </div>
              <div className="text-sm text-white uppercase tracking-wider">
                {project.engagementType}
              </div>
            </motion.div>

            <div className="border-t border-gray-500 pt-4 mt-2">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <motion.span
                    key={index}
                    className="inline-flex items-center bg-white text-black text-xs px-3 py-1 rounded-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                  >
                    {getTagIcon(tag)}
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
