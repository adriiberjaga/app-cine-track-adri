import { twMerge } from 'tailwind-merge';

interface Props {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Logo(props: Props) {
  const { className, size = 'md' } = props;

  // let fontSizeClass = '';
  // if (size === 'sm') {
  //   fontSizeClass = 'text-xl';
  // } else if (size === 'md') {
  //   fontSizeClass = 'text-2xl';
  // } else if (size === 'lg') {
  //   fontSizeClass = 'text-3xl';
  // } else if (size === 'xl') {
  //   fontSizeClass = 'text-4xl';
  // }

  const fontSizeClass = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
  };

  const classes = twMerge(
    'font-montserrat font-extrabold',
    fontSizeClass[size],
    className
  );

  return (
    <h1 className={classes}>
      The
      <br />
      Movie
      <br />
      Tracker
    </h1>
  );
}
