import clsx from 'clsx';
import React from 'react';

type ButtonProps = React.ComponentProps<'button'> &
  React.PropsWithChildren<{ className?: string }>;

export const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button
      role='button'
      className={clsx(
        'flex h-10 appearance-none items-center justify-center rounded-lg border-1/2 border-gray-50 bg-white-100 font-medium',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
