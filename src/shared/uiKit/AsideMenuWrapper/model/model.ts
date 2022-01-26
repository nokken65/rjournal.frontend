import { createEvent, createStore } from 'effector';
import { useStore } from 'effector-react';

const toggleAsideMenuHidden = createEvent();
const setAsideMenuHidden = createEvent<boolean>();
export const asideMenuHidden$ = createStore<boolean>(false)
  .on(toggleAsideMenuHidden, (state, _) => !state)
  .on(setAsideMenuHidden, (_, payload) => payload);

const useAsideMenuHidden = () => useStore(asideMenuHidden$);

export const events = {
  toggleAsideMenuHidden,
  setAsideMenuHidden,
};

export const selectors = {
  useAsideMenuHidden,
};
