import clsx from 'clsx';
import React from 'react';

type ButtonProps = React.ComponentProps<'button'> &
  React.PropsWithChildren<{
    className?: string;
  }>;

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'appearance-none border-none flex items-center justify-center',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
