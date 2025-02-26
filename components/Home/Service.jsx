import React from "react";
import Link from "next/link";
import { BiBook, BiSend, BiBrush } from "react-icons/bi";
import { MdOutlineScience } from "react-icons/md";
import { RippleButton } from "@/components/Button";
import { FaArrowRight } from "react-icons/fa"; // React Arrow Icon

const icons = { MdOutlineScience, BiBook, BiSend, BiBrush };

const servicesDesc = [
  {
    title: "Strategic Planning",
    description:
      "We leverage analytics and research to craft strategies that are grounded in fundamentals, helping us make informed decisions and stay ahead in the competitive tech landscape.",
    icon: "MdOutlineScience",
  },
  {
    title: "Research & Training",
    description:
      "We foster a collaborative workspace, encouraging partnerships with industry experts, academic researchers, and students to solve real-world problems through groundbreaking research.",
    icon: "BiBook",
  },
  {
    title: "Marketing & SEO",
    description:
      "From SEO and social media to email marketing and PPC, we leverage the latest digital tools and platforms to enhance visibility and drive measurable growth.",
    icon: "BiSend",
  },
  {
    title: "Design & Production",
    description:
      "From concept to final execution, our production workflows are optimized for efficiency, ensuring timely delivery without compromising on quality.",
    icon: "BiBrush",
  },
];

const Service = () => {
  return (
    <section className="py-12 bg-primary  text-center flex flex-col justify-center item-center gap-3 md:gap-5 lg:gap-8 ">
      <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-8">Our Services</h2>

      {/* Service Cards with Responsive Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 justify-center">
  {servicesDesc?.map((service, index) => {
    const IconComponent = icons[service.icon];
    return (
      <div
        key={index}
        className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 relative"
      >
        <div className="text-4xl text-purple-600 mb-4 flex justify-center">
          {IconComponent && <IconComponent />}
        </div>
        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
      </div>
    );
  })}
</div>

      {/* See More Button with Center Alignment */}
      <div className="flex justify-center mt-5">
        <Link href="/our-service" className="group w-full max-w-[250px]">
          <RippleButton >
            See More
            <FaArrowRight className="ml-2 inline-block transform group-hover:translate-x-2 transition-all duration-300" />
          </RippleButton>
        </Link>
      </div>    
    </section>
  );
};

export default Service;
