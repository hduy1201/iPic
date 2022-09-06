import { createReducer, on } from '@ngrx/store';
import { chooseState, saveInterestState } from 'src/states/choose.state';
import * as chooseActions from 'src/actions/choose.action';

const initialState: chooseState = {
  step: 0,
  chose: [],
};

const initialSaveInterestStateState: saveInterestState = {
  interests: [],
  error: '',
  isSuccess: false
}

export const chooseReducer = createReducer(
  initialState,
  on(chooseActions.addTopic, (state, action) => ({
    ...state,
    chose: [...state.chose, action.choice],
    step: state.step + 1,
  })),
  on(chooseActions.removeTopic, (state, action) => ({
    ...state,
    step: state.step - 1,
    chose: state.chose.filter((item) => item !== action.choice),
  }))
);

export const saveInterestsReducer = createReducer(
  initialSaveInterestStateState,
  on(chooseActions.saveInterests, (state, { interests }) => ({
    ...state,
    interests: interests,
    isSuccess: false,
    error: ''
  })),

  on(chooseActions.saveInterestsSuccess, (state) => ({
    ...state,
    interests: [],
    isSuccess: true,
    error: ''
  })),
  on(chooseActions.saveInterestsFailure, (state, { error }) => ({
    ...state,
    error: error,
    isSuccess: false,
    interests: []
  }))
);
