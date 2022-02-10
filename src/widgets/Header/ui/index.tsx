import React from 'react';

import { SearchNews } from '@/features/SearchNews';
import { Button, Icon, Layout, Logo } from '@/shared/components';
import { sidebarMenuModel } from '@/widgets/SidebarMenu';

import styles from './styles.module.scss';

export const Header: React.FC = () => {
  return (
    <Layout.Header>
      <Button
        icon={<Icon name='burger' size={18} />}
        className={styles.sidebarButton}
        onClick={() => sidebarMenuModel.events.toggleSidebarMenuHidden()}
      />
      <Logo />
      <SearchNews />
      <Button label='Новая запись' className={styles.writeButton} />

      <span style={{ marginRight: 'auto' }} />

      <Button
        icon={<Icon name='person' />}
        label='Войти'
        className={styles.loginButton}
      />
      {/* <Link
        to='write'
        className='ml-3 mr-auto flex h-10 items-center rounded-lg border-gray-50 bg-white-100 pl-3 pr-3 font-medium shadow-neo'
      >
        <Icon name='write' size={20} className='md:hidden' />
        <span className='hidden md:block'>Написать новость</span>
      </Link>
      <Link
        to='/login'
        className='mr-6 flex items-center font-medium hover:text-primary-100'
      >
        <Icon name='person' className='mr-3' />
        <span>Войти</span>
      </Link> */}
    </Layout.Header>
  );
};
