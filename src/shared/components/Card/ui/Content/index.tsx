import { PropsWithChildren } from 'react';

import styles from './styles.module.scss';

type CardContentProps = PropsWithChildren<{}>;

export const CardContent = ({ children }: CardContentProps) => {
  return <div className={styles.cardContent}>{children}</div>;
};
