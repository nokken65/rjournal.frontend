import { variant } from '@effector/reflect';
import { combine } from 'effector';

import { menuModel } from '@/features/Menu';
import { MenuList } from '@/features/Menu';

import styles from './styles.module.scss';

export const Menu = () => {
  return (
    <ul className={styles.menu}>
      <MenuContent />
    </ul>
  );
};

const MenuContent = variant({
  source: combine(
    {
      isLoading: menuModel.selectors.optionsIsLoading$,
      isEmpty: menuModel.selectors.optionsIsEmpty$,
    },
    ({ isLoading, isEmpty }) => {
      if (isLoading) return 'loading';
      if (isEmpty) return 'empty';
      return 'ready';
    }
  ),
  cases: {
    loading: () => <span>Loading...</span>,
    empty: () => <span>No posts :(</span>,
    ready: MenuList,
  },
  hooks: {
    mounted: menuModel.effects.getOptionsFx.prepend(() => {}),
  },
});
