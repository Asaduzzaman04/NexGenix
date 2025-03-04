import React from 'react';
import { motion } from 'motion/react';
import { FaEnvelope, FaLinkedin, FaTwitter } from 'react-icons/fa';

const CEOSection = ({ ceo }) => {
  return (
    <motion.div
      className="relative z-10 mx-3 md:mx-10 mt-10 px-1 md:px-20 lg:px-32 "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-white/20">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* CEO Image */}
          <motion.div
            className="w-64 h-64 rounded-tr-[50%]  rounded-br-[30%]  rounded-bl-[30%]   overflow-hidden border-4 border-[#5F1D91] shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={ceo.image}
              alt={`${ceo.name} - ${ceo.position}`}
              className="w-full h-full object-cover scale-125 "
            />
          </motion.div>

          {/* CEO Info */}
          <div className="flex-1">
            <div className="mb-4">
              <h2 className="text-3xl font-bold text-white mb-1">{ceo.name}</h2>
              <div className="flex items-center gap-2 text-white/80">
                <span className="text-xl font-medium">{ceo.position}</span>
                <span className="text-white/60">•</span>
                <span className="text-lg">{ceo.company}</span>
              </div>
            </div>

            <p className="text-white/90 leading-relaxed mb-6 text-lg">
              {ceo.bio}
            </p>

            {/* Contact & Social */}
            <div className="flex flex-wrap gap-4">
              <a
                href={`mailto:${ceo.email}`}
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full transition-all"
              >
                <FaEnvelope size={18} />
                <span>{ceo.email}</span>
              </a>
              <a
                href="https://www.linkedin.com/in/prashantadeypda"
                target=" _blank"
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full transition-all"
              >
                <FaLinkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://x.com/prashanta_pda"
                target=" _blank"
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full transition-all"
              >
                <FaTwitter size={18} />
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-r from-[#330B51] to-[#5F1D91] opacity-50 blur-xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      />
      <motion.div
        className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-gradient-to-r from-[#5F1D91] to-[#975C8F] opacity-40 blur-xl -z-10"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: 'reverse',
          delay: 1
        }}
      />
    </motion.div>
  );
};

export default CEOSection;
