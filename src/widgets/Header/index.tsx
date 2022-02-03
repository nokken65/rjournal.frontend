import React from 'react';
import { Link } from 'react-router-dom';

import { SearchNews } from '@/features/SearchNews';
import { Button, Icon, Logo } from '@/shared/uiKit';
import { sidebarModel } from '@/widgets/Sidebar';

const Header: React.FC = () => {
  return (
    <header className='fixed top-0 left-0 z-50 flex h-16 w-full items-center justify-between bg-primary-50 shadow-sm'>
      <Button
        onClick={() => sidebarModel.events.toggleSidebarHidden()}
        className='border-none bg-transparent pl-6 pr-3'
      >
        <Icon name='burger' size={20} />
      </Button>
      <Logo />
      <SearchNews />
      <Link
        to='write'
        className='ml-3 mr-auto flex h-10 items-center rounded-lg border-gray-50 bg-white-100 pl-3 pr-3 font-medium shadow-neo'
      >
        <Icon name='write' size={20} className='md:hidden' />
        <span className='hidden md:block'>Написать новость</span>
      </Link>
      <Link
        to='/login'
        className='mr-6 flex items-center font-medium hover:text-primary-100'
      >
        <Icon name='person' className='mr-3' />
        <span>Войти</span>
      </Link>
    </header>
  );
};

export default Header;
