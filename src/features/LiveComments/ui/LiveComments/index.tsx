import { variant } from '@effector/reflect';
import { combine } from 'effector';

import { commentModel } from '@/entities/Comment';

import { LiveCommentsList } from '../LiveCommentsList';
import styles from './styles.module.scss';

export const LiveComments = () => {
  return (
    <ul className={styles.list}>
      <LiveCommentsContent />
    </ul>
  );
};

const LiveCommentsContent = variant({
  source: combine(
    {
      isLoading: commentModel.commentsIsLoading$,
      isEmpty: commentModel.commentsIsEmpty$,
    },
    ({ isLoading, isEmpty }) => {
      if (isLoading) return 'loading';
      if (isEmpty) return 'empty';
      return 'ready';
    }
  ),
  cases: {
    loading: () => <span>Loading...</span>,
    empty: () => <span>No comments :(</span>,
    ready: LiveCommentsList,
  },
  hooks: {
    mounted: commentModel.getCommentsFx.prepend(() => {}),
  },
});
