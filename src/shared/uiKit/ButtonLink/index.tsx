import clsx from 'clsx';
import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

type ButtonLinkProps = LinkProps &
  React.PropsWithChildren<{
    to: string;
    action?: () => void;
    className?: string;
  }>;

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  children,
  to,
  action,
  className,
  ...props
}) => {
  return (
    <Link
      to={to}
      role='button'
      className={clsx('flex items-center rounded-lg', className)}
      onClick={action}
      {...props}
    >
      {children}
    </Link>
  );
};
