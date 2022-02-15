import { list } from '@effector/reflect';

import { menuModel } from '@/features/Menu';
import { List } from '@/shared/components';

type MenuItemProps = {
  option: import('@/shared/api').Option;
};

const MenuItemView = ({ option }: MenuItemProps) => {
  return (
    <List.Item.Menu to={option.href} label={option.label} icon={option.icon} />
  );
};

export const MenuList = list({
  view: MenuItemView,
  source: menuModel.options$,
  mapItem: {
    option: (option) => option,
  },
  getKey: (option) => option.id,
});
