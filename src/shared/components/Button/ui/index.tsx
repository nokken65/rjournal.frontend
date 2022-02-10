import clsx from 'clsx';
import { HTMLAttributes } from 'react';

import styles from './styles.module.scss';

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  icon?: JSX.Element;
  label?: string;
  className?: string;
  onClick?: (event: MouseEvent) => void;
};

export const Button = ({ icon, label, className, onClick }: ButtonProps) => {
  return (
    <button className={clsx(styles.button, className)} onClick={onClick}>
      {icon}
      {label && <p>{label}</p>}
    </button>
  );
};
