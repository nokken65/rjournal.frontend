import React, { lazy, Suspense } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import { Layout } from '@/shared/components';
import { Header } from '@/widgets/Header';

const MainPage = lazy(() => import('./Main'));
const ProfilePage = lazy(() => import('./Profile'));
const SettingsPage = lazy(() => import('./Settings'));

const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route
          index={true}
          element={
            <Suspense fallback={'Loading'}>
              <MainPage />
            </Suspense>
          }
        />
        <Route path='profile'>
          <Route
            path=':id'
            element={
              <Suspense fallback={'Loading'}>
                <ProfilePage />
              </Suspense>
            }
          />
          <Route
            path='settings'
            element={
              <Suspense fallback={'Loading'}>
                <SettingsPage />
              </Suspense>
            }
          />
        </Route>
      </Route>
    </Routes>
  );
};

const MainLayout = () => (
  <Layout style={{ marginTop: '3rem' }}>
    <Layout.Header>
      <Header />
    </Layout.Header>
    <Layout.Sider>LeftSider</Layout.Sider>
    <Layout.Content>
      <Outlet />
    </Layout.Content>
    <Layout.Sider>RightSider</Layout.Sider>
  </Layout>
);

export default Routing;
