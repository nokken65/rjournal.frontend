import clsx from 'clsx';
import { PropsWithChildren } from 'react';

import { Item } from '../../Item';
import styles from './styles.module.scss';

type ListProps = PropsWithChildren<{ className?: string }>;

const List = ({ children, className }: ListProps) => {
  return <ul className={clsx(styles.list, className)}>{children}</ul>;
};

List.Item = Item;

export { List };
