import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const TeamsCard = ({ name, email, image, isSelected, onClick }) => {
  return (
    <motion.div
      className={`group w-[300px] h-[400px] border-2 border-[#5F1D91] rounded-lg relative overflow-hidden flex justify-center items-center shadow-md transition-all duration-300 ${
        isSelected ? 'z-30 scale-105' : 'z-10'
      }`}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        filter: isSelected ? 'blur(0px)' : 'blur(0px)'
      }}
      whileHover="hover"
      onClick={onClick}
      style={{
        filter: !isSelected && document.querySelectorAll('[data-selected="true"]').length > 0 
          ? 'blur(4px)' 
          : 'blur(0px)'
      }}
      data-selected={isSelected}
    >
      <div className="relative w-full h-full">
        {/* Image - Full width and height of the card */}
        <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center overflow-hidden z-20">
          <motion.img
            src={image}
            alt={`${name} - Team Member`}
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
          />
        </div>

        {/* SVG Bubbles - Positioned behind the image, visible only on card hover */}
        <motion.svg
          width="149"
          height="151"
          viewBox="0 0 149 151"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[-50px] left-[-50px] z-10"
          initial={{ opacity: 0, filter: 'blur(5px)' }}
          variants={{
            hover: { opacity: 1, filter: 'blur(0px)' },
            initial: { opacity: 0, filter: 'blur(5px)' },
          }}
        >
          <g id="Ellipse 22">
            <circle cx="34" cy="36" r="115" fill="url(#paint0_linear_1217_177)" />
            <circle cx="34" cy="36" r="115" fill="url(#paint1_linear_1217_177)" />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_1217_177"
              x1="261.051"
              y1="-193.41"
              x2="423.608"
              y2="158.156"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0425935" stopColor="#330B51" />
              <stop offset="1" stopColor="#5F1D91" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_1217_177"
              x1="34"
              y1="-79"
              x2="34"
              y2="151"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#330B51" />
              <stop offset="0.48" stopColor="#975C8F" />
              <stop offset="0.825" stopColor="#F7CFD8" />
            </linearGradient>
          </defs>
        </motion.svg>

        {/* Bottom Bubble - Positioned behind the image, visible only on card hover */}
        <motion.svg
          width="149"
          height="151"
          viewBox="0 0 149 151"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-[-50px] right-[-50px] transform scale-x-[-1] z-10"
          initial={{ opacity: 0, filter: 'blur(5px)' }}
          variants={{
            hover: { opacity: 1, filter: 'blur(0px)' },
            initial: { opacity: 0, filter: 'blur(5px)' },
          }}
        >
          <g id="Ellipse 22">
            <circle cx="34" cy="36" r="115" fill="url(#paint0_linear_1217_177)" />
            <circle cx="34" cy="36" r="115" fill="url(#paint1_linear_1217_177)" />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_1217_177"
              x1="261.051"
              y1="-193.41"
              x2="423.608"
              y2="158.156"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0425935" stopColor="#330B51" />
              <stop offset="1" stopColor="#5F1D91" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_1217_177"
              x1="34"
              y1="-79"
              x2="34"
              y2="151"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#330B51" />
              <stop offset="0.48" stopColor="#975C8F" />
              <stop offset="0.825" stopColor="#F7CFD8" />
            </linearGradient>
          </defs>
        </motion.svg>

        {/* Name and Email - Positioned below the image, visible on hover anywhere on the card */}
        <motion.div
          className="absolute bottom-5 left-5 text-[#5F1D91] z-30 bg-white/80 p-2 rounded-md"
          initial={{ opacity: 0, y: 20 }}
          variants={{
            hover: { opacity: 1, y: 0 },
            initial: { opacity: 0, y: 20 },
          }}
        >
          <h3 className="text-lg font-semibold mb-1">{name}</h3>
          <p className="text-sm flex items-center gap-2">
            <Mail size={16} /> {email}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TeamsCard;