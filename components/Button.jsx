"use client"; // Ensures this runs as a Client Component in Next.js (implicitly needed due to interactivity)

import { motion, useMotionValue } from "framer-motion";
import { useState } from "react"; 

// RippleButton component creates a button with a ripple animation effect
export const RippleButton = ({ children, ...props }) => {
  // State to track hover status
  const [isHovered, setIsHovered] = useState(false);
  // Motion values to track mouse coordinates within the button
  const mouseX = useMotionValue(0); // X-coordinate of mouse relative to button
  const mouseY = useMotionValue(0); // Y-coordinate of mouse relative to button

  // Handle mouse enter event to set ripple starting position
  const handleMouseEnter = (e) => {
    const rect = e.currentTarget.getBoundingClientRect(); // Get button's position and size
    const x = e.clientX - rect.left; // Calculate mouse X position relative to button
    const y = e.clientY - rect.top; // Calculate mouse Y position relative to button
    mouseX.set(x); // Update motion value for X
    mouseY.set(y); // Update motion value for Y
    setIsHovered(true); // Trigger hover state to start ripple animation
  };

  return (
    // Button with motion capabilities and ripple effect
    <motion.button
      className={`relative w-full px-6 py-2 rounded-full overflow-hidden border-2 border-text-color  text-text-color transition-colors duration-300`}
      onMouseEnter={handleMouseEnter} // Start ripple on mouse enter
      onMouseLeave={() => setIsHovered(false)} // Reset ripple on mouse leave
      {...props} // Spread additional props (e.g., onClick, disabled)
    >
      {/* Ripple effect layer */}
      <motion.div
        className="absolute inset-0 bg-hover-button" // Covers entire button, styled with background color
        initial={{ clipPath: "circle(0% at 0% 0%)" }} // Starts as an invisible circle at top-left
        animate={{
          // Animate clipPath based on hover state
          clipPath: isHovered
            ? "circle(150% at var(--mouse-x) var(--mouse-y))" // Expand to oversize circle from mouse position
            : "circle(0% at var(--mouse-x) var(--mouse-y))", // Shrink back to nothing at last mouse position
        }}
        transition={{ duration: 0.4, ease: "easeOut" }} // Smooth animation timing
        style={{
          // Dynamically set CSS variables for ripple position
          "--mouse-x": mouseX.get() + "px", // X position from motion value
          "--mouse-y": mouseY.get() + "px", // Y position from motion value
        }}
      />
      {/* Button content - stays above ripple */}
      <span className="relative z-10 flex items-center justify-center gap-2 w-full">
        {children} {/* Render button content (e.g., text, icons) */}
      </span>
    </motion.button>
  );
};