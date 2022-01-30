import { createEffect, createStore } from 'effector';

import type { Comment } from '@/shared/api';
import { rjournalApi } from '@/shared/api';

export const getCommentsFx = createEffect(() => {
  return rjournalApi.getComments();
});

export const comments$ = createStore<Comment[]>([]).on(
  getCommentsFx.doneData,
  (_, payload) => payload.data.comments
);

export const commentsIsLoading$ = getCommentsFx.pending;
export const commentsIsEmpty$ = comments$.map(
  (comments) => comments.length === 0
);
