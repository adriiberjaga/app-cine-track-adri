import type { Movie } from '../config/types';
import Heading from './Heading';
import MovieItem from './MovieItem';
import MovieSkeleton from './MovieSkeleton';

interface Props {
  movies: Movie[];
  sectionTitle?: string;
  isLoading?: boolean;
}

export default function MovieList(props: Props) {
  const { movies, sectionTitle, isLoading = false } = props;

  const skeletons = Array.from({ length: 12 }, (_, index) => index);

  return (
    <section>
      {sectionTitle && (
        <Heading as="h2" className="my-4">
          {sectionTitle}
        </Heading>
      )}

      <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
        {isLoading &&
          skeletons.map((_, index) => <MovieSkeleton key={index} />)}
        {!isLoading &&
          movies.map((movie) => <MovieItem key={movie.id} movie={movie} />)}
      </div>
    </section>
  );
}
