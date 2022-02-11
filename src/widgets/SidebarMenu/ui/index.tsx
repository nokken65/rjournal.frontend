import { reflect } from '@effector/reflect';

import { Menu } from '@/features/Menu';
import { Container, Layout } from '@/shared/components';
import { sidebarMenuModel } from '@/widgets/SidebarMenu';

type SidebarMenuProps = { hidden: boolean };

const SidebarMenuView = ({ hidden }: SidebarMenuProps) => {
  return (
    <Layout.Sider hidden={hidden} position='left'>
      <Container>
        <Menu />
      </Container>
    </Layout.Sider>
  );
};

export const SidebarMenu = reflect({
  view: SidebarMenuView,
  bind: {
    hidden: sidebarMenuModel.sidebarMenuHidden$,
  },
});
