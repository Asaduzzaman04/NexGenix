import React from 'react';
import { motion } from 'framer-motion';
// import { FaEnvelope } from 'react-icons/fa';

const TeamsCard = ({
  name,
  image,
  isSelected,
  onClick,
  lead,
  position,
  company,
  department,
  paralex,
}) => {
  return (
    <motion.div
      className={`group w-[300px] h-[400px] border-2 border-[#5F1D91] rounded-lg relative overflow-hidden flex justify-center items-center shadow-md transition-all duration-300 ${
        isSelected ? 'z-30 scale-105' : 'z-10'
      } ${paralex % 2 === 0 ? 'md:mt-0' : 'md:mt-20'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover="hover"
      onClick={onClick}
      data-selected={isSelected}
    >
      <div className="relative w-full h-full">
        {/* Image */}
        <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center overflow-hidden z-20">
          <motion.img
            src={
              image ||
              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
            }
            alt={`${name} - Team Member`}
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
          />
        </div>

        {/* Name and Email section (disable => hover effect) */}
        <div
          className="absolute bottom-5 left-5 text-[#5F1D91] z-30 bg-white/80 p-2 rounded-md"
          // initial={{ opacity: 0, y: 20 }}
          // variants={{
          //   hover: { opacity: 1, y: 0 },
          //   initial: { opacity: 0, y: 20 }
          // }}
        >
          <h3 className="text-lg font-semibold mb-1">{name}</h3>
          <div className="text-sm flex flex-col gap-1">
            {/* email-section-teams */}
            {/* <p className="flex items-center gap-2">
              <FaEnvelope size={16} /> {email}
            </p> */}
            <p className="text-xs font-medium">
              <span className="font-black">{lead} </span> {department || position }  at{' '}
              {company}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamsCard;
