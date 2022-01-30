import React from 'react';

type HeaderWrapperProps = React.PropsWithChildren<{}>;

export const HeaderWrapper: React.FC<HeaderWrapperProps> = ({ children }) => {
  return (
    <header className='z-50 fixed top-0 left-0 w-full flex justify-between items-center h-16 bg-primary-50 shadow-sm'>
      {children}
    </header>
  );
};
