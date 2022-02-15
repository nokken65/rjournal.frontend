import clsx from 'clsx';
import { PropsWithChildren } from 'react';

import styles from './styles.module.scss';

type CardFooterProps = PropsWithChildren<{ className?: string }>;

export const CardFooter = ({ children, className }: CardFooterProps) => {
  return <div className={clsx(styles.cardFooter, className)}>{children}</div>;
};
