import clsx from 'clsx';
import React from 'react';

type ButtonProps = React.PropsWithChildren<{
  action?: () => void;
  classNames?: string;
}>;

export const Button: React.FC<ButtonProps> = ({
  children,
  action,
  classNames,
}) => {
  return (
    <button
      className={clsx('appearance-none border-none flex h-full', classNames)}
      onClick={action}
    >
      {children}
    </button>
  );
};
