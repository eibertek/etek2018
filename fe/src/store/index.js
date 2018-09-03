import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import initialStore from './initialStore';
import rootSaga from './rootSaga';
import reducer from './reducer';
import userReducer from '../User/Redux/user.reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
      reducer,
      user: userReducer,
  }),
  initialStore,
  composeEnhancers(applyMiddleware(thunk, sagaMiddleware))
  );

sagaMiddleware.run(rootSaga)


export default store;