import { useState, useEffect } from 'react';
import services from '../data/services.json';

export const useServices = () => {
  const [allServices, setAllServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 300));
        setAllServices(services);
      } catch {
        setError('Failed to fetch services');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getServiceByTitle = (title) => {
    return allServices.find((service) => service.title === title);
  };

  const getAvailableServices = () => {
    return allServices.filter((service) => service.isAvailable);
  };

  return {
    services: allServices,
    availableServices: getAvailableServices(),
    getServiceByTitle,
    loading,
    error
  };
};
