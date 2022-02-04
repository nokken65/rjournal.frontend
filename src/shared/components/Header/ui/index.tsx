import { HTMLAttributes, PropsWithChildren } from 'react';

import styles from './styles.module.scss';

type HeaderProps = HTMLAttributes<HTMLElement> & PropsWithChildren<{}>;

export const Header = ({ children }: HeaderProps) => {
  return <header className={styles.header}>{children}</header>;
};
