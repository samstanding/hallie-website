import { call, put, takeEvery } from 'redux-saga/effects';
import { WORK_ACTIONS } from '../actions/workActions';
import { sendWork, sendCaroPhoto, getCaroPhotos } from '../requests/workRequests';

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

function* sendCaroSaga (action) {
    try{
        yield call(sendCaroPhoto, action.payload);
        yield put({type:WORK_ACTIONS.SEND_CAROUSEL_DONE});
    }
    catch(error) {
        yield put({type:WORK_ACTIONS.SEND_CAROUSEL_DONE});
        yield put({
            type:WORK_ACTIONS.SEND_CAROUSEL_FAILED,
            message: error.message,
        })
    }
}

function* getCaroSaga () {
    try{
        yield put ({type: WORK_ACTIONS.GET_CAROUSEL_PHOTOS_START});
        const photos = yield call(getCaroPhotos);
        yield put ({
            type:WORK_ACTIONS.GET_CAROUSEL_PHOTOS_DONE,
            photos,
        })
    } 
    catch (error) {
        yield put({type:WORK_ACTIONS.GET_CAROUSEL_PHOTOS_DONE});
        yield put({
            type:WORK_ACTIONS.GET_CAROUSEL_PHOTOS_FAILED,
            message: error.message
        });
    }
}

function* workSaga() {
    yield takeEvery ('SEND_WORK', sendSaga );
    yield takeEvery ('SEND_CAROUSEL_PHOTO', sendCaroSaga);
    yield takeEvery ('GET_CAROUSEL_PHOTOS', getCaroSaga);
}

export default workSaga;