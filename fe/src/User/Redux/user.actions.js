
export const SAVE_USER_PENDING = '';
export const SAVE_USER_SUCCESS = '';
export const SAVE_USER_FAILURE = '';

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

