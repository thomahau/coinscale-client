import {
  CHANGE_DATE,
  FETCH_PRICE_DATA_SUCCESS,
  FETCH_PRICE_DATA_ERROR
} from '../actions/coinscale';

const coinList = ['BTC', 'ETH', 'LTC'];

const MOCK_DATA = [
  {
    currency: 'BTC',
    open: 4359.11808,
    open_timestamp: '2017-09-09T00:00:00Z',
    close: 3687.24081,
    close_timestamp: '2017-09-16T00:00:00Z'
  },
  {
    currency: 'ETH',
    open: 307.09695,
    open_timestamp: '2017-09-09T00:00:00Z',
    close: 253.24776,
    close_timestamp: '2017-09-16T00:00:00Z'
  },
  {
    currency: 'LTC',
    open: 73.5457,
    open_timestamp: '2017-09-09T00:00:00Z',
    close: 51.5843,
    close_timestamp: '2017-09-16T00:00:00Z'
  }
];

const MOCK_TRANSACTIONS = [
  {
    timestamp: '2017-01-01',
    type: 'Buy',
    currency: 'BTC',
    price: 1017.20065,
    amount: 1
  },
  {
    timestamp: '2017-01-01',
    type: 'Buy',
    currency: 'ETH',
    price: 8.2694,
    amount: 50
  }
];

const MOCK_PORTFOLIO = [
  {
    currency: 'BTC',
    amount: 1.0
  },
  {
    currency: 'ETH',
    amount: 50
  }
];

const initialState = {
  date: '2017-01-01',
  balance: 20000,
  coinList,
  transactions: [],
  portfolio: {},
  priceData: [],
  error: null
};

export default function reducer(state = initialState, action) {
  if (action.type === CHANGE_DATE) {
    return Object.assign({}, state, {
      date: action.date
    });
  } else if (action.type === FETCH_PRICE_DATA_SUCCESS) {
    return Object.assign({}, state, {
      priceData: action.data,
      error: null
    });
  } else if (action.type === FETCH_PRICE_DATA_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  }

  return state;
}
