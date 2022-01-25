import { createEvent, restore } from 'effector';

export const updateInput = createEvent<string>();
export const input$ = restore<string>(updateInput, '');
