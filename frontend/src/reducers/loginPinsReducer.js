import { RECEIVE_PINS } from '../actions/actionDisplayLoginPins';

export const loginPinsReducer = (oldState = [], action) => {
  switch (action.type) {
    case RECEIVE_PINS:
      return action.pins;
    default:
      return oldState;
  }
};
