import React from 'react';

import burger from '/assets/icons/burger.svg';
import person from '/assets/icons/person.svg';
import { SearchNews } from '@/features/SearchNews';
import { Button, ButtonLink, HeaderWrapper, Logo } from '@/shared/uiKit';
import { menuModel } from '@/widgets/Menu';

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Button
        onClick={() => menuModel.toggleMenuHidden()}
        className='flex items-center h-full pl-6 pr-6'
      >
        <img className='w-6' src={burger} alt='burger' />
      </Button>
      <Logo />
      <SearchNews />
      <ButtonLink
        to='write'
        className='p-2 pl-3 pr-3 ml-3 mr-auto font-medium border rounded-xl border-gray-opacity-50 bg-white-100 hover:shadow-md'
      >
        Новая запись
      </ButtonLink>
      <ButtonLink
        to='/login'
        className='p-2 pl-3 pr-3 mr-6 font-medium rounded-xl hover:text-primary-100'
      >
        <img className='w-6 mr-3' src={person} alt='burger' />
        Войти
      </ButtonLink>
    </HeaderWrapper>
  );
};

export default Header;
