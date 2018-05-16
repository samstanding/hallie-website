import axios from 'axios';

export function sendWork(payload) {
    const body = ({
        work: payload.work,
    });

    const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };

      return axios.post('/api/work/', body, config)
      .then(response => response.data)
      .catch((error) => {
          throw error.response || error;
      });
}

export function sendCaroPhoto (payload) {
    const body = ({
        carouselPhoto: payload.carouselPhoto,
    }); 

    const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
    }

    return axios.post('/api/work/carousel', body, config)
    .then(response=>response.data)
    .catch((error) => {
        throw error.message || error;
    })
}

export function getCaroPhotos () {
    const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
    }

    return axios.get('/api/work/carousel', config)
    .then(response => response.data)
    .catch((error) => {
        throw error.message || error;
    })
}