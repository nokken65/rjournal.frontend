import { createEffect, createStore } from 'effector';

import type { Post } from '@/shared/api';
import { rjournalApi } from '@/shared/api';

export const getPostsFx = createEffect(() => {
  if (posts$.getState().length !== 0) {
    return null;
  }
  return rjournalApi.getPosts();
});

export const posts$ = createStore<Post[]>([]).on(
  getPostsFx.doneData,
  (state, payload) => (state.length === 0 ? payload?.data.posts : state)
);

export const postsIsLoading$ = getPostsFx.pending;
export const postsIsEmpty$ = posts$.map((posts) => posts.length === 0);
