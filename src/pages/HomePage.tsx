import MovieList from "../components/MovieList";
import MovieListScroll from "../components/MovieListScroll";
import { useMovies } from "../hooks/useMovies";

export default function HomePage() {
  // const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  // const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);
  // const [topMovies, setTopMovies] = useState<Movie[]>([]);

  // useEffect(() => {
  //   getMovies('popular').then((movies) => setPopularMovies(movies));
  //   getMovies('upcoming').then((movies) => setUpcomingMovies(movies));
  //   getMovies('top_rated?language=es-ES').then((movies) =>
  //     setTopMovies(movies)
  //   );
  // }, []);

  const { movies: popularMovies, isLoading: areLoadingPopularMovies } =
    useMovies("popular");
  const { movies: upcomingMovies, isLoading: areLoadingUpcomingMovies } =
    useMovies("upcoming");
  const { movies: topMovies, isLoading: areLoadingTopMovies } = useMovies(
    "top_rated?language=es-ES"
  );

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <MovieListScroll
          sectionTitle="Popular movies"
          movies={popularMovies}
          isLoading={areLoadingPopularMovies}
        />
        <MovieListScroll
          sectionTitle="Upcoming movies"
          movies={upcomingMovies}
          isLoading={areLoadingUpcomingMovies}
        />
      </section>
      <MovieList
        sectionTitle="Top movies"
        movies={topMovies}
        isLoading={areLoadingTopMovies}
      />
    </>
  );
}
