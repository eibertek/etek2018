import * as actions from './user.actions';
export const initialState = {
  loginStatus: null,
  error: null,
  userInfo: {},
}

export default (state=initialState, action)=>{
    switch (action.type) {
      case actions.SAVE_USER_SUCCESS:
        return {...state, registerData: { tempToken: action.tempToken } };
      case actions.SAVE_USER_FAILURE:
        return {...state, registerError: action.error};
      case actions.VALIDATE_USER_SUCCESS:
        return {...state, validateData: action.userData};
      case actions.VALIDATE_USER_FAILURE:
        return {...state, validateError: action.error};
      case actions.VALIDATE_USER_FAILURE:
        return {...state, validateError: action.error};
      case actions.LOGIN_PENDING:
        return {...state, loginStatus:'PENDING'};
      case actions.LOGIN_SUCCESS:
        return {...state, loginStatus:'SUCCESS', info: action.userInfo};
      case actions.LOGIN_FAILURE:
        return {...state, loginStatus:'PENDING', error: action.error};        
      default:
        return state;
    }
  }