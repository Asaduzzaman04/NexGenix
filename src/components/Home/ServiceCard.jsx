import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'motion/react';
import { 
  FaFlask 
} from 'react-icons/fa';
import { 
  FiPieChart, 
  FiSend, 
  FiPenTool, 
  FiBookOpen, 
  FiVideo, 
  FiGlobe 
} from 'react-icons/fi';
import { TfiLightBulb } from 'react-icons/tfi';

const iconMap = {
  flask: FaFlask,
  'pie-chart': FiPieChart,
  send: FiSend,
  'pen-tool': FiPenTool,
  'book-open': FiBookOpen,
  video: FiVideo,
  lightbulb: TfiLightBulb,
  globe: FiGlobe
};

const ServiceCard = ({ service, index }) => {
  const IconComponent = iconMap[service.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col h-full border-2 border-purple-800 rounded-3xl overflow-hidden text-start "
    >
      <div className="p-8 flex flex-col gap-4 h-full">
        <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mb-4`}>
          {IconComponent && <IconComponent className="w-8 h-8 text-purple-800 " />}
        </div>
        <h3 className="text-xl font-bold text-purple-900 mb-2">{service.title}</h3>
        <p className="text-sm text-gray-800 flex-grow">{service.description}</p>
      </div>
    </motion.div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    isAvailable: PropTypes.bool
  }).isRequired,
  index: PropTypes.number.isRequired
};

export default ServiceCard;