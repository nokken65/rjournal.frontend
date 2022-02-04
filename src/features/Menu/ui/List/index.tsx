import { list } from '@effector/reflect';

import { menuModel } from '@/features/Menu';
import { MenuItem } from '@/shared/components';

type MenuListProps = {
  option: import('@/shared/api').Option;
  activeOption: string;
};

const MenuListView = ({ option, activeOption }: MenuListProps) => {
  return (
    <li className='mb-1 list-none'>
      <MenuItem data={option} active={option.id === activeOption} />
    </li>
  );
};

export const MenuList = list({
  view: MenuListView,
  bind: { activeOption: menuModel.activeOption$ },
  source: menuModel.options$,
  mapItem: {
    option: (option) => option,
  },
  getKey: (option) => option.id,
});
