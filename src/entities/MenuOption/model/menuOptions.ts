import { createEffect, createStore } from 'effector';

import type { Option } from '@/shared/api';
import { rjournalApi } from '@/shared/api';

export const getOptionsFx = createEffect(() => {
  return rjournalApi.getOptions();
});

export const options$ = createStore<Option[]>([]).on(
  getOptionsFx.doneData,
  (_, payload) => payload.data.options
);

export const optionsIsLoading$ = getOptionsFx.pending;
export const optionsIsEmpty$ = options$.map(
  (comments) => comments.length === 0
);
