import { Icon, Link } from '@/shared/components';

type MenuItemProps = {
  data: import('@/shared/api').Option;
};

export const MenuItem = ({ data }: MenuItemProps) => {
  return (
    <Link.Nav to={data.href}>
      <Icon name={data.icon} size={20} />
      <p>{data.label}</p>
    </Link.Nav>
  );
};
