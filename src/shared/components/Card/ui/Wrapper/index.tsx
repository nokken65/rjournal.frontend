import { PropsWithChildren } from 'react';

import { CardContent } from '../Content';
import { CardFooter } from '../Footer';
import { CardHeader } from '../Header';
import styles from './styles.module.scss';

type CardProps = PropsWithChildren<{}>;

const Card = ({ children }: CardProps) => {
  return <article className={styles.card}>{children}</article>;
};

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;

export { Card };
