import clsx from 'clsx';

type IconProps = {
  name: string;
  size?: number;
  className?: string;
};

export const Icon = ({ name, size = 24, className }: IconProps) => {
  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className={clsx(
        'flex h-full w-full items-center justify-center',
        className
      )}
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
