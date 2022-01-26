import { createDomain } from 'effector';

const input = createDomain();

export const updateInput = input.createEvent<string>();
export const input$ = input
  .createStore<string>('')
  .on(updateInput, (_, payload) => payload);
