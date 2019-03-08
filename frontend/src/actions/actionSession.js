import * as session from '../utility/utilSession';
import Auth from '../utility/utilAuth.js';

export let RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user: user,
  };
};

export const newUser = user => dispatch => {
  return session.newUser(user).then(response => {
    return dispatch(receiveUser(response.data.user));
  });
};

export const loginUser = user => dispatch => {
  return session
    .loginUser(user)
    .then(response => {
      Auth.authenticateUser(response.data.email);
      return dispatch(receiveUser(response.data));
    })
    .catch(err => {
      Auth.deauthenticateUser();
    });
};

export const logoutUser = () => dispatch => {
  return session
    .logoutUser()
    .then(() => {
      Auth.deauthenticateUser();
      return dispatch(receiveUser(null));
    })
    .catch(err => {
      Auth.deauthenticateUser();
    });
};

export const checkAuthStatus = user => dispatch => {
  return session
    .isLoggedIn()
    .then(user => {
      // debugger;
      if (user.data.email === Auth.getToken()) {
        return dispatch(receiveUser(user.data));
      }
    })
    .catch(err => {
      Auth.deauthenticateUser();
    });
};
