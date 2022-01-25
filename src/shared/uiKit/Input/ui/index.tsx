import { reflect } from '@effector/reflect';
import clsx from 'clsx';
import React from 'react';

import { input$, updateInput } from '../model';

type InputProps = React.ComponentProps<'input'> & {
  input: string;
  update: (input: string) => void;
  className?: string;
};

const InputView: React.FC<InputProps> = ({
  input,
  update,
  className,
  ...props
}) => {
  return (
    <input
      {...props}
      value={input}
      onChange={(event) => update(event.target.value)}
      className={clsx('outline-none', className)}
    />
  );
};

export const Input = reflect({
  view: InputView,
  bind: {
    input: input$,
    update: updateInput,
  },
});
