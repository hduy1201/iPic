import { createAction, props } from '@ngrx/store';

export const addTopic = createAction(
  '[NewComer] Add Topic',
  props<{ choice: string }>()
);

export const removeTopic = createAction(
  '[NewComer] Remove Topic',
  props<{ choice: string }>()
);
