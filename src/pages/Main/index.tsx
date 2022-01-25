import React from 'react';

import MenuList from '@/entities/MenuList/ui';
import {
  AsideMenuWrapper,
  Button,
  ButtonLink,
  HeaderWrapper,
  Logo,
} from '@/shared/uiKit';
import { asideMenuModel } from '@/shared/uiKit/AsideMenuWrapper';

const MainPage: React.FC = () => {
  return (
    <div className='mt-16'>
      <HeaderWrapper>
        <Button
          action={() => asideMenuModel.events.toggleAsideMenuHidden()}
          classNames='mr-6'
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
        <Logo classNames='mr-6' />
        <ButtonLink to='/newPost' classNames='mr-auto'>
          Новая запись
        </ButtonLink>
      </HeaderWrapper>
      <div className='flex'>
        <AsideMenuWrapper>
          <MenuList />
        </AsideMenuWrapper>
        <h1>Main</h1>
      </div>
    </div>
  );
};

export default MainPage;
