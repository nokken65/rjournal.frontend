import { createEffect, createStore } from 'effector';

import type { Option } from '@/shared/api';
import { rjournalApi } from '@/shared/api';

const getOptionsFx = createEffect(() => {
  return rjournalApi.getOptions();
});

export const options$ = createStore<Option[]>([]).on(
  getOptionsFx.doneData,
  (_, payload) => payload.data.options
);

const optionsIsLoading$ = getOptionsFx.pending;
const optionsIsEmpty$ = options$.map((comments) => comments.length === 0);

export const effects = {
  getOptionsFx,
};

export const selectors = {
  optionsIsEmpty$,
  optionsIsLoading$,
};
