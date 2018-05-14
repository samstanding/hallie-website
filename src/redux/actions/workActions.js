export const WORK_ACTIONS = {
    SEND_WORK: 'SEND_WORK',
    SEND_WORK_DONE: 'SEND_WORK_DONE',
    SEND_WORK_FAILED: 'SEND_WORK_FAILED'
}

export const triggerPost = (work) => ({
    type: WORK_ACTIONS.SEND_WORK,
    payload: {
        work,
    },
});