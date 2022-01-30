import { createEvent, createStore, restore } from 'effector';

export const changeActiveOption = createEvent<string>();
export const activeOption$ = restore<string>(changeActiveOption, 'popular');

export const toggleMenuHidden = createEvent();
export const setMenuHidden = createEvent<boolean>();
export const menuHidden$ = createStore<boolean>(false)
  .on(toggleMenuHidden, (state, _) => !state)
  .on(setMenuHidden, (_, payload) => payload);

export const events = {
  toggleMenuHidden,
  setMenuHidden,
};
