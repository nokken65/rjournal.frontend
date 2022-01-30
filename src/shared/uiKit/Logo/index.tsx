import clsx from 'clsx';
import React from 'react';

import logo from '/assets/icons/logo.svg';
import { ButtonLink } from '@/shared/uiKit';

export const Logo: React.FC = () => {
  return (
    <ButtonLink to='/' className={clsx('flex pl-3 pr-3 mr-3 h-full')}>
      <img src={logo} alt='logo' width={32} height={50} />
    </ButtonLink>
  );
};
