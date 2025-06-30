import type { TMDBMovieResponse } from '../config/types';

const { VITE_TMDB_TOKEN: TOKEN, VITE_TMDB_BASE_URL: BASE_URL } = import.meta
  .env;

export async function getMovies(endpoint: string) {
  try {
    const response = await fetch(BASE_URL + endpoint, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    const data = (await response.json()) as TMDBMovieResponse;

    return data.results;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    return [];
  }
}
