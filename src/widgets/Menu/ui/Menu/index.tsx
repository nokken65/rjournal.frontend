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
        'flex mr-auto max-w-menu min-w-menu min-h-menu transition-transform duration-100 ease-in',
        hidden && `fixed left-0 transform -translate-x-56`
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
