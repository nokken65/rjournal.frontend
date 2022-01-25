import { createEvent, createStore } from 'effector';
import { useStore } from 'effector-react';

const toggleAsideMenuHidden = createEvent();
export const asideMenuHidden$ = createStore<boolean>(false).on(
  toggleAsideMenuHidden,
  (state, _) => !state
);

const useAsideMenuHidden = () => useStore(asideMenuHidden$);

export const events = {
  toggleAsideMenuHidden,
};

export const selectors = {
  useAsideMenuHidden,
};
