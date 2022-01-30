import React from 'react';

import { WaveLoader } from '..';

export const PageLoader: React.FC = () => {
  return (
    <WaveLoader className='justify-self-center fixed top-16 left-0 w-full h-0.5' />
  );
};
