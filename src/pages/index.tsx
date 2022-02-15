import React, { lazy, Suspense } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import { Container, Layout } from '@/shared/components';
import { Header } from '@/widgets/Header';
import { SidebarComments } from '@/widgets/SidebarComments';
import { SidebarMenu } from '@/widgets/SidebarMenu';
import { WriteNewsModal } from '@/widgets/WriteNewsModal';

const MainPage = lazy(() => import('./Main'));
const ProfilePage = lazy(() => import('./Profile'));
const SettingsPage = lazy(() => import('./Settings'));

const Routing: React.FC = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/'>
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
      </Route>
    </Routes>
  );
};

const MainLayout = () => (
  <Layout>
    <Header />
    <SidebarMenu />
    <Layout.Content>
      <Container>
        <Outlet />
      </Container>
    </Layout.Content>
    <SidebarComments />
    <WriteNewsModal />
  </Layout>
);

export default Routing;
