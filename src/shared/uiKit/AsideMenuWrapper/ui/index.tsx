import { reflect } from '@effector/reflect';
import React from 'react';

import { asideMenuHidden$ } from '../model';

type AsideMenuWrapperProps = React.PropsWithChildren<{ hidden: boolean }>;

const AsideMenuWrapperUI: React.FC<AsideMenuWrapperProps> = ({
  children,
  hidden,
}) => {
  return (
    <>
      {hidden ? null : (
        <aside className='max-w-menu min-w-menu min-h-menu'>{children}</aside>
      )}
    </>
  );
};

const AsideMenuWrapper = reflect({
  view: AsideMenuWrapperUI,
  bind: {
    hidden: asideMenuHidden$,
  },
});

export default AsideMenuWrapper;
