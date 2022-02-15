import { variant } from '@effector/reflect';
import { combine } from 'effector';

import { commentModel } from '@/entities/Comment';
import { List } from '@/shared/components';

import { LiveCommentsList } from '../LiveCommentsList';

export const LiveComments = () => {
  return (
    <List>
      <LiveCommentsContent />
    </List>
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
