
export const SAVE_USER_PENDING = '[USER][SAVE] pending';
export const SAVE_USER_SUCCESS = '[USER][SAVE] success';
export const SAVE_USER_FAILURE = '[USER][SAVE] failure';

export const VALIDATE_USER_PENDING = '[USER][VALIDATE] pending';
export const VALIDATE_USER_SUCCESS = '[USER][VALIDATE] success';
export const VALIDATE_USER_FAILURE = '[USER][VALIDATE] failure';

export const LOGIN_PENDING = '[USER][LOGIN] pending';
export const LOGIN_SUCCESS = '[USER][LOGIN] success';
export const LOGIN_FAILURE = '[USER][LOGIN] failure';

export const saveUserPending = payload => ({
    type: SAVE_USER_PENDING,
    payload
});

export const saveUserSuccess = tempToken => ({
    type: SAVE_USER_SUCCESS,
    tempToken
});

export const saveUserFailure = error => ({
    type: SAVE_USER_FAILURE,
    error
});

export const validateMailPending = tempToken => ({
    type: VALIDATE_USER_PENDING,
    tempToken
});

export const validateMailSuccess = userData => ({
    type: VALIDATE_USER_SUCCESS,
    userData
});

export const validateMailFailure = error => ({
    type: VALIDATE_USER_FAILURE,
    error
});

export const loginPending = (username, password) => ({
    type: LOGIN_PENDING,
    username,
    password
});

export const loginSuccess = (tokens, data) => {
  const userInfo = {token: tokens[0].token, ...data};
  return {
    type: LOGIN_SUCCESS,
    userInfo,
 }
};

export const loginFailue = error => ({
    type: LOGIN_FAILURE,
    error
});