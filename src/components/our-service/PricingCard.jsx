import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'motion/react';
import { Link } from 'react-router';

const PricingCard = ({ plan }) => {
  const isStandardPlan = plan.title === 'Standard';

  return (
    <motion.div
      className={`rounded-lg p-6 flex flex-col border-2 h-full relative overflow-hidden group transition-all duration-300 ${
        plan.isPopular ? 'border-purple-500' : 'border-gray-200'
      }`}
      initial={{
        opacity: 0,
        y: 20
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      whileHover={{
        y: -5,
        boxShadow:
          '0 10px 25px -5px rgba(139, 92, 246, 0.1), 0 10px 10px -5px rgba(139, 92, 246, 0.04)',
        backgroundColor: isStandardPlan ? '#5F1D91' : '#5F1D91',
        transition: { duration: 0.1, ease: 'linear' },
        color: isStandardPlan ? '#FFFFFF' : '#FFFFFF'
      }}
      style={{
        backgroundColor: isStandardPlan ? '#5F1D91' : '#F8FAFC',
        color: isStandardPlan ? '#FFFFFF' : '#000000'
      }}
    >
      {plan.isPopular && (
        <motion.div
          className="absolute top-0 right-0 text-xs font-bold px-3 py-1 rounded-bl-lg "
          style={{
            background: isStandardPlan ? 'rgba(255, 255, 255, 0.1)' : 'white',
            color: isStandardPlan ? '#360955' : '#7C3AED'
          }}
          initial={{ x: 50 }}
          animate={{ x: 0 }}
        >
          Popular
        </motion.div>
      )}

      <motion.h3 className="text-xl font-bold mb-2">{plan.title}</motion.h3>

      <motion.div className="mb-4 flex justify-start items-center gap-2.5">
        <span className="text-3xl font-bold">
          {plan.price.toLocaleString()}
        </span>
        <span className="text-sm opacity-90">{plan.duration}</span>
      </motion.div>

      <ul className="mb-6 flex-grow">
        {plan.features.map((feature, index) => (
          <motion.li key={index} className="flex items-start mb-2">
            <svg
              className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0"
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
            <span>{feature}</span>
          </motion.li>
        ))}
      </ul>

      <motion.div>
        <Link to={`/contact-us`}>
          <motion.button
            className="px-4 py-2 rounded-lg w-full font-medium"
            style={{
              background: isStandardPlan
                ? 'rgba(255, 255, 255, 0.9)'
                : '#FFFFFF',
              color: isStandardPlan ? '#360955' : '#7C3AED'
            }}
            whileHover={{
              scale: 1.05,
              backgroundColor: '#F4F6FF',

              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </Link>
      </motion.div>
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
