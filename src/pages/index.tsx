import React, { lazy, Suspense, useEffect } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import { LiveComments } from '@/features/LiveComments/ui';
import { Menu } from '@/features/Menu';
import { PageLoader } from '@/shared/uiKit/Loader';
import Header from '@/widgets/Header';
import { Sidebar, sidebarModel } from '@/widgets/Sidebar';

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
    <div className='w-full overflow-hidden bg-white-bg'>
      <Header />
      <div className='mt-16 flex h-full w-full justify-between'>
        <Sidebar>
          <Menu />
        </Sidebar>
        <Outlet />
      </div>
    </div>
  );
};

const MainLayout: React.FC = () => (
  <>
    <div className='flex w-full items-center justify-center lg:ml-56 xl:mr-56'>
      <Outlet />
    </div>
    <LiveComments />
  </>
);

const WriteLayout: React.FC = () => {
  useEffect(() => {
    sidebarModel.events.setSidebarHidden(true);
  }, []);

  return (
    <div className='flex w-full items-center justify-center'>
      <Outlet />
    </div>
  );
};

export default Routing;
