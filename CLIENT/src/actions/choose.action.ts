import { createAction, props } from '@ngrx/store';

export const addTopic = createAction(
  '[NewComer] Add Topic',
  props<{ choice: string }>()
);

export const removeTopic = createAction(
  '[NewComer] Remove Topic',
  props<{ choice: string }>()
);

export const saveInterests = createAction(
  '[NewComer] Save Interests',
  props<{ interests: string[] }>()
);
export const saveInterestsSuccess = createAction(
  '[NewComer] Save Interests Success'
);
export const saveInterestsFailure = createAction(
  '[NewComer] Save Interests Failure',
  props<{ error: string }>()
);
