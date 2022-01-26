import logo from 'assets/icons/logo.svg';
import clsx from 'clsx';
import React from 'react';

type LogoProps = React.ComponentProps<'a'> & {
  className?: string;
};

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <a href='/' role='button' className={clsx('flex', className)}>
      <img src={logo} alt='logo' width={32} height={50} />
    </a>
  );
};
