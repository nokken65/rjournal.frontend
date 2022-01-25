import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const MainPage = lazy(() => import('./Main'));
const NewsPage = lazy(() => import('./News'));
const ProfilePage = lazy(() => import('./Profile'));
const SettingsPage = lazy(() => import('./Settings'));

const Routing: React.FC = () => {
  return (
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
  );
};

export default Routing;
