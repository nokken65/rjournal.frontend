import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

import { Icon } from '@/shared/uiKit';

type MenuItemProps = {
  data: import('@/shared/api').Option;
  active: boolean;
};

export const MenuItem = ({ data, active }: MenuItemProps) => {
  return (
    <NavLink
      to={data.href}
      className={({ isActive }) =>
        clsx(
          'flex h-11 w-full items-center justify-start rounded-lg border-none pl-3 pr-3',
          isActive && 'bg-white-100 text-primary-100 shadow-neo',
          !isActive && 'hover:bg-white-opacity-80 hover:shadow-neo'
        )
      }
    >
      <Icon name={data.icon} size={20} />
      <span className='ml-3 text-black-100'>{data.label}</span>
    </NavLink>
  );
};
