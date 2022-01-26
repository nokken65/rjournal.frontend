import { reflect } from '@effector/reflect';
import clsx from 'clsx';
import React from 'react';

import { asideMenuHidden$ } from '../model';

type AsideMenuWrapperProps = React.PropsWithChildren<{
  hidden: boolean;
}>;

const AsideMenuWrapperView: React.FC<AsideMenuWrapperProps> = ({
  children,
  hidden,
}) => {
  return (
    <aside
      className={clsx(
        'flex mr-auto max-w-menu min-w-menu min-h-menu transition-transform duration-100 ease-in',
        hidden && `fixed left-0 transform -translate-x-56`
      )}
    >
      {children}
    </aside>
  );
};

export const AsideMenuWrapper = reflect({
  view: AsideMenuWrapperView,
  bind: {
    hidden: asideMenuHidden$,
  },
});
