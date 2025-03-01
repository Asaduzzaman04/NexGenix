import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../our-service/ServiceCard';
import { useServices } from './../../hooks/useServices';

const ServicesGrid = () => {
  const { services, loading, error } = useServices();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 p-4">
        {error}
      </div>
    );
  }

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ServiceCard service={service} index={index} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ServicesGrid;
