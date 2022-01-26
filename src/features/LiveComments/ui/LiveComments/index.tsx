import { reflect, variant } from '@effector/reflect';
import arrow from 'assets/icons/arrow.svg';
import clsx from 'clsx';
import { combine } from 'effector';
import React from 'react';

import { commentModel } from '@/entities/Comment';
import { Button } from '@/shared/uiKit';

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
        'flex flex-col justify-start items-start p-5 min-w-menu max-w-menu transition-transform duration-200',
        hidden && 'fixed right-0 transform translate-x-64'
      )}
    >
      <Button
        className={clsx(
          'font-medium text-xl transition-transform duration-200',
          hidden && 'transform -translate-x-40 translate-y-20  -rotate-90 '
        )}
        onClick={toggleHidden}
      >
        Комментарии
        <img
          className={clsx(
            'h-3 w-3 ml-3 mt-1 transform rotate-90 transition-transform duration-500',
            hidden && 'tranform rotate-0'
          )}
          src={arrow}
          alt='arrow'
        />
      </Button>
      <ul className='flex flex-col mt-6'>
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
