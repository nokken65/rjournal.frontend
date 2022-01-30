import { reflect } from '@effector/reflect';
import clsx from 'clsx';
import React from 'react';

import { input$, updateInput } from '../model';

type SearchNewsProps = {
  input: string;
  update: (input: string) => void;
  className?: string;
};

export const SearchNewsView: React.FC<SearchNewsProps> = ({
  input,
  update,
  className,
}) => {
  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className='w-80 flex bg-gray-opacity-10 rounded-lg pl-3 pr-3 border-2 border-transparent transition-colors hover:bg-white-100 hover:border-2 hover:shadow-outline hover:shadow-primary-opacity-70'
    >
      <input
        name='searchNews'
        type='text'
        value={input}
        placeholder='Поиск'
        onChange={(event) => update(event.target.value)}
        className={clsx(
          'outline-none w-full border-none flex p-2 bg-transparent placeholder:text-gray-100',
          className
        )}
      />
    </form>
  );
};

export const SearchNews = reflect({
  view: SearchNewsView,
  bind: {
    input: input$,
    update: updateInput,
  },
});
