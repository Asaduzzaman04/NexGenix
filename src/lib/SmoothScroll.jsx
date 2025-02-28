import React from "react";
import PropTypes from 'prop-types';
import { useEffect } from "react";
import Lenis from "lenis";

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Animation duration in seconds
      easing: (t) => Math.min(1, 1.001 - Math.pow(1 - t, 4)), // Easing function
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

SmoothScroll.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SmoothScroll;