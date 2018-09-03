import * as actions from './user.actions';

export default (state={}, action)=>{
    switch (action.type) {
      case actions.SAVE_USER_SUCCESS:
        return {...state, registerData: { tempToken: action.tempToken } };
      case actions.SAVE_USER_FAILURE:
        return {...state, registerError: action.error};
      case actions.VALIDATE_USER_SUCCESS:
        return {...state, validateData: action.userData};
      case actions.VALIDATE_USER_FAILURE:
        return {...state, validateError: action.error};
      default:
        return state;
    }
  }