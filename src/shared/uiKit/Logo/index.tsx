import React from 'react';
import { Link } from 'react-router-dom';

import { Icon } from '@/shared/uiKit';

export const Logo: React.FC = () => {
  return (
    <Link to='/' className='ml-3 mr-6'>
      <Icon name='logo' size={32} />
    </Link>
  );
};
