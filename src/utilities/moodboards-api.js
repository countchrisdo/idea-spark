
import sendRequest from './send-request';

const BASE_URL = '/api/moodboards';

// Retrieve an unpaid order for the logged in user
export function getAll() {
  return sendRequest(`${BASE_URL}`);
}


export function addLocation(moodboardData) {
  return sendRequest(`${BASE_URL}/create`, 'POST', moodboardData, true);
}

export function getOne(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}