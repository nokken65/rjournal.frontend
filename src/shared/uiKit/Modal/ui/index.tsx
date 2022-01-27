import clsx from 'clsx';
import React, { SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import close from '/assets/icons/close.svg';
import expand from '/assets/icons/expand.svg';
import { Button } from '@/shared/uiKit';

import { ButtonLink } from '../../ButtonLink';

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
      className='fixed top-0 left-0 w-full h-full bg-black-opacity-40 z-50'
      onClick={back}
    >
      <div
        className={clsx(
          'fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 p-48 bg-white-100 rounded-lg',
          className
        )}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
        <div className='absolute top-2 right-2 flex'>
          <ButtonLink to='/write' className='w-5 mr-4'>
            <img src={expand} alt='close' />
          </ButtonLink>
          <Button className='w-6' onClick={back}>
            <img src={close} alt='close' />
          </Button>
        </div>
      </div>
    </div>
  );
};
