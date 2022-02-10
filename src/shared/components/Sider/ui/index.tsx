import clsx from 'clsx';
import { HTMLAttributes, PropsWithChildren } from 'react';

import styles from './styles.module.scss';

type SiderProps = HTMLAttributes<HTMLElement> &
  PropsWithChildren<{
    hidden?: boolean;
    position?: 'left' | 'right';
    width?: string;
    className?: string;
  }>;

export const Sider = ({
  children,
  hidden,
  position = 'left',
  width = '14rem',
  className,
}: SiderProps) => {
  return (
    <aside
      style={{ width: !hidden ? width : 0 }}
      className={clsx(
        styles.sider,
        hidden && (position === 'left' ? styles.hideLeft : styles.hideRight),
        className
      )}
    >
      {children}
    </aside>
  );
};
