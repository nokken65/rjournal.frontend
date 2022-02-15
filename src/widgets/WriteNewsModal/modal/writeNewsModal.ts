import { createEvent, createStore } from 'effector';
import { useStore } from 'effector-react';

const setActive = createEvent();
const setInactive = createEvent();
export const active$ = createStore<boolean>(true)
  .on(setActive, () => true)
  .on(setInactive, () => false);
const useActive = () => useStore(active$);

const toggleExpanded = createEvent();
export const expanded$ = createStore<boolean>(true).on(
  toggleExpanded,
  (state) => !state
);
const useExpanded = () => useStore(expanded$);

export const events = {
  setActive,
  setInactive,
  toggleExpanded,
};

export const selectors = {
  useActive,
  useExpanded,
};
