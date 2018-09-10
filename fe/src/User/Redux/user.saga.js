import { call, put, takeLatest } from 'redux-saga/effects';
import * as actions from './user.actions';
import * as services from './user.services';

function* registerUser({ payload }) {
  try{
    const registerCall = yield call(services.registerUser, payload);
    const { data: { tempToken } } = registerCall;
    yield put(actions.saveUserSuccess(tempToken));  
  }catch(error){
    const { response: {data} } = error;
    yield put(actions.saveUserFailure(data));  
  }
}

function* validateUser({ tempToken }) {
  try{
    const validateCall = yield call(services.validateUser, tempToken);
    const { data } = validateCall;
    yield put(actions.validateMailSuccess(data));  
  }catch(error){
    const { response: {data} } = error;
    yield put(actions.validateMailFailure(data));  
  }
}

function* loginSaga(payload) {
  try{
    const validateCall = yield call(services.loginUser, payload.username, payload.password);
    const { data } = validateCall;
    if(data.tokens){
      const { tokens, __v, validation_status, ...otherData} = data;
      return yield put(actions.loginSuccess(tokens, otherData));  
    }
    return yield put(actions.loginFailue(data));  
  }catch(error){
    const { response: {data} } = error;
    yield put(actions.loginFailue(data));  
  }
}

export default function* rootSaga() {
    yield takeLatest(actions.SAVE_USER_PENDING, registerUser);
    yield takeLatest(actions.VALIDATE_USER_PENDING, validateUser);
    yield takeLatest(actions.LOGIN_PENDING, loginSaga);

}