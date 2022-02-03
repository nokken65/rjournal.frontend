import { reflect } from '@effector/reflect';
import clsx from 'clsx';
import React from 'react';

import { sidebarModel } from '@/widgets/Sidebar';

type SidebarProps = React.PropsWithChildren<{ hidden: boolean }>;

const SidebarView = ({ hidden, children }: SidebarProps) => {
  return (
    <aside
      className={clsx(
        'fixed left-0 z-40 mr-auto flex h-full min-h-menu min-w-menu max-w-menu -translate-x-56  transform bg-white-bg bg-scroll transition-transform duration-100 ease-in md:translate-x-0 md:transform',
        hidden && `md:-translate-x-56 md:transform`
      )}
    >
      {children}
    </aside>
  );
};

export const Sidebar = reflect({
  view: SidebarView,
  bind: {
    hidden: sidebarModel.sidebarHidden$,
  },
});
