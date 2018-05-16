import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import { sendWork, sendCaroPhoto, getCaroPhotos } from './workReducer';

const store = combineReducers({
    user,
    login,
    sendWork,
    sendCaroPhoto,
    getCaroPhotos,
    
});

export default store;