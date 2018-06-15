import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

// TODO: CRUD operations action.type === ADD etc ?

export const CHANGE_DATE = 'CHANGE_DATE';
export const changeDate = date => ({
  type: CHANGE_DATE,
  date
});

export const PRICE_DATA_REQUEST = 'PRICE_DATA_REQUEST';
export const priceDataRequest = () => ({
  type: PRICE_DATA_REQUEST
});

export const PRICE_DATA_SUCCESS = 'PRICE_DATA_SUCCESS';
export const priceDataSuccess = data => ({
  type: PRICE_DATA_SUCCESS,
  data
});

export const PRICE_DATA_ERROR = 'PRICE_DATA_ERROR';
export const priceDataError = error => ({
  type: PRICE_DATA_ERROR,
  error
});

export const fetchPriceData = date => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(priceDataRequest());
  return fetch(`${API_BASE_URL}/prices?date=${date}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({ priceData }) => dispatch(priceDataSuccess(priceData)))
    .catch((err) => {
      dispatch(priceDataError(err));
    });
};
