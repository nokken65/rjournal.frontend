import clsx from 'clsx';
import React, { SyntheticEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import close from '/assets/icons/close.svg';
import expand from '/assets/icons/expand.svg';
import { Button } from '@/shared/uiKit';

type ModalProps = React.ComponentProps<'div'> &
  React.PropsWithChildren<{ className?: string }>;

export const Modal: React.FC<ModalProps> = ({ children, className }) => {
  const navigate = useNavigate();

  const back = (event: SyntheticEvent) => {
    event.stopPropagation();
    navigate(-1);
  };

  return (
    <div
      className='fixed top-0 left-0 z-50 h-full w-full bg-black-opacity-40'
      onClick={back}
    >
      <div
        className={clsx(
          'fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 rounded-lg bg-white-100 p-48',
          className
        )}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
        <div className='absolute top-2 right-2 flex'>
          <Link to='/write' className='mr-4 w-5'>
            <img src={expand} alt='close' />
          </Link>
          <Button className='w-6' onClick={back}>
            <img src={close} alt='close' />
          </Button>
        </div>
      </div>
    </div>
  );
};
