import clsx from 'clsx';
import { PropsWithChildren } from 'react';

import { Menu } from '../Menu';
import { Subscription } from '../Subscription';
import styles from './styles.module.scss';

type ItemProps = PropsWithChildren<{ className?: string }>;

const Item = ({ children, className }: ItemProps) => {
  return <li className={clsx(styles.item, className)}>{children}</li>;
};

Item.Menu = Menu;
Item.Subscription = Subscription;

export { Item };
