import { reflect, variant } from '@effector/reflect';
import clsx from 'clsx';
import { combine } from 'effector';
import React from 'react';

import { commentModel } from '@/entities/Comment';

import { liveCommentsHidden$, toggleLiveCommentsHidden } from '../../model';
import { LiveCommentsList } from '../LiveCommentsList';

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
        'fixed right-0 z-40 flex h-full min-w-menu max-w-menu flex-col items-start justify-start bg-white-bg p-5 transition-transform duration-200',
        hidden && 'translate-x-64 transform'
      )}
    >
      {/* <Button
        className={clsx(
          'border-none bg-transparent text-xl font-medium transition-transform duration-200',
          hidden && '-translate-x-40 translate-y-20 -rotate-90  transform '
        )}
        onClick={toggleHidden}
      >
        <span>Комментарии</span>
        <Icon
          name='arrow'
          size={12}
          className={clsx(
            'ml-3 mt-1 rotate-90 transform transition-transform duration-200',
            hidden && 'tranform rotate-0'
          )}
        />
      </Button> */}
      <ul className='mt-6 flex flex-col'>
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
