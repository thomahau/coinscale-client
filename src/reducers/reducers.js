// import * as actions from '../actions';

const initialState = {
  auth: {
    // authToken: ,
    currentUser: 'John Doe'
  },
  MIN_TIMESTAMP: 1483228800,
  MAX_TIMESTAMP: 1527811200
};

export const coinscaleReducer = (state = initialState, action) => {
  console.log(action);
  return state;
};
