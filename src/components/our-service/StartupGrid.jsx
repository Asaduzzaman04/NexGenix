import React from 'react';
import startups from '../../data/startups.json';
import StatrupsCards from './StatrupsCards';

const StartupGrid = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        {/* text Section */}
        <section className="bg-purple-900 text-white py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight">
              We Help Companies From Early-Stage Startups To Fortune 500
              Enterprises
            </h1>
          </div>
        </section>

        {/* ideas  Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {startups.services.map((service) => (
                <StatrupsCards key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default StartupGrid;
