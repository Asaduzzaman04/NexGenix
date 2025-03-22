import React, { useState, useMemo } from 'react';
import projects from '../data/Portfolio.json';

export const usePortfolio = () => {
  const [category, setcategory] = useState('All');
  const [searchQuery, setsearchQuery] = useState('');

  const filterProject = useMemo(() => {
    //convert the 2d array to single array
    const allProjects = projects.flatMap((proj) => proj.portfolio.projects);

    return allProjects.filter((item) => {
      //default all the card will show
      const matchCategory = category === 'All' || item.category === category;

      const matchSearch =
        !searchQuery || // If input is empty, match all
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchCategory && matchSearch;
    });
  }, [searchQuery, category]);

  return {
    filterProject,
    category,
    setcategory,
    searchQuery,
    setsearchQuery
  };
};
