import { createEvent, createStore } from 'effector';

const toggleSidebarHidden = createEvent();
const setSidebarHidden = createEvent<boolean>();

export const sidebarHidden$ = createStore<boolean>(false)
  .on(toggleSidebarHidden, (state, _) => !state)
  .on(setSidebarHidden, (_, payload) => payload);

export const events = {
  toggleSidebarHidden,
  setSidebarHidden,
};
