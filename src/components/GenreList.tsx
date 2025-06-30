import { twMerge } from 'tailwind-merge';
import GenreItem from './GenreItem';

interface Props {
  genres: string[];
  className?: string;
}

export default function GenreList(props: Props) {
  const { genres, className } = props;

  const classes = twMerge('flex flex-wrap gap-3', className);

  return (
    <div className={classes}>
      {genres.map((genre) => (
        <GenreItem key={genre} title={genre} />
      ))}
    </div>
  );
}
