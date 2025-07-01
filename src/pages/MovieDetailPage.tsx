import Button from "../components/Button";
import Heading from "../components/Heading";

import { MdBookmarkAdd } from "react-icons/md";
import GenreList from "../components/GenreList";
import { FaImdb } from "react-icons/fa";
import TrailerVideo from "../components/TrailerVideo";
import { ImEyePlus } from "react-icons/im";
import type { Movie } from "../config/types";
import { useLocation, useParams } from "react-router";
import { useEffect, useState } from "react";

export default function MovieDetailPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);
  const { VITE_CLAVE_API: TOKEN, VITE_TMDB_TOKEN: VIDEOTOKEN } = import.meta
    .env;
  const { state } = useLocation();
  const [video, setVideo] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!state) {
      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${TOKEN}`)
        .then((resp) => resp.json())
        .then((data) => {
          if (!data) {
            setMovie(null);
            return;
          }
          setLoading(false);
          setMovie(data);
        });
    } else {
      setLoading(false);
      setMovie(state);
    }
  }, [id]);
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${VIDEOTOKEN}`,
        accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        const firstTrailer = data.results.find(
          (video: any) => video.type === "Trailer" && video.site === "YouTube"
        );

        if (firstTrailer) {
          setVideo(firstTrailer.key); // Solo guardamos la key del video
        } else {
          setVideo(""); // fallback
        }
      });
  }, [id]);
  if (loading) return <div>Loading...</div>;
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between items-center w-full">
        <Heading className="text-left">{movie?.title}</Heading>
        <div className="flex gap-2">
          <Button
            variant="secondary"
            className="bg-green-200"
            icon={<ImEyePlus />}
          >
            Watched
          </Button>
          <Button variant="secondary" icon={<MdBookmarkAdd />}>
            Add to watchlist
          </Button>
        </div>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-[3fr_2fr] 
       w-full my-8 gap-32"
      >
        <div className="flex gap-4">
          {movie?.backdrop_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
              alt={`${movie?.title} Poster`}
              className="w-64 rounded-xl"
            />
          ) : (
            <img
              src=""
              alt={`${movie?.title} Poster`}
              className="w-64 rounded-xl"
            />
          )}

          <div className="flex flex-col gap-4 py-4">
            <GenreList genres={["Action", "Thriller", "Drama"]} />

            <p className="font-semibold">{movie?.overview}</p>
            <Heading as="h2" className="text-lg mt-auto">
              IMDB Rating
            </Heading>
            <div className="flex gap-4">
              <span className="inline-block mr-2">
                <FaImdb />
                {movie?.vote_average}
                <span className="text-xs text-gray-400">/10</span>
              </span>
              <span>{movie?.vote_count} Reviews</span>
            </div>
          </div>
        </div>

        <div>
          <TrailerVideo videoId={video} />
        </div>
      </div>
    </div>
  );
}
