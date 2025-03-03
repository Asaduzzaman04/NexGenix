import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import { IoMdContact } from 'react-icons/io';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router';
import navigationLinks from '../../data/navigationlink.json';
import { RippleButton } from '../Button';
import logo from '../../assets/images/nglogo.png';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full top-0 z-50 bg-white shadow-lg px-6 md:px-0"
    >
      <div className="w-full mx-auto md:px-10 lg:px-20 xl:px-40">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/">
              <motion.img
                src={logo}
                alt="Logo"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="w-[100px] sm:w-[160px] md:w-[140px] h-[60px] object-contain"
              />
            </Link>
          </div>

          <div className="hidden md:flex flex-grow justify-center">
            <ul className="flex space-x-8 gap-4">
              {navigationLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.link}
                    className={`relative text-[#330B51] font-semibold transition-all duration-300 ease-in-out
          ${activeLink === link.link ? 'scale-100' : 'scale-105'}
          after:content-[''] after:absolute after:left-0 after:bottom-[-4px]
          after:w-0 after:h-[2px] after:bg-hover-button
          hover:after:w-full after:transition-all after:duration-300 after:ease-in-out`}
                    onClick={() => setActiveLink(link.link)}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:flex flex-shrink-0 min-w-[160px]">
            <Link to="/contact-us" className="w-full">
              <RippleButton>
                <IoMdContact className="text-xl" /> Contact Us
              </RippleButton>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-text-color transition-colors z-50"
            >
              {isOpen ? (
                <RiCloseLine className="h-8 w-8" />
              ) : (
                <RiMenu3Line className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden fixed inset-0 top-20 bg-white z-40"
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col h-full px-4 py-6"
              >
                {navigationLinks.map((link, index) => (
                  <motion.div
                    key={link.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      to={link.link}
                      onClick={() => {
                        setIsOpen(false);
                        setActiveLink(link.link);
                      }}
                      className={`block text-lg font-medium px-4 py-4 relative $ {
                        activeLink === link.link ? "text-blue-500" : "text-gray-800"
                      }`}
                    >
                      {link.text}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: navigationLinks.length * 0.1
                  }}
                  className="px-4"
                >
                  <Link to="/contact-us" onClick={() => setIsOpen(false)}>
                    <RippleButton>
                      <IoMdContact className="text-xl" /> Contact Us
                    </RippleButton>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
