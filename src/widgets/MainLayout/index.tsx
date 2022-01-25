import React from 'react';

import { AsideMenuWrapper } from '@/shared/uiKit';
import Header from '@/widgets/Header';
import { MenuList } from '@/widgets/MenuList';

type MainLayoutProps = React.PropsWithChildren<{}>;

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className='w-full'>
      <Header />
      <div className='w-full h-full flex justify-between'>
        <AsideMenuWrapper>
          <MenuList />
        </AsideMenuWrapper>
        <div className='mt-16 w-full flex justify-center items-center'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
