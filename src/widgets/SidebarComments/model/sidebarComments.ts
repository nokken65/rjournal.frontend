import { createEvent, createStore } from 'effector';

const toggleSidebarCommentsHidden = createEvent();
const setSidebarCommentsHidden = createEvent<boolean>();

export const sidebarCommentsHidden$ = createStore<boolean>(false)
  .on(toggleSidebarCommentsHidden, (state, _) => !state)
  .on(setSidebarCommentsHidden, (_, payload) => payload);

export const events = {
  toggleSidebarCommentsHidden,
  setSidebarCommentsHidden,
};
