import React from 'react';

import { SearchNews } from '@/features/SearchNews';
import { Button, ButtonLink, HeaderWrapper, Logo } from '@/shared/uiKit';
import { menuModel } from '@/widgets/Menu';

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Button
        onClick={() => menuModel.toggleMenuHidden()}
        className='pl-6 pr-6'
      >
        <svg
          className='h-full'
          width='20'
          height='20'
          viewBox='0 0 64 64'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0 8H64V0H0V8ZM0 64H64V56H0V64ZM0 36H64V28H0V36Z'
            fill='black'
          />
        </svg>
      </Button>
      <Logo classNames='pl-3 pr-3 mr-3' />
      <SearchNews />
      <ButtonLink
        to='/write'
        className='ml-3 p-2 pl-3 pr-3 rounded-xl mr-auto bg-white-100 border font-medium border-gray-opacity-50 hover:shadow-md'
      >
        Новая запись
      </ButtonLink>
      <ButtonLink
        to='/login'
        className='p-2 pl-3 pr-3 rounded-xl mr-3 font-medium hover:text-primary-100'
      >
        Войти
      </ButtonLink>
    </HeaderWrapper>
  );
};

export default Header;
