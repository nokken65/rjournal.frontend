import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageLoader } from '@/shared/uiKit/Loader';
import MainLayout from '@/widgets/MainLayout';

const MainPage = lazy(() => import('./Main'));
const NewsPage = lazy(() => import('./News'));
const ProfilePage = lazy(() => import('./Profile'));
const SettingsPage = lazy(() => import('./Settings'));

const Routing: React.FC = () => {
  return (
    <MainLayout>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path='/'>
            <Route index={true} element={<MainPage />} />
          </Route>
          <Route path='/news'>
            <Route path=':id' element={<NewsPage />} />
          </Route>
          <Route path='/profile'>
            <Route path=':id' element={<ProfilePage />} />
            <Route path='settings' element={<SettingsPage />} />
          </Route>
        </Routes>
      </Suspense>
    </MainLayout>
  );
};

export default Routing;
