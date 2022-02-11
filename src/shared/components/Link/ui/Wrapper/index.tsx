import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { CustomNavLink } from '../NavLink';
import styles from './styles.module.scss';

type CustomLinkProps = LinkProps &
  PropsWithChildren<{ className?: string; label?: string }>;

const CustomLink = ({ children, to, className }: CustomLinkProps) => {
  return (
    <Link to={to} className={clsx(styles.link, className)}>
      {children}
    </Link>
  );
};

CustomLink.Nav = CustomNavLink;

export { CustomLink as Link };
