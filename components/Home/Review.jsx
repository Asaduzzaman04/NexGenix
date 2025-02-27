"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import images from "@/data/Images";
import TestimonialSlider from "@/components/TestimonialSlider";
import { useState, useEffect } from "react";

const Review = () => {
  const [gradientWidth, setGradientWidth] = useState(50); // Default for small screens

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) { // sm breakpoint in Tailwind (640px)
        setGradientWidth(250);
      } else {
        setGradientWidth(50);
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-16 flex flex-col items-center justify-center gap-10 overflow-hidden">
      {/* Heading of review */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-purple-800">
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
            <Image
              key={image.id}
              src={image.src}
              alt="Client Logo"
              width={128}
              height={128}
              className="mx-4 rounded-2xl object-contain"
            />
          ))}
        </Marquee>
      </div>

      {/* Client-review slider */}
      <div className="w-full">
        <TestimonialSlider />
      </div>
    </section>
  );
};

export default Review;