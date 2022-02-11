import { list } from '@effector/reflect';

import { PostCard, postModel } from '@/entities/Post';

type NewsFeedListProps = {
  post: import('@/shared/api').Post;
};

const NewsFeedListView = ({ post }: NewsFeedListProps) => {
  return (
    <li style={{ marginBottom: '2rem' }}>
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
