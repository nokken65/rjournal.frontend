import { list, reflect, variant } from '@effector/reflect';
import clsx from 'clsx';
import { combine } from 'effector';
import React from 'react';

import { CommentCompact, commentModel } from '@/entities/Comment';
import { Button } from '@/shared/uiKit';

import { liveCommentsHidden$, toggleLiveCommentsHidden } from '../model';

type LiveCommentsProps = {
  hidden: boolean;
  toggleHidden: () => void;
};

const LiveCommentsView: React.FC<LiveCommentsProps> = ({
  hidden,
  toggleHidden,
}) => {
  return (
    <div
      className={clsx(
        'fixed top-16 right-0 p-5 transition-transform duration-100',
        hidden && 'transform translate-x-64'
      )}
    >
      <Button
        className={clsx(
          'font-medium text-xl transition-transform duration-200 delay-100',
          hidden && 'transform -translate-x-28 translate-y-12 -rotate-90 '
        )}
        action={toggleHidden}
      >
        Комментарии
      </Button>
      <ul className={clsx('flex flex-col min-w-menu max-w-menu')}>
        <LiveCommentsContent />
      </ul>
    </div>
  );
};

export const LiveComments = reflect({
  view: LiveCommentsView,
  bind: {
    hidden: liveCommentsHidden$,
    toggleHidden: toggleLiveCommentsHidden,
  },
});

// LIST
type LiveCommentsListProps = {
  comment: import('@/shared/api').Comment;
};

const LiveCommentsListView: React.FC<LiveCommentsListProps> = ({ comment }) => {
  return (
    <li className='list-none mt-3 mb-3'>
      <CommentCompact data={comment} />
    </li>
  );
};

const LiveCommentsList = list({
  view: LiveCommentsListView,
  source: commentModel.comments$,
  mapItem: {
    comment: (comment) => comment,
  },
});
//

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
