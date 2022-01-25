import React from 'react';

import { SearchNews } from '@/features/SearchNews';
import { Button, ButtonLink, HeaderWrapper, Logo } from '@/shared/uiKit';
import { asideMenuModel } from '@/shared/uiKit/AsideMenuWrapper';

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Button
        action={() => asideMenuModel.events.toggleAsideMenuHidden()}
        classNames='pl-6 pr-6'
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
        to='/newPost'
        classNames='ml-3 p-2 pl-3 pr-3 rounded-xl mr-auto bg-white border hover:shadow-md'
      >
        Новая запись
      </ButtonLink>
    </HeaderWrapper>
  );
};

export default Header;
