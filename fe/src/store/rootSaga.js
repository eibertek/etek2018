import { fork } from 'redux-saga/effects';
import userSaga from '../User/Redux/user.saga';


export default function* rootSaga() {
  yield fork(userSaga);
}