import { RECEIVE_PINS } from "../actions/actionPins";
// import merge from "lodash/merge";

export const pinsReducer = (oldState = [], action) => {
  // debugger;
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_PINS:
      return normalize(action.pins);
    // break;
    default:
      return oldState;
  }
};

function normalize(arr) {
  let obj = {};
  arr.forEach(el => {
    obj[el.id] = el;
  });
  return obj;
}
