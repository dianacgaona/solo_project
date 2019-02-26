import { RECEIVE_USER } from "../actions/actionSession";
// import merge from "lodash/merge";

export const sessionReducer = (oldState = { currentUser: null }, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_USER:
      return { currentUser: action.user };
    // break;
    default:
      return oldState;
  }
};
