import * as pinsApi from '../utility/utilPins';

export let RECEIVE_PINS = 'RECEIVE_PINS';
export let RECEIVE_ONE_PIN = 'RECEIVE_ONE_PIN';

export const receivedPins = pins => {
  // debugger;
  return {
    type: RECEIVE_PINS,
    pins: pins,
  };
};

export const receiveOnePin = pin => {
  return {
    type: RECEIVE_ONE_PIN,
    pin: pin,
  };
};

export const fetchAllPins = () => dispatch => {
  return pinsApi
    .fetchAllPins()
    .then(res => {
      // debugger;
      return dispatch(receivedPins(res.data.pins));
    })
    .catch(err => {
      console.log(err);
    });
};

export const fetchOnePin = id => dispatch => {
  return pinsApi
    .fetchOnePin(id)
    .then(res => {
      return dispatch(receiveOnePin(res.data.pin));
    })
    .catch(err => {
      console.log(err);
    });
};
