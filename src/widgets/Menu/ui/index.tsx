import { reflect } from '@effector/reflect';
import React from 'react';

import MenuItem from '@/entities/MenuItem';
import type { Option } from '@/shared/api';

import {
  activeOption$,
  changeActiveOption,
  getOptionsFx,
  options$,
} from '../model';

type MenuProps = {
  options: Option[];
  activeOption: string;
};

const MenuView: React.FC<MenuProps> = ({ options, activeOption }) => {
  return (
    <ul className='flex flex-col w-full m-3'>
      {options.map((option) => (
        <MenuItem
          key={option.id}
          active={option.id === activeOption}
          option={option}
          onClick={() => changeActiveOption(option.id)}
        />
      ))}
    </ul>
  );
};

export const Menu = reflect({
  view: MenuView,
  bind: {
    options: options$,
    activeOption: activeOption$,
    changeActiveOption: changeActiveOption,
  },
  hooks: {
    mounted: getOptionsFx.prepend(() => {}),
  },
});
