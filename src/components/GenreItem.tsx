import { twMerge } from 'tailwind-merge';

interface Props {
  title: string;
  className?: string;
}

export default function GenreItem(props: Props) {
  const { title, className } = props;

  const classes = twMerge(
    'px-4 py-1 rounded-full border-2 font-semibold',
    className
  );

  return <span className={classes}>{title}</span>;
}
