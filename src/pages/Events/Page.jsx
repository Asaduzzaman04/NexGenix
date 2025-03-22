import React from 'react';
import { motion } from 'motion/react';
import { FaCalendarAlt, FaMapMarkerAlt, FaTicketAlt } from 'react-icons/fa';
import logo from '../../assets/images/nglogo.png';

const OurEvents = ({ iseventExiest = false }) => {
  if (!iseventExiest) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-purple-950">
        <h1 className="text-5xl font-bold mb-4">No Event Exists</h1>
        <p className="text-xl mb-8">
          Stay connected with us for future events!
        </p>
        <a
          href="https://www.linkedin.com/company/the-nexgenix/"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 bg-purple-900 text-white rounded-lg hover:bg-purple-800 transition-colors duration-300"
        >
          Stay Connected
        </a>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="text-center text-gray-800 mt-20">
      <section
        className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.postimg.cc/7YSBZhkQ/Itbi-image-nexgenix.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-white px-8 ">
          <img
            src={logo}
            alt="nexgenix logo"
            className="w-32 h-38 rounded-2xl p-4 mx-auto mb-8 bg-[#FFFFFF]"
          />
          <h1 className="text-5xl font-bold mb-4">
            AI Revolution: Transforming the Future of Everyday Life
          </h1>
          <p className="text-2xl mb-8">
            Unleash the Power of Intelligent Innovations!
          </p>
          <a
            target="_blank"
            href="https://forms.gle/U8gu4HYjv85oQ2Uk6"
            className="px-8 py-4 text-xl bg-purple-800 rounded-lg hover:bg-purple-700 text-white  transition-colors duration-300"
            rel="noreferrer"
          >
            Register Now
          </a>
        </div>
      </section>

      <section className="bg-[#fdfdfb] py-16">
        <div className=" mx-auto px-4 md:px-8 lg:px-24 xl:px-40 ">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 md:mb-16 text-purple-950">
            About the Event
          </h2>
          <div className="flex flex-col-reverse lg:flex-row gap-16 items-center h-full">
            <div className="flex-1 text-left">
              <p className="text-lg mb-6">
                Join us for an insightful virtual webinar that unites AI
                experts, innovators, and enthusiasts to explore the
                transformative power of artificial intelligence. Discover
                real-world AI applications, engage in thought-provoking
                discussions, and gain actionable insights into how AI is
                revolutionizing daily life—all from the comfort of your home.
              </p>
              <ul className="space-y-3">
                {[
                  'Insights on AI in Daily Life',
                  'Expert-Led Discussions',
                  'Real-World AI Applications',
                  'Interactive Q&A Session'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-purple-900 mr-3">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1">
              <img
                src={'https://i.postimg.cc/rygQ33qK/Event-Banner-nexgenix.png'}
                alt="Event nexgenix"
                className="w-full  rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Event Details</h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="bg-gray-50 p-8 rounded-xl shadow-md"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <FaCalendarAlt className="text-2xl text-purple-900 mr-3" />
                <h3 className="text-xl font-semibold text-purple-900">
                  Date & Time
                </h3>
              </div>
              <p className="text-lg">March 15, 2025</p>
              <p className="text-lg">10:00 PM - 11:30 PM </p>
            </motion.div>

            <motion.div
              className="bg-gray-50 p-8 rounded-xl shadow-md"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-2xl text-purple-900 mr-3" />
                <h3 className="text-xl font-semibold text-purple-900">
                  Location
                </h3>
              </div>
              <p className="text-lg">Online Event</p>
              <p className="text-lg">Join from anywhere!</p>
            </motion.div>

            <motion.div
              className="bg-gray-50 p-8 rounded-xl shadow-md"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <FaTicketAlt className="text-2xl text-purple-900 mr-3" />
                <h3 className="text-xl font-semibold text-purple-900">
                  Registration Fee
                </h3>
              </div>
              <p className="text-lg  mb-10 font-semibold text-green-900">
                Free Entry!
              </p>
              <motion.a
                className="mt-6 px-6 py-3 bg-purple-900 text-white rounded-full font-semibold hover:bg-purple-600 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://forms.gle/U8gu4HYjv85oQ2Uk6"
                target="_blank"
                rel="noreferrer"
              >
                Register Now
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurEvents;
