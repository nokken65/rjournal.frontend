import { reflect } from '@effector/reflect';
import React from 'react';

import type { Option } from '@/shared/api';

import { getOptionsFx, options$ } from '../model';

type MenuListProps = React.PropsWithChildren<{
  options: Option[];
}>;

const MenuListView: React.FC<MenuListProps> = ({ children, options }) => {
  return (
    <ul>
      {options.map((option) => (
        <li key={option.id}>{option.label}</li>
      ))}
    </ul>
  );
};

const MenuList = reflect({
  view: MenuListView,
  bind: {
    options: options$,
  },
  hooks: {
    mounted: getOptionsFx.prepend(() => {}),
  },
});

export default MenuList;
