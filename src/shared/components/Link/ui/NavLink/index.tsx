import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

import styles from './styles.module.scss';

type CustomNavLinkProps = NavLinkProps &
  PropsWithChildren<{
    className?: string;
  }>;

const CustomNavLink = ({ children, to, className }: CustomNavLinkProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        clsx(styles.navLink, isActive && styles.active, className)
      }
    >
      {children}
    </NavLink>
  );
};

export { CustomNavLink };
