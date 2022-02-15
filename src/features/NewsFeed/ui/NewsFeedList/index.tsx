import { list } from '@effector/reflect';

import { NewsCard, newsModel } from '@/entities/News';
import { List } from '@/shared/components';

type NewsFeedListProps = {
  news: import('@/shared/api').News;
};

const NewsFeedListView = ({ news }: NewsFeedListProps) => {
  return (
    <List.Item>
      <NewsCard data={news} />
    </List.Item>
  );
};

export const NewsFeedList = list({
  view: NewsFeedListView,
  source: newsModel.news$,
  mapItem: {
    news: (news) => news,
  },
  getKey: (news) => news.id,
});
