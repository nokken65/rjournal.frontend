import { SearchOutlined } from '@ant-design/icons';
import { reflect } from '@effector/reflect';
import { Input } from 'antd';
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
  const onSearch = (value: string) => console.log(value);

  return (
    // <form
    //   onSubmit={(event) => event.preventDefault()}
    //   className='border-transparent flex h-10 w-80 items-center rounded-lg bg-gray-opacity-10 pl-3 pr-3 shadow-neo transition-colors focus-within:bg-white-100 focus-within:shadow-outline focus-within:shadow-primary-opacity-70 hover:bg-white-100'
    // >
    //   <Icon name='search' size={16} className='text-gray-100' />
    //   <input
    //     name='searchNews'
    //     type='text'
    //     value={input}
    //     placeholder='Поиск'
    //     onChange={(event) => update(event.target.value)}
    //     className={clsx(
    //       'flex w-full border-none bg-transparent pl-2 outline-none placeholder:text-gray-100',
    //       className
    //     )}
    //   />
    // </form>
    <Input.Search
      type='search'
      prefix={<SearchOutlined />}
      placeholder='input search text'
      onSearch={onSearch}
      enterButton='Se'
    />
  );
};

export const SearchNews = reflect({
  view: SearchNewsView,
  bind: {
    input: input$,
    update: updateInput,
  },
});
