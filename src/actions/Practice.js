import { SubmissionError } from 'redux-form';
import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './Utils';

export const newPractice = practice => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  const success = 'Success!';
  return fetch(`${API_BASE_URL}/practice`, {
    method: 'POST',
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(practice)
  })
    .then(res => normalizeResponseErrors(res))
    .then(console.log(success))
    .then(res => res.json())
    .catch(err => {
      const { reason, message, location } = err;
      if (reason === 'ValidationError') {
        // Convert ValidationErrors into SubmissionErrors for Redux Form
        return Promise.reject(
          new SubmissionError({
            [location]: message
          })
        );
      }
    });
};
