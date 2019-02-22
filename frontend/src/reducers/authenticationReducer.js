import { TOGGLE } from '../actions/actionAuthentication';

export const authenticationReducer = (oldState = false, action) => {
  switch (action.type) {
    case TOGGLE:
      return !oldState;
    default:
      return oldState;
  }
};
