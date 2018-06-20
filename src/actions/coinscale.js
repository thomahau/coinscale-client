import { SubmissionError } from 'redux-form';
import { API_BASE_URL } from '../config';
import { normalizeResponseErrors, parseTransaction, parsePurchase, parseSale } from './utils';
import { updatePortfolio, fetchPortfolio } from './portfolio';
import { addTransaction } from './transactions';

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

export const submitTrade = values => (dispatch) => {
  const transaction = parseTransaction(values);
  const { symbol, amount, total } = values;
  const { portfolio } = values;
  let updatedPortfolio;

  if (transaction.type === 'Buy') {
    // Transaction total exceeds portfolio cash balance
    if (+values.total > portfolio.balance) {
      return Promise.reject(new SubmissionError({
        _error: 'Total cost exceeds your available balance.'
      }));
    }

    updatedPortfolio = parsePurchase(portfolio, symbol, amount, total);
  } else if (transaction.type === 'Sell') {
    // Portfolio does not have the coin user is trying to sell
    if (!portfolio.holdings.hasOwnProperty(values.symbol)) {
      return Promise.reject(new SubmissionError({
        _error: 'Sell transaction failed because this coin is not in your portfolio.'
      }));
      // User is trying to sell more of the coin than portfolio holds
    } else if (+values.amount > +portfolio.holdings[values.symbol]) {
      return Promise.reject(new SubmissionError({
        _error: 'Amount exceeds the coins available in your portfolio.'
      }));
    }

    updatedPortfolio = parseSale(portfolio, symbol, amount, total);
  }

  dispatch(addTransaction(transaction));
  dispatch(updatePortfolio(updatedPortfolio));
  dispatch(fetchPortfolio());
};
