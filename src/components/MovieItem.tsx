import { Link } from "react-router-dom";
import type { Movie } from "../config/types";
import { PiStar } from "react-icons/pi";

interface Props {
  movie: Movie;
}

export default function MovieItem(props: Props) {
  const { movie } = props;
  return (
    <Link
      to={`/movie/${movie.id}`}
      className="shrink-0 snap-start"
      state={movie}
    >
      <article
        key={movie.id}
        className=" max-w-md rounded-xl overflow-hidden relative group aspect-[2/3]"
      >
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={`${movie.title} poster`}
        />
        <span className="flex gap-1 items-center absolute top-2 left-2 bg-white/80 px-2 rounded-full">
          <PiStar className="text-purple-500" /> {movie.vote_average.toFixed(1)}
        </span>
        <h2 className="absolute bottom-2 bg-white/80 w-full text-center opacity-0 group-hover:opacity-100 transition-opacity">
          {movie.title}
        </h2>
      </article>
    </Link>
  );
}
