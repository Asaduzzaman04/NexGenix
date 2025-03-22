import React from 'react';
import { usePortfolio } from '../../hooks/usePortfolio';
import PortfolioProjectCard from './PortfolioProjectCard';

const categories = ['All', 'Design', 'Marketing', 'Development', 'Content'];

const ProjectGrid = () => {
  const { filterProject, category, setcategory, searchQuery, setsearchQuery } =
    usePortfolio();

  return (
    <>
      {/* Categories and Search */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 border-b-[2px] pb-6 border-purple-800">
        <div className="flex gap-4 flex-wrap ">
          {categories.map((items, idx) => (
            <button
              key={idx}
              onClick={() => setcategory(items)}
              className={`px-4 py-2 rounded-full transition-colors normal-case ${
                category === items
                  ? 'bg-purple-900 text-white border-b-2 border-black'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {items}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => setsearchQuery(e.target.value)}
          className="px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
      </div>

      {/* Render the filtered projects */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filterProject.length > 0 ? (
          filterProject.map((project, idx) => (
            <PortfolioProjectCard key={idx} project={project} index={idx} />
            // <div key={idx} className="p-4 border rounded-lg">
            //   <img
            //     src={project.image}
            //     alt={project.title}
            //     className="w-full h-48 object-cover rounded-lg mb-4"
            //   />
            //   <h3 className="text-lg font-semibold">{project.title}</h3>
            //   <p className="text-gray-600">{project.description}</p>
            //   <p className="text-sm text-gray-500">Category: {project.category}</p>
            //   <p className="text-sm text-gray-500">Tags: {project.tags.join(', ')}</p>
            //   <a
            //     href={project.link}
            //     className="text-purple-600 hover:underline mt-2 inline-block"
            //   >
            //     View Project
            //   </a>
            // </div>
          ))
        ) : (
          <div className="h-[40vh] w-full mx-auto  flex justify-center items-center lg:col-start-2 ">
            <p className="text-2xl text-center">No projects found.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectGrid;
