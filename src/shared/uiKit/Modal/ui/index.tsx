import clsx from 'clsx';
import React, { SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/shared/uiKit';

type ModalProps = React.ComponentProps<'div'> &
  React.PropsWithChildren<{ className?: string }>;

export const Modal: React.FC<ModalProps> = ({ children, className }) => {
  const navigate = useNavigate();
  const close = (event: SyntheticEvent) => {
    event.stopPropagation();
    navigate(-1);
  };

  return (
    <div
      className='fixed top-0 left-0 w-full h-full bg-black-opacity-40 z-50'
      onClick={close}
    >
      <div
        className={clsx(
          'fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 p-6 bg-white-100 rounded-lg',
          className
        )}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
        <Button className='absolute top-2 right-2' onClick={close}>
          x
        </Button>
      </div>
    </div>
  );
};
