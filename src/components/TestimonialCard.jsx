import React from "react";
import PropTypes from 'prop-types';
import { motion } from "motion/react";
import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ testimonial }) => {
  const { image, text, rating, author, company } = testimonial;

  return (
    <motion.div
      className="bg-white rounded-xl px-6 py-4 shadow-md flex justify-between items-center overflow-hidden 
      w-[400px] h-[200px] sm:w-[350px] md:w-[400px] lg:w-[450px]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Left side: Image and Author Name */}
      <div className="flex flex-col justify-center items-center mr-6">
        <img
          src={image}
          alt={`${author} profile`}
          className="w-16 h-16 rounded-full object-cover mb-2"
        />
        <h3 className="text-lg font-semibold text-purple-800">{author}</h3>
      </div>

      {/* Right side: Text, Stars, and Company */}
      <div className="flex-1 flex flex-col justify-center items-start">
        {/* Text at the top */}
        <p className="text-gray-600 mb-2 overflow-hidden line-clamp-2">{text}</p>

        {/* Stars below the text */}
        <div className="flex mb-2">
          {Array.from({ length: 5 }, (_, i) => (
            <FaStar
              key={i}
              className={i < rating ? "text-yellow-400" : "text-gray-300"}
            />
          ))}
        </div>

        {/* Company name at the bottom */}
        <p className="text-gray-500">{company}</p>
      </div>
    </motion.div>
  );
};

// PropTypes for TestimonialCard
TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
  }).isRequired,
};

export default TestimonialCard;