"use client";

// import Marquee from "@/components/Marquee";
import Marquee from "react-fast-marquee";
import Images from "@/data/Images";
import TestimonialSlider from "@/components/TestimonialSlider";

const Review = () => {
  return (
    <section className="py-16 flex flex-col items-center overflow-hidden">
      {/* Heading of review */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
          Our Valuable Clients and Reviews
        </h2>
      </div>

      {/* Clients-brand-icons marquee effect */}
      <div className="mb-12 w-full ">
        {/* <Marquee images={Images} />
         */}
        <Marquee>
          {Images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Client Logo"
              className="h-12 mx-4"
            />
          ))}
        </Marquee>
      </div>

      {/* Client-review slider */}
      <div className="w-full border-2 border-black">
        <TestimonialSlider />
      </div>
    </section>
  );
};

export default Review;
