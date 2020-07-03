import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './Utils';
import axios from 'axios';

export const PRACTICE_SUCCESS = 'PRACTICE_SUCCESS';
export const practiceSuccess = practice => ({
  type: PRACTICE_SUCCESS,
  practice
});

export const PRACTICE_ERROR = 'PRACTICE_ERROR';
export const practiceError = error => ({
  type: PRACTICE_ERROR,
  error
});

export const fetchPracticeData = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return (
    axios
      // This is where the data is hosted
      .get(`${API_BASE_URL}/practice`, {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      })
      // Once we get a response and store data, let's change the loading state
      .then(res => {
        this.setState({ dates: res.data });
      })
      .then(res => normalizeResponseErrors(res))
      .then(res => res.json())
      .then(({ date }) => dispatch(practiceSuccess(date)))
      .catch(err => {
        dispatch(practiceError(err));
      })
  );
};
