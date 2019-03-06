import { RECEIVE_ONE_USER } from '../actions/actionUsers';

export const userReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ONE_USER:
      return action.user;
    // break;
    default:
      return oldState;
  }
};
