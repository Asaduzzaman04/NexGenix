"use client"; // Indicates this is a Client Component in Next.js

import Image from "next/image";
import Link from "next/link"; 
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react"; 
import { IoMdContact } from "react-icons/io"; 
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import nexgenixlogo from "@/public/images/nglogo.png"; 
import navigationlink from "@/static/navigationlink.json"; 
import { usePathname } from "next/navigation"; 
import { RippleButton } from "../Button";

// Main Navbar component
export const Navbar = () => {
  // State for mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);
  // Get current URL path for active link highlighting
  const pathname = usePathname();

  // Handle mouse movement to track exit point for underline effect
  const handleMouseMove = (e, setUnderlineStyle) => {
    const linkElement = e.currentTarget;
    const rect = linkElement.getBoundingClientRect();
    const mouseX = e.clientX - rect.left; // Mouse position relative to link
    const linkWidth = rect.width;
    const positionPercent = (mouseX / linkWidth) * 100; // Convert to percentage

    // Update underline position dynamically
    setUnderlineStyle({
      width: "100%", // Full width on hover
      left: "0%", // Start from left
      transformOrigin: `${positionPercent}%`, // Origin based on mouse position
    });
  };

  // Handle mouse leave to animate underline exit from mouse position
  const handleMouseLeave = (setUnderlineStyle) => {
    setUnderlineStyle({
      width: "0%", // Shrink to nothing
      left: "50%", // Back to center
      transformOrigin: "center", // Reset origin
    });
  };

  return (
    // Navigation bar with fixed positioning and entrance animation
    <motion.nav
      initial={{ opacity: 0, y: -20 }} // Starts invisible and above viewport
      animate={{ opacity: 1, y: 0 }} // Fades in and slides down
      transition={{ duration: 0.5 }} // Animation timing for navbar entrance
      className="fixed w-full top-0 z-50 bg-white shadow-lg   "
    >
      {/* Container with max width and responsive padding */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }} // Slight scale on hover
              transition={{ duration: 0.2 }}
              className="w-[100px] sm:w-[170px] md:w-[140px] h-[70px] sm:h-[60px] relative"
              >
              <Image
                src={nexgenixlogo}
                alt="thenexgenix logo"
                fill // Fills container
                priority // Loads immediately
                className="object-contain" // Maintains aspect ratio
                />
            </motion.div>
                </Link>
          </div>

          {/* Desktop Navigation Menu - Hidden on mobile */}
          <div className="hidden md:flex flex-grow justify-center">
            <ul className="flex space-x-8 gap-4">
              {navigationlink.map((link) => {
                // State to control underline style for each link
                const [underlineStyle, setUnderlineStyle] = useState({
                  width: pathname === link.link ? "100%" : "0%",
                  left: pathname === link.link ? "0%" : "50%",
                  transformOrigin: "center",
                });

                return (
                  <li key={link.id} className="py-2">
                    <Link
                      href={link.link}
                      className={`relative text-text-color font-medium transition-colors
                        ${pathname === link.link ? "scale-100" : "scale-105"}`}
                      onMouseMove={(e) => handleMouseMove(e, setUnderlineStyle)}
                      onMouseEnter={() =>
                        setUnderlineStyle({
                          ...underlineStyle,
                          width: "100%",
                          left: "0%",
                        })
                      }
                      onMouseLeave={() => handleMouseLeave(setUnderlineStyle)}
                    >
                      {link.text}
                      {/* Underline element with dynamic styling */}
                      <span
                        className="absolute bottom-0 h-[2px] bg-hover-button transition-all duration-300 ease-in-out"
                        style={{
                          width: underlineStyle.width,
                          left: underlineStyle.left,
                          transformOrigin: underlineStyle.transformOrigin,
                        }}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Desktop Contact Button - Hidden on mobile */}
          <div className="hidden md:flex flex-shrink-0 min-w-[160px]">
            <Link href="/contact-us" className="w-full">
              <RippleButton>
                <IoMdContact className="text-xl" />
                Contact Us
              </RippleButton>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button - Visible only on mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)} // Toggles mobile menu
              className="text-gray-700 hover:text-blue-600 transition-colors z-50"
            >
              {isOpen ? (
                <RiCloseLine className="h-6 w-6" /> // Close icon when menu is open
              ) : (
                <RiMenu3Line className="h-6 w-6" /> // Menu icon when closed
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu - Appears when isOpen is true */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }} // Fades in
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }} // Fades out when closing
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden fixed inset-0 top-20 bg-white z-40" // Covers screen below navbar
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }} // Starts below and invisible
                animate={{ y: 0, opacity: 1 }} // Slides up and fades in
                exit={{ y: 20, opacity: 0 }} // Slides down and fades out
                transition={{ duration: 0.3 }}
                className="flex flex-col h-full"
              >
                <div className="px-4 py-6 space-y-4 flex flex-col">
                  {navigationlink.map((link, index) => (
                    <motion.div
                      key={link.id}
                      initial={{ x: -20, opacity: 0 }} // Starts left and invisible
                      animate={{ x: 0, opacity: 1 }} // Slides in from left
                      transition={{ duration: 0.3, delay: index * 0.1 }} // Staggered animation for each item
                    >
                      {/* Mobile Link with active state underline */}
                      <Link
                        href={link.link}
                        onClick={() => setIsOpen(false)} // Close menu on link click
                        className={`block text-lg font-medium px-4 py-4 relative
                          ${pathname === link.link ? "text-hover-button" : "text-text-color"}
                          after:content-[''] after:absolute after:bottom-0 after:left-0
                          after:w-full after:h-[2px] after:bg-[#FBFDF7]
                          ${pathname === link.link ? "after:opacity-100" : "after:opacity-0"}`}
                      >
                        {link.text}
                      </Link>
                    </motion.div>
                  ))}
                  {/* Mobile Contact Button */}
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: navigationlink.length * 0.1 }} // Delayed to appear last
                    className="px-4"
                  >
                    <Link
                      href="/contact-us"
                      className="w-full block"
                      onClick={() => setIsOpen(false)} // Close menu on click
                    >
                      <RippleButton>
                        <IoMdContact className="text-xl" />
                        Contact Us
                      </RippleButton>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};