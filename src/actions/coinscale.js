import { SubmissionError } from 'redux-form';
import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

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

export const SET_TRADE_COIN = 'SET_TRADE_COIN';
export const setTradeCoin = coin => ({
  type: SET_TRADE_COIN,
  coin
});

export const fetchPriceData = date => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  let _priceData;
  dispatch(priceDataRequest());
  return fetch(`${API_BASE_URL}/prices?date=${date}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({ priceData }) => {
      _priceData = priceData;
      dispatch(priceDataSuccess(priceData));
    })
    .then(() => {
      const coinToTrade = getState().protectedData.coinToTrade;
      if (coinToTrade) {
        const updatedCoinToTrade = _priceData.filter(priceDatum => priceDatum.currency === coinToTrade.currency)[0];
        dispatch(setTradeCoin(updatedCoinToTrade));
      }
    })
    .catch((err) => {
      dispatch(priceDataError(err));
    });
};

export const submitTrade = values => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  console.log(values);
};

// const { code } = err;
// const message = code === 400 ? 'Missing date in request query' : 'Internal server error';
// dispatch(tradeError(err));
// return Promise.reject(new SubmissionError({ _error: message }));
