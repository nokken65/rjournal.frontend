import { reflect } from '@effector/reflect';
import clsx from 'clsx';
import React from 'react';

import { asideMenuHidden$ } from '../model';

type AsideMenuWrapperProps = React.PropsWithChildren<{ hidden: boolean }>;

const AsideMenuWrapperUI: React.FC<AsideMenuWrapperProps> = ({
  children,
  hidden,
}) => {
  return (
    <aside
      className={clsx(
        'mr-auto max-w-menu min-w-menu min-h-menu transition-transform duration-100 ease-in',
        hidden && 'fixed transform -translate-x-56'
      )}
    >
      {children}
    </aside>
  );
};

const AsideMenuWrapper = reflect({
  view: AsideMenuWrapperUI,
  bind: {
    hidden: asideMenuHidden$,
  },
});

export default AsideMenuWrapper;
