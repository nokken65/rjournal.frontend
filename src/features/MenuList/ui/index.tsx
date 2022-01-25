import { reflect } from '@effector/reflect';
import React from 'react';

import MenuListItem from '@/entities/MenuListItem';
import type { Option } from '@/shared/api';

import {
  activeOption$,
  changeActiveOption,
  getOptionsFx,
  options$,
} from '../model';

type MenuListProps = {
  options: Option[];
  activeOption: string;
};

const MenuListView: React.FC<MenuListProps> = ({ options, activeOption }) => {
  return (
    <ul className='m-3'>
      {options.map((option) => (
        <MenuListItem
          key={option.id}
          active={option.id === activeOption}
          option={option}
          onClick={() => changeActiveOption(option.id)}
        />
      ))}
    </ul>
  );
};

const MenuList = reflect({
  view: MenuListView,
  bind: {
    options: options$,
    activeOption: activeOption$,
    changeActiveOption: changeActiveOption,
  },
  hooks: {
    mounted: getOptionsFx.prepend(() => {}),
  },
});

export default MenuList;
