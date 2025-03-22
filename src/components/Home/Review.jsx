import React, { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';
// import TestimonialSlider from '../TestimonialSlider';
import { images } from '../../data/Images.js';

// Memoize the Review component to prevent unnecessary re-renders
const Review = React.memo(() => {
  const [gradientWidth, setGradientWidth] = useState(50);

  useEffect(() => {
    const handleResize = () => {
      setGradientWidth(window.innerWidth >= 640 ? 250 : 50);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

  
    return () => window.removeEventListener('resize', handleResize);
  }, []); 

  return (
    <section className="py-16 flex flex-col items-center justify-center gap-10 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-purple-950">
          Our Valuable Clients and Reviews
        </h2>
      </div>

      {/* Clients-brand-icons marquee effect */}
      <div className="mb-12 w-full">
        <Marquee
          autoFill
          pauseOnHover
          gradient
          gradientColor="white"
          gradientWidth={gradientWidth}
        >
          {images.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={`Client Logo ${image.id}`}
              className="mx-4 h-[128px] rounded-2xl object-contain"
              onError={(e) => {
                e.target.src = '/path/to/fallback-image.png'; // Fallback if image fails to load
              }}
            />
          ))}
        </Marquee>
      </div>

      {/* Client-review slider */}
      {/* <div className="w-full">
        <TestimonialSlider />
      </div> */}
    </section>
  );
});
export default Review;
