import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import { sendWork } from './workReducer';

const store = combineReducers({
    user,
    login,
    sendWork,
});

export default store;