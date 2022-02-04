import React from 'react';
import { Link } from 'react-router-dom';

import { Icon } from '@/shared/components';

import styles from './styles.module.scss';

export const Logo: React.FC = () => {
  return (
    <Link to='/' className={styles.logo}>
      <Icon name='logo' size={32} />
    </Link>
  );
};
