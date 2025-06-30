import type { ComponentPropsWithoutRef, Ref } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends ComponentPropsWithoutRef<'input'> {
  type?: string;
  className?: string;
  label?: string;
  id?: string;
  ref?: Ref<HTMLInputElement>;
  errorMessage?: string;
}

export default function Input(props: Props) {
  const {
    type = 'text',
    className,
    label,
    id,
    ref,
    errorMessage,
    ...rest
  } = props;

  const classes = twMerge(
    'outline-none focus:ring-2 focus:ring-blue bg-gray-dark rounded-full px-6 py-2 mb-1',
    errorMessage && 'focus:ring-none ring-2 ring-red-500',
    className
  );
  return (
    <div className="flex flex-col gap-2 relative">
      {label && <label htmlFor={id}>{label}</label>}
      <input id={id} type={type} className={classes} ref={ref} {...rest} />
      {errorMessage && (
        <span className="text-red-500 text-xs absolute top-full left-6">
          {errorMessage}
        </span>
      )}
    </div>
  );

  // if (label) {
  //   return (
  //     <div>
  //       <label className="flex flex-col gap-2">
  //         {label}
  //         <input type={type} className={classes} {...rest} />
  //       </label>
  //     </div>
  //   );
  // }

  // return <input type={type} className={classes} {...rest} />;
}
