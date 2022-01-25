import React from 'react';

import type { Option } from '@/shared/api';

type MenuLstItemProps = React.PropsWithChildren<{
  option: Option;
  active?: boolean;
}>;

const MenuListItem: React.FC<MenuLstItemProps> = ({ option, active }) => {
  return <div></div>;
};

export default MenuListItem;
