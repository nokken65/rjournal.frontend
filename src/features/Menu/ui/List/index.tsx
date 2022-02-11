import { list } from '@effector/reflect';

import { menuModel } from '@/features/Menu';
import { MenuItem } from '@/shared/components';

import styles from './styles.module.scss';

type MenuListProps = {
  option: import('@/shared/api').Option;
  activeOption: string;
};

const MenuListView = ({ option }: MenuListProps) => {
  return (
    <li className={styles.menuItem}>
      <MenuItem data={option} />
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
