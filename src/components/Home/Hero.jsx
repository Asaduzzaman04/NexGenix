import React, { useRef } from 'react';
// import { useInView } from 'motion/react';
import { RippleButton } from '../Button';
import heroImage from '../../assets/images/hero-home.jpeg';
import AnimatedImageCard from '../AnimatedImageCard';
import { Link } from 'react-router';
import { CiYoutube } from 'react-icons/ci';
import { GoProjectSymlink } from 'react-icons/go';

const Hero = () => {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-around px-6 md:px-10 py-10 md:py-20 overflow-hidden w-full">
      {/* Left Content */}
      <div className="relative max-w-xl mt-10 md:mt-0 space-y-4 flex flex-col gap-5 md:gap-7 text-left w-full md:w-1/2 order-2 md:order-1 z-10">
        <div className="relative">
          <h1 className="text-2xl md:text-4xl lg:text-6xl w-full font-bold text-text-color relative z-10">
            Elevate Your Brand with Tailored Marketing
          </h1>
          {/* SVG Background - Moved up */}
          {/* <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className=" w-64 h-64 -z-10 md:w-72 md:h-72"  >
            <path
              fill="#EABDE6"
              d="M44.7,24.5C31.9,47.9,-22.3,46,-36.7,21.7C-51,-2.6,-25.5,-49.3,1.6,-48.4C28.7,-47.5,57.4,1.1,44.7,24.5Z"
              transform="translate(100 100)"
            />
          </svg> */}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 65 65"
            fill="none"
            className="absolute top-8 left-6"
          >
            <circle
              opacity="0.1"
              cx="32.5"
              cy="32.5"
              r="32.5"
              fill="url(#paint0_linear_0_4114)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_0_4114"
                x1="96.6667"
                y1="-32.3333"
                x2="142.607"
                y2="67.0223"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0425935" stopColor="#330B51" />
                <stop offset="1" stopColor="#5F1D91" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <p className="text-purple-900">Magic Where Creativity Meets Results</p>
        <div className="flex justify-start gap-4 items-center lg:pr-20">
          <RippleButton>
            <Link
              to={`/our-works`}
              className="flex gap-2 justify-center items-center"
            >
              Projects{' '}
              <GoProjectSymlink className="text-[28px] group-hover:translate-x-2.5 transition-all duration-300 ease-linear" />
            </Link>
          </RippleButton>
          <RippleButton>
            Watch video{' '}
            <CiYoutube className="text-3xl font-black group-hover:translate-x-2.5 transition-all duration-300 ease-linear" />
          </RippleButton>
        </div>
      </div>

      {/* Right Content (Image) */}
      <AnimatedImageCard imageSrc={heroImage} />

      {/* SVG Dashed Line - Updated to span the whole section */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1952 356"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M-0.806641 135.116C45.4763 198.109 207.72 380.437 492.494 351.649C840.085 316.511 940.139 73.2465 1288.16 13.8264C1566.58 -3.7098 1828.01 61.0536 1951.37 107.437"
          stroke="#2D336B"
          strokeLinejoin="round"
          strokeDasharray="5 3" // Reduced gap from 9 to 3
          strokeWidth="1"
        />
      </svg>
    </section>
  );
};

export default Hero;
