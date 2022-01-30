import { variant } from '@effector/reflect';
import { combine } from 'effector';
import React from 'react';

import { postModel } from '@/entities/Post';

import { NewsFeedList } from '../NewsFeedList';

export const NewsFeed: React.FC = () => {
  return (
    <ul className='flex flex-col'>
      <NewsFeedContent />
    </ul>
  );
};

const NewsFeedContent = variant({
  source: combine(
    {
      isLoading: postModel.postsIsLoading$,
      isEmpty: postModel.postsIsEmpty$,
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
    mounted: postModel.getPostsFx.prepend(() => {}),
  },
});
