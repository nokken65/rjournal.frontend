import { createEvent, createStore } from 'effector';

const openModal = createEvent();
const closeModal = createEvent();

const openModalUnboxed = openModal.filterMap((ref) => {
  if (ref.current) return ref.current;
});
const closeModalUnboxed = closeModal.filterMap((ref) => {
  if (ref.current) return ref.current;
});

openModalUnboxed.watch((modal) => modal.classList.add('is-open'));
closeModalUnboxed.watch((modal) => modal.classList.remove('is-open'));
