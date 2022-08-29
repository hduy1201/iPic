import { createReducer, on } from '@ngrx/store';
import { chooseState } from 'src/states/choose.state';
import * as chooseActions from 'src/actions/choose.action';

const initialState: chooseState = {
  step: 0,
  chose: [],
};

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
