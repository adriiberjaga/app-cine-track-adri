import Button from '../components/Button';
import Heading from '../components/Heading';

import { MdBookmarkAdd } from 'react-icons/md';
import MovieItem from '../components/MovieItem';
import GenreItem from '../components/GenreItem';
import GenreList from '../components/GenreList';
import { FaImdb } from 'react-icons/fa';
import TrailerVideo from '../components/TrailerVideo';
import { ImEyePlus } from 'react-icons/im';

export default function MovieDetailPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between items-center w-full">
        <Heading className="text-left">Destino Final</Heading>
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
          <img
            src={
              'https://image.tmdb.org/t/p/w500/frNkbclQpexf3aUzZrnixF3t5Hw.jpg'
            }
            alt={'Poster de Destino Final'}
            className="w-64 rounded-xl"
          />
          <div className="flex flex-col gap-4 py-4">
            <GenreList genres={['Action', 'Thriller', 'Drama']} />
            <p className="font-semibold">
              Acosada por una violenta pesadilla recurrente, la estudiante
              universitaria Stefanie se dirige a casa para localizar a la única
              persona que podría ser capaz de romper el ciclo y salvar a su
              familia de la espeluznante muerte que inevitablemente les espera a
              todos.
            </p>
            <Heading as="h2" className="text-lg mt-auto">
              IMDB Rating
            </Heading>
            <div className="flex gap-4">
              <span className="">
                <FaImdb className="inline-block mr-2" />
                9.2<span className="text-xs text-gray-400">/10</span>
              </span>
              <span>8k Reviews</span>
            </div>
          </div>
        </div>

        <div>
          <TrailerVideo videoId="KnWzz0n60pE" />
        </div>
      </div>
    </div>
  );
}
