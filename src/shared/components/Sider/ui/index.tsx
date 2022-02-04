import { HTMLAttributes, PropsWithChildren } from 'react';

import styles from './styles.module.scss';

type SiderProps = HTMLAttributes<HTMLElement> & PropsWithChildren<{}>;

export const Sider = ({ children }: SiderProps) => {
  return <aside className={styles.sider}>{children}</aside>;
};
