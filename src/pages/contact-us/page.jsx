import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    termsAccepted: false
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = 'First name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Enter a valid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (!formData.termsAccepted)
      newErrors.termsAccepted = 'Accept the terms & policy';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      toast.success('Message sent successfully!');

      setFormData({
        firstName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        termsAccepted: false
      });
      setErrors({});
    } else {
      toast.error('Please fill in all required fields correctly!');
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex justify-center items-center min-h-screen px-4"
    >
      <Toaster position="top-center" reverseOrder={false} />

      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg grid md:grid-cols-2 overflow-hidden">
        {/* Left Side (Form) */}
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

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* First Name */}
              <div>
                <label className="block text-gray-700">First Name</label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  whileHover={{ scale: 1.01 }}
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="First name"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName}</p>
                )}
              </div>
            </div>

            {/* Email */}
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

            {/* Phone */}
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
                placeholder="+1 (555) 000-0000"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </motion.div>

            {/* Subject */}
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

            {/* Message */}
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

            {/* Submit Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-black text-white p-3 rounded-md hover:bg-gray-800 transition"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
