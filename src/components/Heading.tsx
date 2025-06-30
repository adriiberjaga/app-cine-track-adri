import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type HTMLHeading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface Props extends ComponentPropsWithoutRef<HTMLHeading> {
  children: ReactNode;
  className?: string;
  as?: HTMLHeading;
}

export default function Heading(props: Props) {
  const { children, className, as = 'h1', ...rest } = props;
  const Tag = as;

  const tagClasses = {
    h1: 'text-4xl font-extrabold',
    h2: 'text-3xl font-extrabold',
    h3: 'text-2xl font-extrabold',
    h4: 'text-xl font-extrabold',
    h5: 'text-lg font-bold',
    h6: 'text-base font-bold',
  };

  const sharedClasses = 'font-bold font-montserrat';

  const classes = twMerge(sharedClasses, tagClasses[as], className);

  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
}
