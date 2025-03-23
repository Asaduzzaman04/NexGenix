import { useState, useMemo, useEffect } from 'react';
import projects from '../data/Portfolio.json';

// Cache to store fetched projects
let projectCache = null;

export const usePortfolio = () => {
  const [category, setcategory] = useState('All');
  const [searchQuery, setsearchQuery] = useState('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery);
  const [loading, setLoading] = useState(!projectCache); // Only true if cache is empty
  const [allProjects, setAllProjects] = useState(projectCache || []);

  // Debounce the search query
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 300); 

    return () => clearTimeout(handler);
  }, [searchQuery]);

  // Load projects and preload images
  useEffect(() => {
    if (projectCache) {
      // If cache exists, use it and skip loading
      setAllProjects(projectCache);
      setLoading(false);
      return;
    }

    const loadProjects = async () => {
      setLoading(true);
      try {

        await new Promise((resolve) => setTimeout(resolve, 1000)); // 1-second delay
        const flattenedProjects = projects.flatMap(
          (proj) => proj.portfolio.projects
        );
        setAllProjects(flattenedProjects);
        projectCache = flattenedProjects;

        // Preload images
        flattenedProjects.forEach((project) => {
          if (project.image) {
            const img = new Image();
            img.src = project.image;
          }
        });
      } catch (error) {
        console.error('Error loading projects:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  const filterProject = useMemo(() => {
    return allProjects.filter((item) => {
      const matchCategory = category === 'All' || item.category === category;

      const matchSearch =
        !debouncedSearchQuery ||
        item.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
        item.tags.some((tag) =>
          tag.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
        );

      return matchCategory && matchSearch;
    });
  }, [debouncedSearchQuery, category, allProjects]);

  return {
    filterProject,
    category,
    setcategory,
    searchQuery,
    setsearchQuery,
    loading,
  };
};