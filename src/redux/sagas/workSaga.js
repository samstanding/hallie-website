import { call, put, takeEvery } from 'redux-saga/effects';
import { WORK_ACTIONS } from '../actions/workActions';
import { sendWork } from '../requests/workRequests';

function* sendSaga (action) {
    console.log('in work saga');
    try{
        yield call(sendWork, action.payload);
        yield put({type:WORK_ACTIONS.SEND_WORK_DONE});
    }
    catch(error) {
        yield put({type:WORK_ACTIONS.SEND_WORK_DONE});
        yield put({
            type:WORK_ACTIONS.SEND_WORK_FAILED,
            message: error.message,
        });
    }
}

function* workSaga() {
    yield takeEvery ('SEND_WORK', sendSaga );
}

export default workSaga;