import { PropsWithChildren } from 'react';

import styles from './styles.module.scss';

type CardHeaderProps = PropsWithChildren<{}>;

export const CardHeader = ({ children }: CardHeaderProps) => {
  return <div className={styles.cardHeader}>{children}</div>;
};
