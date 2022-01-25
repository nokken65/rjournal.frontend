import React from 'react';

type HeaderWrapperProps = React.PropsWithChildren<{}>;

const HeaderWrapper: React.FC<HeaderWrapperProps> = ({ children }) => {
  return (
    <header className='pl-6 pr-6 fixed top-0 left-0 w-full flex justify-between items-center h-16 bg-headerBg shadow-md'>
      {children}
    </header>
  );
};

export default HeaderWrapper;
