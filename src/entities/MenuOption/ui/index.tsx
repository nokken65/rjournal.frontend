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
        'w-full h-full pl-3 pr-3 border-none justify-start',
        active && 'bg-white-100',
        !active && 'hover:bg-white-opacity-80'
      )}
    >
      {data.label}
    </ButtonLink>
  );
};
