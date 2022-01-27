import React, { lazy, Suspense } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import { LiveComments } from '@/features/LiveComments/ui';
import { PageLoader } from '@/shared/uiKit/Loader';
import Header from '@/widgets/Header';
import { Menu } from '@/widgets/Menu';

const MainPage = lazy(() => import('./Main'));
const ProfilePage = lazy(() => import('./Profile'));
const SettingsPage = lazy(() => import('./Settings'));
const WriteNewsPage = lazy(() => import('./WriteNews'));

const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='*' element={<MainLayout />}>
          <Route
            index={true}
            element={
              <Suspense fallback={<PageLoader />}>
                <MainPage />
              </Suspense>
            }
          />
          <Route path='profile'>
            <Route
              path=':id'
              element={
                <Suspense fallback={<PageLoader />}>
                  <ProfilePage />
                </Suspense>
              }
            />
            <Route
              path='settings'
              element={
                <Suspense fallback={<PageLoader />}>
                  <SettingsPage />
                </Suspense>
              }
            />
          </Route>
        </Route>
        <Route path='write' element={<WriteLayout />}>
          <Route
            index={true}
            element={
              <Suspense fallback={<PageLoader />}>
                <WriteNewsPage />
              </Suspense>
            }
          />
        </Route>
      </Route>
    </Routes>
  );
};

const Layout: React.FC = () => {
  return (
    <div className='overflow-hidden w-full bg-white-bg'>
      <Header />
      <div className='mt-16 w-full h-full flex justify-between'>
        <Menu />
        <Outlet />
      </div>
    </div>
  );
};

const MainLayout: React.FC = () => (
  <>
    <div className='ml-56 mr-56 w-full flex justify-center items-center'>
      <Outlet />
    </div>
    <LiveComments />
  </>
);

const WriteLayout: React.FC = () => (
  <div className='w-full flex justify-center items-center'>
    <Outlet />
  </div>
);

export default Routing;
