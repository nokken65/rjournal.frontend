import { createEvent, createStore } from 'effector';

export const toggleLiveCommentsHidden = createEvent();
export const liveCommentsHidden$ = createStore<boolean>(false).on(
  toggleLiveCommentsHidden,
  (state, _) => !state
);
