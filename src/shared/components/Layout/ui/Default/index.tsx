import { HTMLAttributes, PropsWithChildren } from 'react';

import { Content } from '@/shared/components/Content';
import { Header } from '@/shared/components/Header';
import { Sider } from '@/shared/components/Sider';

import styles from './styles.module.scss';

type LayoutProps = HTMLAttributes<HTMLDivElement> & PropsWithChildren<{}>;

const Layout = ({ children, ...props }: LayoutProps) => {
  return (
    <div className={styles.layout} {...props}>
      {children}
    </div>
  );
};

Layout.Header = Header;
Layout.Content = Content;
Layout.Sider = Sider;

export { Layout };
