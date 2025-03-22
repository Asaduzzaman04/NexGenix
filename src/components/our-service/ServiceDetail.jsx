import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import PricingCard from './PricingCard';
import { useServices } from '../../hooks/useServices';

const ServiceDetail = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const { getServiceByTitle, loading } = useServices();
  const service = getServiceByTitle(title);

  useEffect(() => {
    if (!loading && !service) {
      navigate('/our-services');
    }
  }, [service, loading, navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-18 w-18 border-t-2 border-b-2 border-purple-900"></div>
      </div>
    );
  }

  if (!service) return null;

  return (
    <>
      {' '}
      {/* SEO Meta Tags */}
      <Helmet>
        <title>NexGenix - {service.title}</title>
        <meta name="description" content={service.description} />
        <meta
          name="keywords"
          content={`NexGenix, ${service.title}, professional services`}
        />
        <meta property="og:title" content={`NexGenix - ${service.title}`} />
        <meta property="og:description" content={service.detailedDescription} />
        <meta property="og:image" content={service.image} />
      </Helmet>
      <div className="w-full md:max-w-10/12 mx-auto px-4 mt-26">
        {/* Back Button */}
        <button
          onClick={() => navigate('/our-services')}
          className="flex items-center text-purple-950 font-semibold py-2 px-4 rounded-lg cursor-pointer transition duration-300 mt-6"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          Back
        </button>

        {/* Hero Section */}
        <div className="py-12 flex flex-col-reverse md:grid md:grid-cols-2 gap-8 items-stretch">
          {/* Left Section */}
          <div className="flex flex-col gap-6 justify-center bg-white rounded-lg p-8 flex-1 min-h-[400px] md:min-h-[500px]">
            <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4 capitalize">
              {service.title}
            </h1>
            <p className="text-gray-600 text-lg mb-6">{service.description}</p>
            <p className="text-gray-700 mb-6">{service.detailedDescription}</p>
          </div>

          {/* Right Section (Image) */}
          <div className="z-20 bg-purple-100 rounded-lg p-8 relative overflow-hidden flex items-center justify-center flex-1 min-h-[400px]">
            {/* Background Text */}
            <div className="absolute top-0 right-0 w-full h-full opacity-10 flex items-center justify-center">
              <div className="text-9xl font-bold text-purple-900 opacity-20">
                {service.title.split(' ')[0]}
              </div>
            </div>

            {/* Image */}
            {service.image && (
              <div className="rounded-lg overflow-hidden w-full h-full lg:h-[400px] ">
                <img
                  src={service.image}
                  alt={`${service.title} - Professional Services`}
                  className="w-full h-full object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
            )}
          </div>

          {/* SVG Dashed Line - Updated to span the whole section */}
          <svg
            className=" hidden md:flex absolute top-[470.12px] left-[-0.81px] w-full h-[283.4px] pointer-events-none z-10 rotate-[8.97deg] "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1987 283"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M0 150C50 220 200 280 500 260C850 240 950 80 1300 40C1600 10 1900 60 1937 100"
              stroke="#2D336B"
              strokeLinejoin="round"
              strokeDasharray="4 6"
              strokeWidth="1"
            />
          </svg>
        </div>

        {/* What We Offer Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">
            Next-Gen {service.title} for Maximum Impact
          </h2>

          <h3 className="text-2xl font-semibold text-purple-800 mb-6 text-center">
            What We Offer?
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {service.offerings?.length ? (
              service.offerings.map((offering, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-purple-100 flex flex-col"
                >
                  {offering.image && (
                    <div className="mb-4 rounded-md overflow-hidden h-40 lg:h-52">
                      <img
                        src={offering.image}
                        alt={offering.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <h4 className="text-lg font-semibold text-purple-900 mb-2">
                    {offering.title}
                  </h4>
                  <p className="text-gray-600">{offering.description}</p>
                </div>
              ))
            ) : (
              <div className="col-span-3 text-center text-gray-500">
                No offerings available for this service yet.
              </div>
            )}
          </div>
        </section>

        {/* Pricing Section */}
        {service.pricing?.length > 0 && (
          <section className="py-12">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-purple-900 mb-6 text-center">
                Find Your Perfect Plan
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-center mb-8">
                Choose the plan that best suits your business needs. All plans
                include expert service and dedicated support.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {service.pricing.map((plan) => (
                  <PricingCard key={plan.id} plan={plan} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 text-center">
          <h2 className="text-3xl font-bold text-purple-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Take your business to the next level with our professional{' '}
            {service.title.toLowerCase()} services.
          </p>
          <motion.button
            className="bg-purple-900 hover:bg-purple-950 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/contact-us">Contact Us Now</Link>
          </motion.button>
        </section>
      </div>
    </>
  );
};

export default ServiceDetail;
