import { reflect } from '@effector/reflect';
import clsx from 'clsx';
import React from 'react';

import { Icon } from '@/shared/uiKit';

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
      className='flex h-10 w-80 items-center rounded-lg border-transparent bg-gray-opacity-10 pl-3 pr-3 shadow-neo transition-colors focus-within:bg-white-100 focus-within:shadow-outline focus-within:shadow-primary-opacity-70 hover:bg-white-100'
    >
      <Icon name='search' size={16} className='text-gray-100' />
      <input
        name='searchNews'
        type='text'
        value={input}
        placeholder='Поиск'
        onChange={(event) => update(event.target.value)}
        className={clsx(
          'flex w-full border-none bg-transparent pl-2 outline-none placeholder:text-gray-100',
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
