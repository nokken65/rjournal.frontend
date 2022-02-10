import { reflect } from '@effector/reflect';
import clsx from 'clsx';

import { LiveComments } from '@/features/LiveComments';
import { Button, Container, Icon, Layout } from '@/shared/components';
import { sidebarCommentsModel } from '@/widgets/SidebarComments';

import styles from './styles.module.scss';

type SidebarCommentsProps = { hidden: boolean };

const SidebarCommentsView = ({ hidden }: SidebarCommentsProps) => {
  return (
    <Layout.Sider hidden={hidden} position='right' width='20rem'>
      <Button
        label='Комментарии'
        icon={<Icon name='arrow' size={12} />}
        className={clsx(styles.toggleButton, hidden && styles.hidden)}
        onClick={() =>
          sidebarCommentsModel.events.toggleSidebarCommentsHidden()
        }
      />
      <Container className={styles.fixHeight}>
        <LiveComments />
      </Container>
    </Layout.Sider>
  );
};

export const SidebarComments = reflect({
  view: SidebarCommentsView,
  bind: {
    hidden: sidebarCommentsModel.sidebarCommentsHidden$,
  },
});
