import React from 'react';

import { NewsFeed } from '@/features/NewsFeed';

const MainPage: React.FC = () => {
  console.log(new Date().toISOString());

  return (
    <div className='flex flex-col items-center justify-between w-full h-full mt-8'>
      <h2>This is main page</h2>
      <NewsFeed />
    </div>
  );
};

export default MainPage;
