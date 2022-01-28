import { reflect, variant } from '@effector/reflect';
import clsx from 'clsx';
import { combine } from 'effector';
import React from 'react';

import { menuOptionModel } from '@/entities/MenuOption';

import { menuHidden$, toggleMenuHidden } from '../../model';
import { MenuList } from '../MenuList';

type MenuProps = {
  hidden: boolean;
  toggleHidden: () => void;
};

const MenuView: React.FC<MenuProps> = ({ hidden, toggleHidden }) => {
  return (
    <aside
      className={clsx(
        'fixed left-0 mr-auto flex min-h-menu min-w-menu max-w-menu transition-transform duration-100 ease-in',
        hidden && `-translate-x-56 transform`
      )}
    >
      <ul className='flex flex-col w-full m-3'>
        <MenuContent />
      </ul>
    </aside>
  );
};

export const Menu = reflect({
  view: MenuView,
  bind: {
    hidden: menuHidden$,
    toggleHidden: toggleMenuHidden,
  },
});

const MenuContent = variant({
  source: combine(
    {
      isLoading: menuOptionModel.optionsIsLoading$,
      isEmpty: menuOptionModel.optionsIsEmpty$,
    },
    ({ isLoading, isEmpty }) => {
      if (isLoading) return 'loading';
      if (isEmpty) return 'empty';
      return 'ready';
    }
  ),
  cases: {
    loading: () => <span>Loading...</span>,
    empty: () => <span>No comments :(</span>,
    ready: MenuList,
  },
  hooks: {
    mounted: menuOptionModel.getOptionsFx.prepend(() => {}),
  },
});
