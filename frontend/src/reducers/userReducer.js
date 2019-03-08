import { RECEIVE_ONE_USER } from '../actions/actionUsers';
import merge from 'lodash/merge';

export const userReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ONE_USER:
      return merge({}, oldState, { [action.user.id]: action.user });
    // break;
    default:
      return oldState;
  }
};
