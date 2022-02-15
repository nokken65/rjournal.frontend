import clsx from 'clsx';
import { PropsWithChildren } from 'react';

import styles from './styles.module.scss';

type CardHeaderProps = PropsWithChildren<{ className?: string }>;

export const CardHeader = ({ children, className }: CardHeaderProps) => {
  return <div className={clsx(styles.cardHeader, className)}>{children}</div>;
};
