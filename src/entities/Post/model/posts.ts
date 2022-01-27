import { createEffect, createStore } from 'effector';

import type { Post } from '@/shared/api';
import { rjournalApi } from '@/shared/api';

export const getPostsFx = createEffect(() => {
  return rjournalApi.getPosts();
});

export const posts$ = createStore<Post[]>([]).on(
  getPostsFx.doneData,
  (_, payload) => payload.data.posts
);

export const postsIsLoading$ = getPostsFx.pending;
export const postsIsEmpty$ = posts$.map((posts) => posts.length === 0);
