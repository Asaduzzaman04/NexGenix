import { useState, useEffect } from 'react';
import projects from '../data/projectdetails.json';

export const useProjects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setFilteredProjects(
      activeCategory === 'all'
        ? projects
        : projects.filter((project) => project.category === activeCategory)
    );

    // Reset animation state when category changes
    setHasAnimated(false);
  }, [activeCategory]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return {
    projects: filteredProjects,
    activeCategory,
    handleCategoryChange,
    hasAnimated,
    setHasAnimated
  };
};
