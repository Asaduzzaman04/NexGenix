import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

const ProjectCarousel = ({
  projects,
  itemsPerView: initialItemsPerView = 2,
  autoSlideInterval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(initialItemsPerView);
  const autoSlideTimerRef = useRef(null);

  // Update itemsPerView based on screen size with debouncing
  useEffect(() => {
    const handleResize = () => {
      const newItemsPerView = window.innerWidth < 768 ? 1 : 2;
      if (newItemsPerView !== itemsPerView) {
        setItemsPerView(newItemsPerView);
      }
    };

    handleResize();
    const debounceResize = setTimeout(() => {
      window.addEventListener('resize', handleResize);
    }, 100); // Debounce to prevent rapid re-renders

    return () => {
      clearTimeout(debounceResize);
      window.removeEventListener('resize', handleResize);
    };
  }, [itemsPerView]);

  const totalSlides = Math.ceil(projects.length / itemsPerView);

  const resetAutoSlideTimer = () => {
    if (autoSlideTimerRef.current) {
      clearInterval(autoSlideTimerRef.current);
    }
    if (isAutoSliding) {
      autoSlideTimerRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
      }, autoSlideInterval);
    }
  };

  useEffect(() => {
    resetAutoSlideTimer();
    return () => {
      if (autoSlideTimerRef.current) {
        clearInterval(autoSlideTimerRef.current);
      }
    };
  }, [isAutoSliding, totalSlides, itemsPerView]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setIsAutoSliding(false);
    resetAutoSlideTimer();
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    setIsAutoSliding(false);
    resetAutoSlideTimer();
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    setIsAutoSliding(false);
    resetAutoSlideTimer();
  };

  const getVisibleProjects = () => {
    const startIdx = currentIndex * itemsPerView;
    return projects.slice(startIdx, startIdx + itemsPerView);
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, x: 100 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
    }),
    exit: { opacity: 0, x: -100, transition: { duration: 0.5 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    hover: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  };

  return (
    <div className="relative w-full" style={{ minHeight: '300px' }}>
      <div className="overflow-hidden w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
          >
            {getVisibleProjects().map((item) => (
              <motion.div
                key={item.id}
                className="relative bg-white rounded-2xl shadow-lg overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={item.image || '/placeholder.jpg'}
                  alt={item.title}
                  className="w-full h-auto object-contain rounded-2xl" // Changed to object-contain and h-auto
                  onError={(e) => {
                    console.error('Image failed to load:', item.image);
                    e.target.src = '/placeholder.jpg';
                  }}
                />
                <motion.div
                  variants={textVariants}
                  initial="hidden"
                  whileHover="hover"
                  className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-purple-800/90 to-transparent p-4 text-white flex items-end"
                >
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white/80 hover:bg-white text-purple-800 p-2 rounded-full shadow-md z-10"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white/80 hover:bg-white text-purple-800 p-2 rounded-full shadow-md z-10"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Dots indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'bg-purple-900 scale-125' : 'bg-gray-500'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// PropTypes for validation
ProjectCarousel.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string,
    })
  ).isRequired,
  itemsPerView: PropTypes.number,
  autoSlideInterval: PropTypes.number,
};

export default ProjectCarousel;
