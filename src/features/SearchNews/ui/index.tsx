import React from 'react';

import { Input } from '@/shared/uiKit';

export const SearchNews: React.FC = () => {
  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className='w-80 flex bg-search rounded-xl pl-3 pr-3 border-2 border-transparent transition-colors hover:bg-white hover:border-2 hover:border-accent'
    >
      <Input
        className='border-none flex p-2 bg-transparent placeholder:text-textGray'
        type='text'
        name='searchNews'
        placeholder='Поиск'
      />
    </form>
  );
};
