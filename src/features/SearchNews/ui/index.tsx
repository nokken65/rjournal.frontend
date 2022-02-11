import { reflect } from '@effector/reflect';

import { Icon } from '@/shared/components';

import { input$, updateInput } from '../model';
import styles from './styles.module.scss';

type SearchNewsProps = {
  input: string;
  update: (input: string) => void;
};

export const SearchNewsView: React.FC<SearchNewsProps> = ({
  input,
  update,
}) => {
  return (
    <form
      className={styles.wrapper}
      onSubmit={(event) => event.preventDefault()}
    >
      <label htmlFor='search'>
        <Icon name='search' size={14} />
      </label>
      <input
        className={styles.input}
        type='search'
        id='search'
        value={input}
        placeholder='Поиск'
        onChange={(event) => update(event.target.value)}
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
