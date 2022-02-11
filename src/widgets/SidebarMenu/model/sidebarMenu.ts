import { createEvent, createStore } from 'effector';

const toggleSidebarMenuHidden = createEvent();
const setSidebarMenuHidden = createEvent<boolean>();

export const sidebarMenuHidden$ = createStore<boolean>(false)
  .on(toggleSidebarMenuHidden, (state, _) => !state)
  .on(setSidebarMenuHidden, (_, payload) => payload);

export const events = {
  toggleSidebarMenuHidden,
  setSidebarMenuHidden,
};
