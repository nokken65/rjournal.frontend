import React from 'react';

import { LiveComments } from '@/features/LiveComments/ui';
import { AsideMenuWrapper } from '@/shared/uiKit';
import Header from '@/widgets/Header';
import { Menu } from '@/widgets/Menu';

type MainLayoutProps = React.PropsWithChildren<{}>;

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className='overflow-hidden w-full bg-white-bg'>
      <Header />
      <div className='w-full h-full flex justify-between'>
        <AsideMenuWrapper>
          <Menu />
        </AsideMenuWrapper>
        <div className='mt-16 w-full flex justify-center items-center'>
          {children}
        </div>
        <div className='mt-16'>
          <LiveComments />
        </div>
        {/* <AsideMenuWrapper position='right'>
          <Menu />
        </AsideMenuWrapper> */}
      </div>
    </div>
  );
};

export default MainLayout;
