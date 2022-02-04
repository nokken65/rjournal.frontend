import React from 'react';

import styles from './styles.module.scss';

type ContentProps = React.PropsWithChildren<{}>;

export const Content = ({ children }: ContentProps) => {
  return <main className={styles.content}>{children}</main>;
};
