import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import workSaga from './workSaga';


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    workSaga(),
    // watchIncrementAsync()
  ]);
}