import React from 'react';
import PropTypes from 'prop-types';
import { FaRocket } from 'react-icons/fa';
import { BsRobot } from 'react-icons/bs';
import { FaBuilding } from 'react-icons/fa';

const StatrupsCards = ({ service }) => {
  const iconMap = {
    FaRocket: <FaRocket size={28} className="text-purple-700" />,
    BsRobot: <BsRobot size={28} className="text-purple-700" />,
    FaBuilding: <FaBuilding size={28} className="text-purple-700" />
  };

  return (
    <div className="border border-purple-200  rounded-lg overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 bg-gray-100 flex items-center justify-center">
        <img 
          src={service.image} 
          alt={service.imageAlt} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-center mb-4">
          {iconMap[service.icon]} {/* Accessing the icon dynamically */}
          <h3 className="text-xl font-bold text-center ml-2">{service.title}</h3>
        </div>
        <p className="text-sm text-gray-700 mb-4">
          {service.description}
        </p>
      </div>
    </div>
  );
};

StatrupsCards.propTypes = {
  service: PropTypes.shape({
    image: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default StatrupsCards;
