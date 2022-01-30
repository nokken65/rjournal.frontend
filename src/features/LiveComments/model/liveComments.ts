import { createEvent, createStore } from 'effector';

export const toggleLiveCommentsHidden = createEvent();
export const setLiveCommentsHidden = createEvent<boolean>();
export const liveCommentsHidden$ = createStore<boolean>(false)
  .on(toggleLiveCommentsHidden, (state, _) => !state)
  .on(setLiveCommentsHidden, (_, payload) => payload);

export const events = {
  toggleLiveCommentsHidden,
  setLiveCommentsHidden,
};
