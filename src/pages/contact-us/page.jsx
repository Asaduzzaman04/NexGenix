import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
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

  const { handleSubmit, isSubmitting } = useWeb3Forms();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  // Handle form submission
  const handleFormData = (e) => {
    e.preventDefault();

    // Check Terms & Conditions
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
  };

  return (
    <>
      {/* SEO Optimization */}
      <Helmet>
        <title>Contact Us </title>
        <meta
          name="description"
          content="Get in touch with NexGenix. We are here to assist you with web development, app development, and digital solutions."
        />
        <meta
          name="keywords"
          content="contact NexGenix, web development, app development, digital solutions, IT services"
        />
        <meta
          property="og:title"
          content="Contact NexGenix - Let's Work Together!"
        />
        <meta
          property="og:description"
          content="Have questions? Contact our expert team today and let's build something amazing together!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thenexgenix.com/contact-us" />
        <meta name="robots" content="index, follow" />

        {/* Schema Markup for Contact Page */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact NexGenix',
            url: 'https://thenexgenix.com/contact-us',
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+8801897-015708',
              contactType: 'Customer Support',
              areaServed: 'Worldwide',
              availableLanguage: ['English', 'Bengali']
            }
          })}
        </script>
      </Helmet>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex justify-center items-center min-h-screen px-4 mt-22"
      >
        <Toaster position="top-center" reverseOrder={false} />

        <div className="w-full max-w-2xl shadow-lg rounded-lg overflow-hidden bg-white">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 md:p-12"
          >
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Let's Connect
            </h1>
            <p className="text-gray-600 mb-6">
              We’d love to hear from you. Fill out the form below, and we’ll get
              back to you within 24 hours.
            </p>

            {/* Contact Form */}
            <form onSubmit={handleFormData} className="space-y-4">
              {/* Name Field */}
              <div className="w-full">
                <label htmlFor="firstName" className="block text-gray-700">
                  Your Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  whileHover={{ scale: 1.01 }}
                  id="firstName"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                  required
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-gray-700">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="+(880) 000-0000"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-gray-700">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="Subject of your message"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="Leave us a message..."
                  required
                ></textarea>
              </div>

              {/* Terms & Conditions */}
              <div className="flex items-center">
                <input
                  id="termsAccepted"
                  type="checkbox"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  className="mr-2"
                  required
                />
                <label htmlFor="termsAccepted" className="text-gray-700">
                  I accept the{' '}
                  <Link
                    to={'/terms-and-conditions'}
                    className="text-blue-600 cursor-pointer"
                  >
                    Terms and Conditions
                  </Link>
                </label>
              </div>

              {/* Submit Button */}
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
    </>
  );
};

export default Contact;
