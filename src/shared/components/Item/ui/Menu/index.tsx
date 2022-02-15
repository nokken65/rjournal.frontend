import { Icon, Link } from '@/shared/components';

import styles from './styles.module.scss';

type MenuProps = {
  to: string;
  label: string;
  icon: string;
};

export const Menu = ({ to, label, icon }: MenuProps) => {
  return (
    <li className={styles.menuItem}>
      <Link.Nav to={to}>
        <Icon name={icon} size={20} />
        <p>{label}</p>
      </Link.Nav>
    </li>
  );
};
