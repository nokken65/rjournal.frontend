import { createEffect, createStore } from 'effector';

import type { News } from '@/shared/api';
import { rjournalApi } from '@/shared/api';

export const getNewsFx = createEffect(() => {
  if (news$.getState().length !== 0) {
    return null;
  }
  return rjournalApi.getNews();
});

export const news$ = createStore<News[]>([]).on(
  getNewsFx.doneData,
  (state, payload) => (state.length === 0 ? payload?.data.news : state)
);

export const newsIsLoading$ = getNewsFx.pending;
export const newsIsEmpty$ = news$.map((news) => news.length === 0);
