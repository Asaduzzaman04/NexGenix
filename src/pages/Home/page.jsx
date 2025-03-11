import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AiOutlineClose } from 'react-icons/ai';
import Hero from './../../components/Home/Hero';
import Service from './../../components/Home/Service';
import StatsGrid from './../../components/Home/StatsGrid';
import IntroProject from './../../components/Home/IntroProject';
import Review from './../../components/Home/Review';
import { Link } from 'react-router';

const Home = () => {
  document.title = 'NexGenix';

  const [showPopup, setShowPopup] = useState(() => {
    return sessionStorage.getItem('popupShown') !== 'true';
  });

  // Auto close popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
      sessionStorage.setItem('popupShown', 'true');
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
    sessionStorage.setItem('popupShown', 'true');
  };

  return (
    <main className="mt-20">
      {/* Event Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 flex justify-center items-center z-50 px-4 "
          >
            <div
              className="relative shadow-2xl rounded-2xl p-8 md:p-16  w-[450px] md:w-[500px] flex flex-col gap-4 items-center text-center"
              style={{
                background:
                  'linear-gradient(155deg, #360955 18.41%, #5F1D91 139.88%)'
              }}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-[#eef5f3] hover:text-red-500 transition-transform transform hover:scale-110"
                onClick={handleClosePopup}
              >
                <AiOutlineClose size={24} />
              </button>

              {/* Animated Event Content */}
              <motion.h3
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-2xl font-bold text-[#eef5f3] mb-3"
              >
                🚀 Unlock the Future with AI Innovation!
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[#eef5f3] text-sm md:text-base leading-relaxed mb-4"
              >
                Dive into a transformative webinar where cutting-edge AI is
                revolutionizing daily life! Join us on <b>March 15, 2025</b>,
                from
                <b> 10:00 PM to 11:30 PM (Online)</b> for an inspiring journey
                into the world of smart technology.
              </motion.p>

              {/* Animated Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link
                  to="/our-events"
                  className="bg-[#eef5f3] text-[#360955] font-semibold py-2 px-6 rounded-lg transition-transform transform hover:scale-105"
                >
                  See Event Details
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Component */}
      <Hero />
      {/* Service Component */}
      <Service />
      {/* Stats Grid */}
      <StatsGrid />
      {/* Intro Project */}
      <IntroProject />
      {/* Client Review Section */}
      <Review />
    </main>
  );
};

export default Home;
