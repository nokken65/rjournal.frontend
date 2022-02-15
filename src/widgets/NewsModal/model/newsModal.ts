import { createEvent, createStore } from 'effector';
import { useStore } from 'effector-react';

const setActive = createEvent<string>();
const setInactive = createEvent();

export const active$ = createStore<string>('')
  .on(setActive, (_, payload) => payload)
  .on(setInactive, () => '');

const useActive = () => useStore(active$);

export const events = {
  setActive,
  setInactive,
};

export const selectors = {
  useActive,
};
