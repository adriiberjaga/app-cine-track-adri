import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  variant?: 'primary' | 'secondary';
  icon?: ReactNode;
}

export default function Button(props: Props) {
  const {
    children,
    type = 'button',
    className,
    variant = 'primary',
    icon,
    ...rest
  } = props;

  const variantClasses = {
    primary: 'bg-blue text-white hover:bg-blue/70',
    secondary: 'bg-gray-dark text-black hover:bg-gray-dark/70',
  };

  const classes = twMerge(
    'flex items-center justify-between px-6 py-2 bg-blue text-white rounded-full hover:bg-blue/70',
    variantClasses[variant],
    className
  );

  return (
    <>
      <button type={type} className={classes} {...rest}>
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </button>
    </>
  );
}
