import React from 'react';
import { Link } from 'react-router';
import { RippleButton } from '../Button';

const MarketingSection = () => {
  return (
    <div className="bg-pink-200 rounded-tl-2xl rounded-tr-2xl    p-8 gap-10 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto shadow-lg ">
      <div className="flex-1">
        <h2 className="text-2xl  md:text-4xl font-bold text-purple-900">
          Grow Your Brand Fast with Our Digital Marketing Expertise
        </h2>
      </div>
      <div className="text-right felx-1">
        <p className="text-sm text-gray-700">
          Ready to speak with a marketing expert? Give us a ring
        </p>
        <a href="tel:01xxxxxxxx">
          <p className="text-lg font-bold text-purple-900">01xxxxxxxx</p>
        </a>
        {/* link to contact form */}
        <Link to={`/contact-us`}>
          <RippleButton>Get Free Consultation</RippleButton>
        </Link>
      </div>
    </div>
  );
};

export default MarketingSection;
