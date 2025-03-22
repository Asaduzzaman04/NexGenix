import React from 'react';
import Banner from '../../components/Portfolio/Banner';
import ProjectGrid from './../../components/Portfolio/ProjectGrid';

const Portfolio = () => {
  return (
    <>
      <section className="mt-20 mx-auto ">
        <Banner />
        <div className="flex flex-col items-start justify-center lg:grid lg:grid-cols-12 gap-6 p-4">
          <div className="w-full my-10 lg:col-start-2 lg:col-span-10">
            <ProjectGrid />
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
