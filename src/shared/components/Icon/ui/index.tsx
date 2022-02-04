import clsx from 'clsx';

import styles from './styles.module.scss';

type IconProps = {
  name: string;
  size?: number;
};

export const Icon = ({ name, size = 24 }: IconProps) => {
  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className={clsx(styles.icon)}
      style={{ width: size, height: size }}
    >
      <use
        href={`/assets/icons/${name}.svg#${name}`}
        width={size}
        height={size}
      />
    </svg>
  );
};
