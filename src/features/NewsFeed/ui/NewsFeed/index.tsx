import { variant } from '@effector/reflect';
import { combine } from 'effector';

import { newsModel } from '@/entities/News';
import { List } from '@/shared/components';

import { NewsFeedList } from '../NewsFeedList';
import styles from './styles.module.scss';

export const NewsFeed = () => {
  return (
    <List className={styles.newsFeed}>
      <NewsFeedContent />
    </List>
  );
};

const NewsFeedContent = variant({
  source: combine(
    {
      isLoading: newsModel.newsIsLoading$,
      isEmpty: newsModel.newsIsEmpty$,
    },
    ({ isLoading, isEmpty }) => {
      if (isLoading) return 'loading';
      if (isEmpty) return 'empty';
      return 'ready';
    }
  ),
  cases: {
    loading: () => <span>Loading...</span>,
    empty: () => <span>No posts :(</span>,
    ready: NewsFeedList,
  },
  hooks: {
    mounted: newsModel.getNewsFx.prepend(() => {}),
  },
});
