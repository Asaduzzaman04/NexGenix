import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router';
import { motion } from 'motion/react';
import PricingCard from './PricingCard';
import { useServices } from '../../hooks/useServices';

const ServiceDetail = () => {
  const { title } = useParams();
  document.title = `NexGenix - service - ${title}`;
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

  if (!service) {
    return null;
  }

  return (
    <div className="max-w-10/12 mx-auto px-4 mt-26">
      {/* Back button */}
      <button
        onClick={() => navigate('/our-services')}
        className="flex items-center  text-purple-950 font-semibold py-2 px-4 rounded-lg cursor-pointer transition duration-300 mt-6"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
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
      <div className="py-12 flex flex-col md:grid md:grid-cols-2 gap-8  items-stretch">
        {/* Left Section */}
        <div className=" flex flex-col gap-6 justify-center bg-white rounded-lg p-8 flex-1 min-h-[400px] md:min-h-[500px]">
          <h1 className="text-4xl md:text-5xl  font-bold text-purple-900 mb-4 capitalize">
            {service.title.toLowerCase()}
          </h1>
          <div>
            <p className="text-gray-600 text-lg mb-6">{service.description}</p>
            <p className="text-gray-700 mb-6">{service.detailedDescription}</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-purple-100 rounded-lg p-8 relative overflow-hidden flex items-center justify-center flex-1 min-h-[400px] md:min-h-[200px]: lg:min-h-[450px]">
          {/* Background Text */}
          <div className="absolute top-0 right-0 w-full h-full opacity-10 flex items-center justify-center">
            <div className="text-9xl font-bold text-purple-900 opacity-20">
              {service.title.split(' ')[0]}
            </div>
          </div>

          {/* Image */}
          {service.image && (
            <div className="rounded-lg overflow-hidden w-full h-full lg:h-[300px]">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          )}
        </div>
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
          {service.offerings ? (
            service.offerings.map((offering, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-purple-100 flex flex-col"
              >
                {offering.image && (
                  <div className="mb-4 rounded-md overflow-hidden h-40">
                    <img
                      src={offering.image}
                      alt={offering.title}
                      className="w-full h-full object-cover"
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
      {service.pricing && (
        <section className="py-12  -mx-4 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-900 mb-6 text-center">
              Find Your Perfect Plan
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-center mb-8">
              Choose the plan that best suits your business needs and
              objectives. All plans include our expert service and dedicated
              support.
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
          {service.title.toLowerCase()} services. Contact us today to discuss
          your specific needs and goals.
        </p>
        <motion.button
          className="bg-purple-900 hover:bg-purple-950 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2  
 text-white px-8 py-3 rounded-md text-lg font-medium  transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to={`/contact-us`}>Contact Us Now</Link>
        </motion.button>
      </section>
    </div>
  );
};

export default ServiceDetail;
