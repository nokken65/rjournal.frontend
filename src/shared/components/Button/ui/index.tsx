import clsx from 'clsx';
import { HTMLAttributes } from 'react';

import styles from './styles.module.scss';

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  icon?: JSX.Element;
  label?: string;
  className?: string;
};

export const Button = ({ icon, label, className, ...props }: ButtonProps) => {
  return (
    <button className={clsx(styles.button, className)} {...props}>
      {icon}
      {label && <p>{label}</p>}
    </button>
  );
};
