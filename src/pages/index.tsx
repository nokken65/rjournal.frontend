import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { LiveComments } from '@/features/LiveComments/ui';
import { AsideMenuWrapper } from '@/shared/uiKit';
import { PageLoader } from '@/shared/uiKit/Loader';
import Header from '@/widgets/Header';
import { Menu } from '@/widgets/Menu';

const MainPage = lazy(() => import('./Main'));
const NewsPage = lazy(() => import('./News'));
const ProfilePage = lazy(() => import('./Profile'));
const SettingsPage = lazy(() => import('./Settings'));
// const WriteNewsPage = lazy(() => import('./WriteNews'));

const MainRoutes = () => (
  <>
    <Routes>
      <Route path='/'>
        <Route index={true} element={<MainPage />} />
        <Route path='/news/:id' element={<NewsPage />} />
        <Route path='/profile/:id' element={<ProfilePage />} />
        <Route path='/profile/settings' element={<SettingsPage />} />
      </Route>
    </Routes>
  </>
);

const MemoMainRoutes = React.memo(MainRoutes);

const Routing: React.FC = () => {
  return (
    <div className='overflow-hidden w-full bg-white-bg'>
      <Header />
      <div className='mt-16 w-full h-full flex justify-between'>
        <Menu />
        <div className='w-full flex justify-center items-center'>
          <Suspense fallback={<PageLoader />}>
            <MemoMainRoutes />
          </Suspense>
        </div>
        <LiveComments />
      </div>
    </div>
  );
};

export default Routing;
