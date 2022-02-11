import clsx from 'clsx';
import { Link, LinkProps } from 'react-router-dom';

import { CustomNavLink } from '../NavLink';
import styles from './styles.module.scss';

type CustomLinkProps = LinkProps & { className?: string; label?: string };

const CustomLink = ({ to, className }: CustomLinkProps) => {
  return <Link to={to} className={clsx(styles.link, className)} />;
};

CustomLink.Nav = CustomNavLink;

export { CustomLink as Link };
