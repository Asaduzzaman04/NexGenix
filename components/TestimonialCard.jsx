"use client";

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ testimonial }) => {
  const { id, image, text, rating, author, company } = testimonial;

  return (
    <motion.div
      className="bg-white rounded-xl p-6 shadow-md w-[400px] mx-4 flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={image}
        alt={`${author} profile`}
        className="w-24 h-24 rounded-full object-cover mb-4"
      />
      <p className="text-gray-600 mb-4">{text}</p>
      <div className="flex mb-4">
        {Array.from({ length: 5 }, (_, i) => (
          <FaStar
            key={i}
            className={i < rating ? "text-yellow-400" : "text-gray-300"}
          />
        ))}
      </div>
      <h3 className="text-lg font-semibold text-purple-800">{author}</h3>
      <p className="text-gray-500">{company}</p>
    </motion.div>
  );
};

export default TestimonialCard;