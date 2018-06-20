import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const TRANSACTIONS_REQUEST = 'TRANSACTIONS_REQUEST';
export const transactionsRequest = () => ({
  type: TRANSACTIONS_REQUEST
});

export const FETCH_TRANSACTIONS_SUCCESS = 'FETCH_TRANSACTIONS_SUCCESS';
export const fetchTransactionsSuccess = data => ({
  type: FETCH_TRANSACTIONS_SUCCESS,
  data
});

export const ADD_TRANSACTION_SUCCESS = 'ADD_TRANSACTION_SUCCESS';
export const addTransactionSuccess = data => ({
  type: ADD_TRANSACTION_SUCCESS,
  data
});

export const RESET_TRANSACTION_SUCCESS = 'RESET_TRANSACTION_SUCCESS';
export const resetTransactionSuccess = data => ({
  type: RESET_TRANSACTION_SUCCESS,
  data
});

export const TRANSACTIONS_ERROR = 'TRANSACTIONS_ERROR';
export const transactionsError = error => ({
  type: TRANSACTIONS_ERROR,
  error
});

export const fetchTransactions = () => (dispatch, getState) => {
  dispatch(transactionsRequest());
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/transactions`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({ transactions }) => dispatch(fetchTransactionsSuccess(transactions)))
    .catch((err) => {
      dispatch(transactionsError(err));
    });
};

export const addTransaction = newTransaction => (dispatch, getState) => {
  dispatch(transactionsRequest());
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/transactions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify(newTransaction)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({ transaction }) => dispatch(addTransactionSuccess(true)))
    .catch((err) => {
      dispatch(transactionsError(err));
    });
};
