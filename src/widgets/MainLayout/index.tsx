import React from 'react';

import MenuList from '@/features/MenuList/ui';
import {
  AsideMenuWrapper,
  Button,
  ButtonLink,
  HeaderWrapper,
  Logo,
} from '@/shared/uiKit';
import { asideMenuModel } from '@/shared/uiKit/AsideMenuWrapper';

type MainLayoutProps = React.PropsWithChildren<{}>;

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className='mt-16 w-full'>
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
        <ButtonLink to='/newPost' classNames='mr-auto'>
          Новая запись
        </ButtonLink>
      </HeaderWrapper>
      <div className='w-full h-full flex justify-between'>
        <AsideMenuWrapper>
          <MenuList />
        </AsideMenuWrapper>
        <div className='w-full flex justify-center items-center'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
