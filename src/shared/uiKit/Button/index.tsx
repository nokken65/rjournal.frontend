import clsx from 'clsx';
import React from 'react';

type ButtonProps = React.ComponentProps<'button'> &
  React.PropsWithChildren<{
    action?: () => void;
    className?: string;
  }>;

export const Button: React.FC<ButtonProps> = ({
  children,
  action,
  className,
}) => {
  return (
    <button
      className={clsx('appearance-none border-none flex h-full', className)}
      onClick={action}
    >
      {children}
    </button>
  );
};
