import { PORTFOLIO_REQUEST, PORTFOLIO_SUCCESS, PORTFOLIO_ERROR } from '../actions/portfolio';

import {
  TRANSACTIONS_REQUEST,
  FETCH_TRANSACTIONS_SUCCESS,
  ADD_TRANSACTION_SUCCESS,
  RESET_TRANSACTION_SUCCESS,
  TRANSACTIONS_ERROR
} from '../actions/transactions';

import {
  CHANGE_DATE,
  PRICE_DATA_REQUEST,
  PRICE_DATA_SUCCESS,
  PRICE_DATA_ERROR,
  SET_TRADE_COIN,
  SET_TAB_INDEX
} from '../actions/coinscale';

const initialState = {
  date: '2016-01-01',
  priceData: [],
  coinToTrade: null,
  transactions: [],
  transactionSuccess: null,
  portfolio: {},
  fetching: false,
  error: null,
  tabIndex: 0
};

export default function reducer(state = initialState, action) {
  if (action.type === PORTFOLIO_REQUEST) {
    return Object.assign({}, state, {
      fetching: true,
      error: null
    });
  } else if (action.type === PORTFOLIO_SUCCESS) {
    return Object.assign({}, state, {
      portfolio: action.data,
      fetching: false,
      error: null
    });
  } else if (action.type === PORTFOLIO_ERROR) {
    return Object.assign({}, state, {
      fetching: false,
      error: action.error
    });
  } else if (action.type === CHANGE_DATE) {
    return Object.assign({}, state, {
      date: action.date
    });
  } else if (action.type === PRICE_DATA_REQUEST) {
    return Object.assign({}, state, {
      fetching: true,
      error: null
    });
  } else if (action.type === PRICE_DATA_SUCCESS) {
    return Object.assign({}, state, {
      priceData: action.data,
      fetching: false,
      error: null
    });
  } else if (action.type === PRICE_DATA_ERROR) {
    return Object.assign({}, state, {
      fetching: false,
      error: action.error
    });
  } else if (action.type === TRANSACTIONS_REQUEST) {
    return Object.assign({}, state, {
      fetching: true,
      error: null
    });
  } else if (action.type === FETCH_TRANSACTIONS_SUCCESS) {
    return Object.assign({}, state, {
      transactions: action.data,
      fetching: false,
      error: null
    });
  } else if (action.type === ADD_TRANSACTION_SUCCESS) {
    return Object.assign({}, state, {
      transactionSuccess: action.data,
      fetching: false,
      error: null
    });
  } else if (action.type === RESET_TRANSACTION_SUCCESS) {
    return Object.assign({}, state, {
      transactionSuccess: action.data
    });
  } else if (action.type === TRANSACTIONS_ERROR) {
    return Object.assign({}, state, {
      fetching: false,
      error: action.error
    });
  } else if (action.type === SET_TRADE_COIN) {
    return Object.assign({}, state, {
      coinToTrade: action.coin
    });
  } else if (action.type === SET_TAB_INDEX) {
    return Object.assign({}, state, {
      tabIndex: action.tabIndex,
      transactionSuccess: null
    });
  }

  return state;
}
