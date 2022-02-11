import { PropsWithChildren } from 'react';

import styles from './styles.module.scss';

type CardFooterProps = PropsWithChildren<{}>;

export const CardFooter = ({ children }: CardFooterProps) => {
  return <div className={styles.cardFooter}>{children}</div>;
};
