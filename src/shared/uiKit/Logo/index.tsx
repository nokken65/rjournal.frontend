import clsx from 'clsx';
import React from 'react';

type LogoProps = {
  classNames?: string;
};

const Logo: React.FC<LogoProps> = ({ classNames }) => {
  return (
    <a href='/' role='button' className={clsx('flex', classNames)}>
      <img src='assets/images/logo.png' alt='logo' width={32} height={50} />
    </a>
  );
};

export default Logo;
