import clsx from 'clsx';
import { PropsWithChildren } from 'react';

import styles from './styles.module.scss';

type CardContentProps = PropsWithChildren<{ className?: string }>;

export const CardContent = ({ children, className }: CardContentProps) => {
  return <div className={clsx(styles.cardContent, className)}>{children}</div>;
};
