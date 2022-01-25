import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';

type ButtonLinkProps = React.PropsWithChildren<{
  to: string;
  classNames?: string;
}>;

const ButtonLink: React.FC<ButtonLinkProps> = ({
  children,
  to,
  classNames,
}) => {
  return (
    <Link
      to={to}
      role='button'
      className={clsx(
        'h-fit p-1 pl-3 pr-3 rounded-lg border bg-white hover:shadow-md',
        classNames
      )}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
