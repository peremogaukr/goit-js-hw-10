import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_2z22lowlOCZyYMQAgSgynQnGkK5b5t2ZGESuojagRki4t5VNeW93tSbAkel5mnZd';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';

function fetchBreeds() {
  return axios.get('/breeds').then(response => {
    return response.data;
  });
}

function fetchCatByBreed(breedId) {
  return axios.get(`/images/search?breed_ids=${breedId}`).then(resp => {
    return resp.data;
  });
}

module.exports = { fetchBreeds, fetchCatByBreed };