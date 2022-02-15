import { reflect } from '@effector/reflect';

import { Card } from '@/shared/components';
import { Button, List } from '@/shared/components';

import { newsModalModel } from '..';
import { active$ } from '../model';
import styles from './styles.module.scss';

type NewsModalProps = {
  active: string;
};

const NewsModalView = ({ active }: NewsModalProps) => {
  return (
    <>
      {active.length !== 0 && (
        <Card
          className={styles.wrapper}
          onBlur={() => newsModalModel.events.setInactive()}
        >
          <List className={styles.list}>
            <List.Item>
              <Button label='Пожаловаться' className={styles.buttonItem} />
            </List.Item>
            <List.Item>
              <Button label='Скрыть' className={styles.buttonItem} />
            </List.Item>
          </List>
        </Card>
      )}
    </>
  );
};

export const NewsModal = reflect({
  view: NewsModalView,
  bind: {
    active: active$,
  },
});
