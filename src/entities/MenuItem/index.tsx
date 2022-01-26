import clsx from 'clsx';
import React from 'react';

import type { Option } from '@/shared/api';
import { ButtonLink } from '@/shared/uiKit';

type MenuItemProps = React.PropsWithChildren<{
  option: Option;
  active?: boolean;
  onClick?: () => void;
}>;

const MenuItem: React.FC<MenuItemProps> = ({
  option,
  active = false,
  onClick,
}) => {
  return (
    <li className={clsx('mt-1 mb-1 h-11 select-none')}>
      <ButtonLink
        to={option.href}
        action={onClick}
        className={clsx(
          'w-full h-full pl-3 pr-3 border-none justify-start',
          active && 'bg-white-100',
          !active && 'hover:bg-white-opacity-80'
        )}
      >
        {option.label}
      </ButtonLink>
    </li>
  );
};

export default MenuItem;
