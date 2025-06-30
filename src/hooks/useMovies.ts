import { useEffect, useState } from 'react';
import type { Movie } from '../config/types';
import { getMovies } from '../services/getMovies';

export function useMovies(endpoint: string) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getMovies(endpoint)
      .then((movies) => setMovies(movies))
      .finally(() => setIsLoading(false));
  }, [endpoint]);

  return { movies, isLoading };
}
