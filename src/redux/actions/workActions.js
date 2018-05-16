export const WORK_ACTIONS = {
    SEND_WORK: 'SEND_WORK',
    SEND_WORK_DONE: 'SEND_WORK_DONE',
    SEND_WORK_FAILED: 'SEND_WORK_FAILED',
    SEND_CAROUSEL_PHOTO: 'SEND_CAROUSEL_PHOTO',
    SEND_CAROUSEL_DONE: 'SEND_CAROUSEL_DONE',
    SEND_CAROUSEL_FAILED: 'SEND_CAROUSEL_FAILED',
    GET_CAROUSEL_PHOTOS: 'GET_CAROUSEL_PHOTOS',
    GET_CAROUSEL_PHOTOS_START: 'GET_CAROUSEL_PHOTOS_START',
    GET_CAROUSEL_PHOTOS_DONE: 'GET_CAROUSEL_PHOTOS_DONE',
    GET_CAROUSEL_PHOTOS_FAILED: 'GET_CAROUSEL_PHOTOS_FAILED',
}

export const triggerPost = (work) => ({
    type: WORK_ACTIONS.SEND_WORK,
    payload: {
        work,
    },
});

export const triggerCaroPost = (carouselPhoto) => ({
    type: WORK_ACTIONS.SEND_CAROUSEL_PHOTO,
    payload: {
        carouselPhoto,
    }
})

export const fetchCaroPhotos = () => ({
    type: WORK_ACTIONS.GET_CAROUSEL_PHOTOS,
});