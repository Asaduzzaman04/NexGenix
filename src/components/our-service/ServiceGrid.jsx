import React from 'react';
import { motion } from 'motion/react';
import ServiceCard from '../our-service/ServiceCard';
import services from '../../data/service.json';

const ServicesGrid = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16"
    >
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">
          Our Digital Marketing Services
        </h2>
        <p className="text-lg text-gray-800 max-w-3xl mx-auto">
          Comprehensive solutions to boost your online presence and drive
          business growth.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default ServicesGrid;
