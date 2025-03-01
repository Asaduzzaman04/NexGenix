import { useState, useEffect, useCallback } from 'react';

export const useImageLoader = (imageUrl) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const loadImage = useCallback(() => {
    if (!imageUrl) return;

    const img = new Image();

    img.onload = () => setIsLoaded(true);
    img.onerror = () => setError('Failed to load image');

    img.src = imageUrl;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [imageUrl]);

  useEffect(() => {
    setIsLoaded(false);
    setError(null);

    const cleanup = loadImage();
    return cleanup;
  }, [imageUrl, loadImage]);

  return { isLoaded, error };
};
