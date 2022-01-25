import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';

type ButtonLinkProps = React.PropsWithChildren<{
  to: string;
  action?: () => void;
  classNames?: string;
}>;

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  children,
  to,
  action,
  classNames,
}) => {
  return (
    <Link
      to={to}
      role='button'
      className={clsx('flex items-center rounded-lg', classNames)}
      onClick={action}
    >
      {children}
    </Link>
  );
};
