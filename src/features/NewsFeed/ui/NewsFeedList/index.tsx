import { list } from '@effector/reflect';
import React from 'react';

import { PostCard, postModel } from '@/entities/Post';

type NewsFeedListProps = {
  post: import('@/shared/api').Post;
};

const NewsFeedListView: React.FC<NewsFeedListProps> = ({ post }) => {
  return (
    <li className='m-5 mt-0 list-none'>
      <PostCard data={post} />
    </li>
  );
};

export const NewsFeedList = list({
  view: NewsFeedListView,
  source: postModel.posts$,
  mapItem: {
    post: (post) => post,
  },
  getKey: (post) => post.id,
});
