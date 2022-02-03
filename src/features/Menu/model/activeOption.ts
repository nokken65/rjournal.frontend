import { createEvent, createStore } from 'effector';

const changeActiveOption = createEvent();

export const activeOption$ = createStore<string>('popular').on(
  changeActiveOption,
  (_, payload) => payload
);

export const events = {
  changeActiveOption,
};
