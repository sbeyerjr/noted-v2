import { PRACTICE_SUCCESS, PRACTICE_ERROR } from '../actions/GetRequest';

const initialState = {
  date: '',
  timePracticed: '',
  scales: '',
  otherMusic: ''
};

export default function reducer(state = initialState, action) {
  if (action.type === PRACTICE_SUCCESS) {
    return Object.assign({}, state, {
      date: action.date,
      timePracticed: action.timePracticed,
      scales: action.scales,
      otherMusic: action.otherMusic,
      error: null
    });
  } else if (action.type === PRACTICE_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  }
  return state;
}
