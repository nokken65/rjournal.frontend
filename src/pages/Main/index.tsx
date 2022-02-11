import React from 'react';

import { NewsFeed } from '@/features/NewsFeed';

const MainPage: React.FC = () => {
  console.log(new Date().toISOString());

  return <NewsFeed />;
};

export default MainPage;
