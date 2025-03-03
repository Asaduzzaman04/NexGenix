import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'motion/react';
import { Link } from 'react-router';

const PricingCard = ({ plan }) => {
  return (
    <motion.div
      className={`rounded-lg p-6 flex flex-col border-2 h-full relative overflow-hidden  group ${
        plan.isPopular ? 'border-purple-500 ' : 'border-gray-200 '
      }`}
      whileHover={{
        y: -5,
        boxShadow:
          '0 10px 25px -5px rgba(139, 92, 246, 0.1), 0 10px 10px -5px rgba(139, 92, 246, 0.04)'
      }}
      initial={{ borderWidth: 1 }}
      animate={{
        borderWidth: plan.isPopular ? [1, 2, 1] : 1,
        transition: {
          repeat: Infinity,
          duration: 2,
          ease: [0.4, 0, 0.2, 1] // cubic-bezier
        }
      }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#360955] to-[#5F1D91] hover:from-[#5F1D91] hover:to-[#360955]
 opacity-90 -z-10 "
      ></div>

      {plan.isPopular && (
        <div className="absolute top-0 right-0 bg-white  text-purple-700 text-xs font-bold px-3 py-1 rounded-bl-lg">
          Popular
        </div>
      )}

      <h3 className="text-xl font-bold mb-2 text-white">{plan.title}</h3>

      <div className="mb-4">
        <span className="text-3xl font-bold text-white">
          {plan.price.toLocaleString()}
        </span>
        <span className="text-white opacity-80"> TK</span>
        <span className="text-sm text-white opacity-80">/{plan.duration}</span>
      </div>

      <ul className="mb-6 flex-grow">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start mb-2">
            <svg
              className="w-5 h-5 text-white mr-2 mt-0.5 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <span className="text-white">{feature}</span>
          </li>
        ))}
      </ul>

      <Link to={`/contact-us`}>
        <motion.button
          className="px-4 py-2 rounded-lg w-full bg-white text-purple-700 font-medium hover:bg-purple-50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </Link>
    </motion.div>
  );
};

PricingCard.propTypes = {
  plan: PropTypes.shape({
    isPopular: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    duration: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
};

export default PricingCard;
