import * as usersApi from "../utility/utilUsers";

export let RECEIVE_ONE_USER = "RECEIVE_ONE_USER";

export const receiveOneUser = user => {
  return {
    type: RECEIVE_ONE_USER,
    user: user
  };
};

export const fetchOneUser = id => dispatch => {
  return usersApi
    .fetchOneUser(id)
    .then(res => {
      return dispatch(receiveOneUser(res.data.user));
    })
    .catch(error => {
      console.log(error);
    });
};
