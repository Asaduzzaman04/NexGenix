import React, { useState } from 'react';

import toast, { Toaster } from 'react-hot-toast';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import useWeb3Forms from './../../hooks/useWeb3Forms';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    termsAccepted: false
  });

  const { handleSubmit, isSubmitting, errors } = useWeb3Forms();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex justify-center items-center min-h-screen px-4 mt-22"
    >
      <Toaster position="top-center" reverseOrder={false} />

      <div className="w-full max-w-2xl shadow-lg rounded-lg overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            We'd love to help
          </h2>
          <p className="text-gray-600 mb-6">
            We’re a full-service agency with experts ready to help. We’ll get in
            touch within 24 hours.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!formData.termsAccepted) {
                toast.error('You must accept the Terms and Conditions');
                return;
              }
              handleSubmit(formData, () => {
                setFormData({
                  firstName: '',
                  email: '',
                  phone: '',
                  subject: '',
                  message: '',
                  termsAccepted: false
                });
              });
            }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 gap-4">
              <div className="w-full">
                <label className="block text-gray-700">Your Name</label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  whileHover={{ scale: 1.01 }}
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName}</p>
                )}
              </div>
            </div>

            <motion.div
              whileFocus={{ scale: 1.02 }}
              whileHover={{ scale: 1.01 }}
            >
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </motion.div>

            <motion.div
              whileFocus={{ scale: 1.02 }}
              whileHover={{ scale: 1.01 }}
            >
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="+(880) 000-0000"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </motion.div>

            <motion.div
              whileFocus={{ scale: 1.02 }}
              whileHover={{ scale: 1.01 }}
            >
              <label className="block text-gray-700">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Subject of your message"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm">{errors.subject}</p>
              )}
            </motion.div>

            <motion.div
              whileFocus={{ scale: 1.02 }}
              whileHover={{ scale: 1.01 }}
            >
              <label className="block text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Leave us a message..."
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </motion.div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="mr-2"
              />
              <label className="text-gray-700">
                I accept the{' '}
                <Link to={'/tearmsandcondition'}>
                  <span className="text-blue-600 cursor-pointer">
                    Terms and Conditions
                  </span>
                </Link>
              </label>
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting || !formData.termsAccepted}
              className="w-full bg-purple-800 text-white p-3 rounded-md hover:bg-purple-950 transition-all duration-200 ease-in-out disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
