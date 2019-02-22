// import * as pinsApi from '../utility/utilPins';
export let TOGGLE = "TOGGLE";
export let RECEIVE_PINS = "RECEIVE_PINS";

export const toggleForms = () => {
  return {
    type: TOGGLE
  };
};

// export const receivedPins = pins => {
//   return {
//     type: RECEIVE_PINS,
//     pins: pins
//   };
// };
