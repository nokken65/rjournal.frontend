import clsx from 'clsx';
import React from 'react';

type WaveLoaderProps = React.ComponentProps<'span'> & {
  className?: string;
};

export const WaveLoader: React.FC<WaveLoaderProps> = ({
  className,
  ...props
}) => {
  return (
    <span
      className={clsx('w-full h-1 bg-primary-100 animate-wave', className)}
      {...props}
    />
  );
};
