import sendRequest from './send-request';

const BASE_URL = '/api/moodboards';

// Retrieve
export function getAll() {
  return sendRequest(`${BASE_URL}`);
}

export function addMoodboard(moodboardData) {
 
  return sendRequest(`${BASE_URL}/create`, 'POST', moodboardData);
}

export function getOne(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}

export async function deleteOne(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
}

