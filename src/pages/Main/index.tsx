import React from 'react';

import { NewsFeed } from '@/features/NewsFeed';

const MainPage: React.FC = () => {
  console.log(new Date().toISOString());

  return (
    <div className='mt-8 w-full h-full flex flex-col justify-between items-center'>
      <NewsFeed />
    </div>
  );
};

export default MainPage;
