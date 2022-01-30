import clsx from 'clsx';
import React from 'react';

import { ButtonLink } from '@/shared/uiKit';

type MenuOptionProps = React.PropsWithChildren<{
  data: import('@/shared/api').Option;
  active: boolean;
  setActive: (id: string) => void;
}>;

export const MenuOption: React.FC<MenuOptionProps> = ({
  data,
  active,
  setActive,
}) => {
  return (
    <ButtonLink
      to={data.href}
      onClick={() => setActive(data.id)}
      className={clsx(
        'h-full w-full justify-start border-none pl-3 pr-3',
        active && 'bg-white-100',
        !active && 'hover:bg-white-opacity-80'
      )}
    >
      <img
        className='h-full p-3 pl-0'
        loading='lazy'
        src={data.iconUrl}
        alt={data.label}
      />
      {data.label}
    </ButtonLink>
  );
};
