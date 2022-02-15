import { variant } from '@effector/reflect';
import { combine } from 'effector';

import { menuModel } from '@/features/Menu';
import { List } from '@/shared/components';

import { MenuList } from '../MenuList';

export const Menu = () => {
  return (
    <List>
      <MenuContent />
    </List>
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
