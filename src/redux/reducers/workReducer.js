import { WORK_ACTIONS } from '../actions/workActions';

export const sendWork = (state = null, action) => {
    switch(action.type) {
        case WORK_ACTIONS.SEND_WORK:
        return action.payload;
        default:
        return state;
    }
}

export const sendCaroPhoto = (state = null, action) => {
    switch(action.type) {
        case WORK_ACTIONS.SEND_CAROUSEL_PHOTO:
        return action.payload;
        default:
        return state;
    }
}

export const getCaroPhotos = (state = null, action) => {
    switch(action.type) {
        case WORK_ACTIONS.GET_CAROUSEL_PHOTOS_DONE:
        console.log(action.photos);
        return action.photos || state;
        default: 
        return state;
    }
}
