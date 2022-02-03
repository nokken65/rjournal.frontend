import React from 'react';
import { Link } from 'react-router-dom';

import { SearchNews } from '@/features/SearchNews';
import { Button, Icon, Logo } from '@/shared/uiKit';
import { sidebarModel } from '@/widgets/Sidebar';

const Header: React.FC = () => {
  return (
    <header className='fixed top-0 left-0 z-50 flex items-center justify-between w-full h-16 shadow-sm bg-primary-50'>
      <Button
        onClick={() => sidebarModel.events.toggleSidebarHidden()}
        className='pl-6 pr-3 bg-transparent border-none'
      >
        <Icon name='burger' size={20} />
      </Button>
      <Logo />
      <SearchNews />
      <Link
        to='write'
        className='flex items-center h-10 pl-3 pr-3 ml-3 mr-auto font-medium rounded-lg border-gray-50 bg-white-100 shadow-neo'
      >
        <Icon name='write' size={20} className='md:hidden' />
        <span className='hidden md:block'>Написать новость</span>
      </Link>
      <Link
        to='/login'
        className='flex items-center mr-6 font-medium hover:text-primary-100'
      >
        <Icon name='person' className='mr-3' />
        <span>Войти</span>
      </Link>
    </header>
  );
};

export default Header;
