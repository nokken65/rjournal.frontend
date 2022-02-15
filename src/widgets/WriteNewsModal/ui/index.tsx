import { reflect } from '@effector/reflect';
import clsx from 'clsx';
import { PropsWithChildren } from 'react';

import { Button, Card, Container, Icon } from '@/shared/components';

import { writeNewsModalModel } from '..';
import { active$, expanded$ } from '../modal';
import styles from './styles.module.scss';

type WriteNewsModalProps = PropsWithChildren<{
  active: boolean;
  expanded: boolean;
  onClose: () => void;
  onExpand: () => void;
}>;

const WriteNewsModalView = ({
  active,
  expanded,
  onClose,
  onExpand,
}: WriteNewsModalProps) => {
  return (
    <>
      {active && (
        <div
          className={clsx(expanded ? styles.expandWrapper : styles.wrapper)}
          onClick={onClose}
        >
          <Card
            className={clsx(expanded ? styles.expandCard : styles.card)}
            onClick={(ev) => ev.stopPropagation()}
          >
            <Container>
              <Card.Header className={styles.header}>
                <Button
                  icon={<Icon name='expand' size={20} />}
                  onClick={onExpand}
                />
                <Button icon={<Icon name='close' />} onClick={onClose} />
              </Card.Header>
              <Card.Content className={styles.body}>
                <p style={{ maxWidth: '56rem' }}>modal</p>
              </Card.Content>
              <Card.Footer className={styles.footer}>
                <Button label='Опубликовать' className={styles.publishBtn} />
              </Card.Footer>
            </Container>
          </Card>
        </div>
      )}
    </>
  );
};

export const WriteNewsModal = reflect({
  view: WriteNewsModalView,
  bind: {
    active: active$,
    expanded: expanded$,
    onClose: writeNewsModalModel.events.setInactive,
    onExpand: writeNewsModalModel.events.toggleExpanded,
  },
});
