import { list } from '@effector/reflect';
import React from 'react';

import { MenuOption, menuOptionModel } from '@/entities/MenuOption';

import { activeOption$, changeActiveOption } from '../../model';

type MenuListProps = {
  option: import('@/shared/api').Option;
  activeOption: string;
  setActive: () => void;
};

const MenuListView: React.FC<MenuListProps> = ({
  option,
  activeOption,
  setActive,
}) => {
  return (
    <li className='list-none mt-1 mb-1 h-11 select-none'>
      <MenuOption
        data={option}
        active={option.id === activeOption}
        setActive={setActive}
      />
    </li>
  );
};

export const MenuList = list({
  view: MenuListView,
  bind: {
    activeOption: activeOption$,
    setActive: changeActiveOption,
  },
  source: menuOptionModel.options$,
  mapItem: {
    option: (option) => option,
  },
  getKey: (option) => option.id,
});
