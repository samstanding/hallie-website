import { WORK_ACTIONS } from '../actions/workActions';

export const sendWork = (state = null, action) => {
    switch(action.type) {
        case WORK_ACTIONS.SEND_WORK:
        return action.payload;
        default:
        return state;
    }
}

