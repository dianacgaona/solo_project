import { RECEIVE_USER } from "../actions/actionSession";
import merge from "lodash/merge";

export const signUpUser = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_USER:
      return action.user;
    // break;
    default:
      return oldState;
  }
};
