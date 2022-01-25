import { createEffect, createEvent, createStore, restore } from 'effector';

import type { Option } from '@/shared/api';
import { rjournalApi } from '@/shared/api';

export const changeActiveOption = createEvent<string>();
export const activeOption$ = restore<string>(changeActiveOption, 'popular');

export const getOptionsFx = createEffect(() => {
  return rjournalApi.getOptions();
});
export const options$ = createStore<Option[]>([]).on(
  getOptionsFx.doneData,
  (_, payload) => payload.data.options
);
