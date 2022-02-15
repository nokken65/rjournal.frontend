import clsx from 'clsx';
import { HTMLAttributes, PropsWithChildren } from 'react';

import { CardContent } from '../Content';
import { CardFooter } from '../Footer';
import { CardHeader } from '../Header';
import styles from './styles.module.scss';

type CardProps = HTMLAttributes<HTMLDivElement> &
  PropsWithChildren<{ className?: string }>;

const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div className={clsx(styles.card, className)} {...props}>
      {children}
    </div>
  );
};

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;

export { Card };
