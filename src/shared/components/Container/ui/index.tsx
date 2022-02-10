import clsx from 'clsx';
import { PropsWithChildren } from 'react';

import styles from './styles.module.scss';

type ContainerProps = PropsWithChildren<{ className?: string | boolean }>;

export const Container = ({ children, className }: ContainerProps) => {
  return <div className={clsx(styles.container, className)}>{children}</div>;
};
