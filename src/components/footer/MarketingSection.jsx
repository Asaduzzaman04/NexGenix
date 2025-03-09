import React from 'react';
import { Link } from 'react-router';
import { RippleButton } from '../Button';

const MarketingSection = () => {
  return (
    <div className="bg-pink-200 rounded-tl-2xl rounded-tr-2xl p-8 gap-10 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto shadow-lg py-20 lg:h-[350px] xl:h-[450px] ">
      <div className="flex-1">
        <h2 className="text-2xl  md:text-4xl  lg:text-5xl font-bold text-purple-900">
          Grow Your Brand Fast with Our Digital Marketing Expertise
        </h2>
      </div>
      <div className="text-right felx-1 flex flex-col gap-5 md:gap-7 lg:gap-10 xl:gap-14">
        <div className='flex flex-col gap-4'>
          <p className="text-sm text-gray-700 lg:text-lg">
            Ready to speak with a marketing expert? Give us a ring
          </p>
          <a href="tel:+8801897-015708">
            <p className="text-lg font-bold text-purple-900">+8801897-015708</p>
          </a>
        </div>
        {/* link to contact form */}
        <Link to={`/contact-us`} className='md:ml-32 lg:ml-52'>
          <RippleButton>Get Free Consultation</RippleButton>
        </Link>
      </div>
    </div>
  );
};

export default MarketingSection;
