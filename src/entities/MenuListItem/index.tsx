import clsx from 'clsx';
import React from 'react';

import type { Option } from '@/shared/api';
import { ButtonLink } from '@/shared/uiKit';

type MenuLstItemProps = React.PropsWithChildren<{
  option: Option;
  active?: boolean;
  onClick?: () => void;
}>;

const MenuListItem: React.FC<MenuLstItemProps> = ({
  option,
  active = false,
  onClick,
}) => {
  return (
    <li className={clsx('mt-1 mb-1 h-11 select-none')}>
      <ButtonLink
        to={option.href}
        action={onClick}
        classNames={clsx(
          'w-full h-full pl-3 pr-3 border-none justify-start',
          active && 'bg-white',
          !active && 'hover:bg-whitePale'
        )}
      >
        {option.label}
      </ButtonLink>
    </li>
  );
};

export default MenuListItem;
