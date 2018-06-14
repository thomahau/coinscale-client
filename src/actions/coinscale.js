import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

// TODO: CRUD operations action.type === ADD etc ?

export const CHANGE_DATE = 'CHANGE_DATE';
export const changeDate = date => ({
  type: CHANGE_DATE,
  date
});

export const FETCH_PRICE_DATA_SUCCESS = 'FETCH_PRICE_DATA_SUCCESS';
export const fetchPriceDataSuccess = data => ({
  type: FETCH_PRICE_DATA_SUCCESS,
  data
});

export const FETCH_PRICE_DATA_ERROR = 'FETCH_PRICE_DATA_ERROR';
export const fetchPriceDataError = error => ({
  type: FETCH_PRICE_DATA_ERROR,
  error
});

export const fetchPriceData = date => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/prices?date=${date}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({ priceData }) => dispatch(fetchPriceDataSuccess(priceData)))
    .catch((err) => {
      dispatch(fetchPriceDataError(err));
    });
};
